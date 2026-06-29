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
    <div className="min-h-screen flex" style={{ background: '#080d16' }}>

      {/* Sidebar — desktop: fixed | mobile: slide-in overlay */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-200 md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">

        {/* Top bar */}
        <header
          className="sticky top-0 z-20 px-4 py-3 flex items-center justify-between"
          style={{
            background: 'rgba(8, 13, 22, 0.85)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid #161b27',
          }}
        >
          {/* Mobile hamburger */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden text-slate-500 hover:text-white p-1 transition-colors"
            aria-label="Open menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Breadcrumb — desktop */}
          <span className="text-slate-600 text-xs hidden md:block">
            Week {num} of 16
          </span>

          {/* Right side */}
          <div className="flex items-center gap-4 ml-auto">
            <span className="text-slate-700 text-xs hidden sm:block truncate max-w-[180px]">
              {user?.email}
            </span>
            <button
              onClick={signOut}
              className="text-xs text-slate-600 hover:text-white transition-colors cursor-pointer"
            >
              Sign out
            </button>
          </div>
        </header>

        {/* Page body */}
        <main className="flex-1 px-4 py-6 md:px-8">
          {!progressLoaded ? (
            <div className="text-slate-700 text-sm animate-pulse pt-4">
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