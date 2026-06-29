import { useState } from 'react';
import { useProgress } from '../../hooks/useProgress';
import SectionBlock from '../task/SectionBlock';
import DayNotes from '../notes/DayNotes';

export default function SundayCard({ day }) {
  const [open, setOpen] = useState(false);
  const { progress, updateNotes } = useProgress();
  const dayData = progress[day.dayKey] ?? {};
  const tasks   = day.sections.flatMap(s => s.tasks);
  const done    = tasks.filter(t => dayData.tasks?.[t.id]).length;
  const allDone = tasks.length > 0 && done === tasks.length;

  return (
    <div className="rounded-xl overflow-hidden transition-all duration-200"
      style={{
        background: 'var(--sun-bg)',
        border: `1px solid ${allDone ? 'var(--sun-text)' : open ? 'var(--sun-border)' : 'var(--sun-border-faint)'}`,
        boxShadow: open ? 'var(--shadow-raised)' : 'var(--shadow-card)',
      }}>

      <button onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-3 px-4 py-3.5 text-left transition-colors"
        style={{ background: open ? '#f0ebff' : 'transparent' }}>

        <div className="w-1 h-9 rounded-full shrink-0"
          style={{ background: allDone ? 'var(--sun-text)' : 'var(--sun-track)' }} />

        <div className="w-10 h-9 rounded-lg flex items-center justify-center shrink-0 text-base"
          style={{ background: 'var(--sun-badge-bg)', border: '1.5px solid var(--sun-badge-border)' }}>
          🔁
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-sm font-semibold" style={{ color: 'var(--sun-text)' }}>Sunday</span>
            <span className="text-[10px] rounded-md px-1.5 py-0.5"
              style={{ color: 'var(--sun-text-sub)', background: 'var(--sun-badge-bg)',
                       border: '1px solid var(--sun-badge-border)' }}>
              Revision · 2.5h
            </span>
          </div>
          <div className="text-[10px]" style={{ color: 'var(--sun-text-sub)' }}>
            No new content — consolidate the week
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <span className="text-xs font-mono font-semibold"
            style={{ color: allDone ? 'var(--sun-text)' : 'var(--sun-track)' }}>
            {done}/{tasks.length}
          </span>
          <div className="w-6 h-6 rounded-full flex items-center justify-center"
            style={{ background: 'var(--sun-badge-bg)', border: '1px solid var(--sun-badge-border)' }}>
            <svg className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
              style={{ color: 'var(--sun-text-sub)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>

      {open && (
        <div className="px-4 pb-5 pt-3"
          style={{ borderTop: '2px solid var(--sun-border-faint)' }}>
          <div className="pl-[56px] space-y-5">
            {day.sections.map((section, si) => (
              <SectionBlock key={si} section={section} dayKey={day.dayKey} />
            ))}
            <DayNotes dayKey={day.dayKey} value={dayData.notes ?? ''}
              onChange={n => updateNotes(day.dayKey, n)} />
          </div>
        </div>
      )}
    </div>
  );
}