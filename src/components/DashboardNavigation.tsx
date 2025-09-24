import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  FileText, 
  DollarSign, 
  Shield, 
  User, 
  Menu, 
  X,
  LogOut
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import ThemeToggle from './ThemeToggle';
import prop3Logo from '../assets/pop3-removebg-preview.png';

const DashboardNavigation: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: Home },
    { path: '/registry', label: 'Registry', icon: FileText },
    { path: '/valuation', label: 'Valuation', icon: DollarSign },
    { path: '/verify', label: 'Verification', icon: Shield },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  const handleLogout = () => {
    logout();
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#0B0B0F]/95 backdrop-blur-md border-b border-gray-200 dark:border-[#1E293B]">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden text-gray-900 dark:text-[#F1F5F9] p-2"
              >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              
              <Link to="/dashboard" className="flex items-center space-x-3">
                <img 
                  src={prop3Logo} 
                  alt="Prop3 Logo" 
                  className="w-8 h-8 object-contain drop-shadow-sm"
                />
                <span className="text-gray-900 dark:text-[#F1F5F9] font-bold text-xl">Prop3</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    location.pathname === path
                      ? 'bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white'
                      : 'text-gray-600 dark:text-[#94A3B8] hover:text-gray-900 dark:hover:text-[#F1F5F9]'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{label}</span>
                </Link>
              ))}
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              
              {/* User Avatar */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#9945FF] to-[#14F195] flex items-center justify-center">
                  {user?.avatar ? (
                    <img 
                      src={user.avatar} 
                      alt={user.name} 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-white text-sm font-medium">
                      {user?.name?.charAt(0) || 'U'}
                    </span>
                  )}
                </div>
                <span className="hidden sm:block text-gray-900 dark:text-[#F1F5F9] font-medium">
                  {user?.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className="fixed top-16 left-0 bottom-0 w-64 bg-white dark:bg-[#0B0B0F] border-r border-gray-200 dark:border-[#1E293B] z-50 lg:hidden">
            <div className="p-4 space-y-2">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    location.pathname === path
                      ? 'bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white'
                      : 'text-gray-600 dark:text-[#94A3B8] hover:text-gray-900 dark:hover:text-[#F1F5F9] hover:bg-gray-100 dark:hover:bg-[#1E293B]'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{label}</span>
                </Link>
              ))}
              
              <button
                onClick={handleLogout}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors w-full"
              >
                <LogOut size={20} />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DashboardNavigation;