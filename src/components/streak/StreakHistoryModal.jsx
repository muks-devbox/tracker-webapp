import { useEffect } from 'react';
import { useProgress } from '../../hooks/useProgress';
import { formatStartedAt, isoWeekKey } from '../../services/progressService';

function mondayOf(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = (d.getUTCDay() + 6) % 7; // 0 = Monday
  d.setUTCDate(d.getUTCDate() - day);
  return d;
}

function dayKeyOf(date) {
  return date.toISOString().slice(0, 10);
}

const WEEKS_BACK = 14;
const ROW_LABELS = ['Mon', '', 'Wed', '', 'Fri', '', 'Sun'];
const MONTH_FMT = { month: 'short' };

function cellShade(entry) {
  if (!entry) return { bg: 'var(--bg-raised)', border: '1px solid var(--border)' };
  const lvl = entry.leveledUp || 0;
  if (lvl >= 3) return { bg: 'var(--accent)', border: '1px solid var(--accent)' };
  if (lvl >= 1) return { bg: '#7ab89e', border: '1px solid #7ab89e' };
  if (entry.touched) return { bg: 'var(--accent-light)', border: '1px solid var(--accent-border)' };
  return { bg: 'var(--bg-raised)', border: '1px solid var(--border)' };
}

export default function StreakHistoryModal({ onClose }) {
  const { activity, profile, getStreakInfo, togglePause } = useProgress();
  const { weeks, isPausedThisWeek } = getStreakInfo();
  const startedLabel = formatStartedAt(profile.startedAt);
  const pausedWeeks = new Set(profile.pausedWeeks ?? []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const today = new Date();
  const thisMonday = mondayOf(today);

  const columns = [];
  for (let c = 0; c < WEEKS_BACK; c++) {
    const colMonday = new Date(thisMonday);
    colMonday.setUTCDate(colMonday.getUTCDate() - (WEEKS_BACK - 1 - c) * 7);
    const wk = isoWeekKey(colMonday);
    const days = [];
    for (let r = 0; r < 7; r++) {
      const d = new Date(colMonday);
      d.setUTCDate(d.getUTCDate() + r);
      const isFuture = d > today;
      days.push({ date: d, key: dayKeyOf(d), isFuture });
    }
    columns.push({ monday: colMonday, weekKey: wk, days, isPaused: pausedWeeks.has(wk) });
  }

  // Month labels: show once per column where the month changes from the previous column
  let lastMonth = null;
  const monthLabels = columns.map(col => {
    const label = col.monday.toLocaleDateString(undefined, MONTH_FMT);
    const show = label !== lastMonth;
    lastMonth = label;
    return show ? label : '';
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      style={{ background: 'rgba(28,26,20,0.35)', backdropFilter: 'blur(2px)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl p-5 animate-pop"
        style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-raised)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-1)' }}>
              🔥 {weeks} week{weeks !== 1 ? 's' : ''}
            </h2>
            {startedLabel && (
              <p className="text-xs mt-0.5" style={{ color: 'var(--text-3)' }}>
                Tracking since {startedLabel}
              </p>
            )}
          </div>
          <button onClick={onClose}
            className="text-sm transition-all duration-150 hover:rotate-90 active:scale-75"
            style={{ color: 'var(--text-3)' }} aria-label="Close">
            ✕
          </button>
        </div>

        {/* Heatmap */}
        <div className="overflow-x-auto pb-2">
          <div className="inline-flex flex-col gap-1 min-w-full">
            {/* Month labels */}
            <div className="flex gap-1 pl-7">
              {monthLabels.map((label, i) => (
                <div key={i} className="w-3 text-[9px]" style={{ color: 'var(--text-4)' }}>
                  {label}
                </div>
              ))}
            </div>
            {/* Grid: 7 rows (Mon..Sun), WEEKS_BACK columns */}
            <div className="flex gap-1">
              <div className="flex flex-col gap-1 pr-1">
                {ROW_LABELS.map((label, i) => (
                  <div key={i} className="w-6 h-3 text-[9px] flex items-center" style={{ color: 'var(--text-4)' }}>
                    {label}
                  </div>
                ))}
              </div>
              {columns.map((col, ci) => (
                <div key={ci} className="flex flex-col gap-1 relative">
                  {col.days.map((day, ri) => {
                    const entry = activity[day.key];
                    const shade = day.isFuture
                      ? { bg: 'transparent', border: '1px dashed var(--border)' }
                      : cellShade(entry);
                    const tooltip = day.isFuture
                      ? ''
                      : `${day.date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}` +
                        (entry?.touched ? ` — ${entry.leveledUp || 0} leveled up` : ' — no activity');
                    return (
                      <div key={ri}
                        title={tooltip}
                        className="w-3 h-3 rounded-[3px] transition-transform duration-100 hover:scale-125"
                        style={{ background: shade.bg, border: shade.border }}
                      />
                    );
                  })}
                  {col.isPaused && (
                    <div className="absolute inset-0 rounded-[3px] pointer-events-none"
                      style={{
                        background: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(138,133,120,0.35) 2px, rgba(138,133,120,0.35) 4px)',
                      }}
                      title="Paused this week"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 mt-3 text-[10px]" style={{ color: 'var(--text-4)' }}>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-[3px] inline-block" style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)' }} />
            <span className="w-3 h-3 rounded-[3px] inline-block" style={{ background: 'var(--accent-light)', border: '1px solid var(--accent-border)' }} />
            <span className="w-3 h-3 rounded-[3px] inline-block" style={{ background: '#7ab89e' }} />
            <span className="w-3 h-3 rounded-[3px] inline-block" style={{ background: 'var(--accent)' }} />
            <span className="ml-1">less → more</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-[3px] inline-block" style={{
              background: 'repeating-linear-gradient(45deg, var(--bg-raised), var(--bg-raised) 2px, var(--border) 2px, var(--border) 4px)',
            }} />
            <span>paused</span>
          </div>
        </div>

        {/* Pause/resume control */}
        <div className="mt-4 pt-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--border)' }}>
          <span className="text-xs" style={{ color: 'var(--text-3)' }}>
            {isPausedThisWeek ? 'This week is paused — streak is frozen.' : "Going away? Pause this week so it won't break your streak."}
          </span>
          <button onClick={togglePause}
            className="text-xs px-3 py-1.5 rounded-full shrink-0 transition-all duration-150 hover:scale-105 active:scale-95"
            style={{
              background: isPausedThisWeek ? 'var(--accent-light)' : 'var(--bg-raised)',
              color: isPausedThisWeek ? 'var(--accent)' : 'var(--text-2)',
              border: `1px solid ${isPausedThisWeek ? 'var(--accent-border)' : 'var(--border-strong)'}`,
            }}>
            {isPausedThisWeek ? 'Resume' : 'Pause week'}
          </button>
        </div>
      </div>
    </div>
  );
}
