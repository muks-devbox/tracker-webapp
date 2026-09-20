import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import { useAuth } from './hooks/useAuth';
import LoginPage from './pages/LoginPage';
import TrackPage from './pages/TrackPage';
import RevisionPage from './pages/RevisionPage';
import TrackRail from './components/layout/TrackRail';
import TopBar from './components/layout/TopBar';
import PromoBar from './components/layout/PromoBar';
import roadmap from './data/roadmap';

function AppShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex" style={{ background: 'var(--bg-paper)' }}>
      <div className={`fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-200 md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <TrackRail onClose={() => setSidebarOpen(false)} />
      </div>
      {sidebarOpen && <div className="fixed inset-0 z-30 bg-black/30 md:hidden" onClick={() => setSidebarOpen(false)} />}

      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        <PromoBar />
        <TopBar onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 px-4 py-6 md:px-8">
          <Routes>
            <Route path="/" element={<Navigate to={`/track/${roadmap.tracks[0].trackId}`} replace />} />
            <Route path="/track/:trackId" element={<TrackPage />} />
            <Route path="/revision" element={<RevisionPage />} />
            <Route path="*" element={<Navigate to={`/track/${roadmap.tracks[0].trackId}`} replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function Root() {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg-paper)' }}>
        <div className="text-sm animate-pulse" style={{ color: 'var(--text-4)' }}>Loading…</div>
      </div>
    );
  }
  if (!user) return <LoginPage />;
  return <ProgressProvider><AppShell /></ProgressProvider>;
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Root />
      </AuthProvider>
    </BrowserRouter>
  );
}
