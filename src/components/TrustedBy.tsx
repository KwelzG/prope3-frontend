import React from 'react';

const TrustedBy: React.FC = () => {
  return (
    <div className="w-full relative flex flex-col justify-center items-center px-4 md:px-12 py-20 bg-[#0B0B0F] text-[#F1F5F9] text-center">
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
        <span className="bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00FFFF] text-transparent bg-clip-text">
          Trusted By
        </span>
      </h2>

      {/* Partner/Logo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Placeholder Logo 1 */}
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-[#9945FF] to-[#14F195] flex items-center justify-center text-[#0B0B0F] font-bold text-xl shadow-md hover:scale-105 transition duration-300 ease-in-out">
          1
        </div>

        {/* Placeholder Logo 2 */}
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-[#14F195] to-[#00FFFF] flex items-center justify-center text-[#0B0B0F] font-bold text-xl shadow-md hover:scale-105 transition duration-300 ease-in-out">
          2
        </div>

        {/* Placeholder Logo 3 */}
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-[#9945FF] to-[#00FFFF] flex items-center justify-center text-[#0B0B0F] font-bold text-xl shadow-md hover:scale-105 transition duration-300 ease-in-out">
          3
        </div>

        {/* Placeholder Logo 4 */}
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-[#00FFFF] to-[#9945FF] flex items-center justify-center text-[#0B0B0F] font-bold text-xl shadow-md hover:scale-105 transition duration-300 ease-in-out">
          4
        </div>

        {/* Placeholder Logo 5 */}
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-[#14F195] to-[#9945FF] flex items-center justify-center text-[#0B0B0F] font-bold text-xl shadow-md hover:scale-105 transition duration-300 ease-in-out">
          5
        </div>

        {/* Placeholder Logo 6 */}
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00FFFF] flex items-center justify-center text-[#0B0B0F] font-bold text-xl shadow-md hover:scale-105 transition duration-300 ease-in-out">
          6
        </div>

        {/* Placeholder Logo 7 */}
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-[#00FFFF] to-[#14F195] flex items-center justify-center text-[#0B0B0F] font-bold text-xl shadow-md hover:scale-105 transition duration-300 ease-in-out">
          7
        </div>

        {/* Placeholder Logo 8 */}
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-[#14F195] via-[#9945FF] to-[#00FFFF] flex items-center justify-center text-[#0B0B0F] font-bold text-xl shadow-md hover:scale-105 transition duration-300 ease-in-out">
          8
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;