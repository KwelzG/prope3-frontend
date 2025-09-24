import React from 'react';

const WhatProp3Does: React.FC = () => {
  return (
    <div className="w-full relative flex flex-col justify-center items-center px-4 md:px-12 py-20 bg-white dark:bg-[#0B0B0F] text-gray-900 dark:text-[#F1F5F9] text-center transition-colors duration-300">
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
        <span className="bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00FFFF] text-transparent bg-clip-text">
          What Prop3 Does
        </span>
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1: Register */}
        <div className="p-8 rounded-xl bg-gray-50 dark:bg-[#111827] shadow-lg border border-gray-200 dark:border-[#1E293B] hover:scale-105 transition duration-300 ease-in-out">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-[#9945FF] to-[#14F195] flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-[#0B0B0F]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#9945FF] to-[#14F195] text-transparent bg-clip-text">
              Register
            </span>
          </h3>
          <p className="text-gray-600 dark:text-[#94A3B8] leading-relaxed text-lg">
            <strong className="text-gray-900 dark:text-[#F1F5F9]">Proof of ownership forever.</strong> Create an immutable record that can never be lost, stolen, or disputed.
          </p>
        </div>

        {/* Feature 2: Verify */}
        <div className="p-8 rounded-xl bg-gray-50 dark:bg-[#111827] shadow-lg border border-gray-200 dark:border-[#1E293B] hover:scale-105 transition duration-300 ease-in-out">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-[#14F195] to-[#00FFFF] flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-[#0B0B0F]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#14F195] to-[#00FFFF] text-transparent bg-clip-text">
              Verify
            </span>
          </h3>
          <p className="text-gray-600 dark:text-[#94A3B8] leading-relaxed text-lg">
            <strong className="text-gray-900 dark:text-[#F1F5F9]">No more fake documents.</strong> Instantly prove authenticity to banks, buyers, or legal authorities.
          </p>
        </div>

        {/* Feature 3: Tokenize */}
        <div className="p-8 rounded-xl bg-gray-50 dark:bg-[#111827] shadow-lg border border-gray-200 dark:border-[#1E293B] hover:scale-105 transition duration-300 ease-in-out">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-[#9945FF] to-[#00FFFF] flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-[#0B0B0F]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#9945FF] to-[#00FFFF] text-transparent bg-clip-text">
              Tokenize
            </span>
          </h3>
          <p className="text-gray-600 dark:text-[#94A3B8] leading-relaxed text-lg">
            <strong className="text-gray-900 dark:text-[#F1F5F9]">Turn your asset into a financial powerhouse.</strong> Unlock liquidity and investment opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatProp3Does;