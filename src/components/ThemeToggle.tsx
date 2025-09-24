import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme, isSystemDefault } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-300 dark:border-[#1E293B] bg-white/80 dark:bg-[#111827]/80 text-gray-800 dark:text-[#F1F5F9] text-xs md:text-sm hover:bg-gray-100 dark:hover:bg-[#1E293B] transition-all duration-300 backdrop-blur-sm shadow-sm"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <>
          <Sun size={16} className="text-yellow-500" />
          <span className="hidden sm:inline">Light</span>
        </>
      ) : (
        <>
          <Moon size={16} className="text-blue-600" />
          <span className="hidden sm:inline">Dark</span>
        </>
      )}
      {isSystemDefault && (
        <span className="text-xs opacity-60 hidden md:inline">(Auto)</span>
      )}
    </button>
  );
};

export default ThemeToggle;