import { useProgress } from '../../hooks/useProgress';
import DayCard from './DayCard';
import SundayCard from './SundayCard';

const MONTH_STYLES = {
  1: { color: '#3b82f6', label: 'Month 1' },
  2: { color: '#8b5cf6', label: 'Month 2' },
  3: { color: '#10b981', label: 'Month 3' },
  4: { color: '#f59e0b', label: 'Month 4' },
};

export default function WeekView({ week }) {
  const { progress, getWeekProgress } = useProgress();
  const { completed, total, pct } = getWeekProgress(week.weekNum);
  const ms = MONTH_STYLES[week.month];

  const dayDots = week.days.map(day => {
    const tasks = day.sections.flatMap(s => s.tasks);
    const done  = tasks.filter(t => progress[day.dayKey]?.tasks?.[t.id]).length;
    return { dayShort: day.dayShort, isSunday: day.isSunday,
             full: tasks.length > 0 && done === tasks.length,
             partial: done > 0 && done < tasks.length };
  });

  return (
    <div className="max-w-3xl mx-auto">
      {/* Week header */}
      <div className="mb-7 relative">
        {/* Background watermark */}
        <div className="absolute right-0 -top-3 text-[96px] font-black select-none
                        pointer-events-none leading-none tabular-nums"
          style={{ color: '#ffffff06' }} aria-hidden="true">
          {String(week.weekNum).padStart(2, '0')}
        </div>

        <div className="relative">
          {/* Month badge + breadcrumb */}
          <div className="flex items-center gap-2 mb-2.5">
            <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
              style={{ color: ms.color, background: ms.color + '18', border: `1px solid ${ms.color}35` }}>
              {ms.label}
            </span>
            <span className="text-slate-700 text-xs">Week {week.weekNum} of 16</span>
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold text-white leading-snug mb-1.5 pr-16">
            {week.title.replace(/^WEEK\s+\d+:\s*/i, '')}
          </h2>

          {week.theme && (
            <p className="text-slate-500 text-sm mb-4 leading-relaxed">{week.theme}</p>
          )}

          {/* Progress bar */}
          <div className="flex items-center gap-3 mb-3">
            <div className="flex-1 rounded-full h-1.5 overflow-hidden"
              style={{ background: '#1e293b' }}>
              <div className="h-full rounded-full transition-all duration-700"
                style={{ width: `${pct}%`,
                  background: `linear-gradient(90deg, ${ms.color}aa, ${ms.color})` }} />
            </div>
            <span className="text-sm font-bold tabular-nums shrink-0"
              style={{ color: pct === 100 ? ms.color : '#64748b' }}>
              {pct}%
            </span>
          </div>

          {/* Day dots + task count */}
          <div className="flex items-center gap-1.5">
            {dayDots.map((d) => (
              <div key={d.dayShort} title={d.dayShort.toUpperCase()}
                className="w-5 h-5 rounded-full flex items-center justify-center"
                style={{
                  background: d.full ? ms.color : d.partial ? ms.color + '30' : '#111827',
                  border: `1px solid ${d.full ? ms.color : d.partial ? ms.color + '50' : '#1e293b'}`,
                  boxShadow: d.full ? `0 0 6px ${ms.color}50` : 'none',
                }}>
                {d.full && <span className="text-[8px] text-white font-bold">✓</span>}
                {!d.full && (
                  <span className="text-[7px] font-bold"
                    style={{ color: d.partial ? ms.color : '#334155' }}>
                    {d.dayShort.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>
            ))}
            <span className="text-xs text-slate-600 font-mono ml-1">
              {completed}/{total}
            </span>
          </div>
        </div>
      </div>

      {/* Day cards */}
      <div className="space-y-2">
        {week.days.map(day =>
          day.isSunday
            ? <SundayCard key={day.dayKey} day={day} />
            : <DayCard    key={day.dayKey} day={day} monthColor={ms.color} />
        )}
      </div>
    </div>
  );
}