import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage } from './components/MainPage';
import { AdminDashboard } from './components/AdminDashboard';
import { useVisitorTracking } from './hooks/useVisitorTracking';

export default function App() {
  // Initialize visitor tracking
  useVisitorTracking();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}