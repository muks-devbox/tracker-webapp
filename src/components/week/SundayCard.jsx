import { useState } from 'react';
import { useProgress } from '../../hooks/useProgress';
import SectionBlock from '../task/SectionBlock';
import DayNotes from '../notes/DayNotes';

export default function SundayCard({ day }) {
  const [open, setOpen]      = useState(false);
  const { progress, updateNotes } = useProgress();
  const dayData = progress[day.dayKey] ?? {};

  const tasks = day.sections.flatMap(s => s.tasks);
  const done  = tasks.filter(t => dayData.tasks?.[t.id]).length;

  return (
    <div className="border border-indigo-800/40 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3 bg-indigo-950/40 hover:bg-indigo-900/30 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-indigo-400 text-sm">🔁</span>
          <span className="font-medium text-sm text-indigo-300">Sunday — Revision Day</span>
          <span className="text-indigo-600 text-xs">No new content</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-indigo-600">{done}/{tasks.length}</span>
          <svg
            className={`w-4 h-4 text-indigo-600 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {open && (
        <div className="px-4 py-4 bg-indigo-950/20 space-y-5">
          {day.sections.map((section, si) => (
            <SectionBlock key={si} section={section} dayKey={day.dayKey} />
          ))}
          <DayNotes
            dayKey={day.dayKey}
            value={dayData.notes ?? ''}
            onChange={(n) => updateNotes(day.dayKey, n)}
          />
        </div>
      )}
    </div>
  );
}