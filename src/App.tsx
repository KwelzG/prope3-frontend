import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ExplorerPage from './pages/ExplorerPage';
import VerificationPage from './pages/VerificationPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="font-['Inter',system-ui,sans-serif] min-h-screen flex flex-col bg-gray-50 dark:bg-[#0B0B0F] text-gray-900 dark:text-[#F1F5F9] transition-colors duration-300">
          <Navigation />
          <main className="flex-1 pt-16"> {/* Account for fixed navigation */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/explorer" element={<ExplorerPage />} />
              <Route path="/verify" element={<VerificationPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;