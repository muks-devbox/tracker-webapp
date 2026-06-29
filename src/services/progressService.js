import {
  doc, updateDoc, setDoc,
  collection, onSnapshot,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../config/firebase';

// Real-time listener — fires immediately with current data, then on every change
export function subscribeToProgress(userId, onData, onError) {
  const colRef = collection(db, 'users', userId, 'progress');
  return onSnapshot(colRef, (snapshot) => {
    const data = {};
    snapshot.forEach((d) => { data[d.id] = d.data(); });
    onData(data);
  }, onError);
}

// Surgical field-level write — only the one checkbox field changes
export async function saveTaskToggle(userId, dayKey, taskId, checked) {
  const ref = doc(db, 'users', userId, 'progress', dayKey);
  try {
    await updateDoc(ref, {
      [`tasks.${taskId}`]: checked,
      updatedAt: serverTimestamp(),
    });
  } catch (err) {
    if (err.code === 'not-found') {
      await setDoc(ref, {
        tasks: { [taskId]: checked },
        updatedAt: serverTimestamp(),
      });
    } else throw err;
  }
}

// Notes write — called after debounce in ProgressContext
export async function saveDayNotes(userId, dayKey, notes) {
  const ref = doc(db, 'users', userId, 'progress', dayKey);
  try {
    await updateDoc(ref, { notes, updatedAt: serverTimestamp() });
  } catch (err) {
    if (err.code === 'not-found') {
      await setDoc(ref, { notes, tasks: {}, updatedAt: serverTimestamp() });
    } else throw err;
  }
}