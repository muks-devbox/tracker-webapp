import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useProgress } from '../../hooks/useProgress';

export default function TopBar({ onMenuClick }) {
  const { user, signOut } = useAuth();
  const { getStreakInfo, togglePause } = useProgress();
  const { weeks, isPausedThisWeek } = getStreakInfo();

  return (
    <header className="sticky top-0 z-20 px-4 py-3 flex items-center gap-4"
      style={{ background: 'rgba(250,249,246,0.9)', backdropFilter: 'blur(10px)',
               borderBottom: '1px solid var(--border)' }}>

      <button onClick={onMenuClick} className="md:hidden p-1" style={{ color: 'var(--text-2)' }}
        aria-label="Open menu">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <span className="font-semibold text-sm hidden md:block" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-1)' }}>
        Interview Prep
      </span>

      <nav className="hidden md:flex items-center gap-1 ml-4">
        <NavLink to="/tracks" className="text-sm px-3 py-1.5 rounded-full transition-colors"
          style={({isActive}) => ({ background: isActive ? 'var(--accent-light)' : 'transparent', color: isActive ? 'var(--accent)' : 'var(--text-3)', fontWeight: isActive ? 600 : 400 })}>
          Tracks
        </NavLink>
        <NavLink to="/revision" className="text-sm px-3 py-1.5 rounded-full transition-colors"
          style={({isActive}) => ({ background: isActive ? 'var(--accent-light)' : 'transparent', color: isActive ? 'var(--accent)' : 'var(--text-3)', fontWeight: isActive ? 600 : 400 })}>
          Revision
        </NavLink>
      </nav>

      <div className="flex items-center gap-3 ml-auto">
        <button onClick={togglePause}
          className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full transition-colors"
          style={{
            background: isPausedThisWeek ? 'var(--bg-raised)' : 'var(--accent-light)',
            color: isPausedThisWeek ? 'var(--text-3)' : 'var(--accent)',
            border: `1px solid ${isPausedThisWeek ? 'var(--border-strong)' : 'var(--accent-border)'}`,
          }}
          title={isPausedThisWeek ? "Resume streak tracking" : "Pause this week (won't break your streak)"}>
          <span>{isPausedThisWeek ? '⏸' : '🔥'}</span>
          <span className="font-mono font-semibold">{weeks}</span>
        </button>

        <span className="text-xs hidden sm:block truncate max-w-[160px]" style={{ color: 'var(--text-4)' }}>
          {user?.email}
        </span>
        <button onClick={signOut} className="text-xs transition-colors" style={{ color: 'var(--text-3)' }}>
          Sign out
        </button>
      </div>
    </header>
  );
}
