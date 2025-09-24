import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Shield, User, LayoutDashboard } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import prop3Logo from '../assets/pop3-removebg-preview.png';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/explorer', label: 'Explorer', icon: Search },
    { path: '/verify', label: 'Verify', icon: Shield },
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#0B0B0F]/90 backdrop-blur-md border-b border-gray-200 dark:border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={prop3Logo} 
              alt="Prop3 Logo" 
              className="w-10 h-10 object-contain drop-shadow-sm"
            />
            <span className="text-gray-900 dark:text-[#F1F5F9] font-bold text-xl">Prop3</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === path
                    ? 'bg-gradient-to-r from-[#9945FF] to-[#14F195] text-[#0B0B0F]'
                    : 'text-gray-600 dark:text-[#94A3B8] hover:text-gray-900 dark:hover:text-[#F1F5F9]'
                }`}
              >
                <Icon size={18} />
                <span className="font-medium">{label}</span>
              </Link>
            ))}
          </div>

          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-gray-900 dark:text-[#F1F5F9] p-2">
                <Search size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;