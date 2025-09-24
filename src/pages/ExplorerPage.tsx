import React from 'react';
import { Search } from 'lucide-react';

interface Asset {
  id: number;
  title: string;
  location: string;
  status: 'Verified' | 'Pending' | 'Tokenized';
  image: string;
  description: string;
}

const ExplorerPage: React.FC = () => {
  // Mock asset data
  const mockAssets: Asset[] = [
    {
      id: 1,
      title: "Modern Villa Estate",
      location: "Lagos, Nigeria",
      status: "Verified",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Luxury 4-bedroom villa with modern amenities"
    },
    {
      id: 2,
      title: "Downtown Commercial Complex",
      location: "Abuja, Nigeria",
      status: "Tokenized",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Prime commercial property in business district"
    },
    {
      id: 3,
      title: "Beachfront Resort Property",
      location: "Cape Town, South Africa",
      status: "Pending",
      image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Oceanview resort with private beach access"
    },
    {
      id: 4,
      title: "Industrial Warehouse",
      location: "Nairobi, Kenya",
      status: "Verified",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Large-scale storage and distribution facility"
    },
    {
      id: 5,
      title: "Luxury Apartment Complex",
      location: "Accra, Ghana",
      status: "Tokenized",
      image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "High-end residential complex with amenities"
    },
    {
      id: 6,
      title: "Agricultural Land",
      location: "Kigali, Rwanda",
      status: "Pending",
      image: "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Fertile farmland suitable for crop cultivation"
    },
    {
      id: 7,
      title: "Historic Heritage Building",
      location: "Cairo, Egypt",
      status: "Verified",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Restored colonial-era building with cultural significance"
    },
    {
      id: 8,
      title: "Tech Hub Office Space",
      location: "Johannesburg, South Africa",
      status: "Tokenized",
      image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Modern office space in technology district"
    },
    {
      id: 9,
      title: "Retail Shopping Center",
      location: "Casablanca, Morocco",
      status: "Pending",
      image: "https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Multi-level shopping complex with anchor stores"
    }
  ];

  const getStatusBadgeClasses = (status: Asset['status']) => {
    switch (status) {
      case 'Verified':
        return 'bg-green-500 text-black';
      case 'Pending':
        return 'bg-yellow-400 text-black';
      case 'Tokenized':
        return 'bg-purple-500 text-black';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#0B0B0F] text-[#F1F5F9] px-4 md:px-12 py-20">
      {/* Page Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
        <span className="bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00FFFF] text-transparent bg-clip-text">
          Explore Registered Assets
        </span>
      </h1>

      {/* Search Bar */}
      <div className="w-full max-w-lg mx-auto mb-12 flex gap-2">
        <input
          type="text"
          placeholder="Search by location, name, or status"
          className="w-full rounded-lg bg-[#111827] text-[#F1F5F9] px-4 py-2 border border-[#1E293B] focus:outline-none focus:border-[#9945FF] transition-colors"
        />
        <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#14F195] text-[#0B0B0F] font-semibold hover:scale-105 transition duration-300 flex items-center gap-2">
          <Search size={18} />
          Search
        </button>
      </div>

      {/* Assets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockAssets.map((asset) => (
          <div
            key={asset.id}
            className="p-4 rounded-xl bg-[#111827] border border-[#1E293B] shadow-lg hover:scale-105 transition duration-300 ease-in-out"
          >
            {/* Asset Image */}
            <img
              src={asset.image}
              alt={asset.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />

            {/* Asset Title */}
            <h3 className="text-2xl font-semibold text-[#F1F5F9] mb-2">
              {asset.title}
            </h3>

            {/* Location */}
            <p className="text-[#94A3B8] mb-3">
              📍 {asset.location}
            </p>

            {/* Description */}
            <p className="text-[#94A3B8] text-sm mb-4 leading-relaxed">
              {asset.description}
            </p>

            {/* Status Badge */}
            <div className="flex justify-between items-center">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeClasses(
                  asset.status
                )}`}
              >
                {asset.status}
              </span>
              
              {/* View Details Button */}
              <button className="text-[#14F195] hover:text-[#00FFFF] text-sm font-medium transition-colors">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white font-semibold shadow-lg hover:scale-105 transition duration-300">
          Load More Assets
        </button>
      </div>
    </div>
  );
};

export default ExplorerPage;