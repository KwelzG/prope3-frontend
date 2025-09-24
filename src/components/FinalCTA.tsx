import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <div className="w-full relative flex flex-col justify-center items-center px-4 md:px-12 py-20 bg-white dark:bg-[#111827] text-gray-900 dark:text-[#F1F5F9] text-center transition-colors duration-300">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 w-full h-full opacity-20 blur-sm z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00FFFF] opacity-30 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-4xl">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00FFFF] text-transparent bg-clip-text">
            Start Protecting Your Assets Now
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-[#94A3B8] mb-8 leading-relaxed">
          Don't wait for a dispute to wish you had proof. Secure your property today.
        </p>

        {/* CTA Button */}
        <button className="px-12 py-5 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#14F195] text-[#0B0B0F] text-2xl font-bold shadow-lg transition hover:opacity-80 duration-300 hover:shadow-2xl hover:shadow-[#9945FF]/25 mb-4">
          Secure My Property
        </button>

        {/* Subtext */}
        <p className="text-lg text-gray-600 dark:text-[#94A3B8] font-medium">
          One-time fee. Lifetime security.
        </p>

        {/* Trust Indicators */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8 text-sm text-gray-500 dark:text-[#64748B]">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#14F195]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>Blockchain Secured</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#14F195]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>Legally Recognized</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#14F195]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>Instant Verification</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;