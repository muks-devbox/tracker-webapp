import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../hooks/useProgress';
import Sidebar from '../components/layout/Sidebar';
import WeekView from '../components/week/WeekView';
import roadmap from '../data/roadmap';

export default function WeekPage() {
  const { weekNum } = useParams();
  const { user, signOut } = useAuth();
  const { progressLoaded } = useProgress();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const num  = parseInt(weekNum, 10);
  const week = roadmap.weeks.find(w => w.weekNum === num);

  if (!week) return <Navigate to="/week/1" replace />;

  return (
    <div className="min-h-screen flex" style={{ background: 'var(--bg-app)' }}>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-200 md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">

        <header className="sticky top-0 z-20 px-4 py-3 flex items-center justify-between"
          style={{ background: 'color-mix(in srgb, var(--bg-app) 85%, transparent)',
                   backdropFilter: 'blur(12px)',
                   borderBottom: '1px solid var(--border-faint)' }}>

          <button onClick={() => setSidebarOpen(true)}
            className="md:hidden p-1 transition-colors"
            style={{ color: 'var(--text-3)' }}
            aria-label="Open menu">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <span className="text-xs hidden md:block" style={{ color: 'var(--text-3)' }}>
            Week {num} of 16
          </span>

          <div className="flex items-center gap-4 ml-auto">
            <span className="text-xs hidden sm:block truncate max-w-[180px]"
              style={{ color: 'var(--text-4)' }}>
              {user?.email}
            </span>
            <button onClick={signOut}
              className="text-xs transition-colors cursor-pointer"
              style={{ color: 'var(--text-3)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-1)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}>
              Sign out
            </button>
          </div>
        </header>

        <main className="flex-1 px-4 py-6 md:px-8">
          {!progressLoaded ? (
            <div className="text-sm animate-pulse pt-4" style={{ color: 'var(--text-4)' }}>
              Loading progress…
            </div>
          ) : (
            <WeekView week={week} />
          )}
        </main>
      </div>
    </div>
  );
}