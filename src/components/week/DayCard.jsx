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

export default function DayCard({ day, monthColor = '#3b82f6', monthLight = '#eff6ff', monthLightBorder = '#bfdbfe' }) {
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
        background: 'var(--bg-base)',
        border: `1px solid ${allDone ? monthColor + '60' : open ? 'var(--border)' : 'var(--border-faint)'}`,
        boxShadow: open ? 'var(--shadow-raised)' : 'var(--shadow-card)',
      }}>

      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-3 px-4 py-3.5 text-left transition-colors"
        style={{ background: open ? 'var(--bg-raised)' : 'transparent' }}>

        {/* Accent bar */}
        <div className="w-1 h-9 rounded-full shrink-0 transition-all duration-300"
          style={{ background: allDone ? monthColor : open ? monthColor : 'var(--border-strong)' }} />

        {/* Day badge */}
        <div className="w-10 h-9 rounded-lg flex items-center justify-center shrink-0"
          style={{
            background: allDone ? monthLight : open ? monthLight : 'var(--bg-raised)',
            border: `1.5px solid ${allDone ? monthLightBorder : open ? monthLightBorder : 'var(--border)'}`,
          }}>
          <span className="text-[9px] font-bold font-mono tracking-wider"
            style={{ color: allDone || open ? monthColor : 'var(--text-3)' }}>
            {meta.label}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-semibold"
              style={{ color: allDone ? monthColor : 'var(--text-1)' }}>
              {day.dayName}
            </span>
            {meta.time && (
              <span className="text-[10px] font-mono rounded-md px-1.5 py-0.5"
                style={{ color: 'var(--text-3)', background: 'var(--bg-overlay)',
                         border: '1px solid var(--border)' }}>
                {meta.time}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex gap-[3px]">
              {tasks.slice(0, 15).map((t, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full transition-colors duration-300"
                  style={{ background: dayData.tasks?.[t.id] ? monthColor : 'var(--border)' }} />
              ))}
              {tasks.length > 15 && (
                <span className="text-[9px] font-mono ml-0.5" style={{ color: 'var(--text-4)' }}>
                  +{tasks.length - 15}
                </span>
              )}
            </div>
            <span className="text-[10px] font-mono" style={{ color: 'var(--text-3)' }}>
              {done}/{tasks.length}
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2.5 shrink-0">
          <span className="text-xs font-bold font-mono tabular-nums"
            style={{ color: allDone ? monthColor : pct > 0 ? monthColor + 'cc' : 'var(--text-4)' }}>
            {pct > 0 ? `${pct}%` : '—'}
          </span>
          <div className="w-6 h-6 rounded-full flex items-center justify-center"
            style={{ background: 'var(--bg-overlay)', border: '1px solid var(--border)' }}>
            <svg className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
              style={{ color: 'var(--text-3)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>

      {open && (
        <div className="px-4 pb-5 pt-3"
          style={{ borderTop: `2px solid ${monthColor}20` }}>
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