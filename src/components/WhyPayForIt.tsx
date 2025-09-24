import React from 'react';
import { Check, Shield, DollarSign, Users, FileText, Zap } from 'lucide-react';

const WhyPayForIt: React.FC = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Permanent proof of ownership",
      description: "Never lose your property documents again"
    },
    {
      icon: FileText,
      title: "Stop fake documents and scams",
      description: "Blockchain verification prevents fraud"
    },
    {
      icon: DollarSign,
      title: "Avoid expensive legal battles",
      description: "Prevent costly ownership disputes"
    },
    {
      icon: Zap,
      title: "Make your property investment-ready",
      description: "Instant verification for buyers and lenders"
    },
    {
      icon: Users,
      title: "Protect your family's inheritance",
      description: "Secure generational wealth transfer"
    },
    {
      icon: Check,
      title: "Global recognition and portability",
      description: "Your ownership proof works anywhere"
    }
  ];

  return (
    <div className="w-full relative flex flex-col justify-center items-center px-4 md:px-12 py-20 bg-white dark:bg-[#111827] text-gray-900 dark:text-[#F1F5F9] transition-colors duration-300">
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
        <span className="bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00FFFF] text-transparent bg-clip-text">
          Why Thousands Will Secure Their Property with Prop3
        </span>
      </h2>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 dark:bg-[#0B0B0F] border border-gray-200 dark:border-[#1E293B] hover:scale-105 transition duration-300 ease-in-out">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#9945FF] to-[#14F195] flex items-center justify-center flex-shrink-0">
              <benefit.icon size={20} className="text-[#0B0B0F]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-[#94A3B8] text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pricing Justification */}
      <div className="max-w-4xl text-center">
        <div className="bg-gray-50 dark:bg-[#0B0B0F] p-8 rounded-xl border border-gray-200 dark:border-[#1E293B] shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9] mb-4">
            The Smart Investment Choice
          </h3>
          <p className="text-lg text-gray-600 dark:text-[#94A3B8] leading-relaxed mb-6">
            For less than the cost of a single lawyer's consultation, you'll have permanent, on-chain proof that protects your family's future.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-red-400 mb-2">$5,000+</div>
              <div className="text-sm text-gray-600 dark:text-[#94A3B8]">Average legal dispute cost</div>
            </div>
            <div className="text-2xl text-gray-600 dark:text-[#94A3B8]">vs</div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#9945FF] to-[#14F195] text-transparent bg-clip-text mb-2">$99</div>
              <div className="text-sm text-gray-600 dark:text-[#94A3B8]">One-time Prop3 protection</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPayForIt;