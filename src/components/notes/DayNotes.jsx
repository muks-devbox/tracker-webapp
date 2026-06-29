import { useState, useEffect } from 'react';

export default function DayNotes({ dayKey, value, onChange }) {
  const [local, setLocal]     = useState(value ?? '');
  const [saved, setSaved]     = useState(false);

  // Sync if parent value changes (e.g. loaded from Firestore)
  useEffect(() => { setLocal(value ?? ''); }, [value]);

  const handleChange = (e) => {
    setLocal(e.target.value);
    onChange(e.target.value);
    setSaved(false);
  };

  // Show "Saved" briefly after 1.7s (slightly after the 1.5s debounce fires)
  useEffect(() => {
    if (local === (value ?? '')) return;
    const t = setTimeout(() => setSaved(true), 1700);
    return () => clearTimeout(t);
  }, [local, value]);

  return (
    <div className="mt-2">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs text-gray-600 font-medium">Notes</span>
        {saved && <span className="text-xs text-green-500 animate-pulse">Saved</span>}
      </div>
      <textarea
        value={local}
        onChange={handleChange}
        placeholder="Add notes for this day…"
        rows={3}
        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2
                   text-sm text-gray-300 placeholder-gray-700
                   focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30
                   resize-none transition-colors"
      />
    </div>
  );
}