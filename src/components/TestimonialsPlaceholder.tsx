import React from 'react';

const TestimonialsPlaceholder: React.FC = () => {
  return (
    <div className="w-full relative flex flex-col justify-center items-center px-4 md:px-12 py-20 bg-gray-50 dark:bg-[#0B0B0F] text-gray-900 dark:text-[#F1F5F9] text-center transition-colors duration-300">
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
        <span className="bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00FFFF] text-transparent bg-clip-text">
          Real People. Real Security.
        </span>
      </h2>

      {/* Placeholder Content */}
      <div className="max-w-4xl">
        <div className="bg-white dark:bg-[#111827] p-12 rounded-xl border border-gray-200 dark:border-[#1E293B] shadow-lg">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-[#9945FF] to-[#14F195] flex items-center justify-center mb-6">
            <svg className="w-12 h-12 text-[#0B0B0F]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9] mb-4">
            Customer Stories Coming Soon
          </h3>
          <p className="text-lg text-gray-600 dark:text-[#94A3B8] leading-relaxed mb-6">
            Join the early adopters who are already protecting their property with blockchain technology.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#14F195] text-[#0B0B0F] font-semibold">
            <span>Be Among the First</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPlaceholder;