import { NavLink } from 'react-router-dom';
import { useProgress } from '../../hooks/useProgress';
import roadmap from '../../data/roadmap';

const MONTHS = {
  1: { label: 'Month 1 — Java Foundations',    color: '#3b82f6' },
  2: { label: 'Month 2 — System Design + K8s', color: '#8b5cf6' },
  3: { label: 'Month 3 — Security + Perf',     color: '#10b981' },
  4: { label: 'Month 4 — Mock Interviews',     color: '#f59e0b' },
};

function MiniRing({ pct, color }) {
  const r = 7, circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" className="shrink-0" aria-hidden="true">
      <circle cx="10" cy="10" r={r} fill="none" stroke="#1e293b" strokeWidth="2.5" />
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
  const r = 18, circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" aria-hidden="true">
      <circle cx="26" cy="26" r={r} fill="none" stroke="#1e293b" strokeWidth="3" />
      <circle cx="26" cy="26" r={r} fill="none" stroke="#3b82f6"
        strokeWidth="3" strokeDasharray={`${dash} ${circ - dash}`}
        strokeLinecap="round" transform="rotate(-90 26 26)"
        style={{ transition: 'stroke-dasharray 0.8s ease' }} />
      <text x="26" y="30" textAnchor="middle" fill="#f1f5f9"
        fontSize="11" fontWeight="700" fontFamily="monospace">
        {pct}%
      </text>
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
      style={{ background: '#0d1117', borderRight: '1px solid #161b27' }}>

      {/* Brand + overall progress */}
      <div className="p-4 pb-3" style={{ borderBottom: '1px solid #161b27' }}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30
                            flex items-center justify-center text-base">
              🎯
            </div>
            <div>
              <div className="text-white text-sm font-semibold leading-tight">Interview Prep</div>
              <div className="text-slate-600 text-xs">16-Week Roadmap</div>
            </div>
          </div>
          {onClose && (
            <button onClick={onClose} className="text-slate-600 hover:text-white md:hidden p-1">✕</button>
          )}
        </div>

        {/* Overall progress panel */}
        <div className="flex items-center gap-3 rounded-xl p-3"
          style={{ background: '#111827', border: '1px solid #1e2a3a' }}>
          <OverallRing pct={overall} />
          <div>
            <div className="text-slate-500 text-xs mb-0.5">Overall progress</div>
            <div className="text-white text-sm font-semibold">
              {totalDone} <span className="text-slate-600 font-normal text-xs">/ {totalAll} tasks</span>
            </div>
            <div className="text-slate-600 text-xs mt-0.5">
              {roadmap.weeks.filter(w => getWeekProgress(w.weekNum).pct === 100).length} / 16 weeks done
            </div>
          </div>
        </div>
      </div>

      {/* Week navigation */}
      <nav className="flex-1 overflow-y-auto p-2 pt-3">
        {Object.entries(weeksByMonth).map(([month, weeks]) => {
          const m = MONTHS[month];
          return (
            <div key={month} className="mb-5">
              <div className="flex items-center gap-2 px-2 mb-1.5">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: m.color }} />
                <span className="text-[10px] font-semibold uppercase tracking-widest"
                  style={{ color: m.color + 'cc' }}>
                  {m.label}
                </span>
              </div>

              {weeks.map(week => {
                const { pct } = getWeekProgress(week.weekNum);
                const shortTitle = week.title.replace(/^WEEK\s+\d+:\s*/i, '');
                return (
                  <NavLink
                    key={week.weekNum}
                    to={`/week/${week.weekNum}`}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-2 py-2 rounded-lg mb-0.5 transition-all duration-150 ${
                        isActive
                          ? 'bg-slate-800 text-white'
                          : 'text-slate-500 hover:text-slate-200 hover:bg-slate-800/50'
                      }`
                    }
                  >
                    <MiniRing pct={pct} color={m.color} />
                    <span className="font-mono text-[10px] text-slate-700 shrink-0 w-6">
                      {String(week.weekNum).padStart(2, '0')}
                    </span>
                    <span className="text-xs truncate flex-1 leading-tight">{shortTitle}</span>
                    {pct === 100 && (
                      <span className="text-[10px] shrink-0" style={{ color: m.color }}>✓</span>
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