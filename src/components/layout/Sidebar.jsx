import { NavLink } from 'react-router-dom';
import { useProgress } from '../../hooks/useProgress';
import roadmap from '../../data/roadmap';

const MONTHS = {
  1: { label: 'Month 1 — Java Foundations',    color: '#3b82f6', light: '#eff6ff', lightBorder: '#bfdbfe' },
  2: { label: 'Month 2 — System Design + K8s', color: '#8b5cf6', light: '#f5f3ff', lightBorder: '#ddd6fe' },
  3: { label: 'Month 3 — Security + Perf',     color: '#10b981', light: '#f0fdf4', lightBorder: '#bbf7d0' },
  4: { label: 'Month 4 — Mock Interviews',     color: '#f59e0b', light: '#fffbeb', lightBorder: '#fde68a' },
};

function MiniRing({ pct, color }) {
  const r = 7, circ = 2 * Math.PI * r, dash = (pct / 100) * circ;
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" className="shrink-0" aria-hidden="true">
      <circle cx="10" cy="10" r={r} fill="none" stroke="var(--bg-overlay)" strokeWidth="2.5" />
      {pct > 0 && (
        <circle cx="10" cy="10" r={r} fill="none" stroke={color}
          strokeWidth="2.5" strokeDasharray={`${dash} ${circ - dash}`}
          strokeLinecap="round" transform="rotate(-90 10 10)"
          style={{ transition: 'stroke-dasharray 0.6s ease' }} />
      )}
    </svg>
  );
}

function OverallRing({ pct }) {
  const r = 18, circ = 2 * Math.PI * r, dash = (pct / 100) * circ;
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" aria-hidden="true">
      <circle cx="26" cy="26" r={r} fill="none" stroke="var(--border)" strokeWidth="3.5" />
      <circle cx="26" cy="26" r={r} fill="none" stroke="#3b82f6"
        strokeWidth="3.5" strokeDasharray={`${dash} ${circ - dash}`}
        strokeLinecap="round" transform="rotate(-90 26 26)"
        style={{ transition: 'stroke-dasharray 0.8s ease' }} />
      <text x="26" y="30" textAnchor="middle" fill="var(--text-1)"
        fontSize="11" fontWeight="700" fontFamily="monospace">{pct}%</text>
    </svg>
  );
}

export default function Sidebar({ onClose }) {
  const { getWeekProgress } = useProgress();

  let totalDone = 0, totalAll = 0;
  roadmap.weeks.forEach(w => {
    const p = getWeekProgress(w.weekNum);
    totalDone += p.completed; totalAll += p.total;
  });
  const overall = totalAll ? Math.round((totalDone / totalAll) * 100) : 0;

  const weeksByMonth = roadmap.weeks.reduce((acc, w) => {
    (acc[w.month] = acc[w.month] || []).push(w);
    return acc;
  }, {});

  return (
    <aside className="flex flex-col h-full"
      style={{
        background: 'var(--bg-base)',
        borderRight: '1px solid var(--border)',
        boxShadow: 'var(--shadow-sidebar)',
      }}>

      {/* Header */}
      <div className="p-4 pb-3" style={{ borderBottom: '1px solid var(--border-faint)' }}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
              style={{ background: '#eff6ff', border: '1.5px solid #bfdbfe' }}>
              🎯
            </div>
            <div>
              <div className="text-sm font-bold" style={{ color: 'var(--text-1)' }}>Interview Prep</div>
              <div className="text-xs" style={{ color: 'var(--text-3)' }}>16-Week Roadmap</div>
            </div>
          </div>
          {onClose && (
            <button onClick={onClose} className="md:hidden p-1 rounded"
              style={{ color: 'var(--text-3)' }}>✕</button>
          )}
        </div>

        {/* Overall progress */}
        <div className="flex items-center gap-3 rounded-xl p-3"
          style={{
            background: 'var(--bg-raised)',
            border: '1px solid var(--border)',
            boxShadow: 'inset 0 1px 3px rgba(15,23,42,0.04)',
          }}>
          <OverallRing pct={overall} />
          <div>
            <div className="text-xs font-medium mb-0.5" style={{ color: 'var(--text-3)' }}>
              Overall progress
            </div>
            <div className="text-sm font-bold" style={{ color: 'var(--text-1)' }}>
              {totalDone}{' '}
              <span className="font-normal text-xs" style={{ color: 'var(--text-3)' }}>
                / {totalAll} tasks
              </span>
            </div>
            <div className="text-xs mt-0.5" style={{ color: 'var(--text-4)' }}>
              {roadmap.weeks.filter(w => getWeekProgress(w.weekNum).pct === 100).length} / 16 weeks done
            </div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto p-2 pt-3">
        {Object.entries(weeksByMonth).map(([month, weeks]) => {
          const m = MONTHS[month];
          return (
            <div key={month} className="mb-5">
              {/* Month header */}
              <div className="flex items-center gap-2 mx-2 mb-2 px-2 py-1.5 rounded-lg"
                style={{ background: m.light, border: `1px solid ${m.lightBorder}` }}>
                <div className="w-2 h-2 rounded-full" style={{ background: m.color }} />
                <span className="text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: m.color }}>
                  {m.label}
                </span>
              </div>

              {weeks.map(week => {
                const { pct } = getWeekProgress(week.weekNum);
                const shortTitle = week.title.replace(/^WEEK\s+\d+:\s*/i, '');
                return (
                  <NavLink key={week.weekNum} to={`/week/${week.weekNum}`} onClick={onClose}
                    className="flex items-center gap-2 px-2 py-2 rounded-lg mb-0.5
                               transition-all duration-150 no-underline group"
                    style={({ isActive }) => ({
                      background: isActive ? m.color + '18' : 'transparent',
                      border: isActive ? `1px solid ${m.color}30` : '1px solid transparent',
                      color: isActive ? m.color : 'var(--text-3)',
                      fontWeight: isActive ? '600' : '400',
                    })}>
                    <MiniRing pct={pct} color={m.color} />
                    <span className="font-mono text-[10px] w-6 shrink-0"
                      style={{ color: 'var(--text-4)' }}>
                      {String(week.weekNum).padStart(2, '0')}
                    </span>
                    <span className="text-xs truncate flex-1 leading-tight">{shortTitle}</span>
                    {pct === 100 && (
                      <span className="text-[10px] shrink-0 font-bold" style={{ color: m.color }}>✓</span>
                    )}
                  </NavLink>
                );
              })}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}