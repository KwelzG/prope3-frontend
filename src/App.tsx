import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import RegistryPage from './pages/RegistryPage';
import ValuationPage from './pages/ValuationPage';
import VerificationPage from './pages/VerificationPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="font-['Inter',system-ui,sans-serif] min-h-screen bg-white dark:bg-[#0B0B0F] text-gray-900 dark:text-[#F1F5F9] transition-colors duration-300">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              
              {/* Protected Routes */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              } />
              <Route path="/registry" element={
                <ProtectedRoute>
                  <RegistryPage />
                </ProtectedRoute>
              } />
              <Route path="/valuation" element={
                <ProtectedRoute>
                  <ValuationPage />
                </ProtectedRoute>
              } />
              <Route path="/verify" element={
                <ProtectedRoute>
                  <VerificationPage />
                </ProtectedRoute>
              } />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              } />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;