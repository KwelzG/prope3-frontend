import React from 'react';
import prop3Logo from '../assets/pop3-removebg-preview.png';

const HeroSection: React.FC = () => {
  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center px-4 md:px-12 bg-gray-50 dark:bg-[#0B0B0F] text-gray-900 dark:text-[#F1F5F9] overflow-hidden transition-colors duration-300">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 w-full h-full opacity-20 dark:opacity-40 blur-sm z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00FFFF] opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-r from-[#00FFFF] via-[#9945FF] to-[#14F195] opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Prop3 Logo */}
      <div className="relative z-10 mb-8">
        <img 
          src={prop3Logo} 
          alt="Prop3 Logo" 
          className="w-40 md:w-52 h-auto drop-shadow-2xl"
        />
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-center leading-tight relative z-20 mb-6">
        <span className="bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00FFFF] text-transparent bg-clip-text">
          Own Your Property. Prove It Forever.
        </span>
      </h1>

      {/* Subtext - Larger and More Emotional */}
      <p className="text-xl md:text-2xl text-gray-600 dark:text-[#94A3B8] text-center mt-6 max-w-4xl relative z-20 leading-relaxed font-medium">
        Protect your legacy, prevent disputes, and unlock financial power — all by securing your property on the blockchain.
      </p>

      {/* CTA Button - Enhanced for better visibility */}
      <button className="mt-12 px-12 py-5 rounded-xl bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white text-xl font-bold shadow-2xl transition-all hover:scale-105 hover:shadow-3xl duration-300 relative z-20 border-2 border-transparent hover:border-white/20">
        Protect Your Property Now
      </button>

      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#14F195] rounded-full opacity-60 animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#00FFFF] rounded-full opacity-40 animate-ping delay-500"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-[#9945FF] rounded-full opacity-50 animate-ping delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-[#14F195] rounded-full opacity-30 animate-ping delay-1500"></div>
      </div>
    </div>
  );
};

export default HeroSection;