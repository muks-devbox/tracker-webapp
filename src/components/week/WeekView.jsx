import { useProgress } from '../../hooks/useProgress';
import DayCard from './DayCard';
import SundayCard from './SundayCard';

const MONTH_STYLES = {
  1: { color: '#3b82f6', label: 'Month 1', light: '#eff6ff', lightBorder: '#bfdbfe' },
  2: { color: '#8b5cf6', label: 'Month 2', light: '#f5f3ff', lightBorder: '#ddd6fe' },
  3: { color: '#10b981', label: 'Month 3', light: '#f0fdf4', lightBorder: '#bbf7d0' },
  4: { color: '#f59e0b', label: 'Month 4', light: '#fffbeb', lightBorder: '#fde68a' },
};

export default function WeekView({ week }) {
  const { progress, getWeekProgress } = useProgress();
  const { completed, total, pct } = getWeekProgress(week.weekNum);
  const ms = MONTH_STYLES[week.month];

  const dayDots = week.days.map(day => {
    const tasks = day.sections.flatMap(s => s.tasks);
    const done  = tasks.filter(t => progress[day.dayKey]?.tasks?.[t.id]).length;
    return {
      dayShort: day.dayShort,
      full:    tasks.length > 0 && done === tasks.length,
      partial: done > 0 && done < tasks.length,
    };
  });

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-7 relative">
        {/* Background watermark */}
        <div className="absolute right-0 -top-3 text-[96px] font-black select-none
                        pointer-events-none leading-none tabular-nums"
          style={{ color: 'var(--border)' }} aria-hidden="true">
          {String(week.weekNum).padStart(2, '0')}
        </div>

        <div className="relative">
          {/* Month badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
              style={{
                color: ms.color,
                background: ms.light,
                border: `1.5px solid ${ms.lightBorder}`,
              }}>
              {ms.label}
            </span>
            <span className="text-xs" style={{ color: 'var(--text-3)' }}>
              Week {week.weekNum} of 16
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-snug mb-2 pr-16"
            style={{ color: 'var(--text-1)' }}>
            {week.title.replace(/^WEEK\s+\d+:\s*/i, '')}
          </h2>

          {week.theme && (
            <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-3)' }}>
              {week.theme}
            </p>
          )}

          {/* Progress */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 rounded-full h-2 overflow-hidden"
              style={{ background: 'var(--bg-overlay)', border: '1px solid var(--border)' }}>
              <div className="h-full rounded-full transition-all duration-700"
                style={{ width: `${pct}%`,
                         background: `linear-gradient(90deg, ${ms.color}aa, ${ms.color})` }} />
            </div>
            <span className="text-sm font-bold tabular-nums shrink-0"
              style={{ color: pct === 100 ? ms.color : 'var(--text-3)' }}>
              {pct}%
            </span>
          </div>

          {/* Day dots */}
          <div className="flex items-center gap-2">
            {dayDots.map(d => (
              <div key={d.dayShort} title={d.dayShort.toUpperCase()}
                className="w-6 h-6 rounded-full flex items-center justify-center
                           transition-all duration-300"
                style={{
                  background: d.full ? ms.color : d.partial ? ms.light : 'var(--bg-overlay)',
                  border: `1.5px solid ${d.full ? ms.color : d.partial ? ms.lightBorder : 'var(--border)'}`,
                  boxShadow: d.full ? `0 2px 8px ${ms.color}50` : 'none',
                }}>
                {d.full
                  ? <span className="text-[9px] text-white font-bold">✓</span>
                  : <span className="text-[8px] font-bold"
                      style={{ color: d.partial ? ms.color : 'var(--text-4)' }}>
                      {d.dayShort.charAt(0).toUpperCase()}
                    </span>
                }
              </div>
            ))}
            <span className="text-xs font-mono ml-1" style={{ color: 'var(--text-3)' }}>
              {completed}/{total} tasks
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2.5">
        {week.days.map(day =>
          day.isSunday
            ? <SundayCard key={day.dayKey} day={day} />
            : <DayCard    key={day.dayKey} day={day} monthColor={ms.color} monthLight={ms.light} monthLightBorder={ms.lightBorder} />
        )}
      </div>
    </div>
  );
}