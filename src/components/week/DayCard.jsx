import { useState } from 'react';
import { useProgress } from '../../hooks/useProgress';
import SectionBlock from '../task/SectionBlock';
import DayNotes from '../notes/DayNotes';

const DAY_META = {
  mon: { label: 'MON', time: '2h 15m' },
  tue: { label: 'TUE', time: '2h 15m' },
  wed: { label: 'WED', time: '2h 15m' },
  thu: { label: 'THU', time: '2h 15m' },
  fri: { label: 'FRI', time: '2h 15m' },
  sat: { label: 'SAT', time: '4h'      },
};

export default function DayCard({ day, monthColor = '#3b82f6' }) {
  const [open, setOpen] = useState(false);
  const { progress, updateNotes } = useProgress();
  const meta    = DAY_META[day.dayShort] || { label: day.dayShort.toUpperCase(), time: '' };
  const dayData = progress[day.dayKey] ?? {};
  const tasks   = day.sections.flatMap(s => s.tasks);
  const done    = tasks.filter(t => dayData.tasks?.[t.id]).length;
  const pct     = tasks.length ? Math.round((done / tasks.length) * 100) : 0;
  const allDone = tasks.length > 0 && done === tasks.length;

  return (
    <div className="rounded-xl overflow-hidden transition-all duration-200"
      style={{
        background: '#0d1117',
        border: `1px solid ${allDone ? monthColor + '50' : open ? '#1e293b' : '#161b27'}`,
        boxShadow: open ? `inset 0 0 0 1px ${monthColor}15` : 'none',
      }}>

      <button onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left
                   hover:bg-white/[0.02] transition-colors">

        {/* Left accent bar */}
        <div className="w-0.5 h-8 rounded-full shrink-0 transition-all duration-300"
          style={{ background: allDone ? monthColor : open ? monthColor + '60' : '#1e293b' }} />

        {/* Day badge */}
        <div className="w-9 h-8 rounded-lg flex items-center justify-center shrink-0"
          style={{
            background: allDone ? monthColor + '18' : '#111827',
            border: `1px solid ${allDone ? monthColor + '40' : '#1e293b'}`,
          }}>
          <span className="text-[9px] font-bold font-mono tracking-wider"
            style={{ color: allDone ? monthColor : '#475569' }}>
            {meta.label}
          </span>
        </div>

        {/* Title + progress segments */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-sm font-medium leading-none ${
              allDone ? 'text-white' : 'text-slate-300'
            }`}>
              {day.dayName}
            </span>
            {meta.time && (
              <span className="text-[10px] text-slate-700 font-mono bg-slate-900 rounded
                               px-1.5 py-0.5 border border-slate-800/80">
                {meta.time}
              </span>
            )}
          </div>
          {/* Task segment dots */}
          <div className="flex items-center gap-1">
            <div className="flex gap-[3px]">
              {tasks.slice(0, 15).map((t, i) => (
                <div key={i} className="w-1.5 h-1 rounded-full transition-colors duration-300"
                  style={{ background: dayData.tasks?.[t.id] ? monthColor : '#1e293b' }} />
              ))}
              {tasks.length > 15 && (
                <span className="text-[9px] text-slate-700 ml-0.5 font-mono">
                  +{tasks.length - 15}
                </span>
              )}
            </div>
            <span className="text-[10px] text-slate-700 font-mono ml-1">
              {done}/{tasks.length}
            </span>
          </div>
        </div>

        {/* Right: pct + chevron */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-bold font-mono tabular-nums"
            style={{ color: allDone ? monthColor : pct > 0 ? '#64748b' : '#1e293b' }}>
            {pct}%
          </span>
          <svg className={`w-3.5 h-3.5 text-slate-700 transition-transform duration-200
                           ${open ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {open && (
        <div className="px-4 pb-5 pt-2"
          style={{ borderTop: `1px solid ${monthColor}20` }}>
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