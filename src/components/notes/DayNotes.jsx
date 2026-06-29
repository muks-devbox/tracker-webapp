import { useState, useEffect } from 'react';

export default function DayNotes({ dayKey, value, onChange }) {
  const [local, setLocal] = useState(value ?? '');
  const [saved, setSaved] = useState(false);

  useEffect(() => { setLocal(value ?? ''); }, [value]);

  const handleChange = (e) => {
    setLocal(e.target.value);
    onChange(e.target.value);
    setSaved(false);
  };

  useEffect(() => {
    if (local === (value ?? '')) return;
    const t = setTimeout(() => setSaved(true), 1700);
    return () => clearTimeout(t);
  }, [local, value]);

  return (
    <div className="mt-2">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs font-medium" style={{ color: 'var(--text-3)' }}>Notes</span>
        {saved && <span className="text-xs text-green-500 animate-pulse">Saved</span>}
      </div>
      <textarea
        value={local}
        onChange={handleChange}
        placeholder="Add notes for this day…"
        rows={3}
        className="w-full rounded-lg px-3 py-2 text-sm resize-none transition-colors
                   focus:outline-none focus:ring-1"
        style={{
          background: 'var(--bg-raised)',
          border: '1px solid var(--border)',
          color: 'var(--text-2)',
          '--tw-ring-color': '#3b82f650',
        }}
      />
    </div>
  );
}