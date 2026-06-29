import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import { useAuth } from './hooks/useAuth';
import LoginPage from './pages/LoginPage';
import WeekPage from './pages/WeekPage';

function AppRoutes() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-gray-500 text-sm animate-pulse">Loading…</div>
      </div>
    );
  }

  if (!user) return <LoginPage />;

  return (
    <ProgressProvider>
      <Routes>
        <Route path="/"               element={<Navigate to="/week/1" replace />} />
        <Route path="/week/:weekNum"  element={<WeekPage />} />
        <Route path="*"               element={<Navigate to="/week/1" replace />} />
      </Routes>
    </ProgressProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}