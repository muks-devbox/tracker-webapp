import {
  doc, updateDoc, setDoc, getDoc,
  collection, onSnapshot,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../config/firebase';

// ISO week key, e.g. "2026-W38" — the unit the streak and pause system count in
export function isoWeekKey(date = new Date()) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = (d.getUTCDay() + 6) % 7;
  d.setUTCDate(d.getUTCDate() - dayNum + 3);
  const firstThursday = new Date(Date.UTC(d.getUTCFullYear(), 0, 4));
  const week = 1 + Math.round(((d - firstThursday) / 86400000 - 3 + ((firstThursday.getUTCDay() + 6) % 7)) / 7);
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, '0')}`;
}

// ── Progress (one doc per topic) ──────────────────────────────────────────
export function subscribeToProgress(userId, onData, onError) {
  const colRef = collection(db, 'users', userId, 'progress');
  return onSnapshot(colRef, (snap) => {
    const data = {};
    snap.forEach(d => { data[d.id] = d.data(); });
    onData(data);
  }, onError);
}

export async function setSubtaskState(userId, topicId, subtaskId, state) {
  const ref = doc(db, 'users', userId, 'progress', topicId);
  try {
    await updateDoc(ref, {
      [`states.${subtaskId}`]: state,
      updatedAt: serverTimestamp(),
    });
  } catch (err) {
    if (err.code === 'not-found') {
      await setDoc(ref, { states: { [subtaskId]: state }, notes: '', updatedAt: serverTimestamp() });
    } else throw err;
  }
}

export async function saveTopicNotes(userId, topicId, notes) {
  const ref = doc(db, 'users', userId, 'progress', topicId);
  try {
    await updateDoc(ref, { notes, updatedAt: serverTimestamp() });
  } catch (err) {
    if (err.code === 'not-found') {
      await setDoc(ref, { notes, states: {}, updatedAt: serverTimestamp() });
    } else throw err;
  }
}

// ── Activity (one doc per day touched — powers streak + sparklines) ────────
export function subscribeToActivity(userId, onData, onError) {
  const colRef = collection(db, 'users', userId, 'activity');
  return onSnapshot(colRef, (snap) => {
    const data = {};
    snap.forEach(d => { data[d.id] = d.data(); });
    onData(data);
  }, onError);
}

export async function recordActivity(userId, leveledUpDelta = 0) {
  const dayKey = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  const ref = doc(db, 'users', userId, 'activity', dayKey);
  try {
    const snap = await getDoc(ref);
    const prevLevel = snap.exists() ? (snap.data().leveledUp || 0) : 0;
    await setDoc(ref, {
      touched: true,
      leveledUp: prevLevel + leveledUpDelta,
      ts: serverTimestamp(),
    }, { merge: true });
  } catch (err) {
    console.error('recordActivity failed:', err);
  }
}

// ── User profile (streak pause) ─────────────────────────────────────────────
export function subscribeToUserProfile(userId, onData, onError) {
  const ref = doc(db, 'users', userId);
  return onSnapshot(ref, (snap) => {
    onData(snap.exists() ? snap.data() : { pausedWeeks: [] });
  }, onError);
}

export async function toggleCurrentWeekPause(userId, pausedWeeks) {
  const wk = isoWeekKey();
  const ref = doc(db, 'users', userId);
  const next = pausedWeeks.includes(wk)
    ? pausedWeeks.filter(w => w !== wk)
    : [...pausedWeeks, wk];
  await setDoc(ref, { pausedWeeks: next }, { merge: true });
}
