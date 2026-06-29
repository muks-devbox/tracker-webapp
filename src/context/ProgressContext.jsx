import { createContext, useEffect, useState, useCallback, useRef } from 'react';
import { useAuth } from '../hooks/useAuth';
import {
  subscribeToProgress,
  saveTaskToggle,
  saveDayNotes,
} from '../services/progressService';
import roadmap from '../data/roadmap';

export const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const { user } = useAuth();
  const [progress, setProgress]           = useState({});
  const [progressLoaded, setProgressLoaded] = useState(false);
  const notesTimers = useRef({});

  // Subscribe to all progress docs on login
  useEffect(() => {
    if (!user) return;
    const unsub = subscribeToProgress(
      user.uid,
      (data) => { setProgress(data); setProgressLoaded(true); },
      (err)  => { console.error('Progress snapshot error:', err); setProgressLoaded(true); }
    );
    return unsub;
  }, [user]);

  // Optimistic toggle — UI updates instantly, Firestore write is async
  const toggleTask = useCallback(async (dayKey, taskId) => {
    if (!user) return;
    const current = progress[dayKey]?.tasks?.[taskId] ?? false;
    const next    = !current;

    setProgress(prev => ({
      ...prev,
      [dayKey]: {
        ...prev[dayKey],
        tasks: { ...(prev[dayKey]?.tasks ?? {}), [taskId]: next },
      },
    }));

    try {
      await saveTaskToggle(user.uid, dayKey, taskId, next);
    } catch {
      // Rollback on failure
      setProgress(prev => ({
        ...prev,
        [dayKey]: {
          ...prev[dayKey],
          tasks: { ...(prev[dayKey]?.tasks ?? {}), [taskId]: current },
        },
      }));
    }
  }, [user, progress]);

  // Debounced notes — local state updates immediately, Firestore write 1.5s after last keystroke
  const updateNotes = useCallback((dayKey, notes) => {
    if (!user) return;
    setProgress(prev => ({
      ...prev,
      [dayKey]: { ...(prev[dayKey] ?? {}), notes },
    }));
    clearTimeout(notesTimers.current[dayKey]);
    notesTimers.current[dayKey] = setTimeout(() => {
      saveDayNotes(user.uid, dayKey, notes).catch(console.error);
    }, 1500);
  }, [user]);

  // % complete for a single week
  const getWeekProgress = useCallback((weekNum) => {
    const week = roadmap.weeks.find(w => w.weekNum === weekNum);
    if (!week) return { completed: 0, total: 0, pct: 0 };
    let total = 0, completed = 0;
    week.days.forEach(day =>
      day.sections.forEach(sec =>
        sec.tasks.forEach(task => {
          total++;
          if (progress[day.dayKey]?.tasks?.[task.id]) completed++;
        })
      )
    );
    return { completed, total, pct: total ? Math.round((completed / total) * 100) : 0 };
  }, [progress]);

  // Overall % across all 16 weeks
  const getOverallProgress = useCallback(() => {
    let total = 0, completed = 0;
    roadmap.weeks.forEach(week =>
      week.days.forEach(day =>
        day.sections.forEach(sec =>
          sec.tasks.forEach(task => {
            total++;
            if (progress[day.dayKey]?.tasks?.[task.id]) completed++;
          })
        )
      )
    );
    return { completed, total, pct: total ? Math.round((completed / total) * 100) : 0 };
  }, [progress]);

  return (
    <ProgressContext.Provider value={{
      progress, progressLoaded,
      toggleTask, updateNotes,
      getWeekProgress, getOverallProgress,
    }}>
      {children}
    </ProgressContext.Provider>
  );
}