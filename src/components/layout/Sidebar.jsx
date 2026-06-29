import { NavLink } from 'react-router-dom';
import { useProgress } from '../../hooks/useProgress';
import roadmap from '../../data/roadmap';

const MONTH_LABELS = {
  1: 'Month 1 — Java Foundations',
  2: 'Month 2 — System Design + K8s',
  3: 'Month 3 — Security + Perf',
  4: 'Month 4 — Mock Interviews',
};

export default function Sidebar({ onClose }) {
  const { getWeekProgress } = useProgress();
  const overall = (() => {
    // Quick overall calc from all weeks
    let total = 0, done = 0;
    roadmap.weeks.forEach(w => {
      const p = getWeekProgress(w.weekNum);
      total += p.total; done += p.completed;
    });
    return total ? Math.round((done / total) * 100) : 0;
  })();

  const weeksByMonth = roadmap.weeks.reduce((acc, w) => {
    (acc[w.month] = acc[w.month] || []).push(w);
    return acc;
  }, {});

  return (
    <aside className="flex flex-col h-full bg-gray-900 border-r border-gray-800">
      {/* Brand */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-white font-semibold text-sm">Interview Prep</div>
            <div className="text-gray-500 text-xs mt-0.5">16-Week Roadmap</div>
          </div>
          {onClose && (
            <button onClick={onClose} className="text-gray-500 hover:text-white md:hidden p-1">✕</button>
          )}
        </div>
        {/* Overall progress bar */}
        <div className="mt-3">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Overall</span><span>{overall}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-1.5">
            <div
              className="bg-blue-500 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${overall}%` }}
            />
          </div>
        </div>
      </div>

      {/* Week list */}
      <nav className="flex-1 overflow-y-auto p-2">
        {Object.entries(weeksByMonth).map(([month, weeks]) => (
          <div key={month} className="mb-4">
            <div className="text-xs text-gray-600 font-medium uppercase tracking-wider px-2 py-1.5">
              {MONTH_LABELS[month]}
            </div>
            {weeks.map(week => {
              const { completed, total, pct } = getWeekProgress(week.weekNum);
              return (
                <NavLink
                  key={week.weekNum}
                  to={`/week/${week.weekNum}`}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3 py-2 rounded-lg mb-0.5 text-sm transition-colors ${
                      isActive
                        ? 'bg-blue-600/20 text-blue-400 border border-blue-600/30'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`
                  }
                >
                  <span className="truncate">
                    <span className="text-gray-600 mr-2 font-mono text-xs">
                      W{String(week.weekNum).padStart(2,'0')}
                    </span>
                    {week.title.replace(/^WEEK\s+\d+:\s*/i, '')}
                  </span>
                  <span className={`text-xs ml-2 shrink-0 font-mono ${pct === 100 ? 'text-green-400' : 'text-gray-600'}`}>
                    {pct === 100 ? '✓' : `${pct}%`}
                  </span>
                </NavLink>
              );
            })}
          </div>
        ))}
      </nav>
    </aside>
  );
}