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
        background: '#0a0d18',
        border: `1px solid ${allDone ? '#818cf870' : open ? '#312e81' : '#1e1b4b40'}`,
      }}>

      <button onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left
                   hover:bg-indigo-950/20 transition-colors">

        <div className="w-0.5 h-8 rounded-full shrink-0"
          style={{ background: allDone ? '#818cf8' : '#3730a3' }} />

        <div className="w-9 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm"
          style={{ background: '#1e1b4b', border: '1px solid #312e81' }}>
          🔁
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-sm font-medium text-indigo-300">Sunday</span>
            <span className="text-[10px] text-indigo-900 bg-indigo-950/80 rounded
                             px-1.5 py-0.5 border border-indigo-900/50">
              Revision · 2.5h
            </span>
          </div>
          <div className="text-[10px] text-indigo-900">No new content — consolidate the week</div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-mono" style={{ color: allDone ? '#818cf8' : '#3730a3' }}>
            {done}/{tasks.length}
          </span>
          <svg className={`w-3.5 h-3.5 text-indigo-900 transition-transform duration-200
                           ${open ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {open && (
        <div className="px-4 pb-5 pt-2"
          style={{ borderTop: '1px solid #1e1b4b' }}>
          <div className="pl-[52px] space-y-5 pt-2">
            {day.sections.map((section, si) => (
              <SectionBlock key={si} section={section} dayKey={day.dayKey} />
            ))}
            <DayNotes
              dayKey={day.dayKey}
              value={dayData.notes ?? ''}
              onChange={(n) => updateNotes(day.dayKey, n)}
            />
          </div>
        </div>
      )}
    </div>
  );
}