import { useState } from 'react';
import { useProgress } from '../../hooks/useProgress';
import SectionBlock from '../task/SectionBlock';
import DayNotes from '../notes/DayNotes';

export default function DayCard({ day }) {
  const [open, setOpen] = useState(false);
  const { progress, updateNotes } = useProgress();

  const dayData  = progress[day.dayKey] ?? {};
  const tasks    = day.sections.flatMap(s => s.tasks);
  const done     = tasks.filter(t => dayData.tasks?.[t.id]).length;
  const pct      = tasks.length ? Math.round((done / tasks.length) * 100) : 0;
  const allDone  = tasks.length > 0 && done === tasks.length;

  return (
    <div className={`border rounded-xl overflow-hidden transition-colors ${allDone ? 'border-green-800/50' : 'border-gray-800'}`}>
      {/* Toggle header */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-900 hover:bg-gray-800/80 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          {allDone
            ? <span className="text-green-400 text-sm">✓</span>
            : <span className="text-gray-600 text-sm">○</span>
          }
          <span className={`font-medium text-sm ${allDone ? 'text-green-400' : 'text-white'}`}>
            {day.dayName}
          </span>
          <span className="text-gray-600 text-xs">{done}/{tasks.length}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-20 bg-gray-800 rounded-full h-1">
            <div
              className={`h-1 rounded-full transition-all duration-500 ${allDone ? 'bg-green-500' : 'bg-blue-500'}`}
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-xs text-gray-500 w-7 text-right">{pct}%</span>
          <svg
            className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Collapsible content */}
      {open && (
        <div className="px-4 py-4 bg-gray-950 space-y-5">
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