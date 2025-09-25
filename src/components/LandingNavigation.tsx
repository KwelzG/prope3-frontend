import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import prop3Logo from '../assets/pop3-removebg-preview.png';

const LandingNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/features', label: 'Features' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#0B0B0F]/95 backdrop-blur-md border-b border-gray-200 dark:border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="text-gray-600 dark:text-[#94A3B8] hover:text-gray-900 dark:hover:text-[#F1F5F9] font-medium transition-colors duration-200 nav-link"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link
              to="/auth"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white font-medium btn-premium shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 dark:text-[#F1F5F9] p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-[#1E293B] animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 dark:text-[#94A3B8] hover:text-gray-900 dark:hover:text-[#F1F5F9] font-medium transition-colors duration-200 px-2 nav-link"
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/auth"
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white font-medium btn-premium text-center mx-2 shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default LandingNavigation;