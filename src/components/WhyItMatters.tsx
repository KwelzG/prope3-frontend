import React from 'react';

const WhyItMatters: React.FC = () => {
  return (
    <div className="w-full relative flex flex-col justify-center items-center px-4 md:px-12 py-20 bg-gray-50 dark:bg-[#0B0B0F] text-gray-900 dark:text-[#F1F5F9] text-center transition-colors duration-300">
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
        <span className="bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00FFFF] text-transparent bg-clip-text">
          Why It Matters
        </span>
      </h2>

      {/* Step-by-Step Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 1: Identity */}
        <div className="p-8 rounded-xl bg-white dark:bg-[#111827] border border-gray-200 dark:border-[#1E293B] shadow-lg hover:scale-105 transition duration-300 ease-in-out">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-[#9945FF] to-[#14F195] flex items-center justify-center mb-6 text-[#0B0B0F] font-bold text-2xl">
            1
          </div>
          <h3 className="text-2xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#9945FF] to-[#14F195] text-transparent bg-clip-text">
              Identity
            </span>
          </h3>
          <p className="text-gray-600 dark:text-[#94A3B8] leading-relaxed text-lg">
            <strong className="text-gray-900 dark:text-[#F1F5F9]">Protect your family's future</strong> with secured ownership that survives generations.
          </p>
        </div>

        {/* Step 2: Importance */}
        <div className="p-8 rounded-xl bg-white dark:bg-[#111827] border border-gray-200 dark:border-[#1E293B] shadow-lg hover:scale-105 transition duration-300 ease-in-out">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-[#14F195] to-[#00FFFF] flex items-center justify-center mb-6 text-[#0B0B0F] font-bold text-2xl">
            2
          </div>
          <h3 className="text-2xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#14F195] to-[#00FFFF] text-transparent bg-clip-text">
              Importance
            </span>
          </h3>
          <p className="text-gray-600 dark:text-[#94A3B8] leading-relaxed text-lg">
            <strong className="text-gray-900 dark:text-[#F1F5F9]">Prove your claim instantly</strong> to anyone, anywhere in the world with blockchain verification.
          </p>
        </div>

        {/* Step 3: Impact */}
        <div className="p-8 rounded-xl bg-white dark:bg-[#111827] border border-gray-200 dark:border-[#1E293B] shadow-lg hover:scale-105 transition duration-300 ease-in-out">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-[#9945FF] to-[#00FFFF] flex items-center justify-center mb-6 text-[#0B0B0F] font-bold text-2xl">
            3
          </div>
          <h3 className="text-2xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#9945FF] to-[#00FFFF] text-transparent bg-clip-text">
              Impact
            </span>
          </h3>
          <p className="text-gray-600 dark:text-[#94A3B8] leading-relaxed text-lg">
            <strong className="text-gray-900 dark:text-[#F1F5F9]">Unlock capital and monetize</strong> what you already own through tokenization and DeFi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyItMatters;