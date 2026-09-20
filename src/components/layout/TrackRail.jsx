import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useProgress } from '../../hooks/useProgress';
import { formatStartedAt } from '../../services/progressService';
import StreakHistoryModal from '../streak/StreakHistoryModal';
import roadmap from '../../data/roadmap';

export default function TrackRail({ onClose }) {
  const { getTrackStats, getOverallStats, profile } = useProgress();
  const overall = getOverallStats();
  const startedLabel = formatStartedAt(profile.startedAt);
  const [historyOpen, setHistoryOpen] = useState(false);

  const byCategory = roadmap.tracks.reduce((acc, t) => {
    (acc[t.category] = acc[t.category] || []).push(t);
    return acc;
  }, {});

  return (
    <aside className="flex flex-col h-full" style={{ background: 'var(--bg-card)', borderRight: '1px solid var(--border)' }}>
      <div className="p-4" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-1)' }}>
            All tracks
          </span>
          {onClose && (
            <button onClick={onClose}
              className="md:hidden text-sm transition-transform duration-150 hover:scale-110 active:scale-90"
              style={{ color: 'var(--text-3)' }}>
              ✕
            </button>
          )}
        </div>
        <div className="flex items-center justify-between text-xs mb-1.5" style={{ color: 'var(--text-3)' }}>
          <span>Overall</span><span className="font-mono">{overall.solidPlus}/{overall.total}</span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--bg-raised)' }}>
          <div className="h-full rounded-full transition-[width] duration-700 ease-out"
            style={{ width: `${overall.pct}%`, background: 'var(--accent)' }} />
        </div>
        {startedLabel && (
          <button
            onClick={() => setHistoryOpen(true)}
            className="text-[10px] mt-2 transition-colors duration-150 hover:underline"
            style={{ color: 'var(--text-4)' }}
          >
            Tracking since {startedLabel} · view history
          </button>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto p-2 pt-3">
        {Object.entries(byCategory).map(([category, tracks]) => (
          <div key={category} className="mb-4">
            <div className="text-[10px] font-semibold uppercase tracking-widest px-2 mb-1.5" style={{ color: 'var(--text-4)' }}>
              {category}
            </div>
            {tracks.map(track => {
              const stats = getTrackStats(track);
              return (
                <NavLink
                  key={track.trackId}
                  to={`/track/${track.trackId}`}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `group flex items-center justify-between gap-2 px-2.5 py-2 rounded-lg mb-0.5 no-underline
                     transition-all duration-150 ease-out hover:translate-x-0.5
                     ${isActive ? '' : 'hover:bg-[var(--bg-raised)]'}`
                  }
                  style={({ isActive }) =>
                    isActive
                      ? { background: 'var(--accent-light)', color: 'var(--accent)', fontWeight: 600 }
                      : { color: 'var(--text-2)', fontWeight: 400 }
                  }
                >
                  <span className="text-sm truncate">{track.title}</span>
                  <span className="text-[10px] font-mono shrink-0 transition-transform duration-200 group-hover:scale-110"
                    style={{ color: stats.pct === 100 ? 'var(--accent)' : 'var(--text-4)' }}>
                    {stats.pct === 100 ? '✓' : `${stats.solidPlus}/${stats.total}`}
                  </span>
                </NavLink>
              );
            })}
          </div>
        ))}
      </nav>
      {historyOpen && <StreakHistoryModal onClose={() => setHistoryOpen(false)} />}
    </aside>
  );
}
