import { createContext, useEffect, useState, useCallback, useRef } from 'react';
import { useAuth } from '../hooks/useAuth';
import {
  subscribeToProgress, setSubtaskState as apiSetSubtaskState,
  saveTopicNotes as apiSaveTopicNotes,
  subscribeToActivity, recordActivity,
  subscribeToUserProfile, toggleCurrentWeekPause,
  ensureStartedAt,
  isoWeekKey,
} from '../services/progressService';
import roadmap from '../data/roadmap';

export const ProgressContext = createContext(null);

const RANK = { shaky: 0, solid: 1, 'can-teach': 2 };

export function ProgressProvider({ children }) {
  const { user } = useAuth();
  const [progress, setProgress]     = useState({});   // topicId -> { states, notes }
  const [activity, setActivity]     = useState({});   // dayKey -> { touched, leveledUp }
  const [profile, setProfile]       = useState({ pausedWeeks: [] });
  const [loaded, setLoaded]         = useState(false);
  const notesTimers = useRef({});

  const startedAtRequested = useRef(false);

  useEffect(() => {
    if (!user) return;
    const unsub1 = subscribeToProgress(user.uid, (d) => { setProgress(d); setLoaded(true); }, console.error);
    const unsub2 = subscribeToActivity(user.uid, setActivity, console.error);
    const unsub3 = subscribeToUserProfile(user.uid, (p) => {
      setProfile(p);
      if (!p.startedAt && !startedAtRequested.current) {
        startedAtRequested.current = true;
        ensureStartedAt(user.uid);
      }
    }, console.error);
    return () => { unsub1(); unsub2(); unsub3(); };
  }, [user]);

  const setSubtaskState = useCallback(async (topicId, subtaskId, newState) => {
    if (!user) return;
    const oldState = progress[topicId]?.states?.[subtaskId];
    const oldRank  = oldState ? RANK[oldState] : -1;
    const newRank  = RANK[newState];
    const leveledUp = newRank > oldRank && newRank >= RANK.solid ? 1 : 0;

    // Optimistic update
    setProgress(prev => ({
      ...prev,
      [topicId]: { ...prev[topicId], states: { ...(prev[topicId]?.states ?? {}), [subtaskId]: newState } },
    }));

    try {
      await apiSetSubtaskState(user.uid, topicId, subtaskId, newState);
      await recordActivity(user.uid, leveledUp);
    } catch (err) {
      console.error(err);
      // Rollback
      setProgress(prev => ({
        ...prev,
        [topicId]: { ...prev[topicId], states: { ...(prev[topicId]?.states ?? {}), [subtaskId]: oldState } },
      }));
    }
  }, [user, progress]);

  const updateNotes = useCallback((topicId, notes) => {
    if (!user) return;
    setProgress(prev => ({ ...prev, [topicId]: { ...(prev[topicId] ?? {}), notes } }));
    clearTimeout(notesTimers.current[topicId]);
    notesTimers.current[topicId] = setTimeout(() => {
      apiSaveTopicNotes(user.uid, topicId, notes).catch(console.error);
    }, 1500);
  }, [user]);

  const togglePause = useCallback(() => {
    if (!user) return;
    toggleCurrentWeekPause(user.uid, profile.pausedWeeks ?? []).catch(console.error);
  }, [user, profile]);

  // ── Derived stats ─────────────────────────────────────────────────────────
  const getTopicStats = useCallback((topicId, subtasks) => {
    const states = progress[topicId]?.states ?? {};
    let solidPlus = 0, shaky = 0;
    subtasks.forEach(s => {
      const st = states[s.id];
      if (st === 'solid' || st === 'can-teach') solidPlus++;
      else if (st === 'shaky') shaky++;
    });
    return { total: subtasks.length, solidPlus, shaky, pct: subtasks.length ? Math.round((solidPlus / subtasks.length) * 100) : 0 };
  }, [progress]);

  const getTrackStats = useCallback((track) => {
    let total = 0, solidPlus = 0, shaky = 0;
    track.topics.forEach(topic => {
      const s = getTopicStats(topic.topicId, topic.subtasks);
      total += s.total; solidPlus += s.solidPlus; shaky += s.shaky;
    });
    return { total, solidPlus, shaky, pct: total ? Math.round((solidPlus / total) * 100) : 0 };
  }, [getTopicStats]);

  const getOverallStats = useCallback(() => {
    let total = 0, solidPlus = 0;
    roadmap.tracks.forEach(track => {
      const s = getTrackStats(track);
      total += s.total; solidPlus += s.solidPlus;
    });
    return { total, solidPlus, pct: total ? Math.round((solidPlus / total) * 100) : 0 };
  }, [getTrackStats]);

  // Cross-track list of everything currently "shaky" — powers the Revision view
  const getShakyItems = useCallback(() => {
    const items = [];
    roadmap.tracks.forEach(track => {
      track.topics.forEach(topic => {
        const states = progress[topic.topicId]?.states ?? {};
        topic.subtasks.forEach(sub => {
          if (states[sub.id] === 'shaky') {
            items.push({ trackTitle: track.title, trackId: track.trackId, topicTitle: topic.title, topicId: topic.topicId, subtask: sub });
          }
        });
      });
    });
    return items;
  }, [progress]);

  // Weekly streak: walk back from current week; a week counts if it has
  // activity OR was explicitly paused. Stops at the first week with neither.
  const getStreakInfo = useCallback(() => {
    const touchedWeeks = new Set();
    Object.entries(activity).forEach(([dayKey, doc]) => {
      if (doc.touched) touchedWeeks.add(isoWeekKey(new Date(dayKey)));
    });
    const paused = new Set(profile.pausedWeeks ?? []);
    const currentWeek = isoWeekKey();
    let weeks = 0;
    let cursor = new Date();
    for (let i = 0; i < 104; i++) { // cap the walk at 2 years
      const wk = isoWeekKey(cursor);
      if (touchedWeeks.has(wk) || paused.has(wk)) {
        weeks++;
        cursor.setDate(cursor.getDate() - 7);
      } else if (wk === currentWeek) {
        // current week in progress with no activity yet — don't break, don't count
        cursor.setDate(cursor.getDate() - 7);
      } else {
        break;
      }
    }
    return {
      weeks,
      isPausedThisWeek: paused.has(currentWeek),
      touchedThisWeek: touchedWeeks.has(currentWeek),
    };
  }, [activity, profile]);

  // Last 6 weeks of leveled-up counts, for the sparkline
  const getSparklineSeries = useCallback((weeksBack = 6) => {
    const byWeek = {};
    Object.entries(activity).forEach(([dayKey, doc]) => {
      const wk = isoWeekKey(new Date(dayKey));
      byWeek[wk] = (byWeek[wk] || 0) + (doc.leveledUp || 0);
    });
    const series = [];
    let cursor = new Date();
    for (let i = 0; i < weeksBack; i++) {
      const wk = isoWeekKey(cursor);
      series.unshift(byWeek[wk] || 0);
      cursor.setDate(cursor.getDate() - 7);
    }
    return series;
  }, [activity]);

  return (
    <ProgressContext.Provider value={{
      progress, loaded, profile, activity,
      setSubtaskState, updateNotes, togglePause,
      getTopicStats, getTrackStats, getOverallStats,
      getShakyItems, getStreakInfo, getSparklineSeries,
    }}>
      {children}
    </ProgressContext.Provider>
  );
}
