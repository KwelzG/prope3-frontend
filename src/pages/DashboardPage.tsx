import React, { useState } from 'react';
import { User, Home, Settings, LogOut, Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Property {
  id: number;
  title: string;
  location: string;
  status: 'Verified' | 'Pending' | 'Tokenized';
  image: string;
  tokenAddress: string;
}

const DashboardPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock user data
  const user = {
    name: "John Doe",
    initials: "JD",
    status: "Verified Member"
  };

  // Mock properties data
  const mockProperties: Property[] = [
    {
      id: 1,
      title: "4-Bedroom Duplex",
      location: "Lagos, Nigeria",
      status: "Verified",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400",
      tokenAddress: "0x3a2f...b12e"
    },
    {
      id: 2,
      title: "Commercial Plaza",
      location: "Abuja, Nigeria",
      status: "Tokenized",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400",
      tokenAddress: "0x7c8d...f45a"
    },
    {
      id: 3,
      title: "Luxury Apartment",
      location: "Port Harcourt, Nigeria",
      status: "Pending",
      image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=400",
      tokenAddress: "0x9e1b...c67d"
    },
    {
      id: 4,
      title: "Industrial Warehouse",
      location: "Kano, Nigeria",
      status: "Verified",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400",
      tokenAddress: "0x2f4a...8e9c"
    }
  ];

  const navigationItems = [
    { name: 'Dashboard Overview', href: '/dashboard', icon: Home, active: true },
    { name: 'My Properties', href: '/dashboard/properties', icon: Home, active: false },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings, active: false },
    { name: 'Logout', href: '/logout', icon: LogOut, active: false }
  ];

  const getStatusBadgeClasses = (status: Property['status']) => {
    switch (status) {
      case 'Verified':
        return 'bg-gradient-to-r from-[#22C55E] to-[#14F195] text-black';
      case 'Pending':
        return 'bg-gradient-to-r from-[#FACC15] to-[#FBBF24] text-black';
      case 'Tokenized':
        return 'bg-gradient-to-r from-[#9945FF] to-[#14F195] text-black';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#0B0B0F] text-[#F1F5F9] flex flex-col lg:flex-row">
      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-[#111827] border-b border-[#1E293B]">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg hover:bg-[#1E293B] transition-colors duration-300 ease-in-out"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        ${sidebarOpen ? 'block' : 'hidden'} lg:block
        w-full lg:w-64 bg-[#111827] p-6 border-r border-[#1E293B]
        ${sidebarOpen ? 'absolute lg:relative z-50 h-full' : ''}
      `}>
        {/* User Profile Section in Sidebar */}
        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#1E293B]">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#9945FF] to-[#14F195] flex items-center justify-center text-[#0B0B0F] font-bold text-lg">
            {user.initials}
          </div>
          <div>
            <h3 className="font-semibold text-[#F1F5F9]">{user.name}</h3>
            <p className="text-sm text-[#14F195]">{user.status}</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-300 ease-in-out ${
                item.active
                  ? 'bg-gradient-to-r from-[#9945FF] to-[#14F195] text-[#0B0B0F] font-medium'
                  : 'text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#1E293B]'
              }`}
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Dashboard Content */}
      <section className="flex-1 p-6 lg:p-12">
        {/* Greeting Section */}
        <div className="w-full bg-transparent mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-[#F1F5F9] mb-2">
            Welcome, {user.name.split(' ')[0]}
          </h1>
          <p className="text-[#94A3B8] text-sm">Here's your current activity</p>
        </div>

        {/* Quick Profile Overview */}
        <div className="bg-[#111827] w-full md:w-1/2 lg:w-1/3 p-4 rounded-lg mb-6 shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#9945FF] to-[#14F195] flex items-center justify-center text-[#0B0B0F] font-bold text-lg">
              {user.initials}
            </div>
            <div>
              <h3 className="font-semibold text-[#F1F5F9]">{user.name}</h3>
              <p className="text-sm text-[#14F195]">{user.status}</p>
            </div>
          </div>
          <Link 
            to="/profile"
            className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-[#F1F5F9] text-sm transition-colors duration-300 ease-in-out hover:opacity-80"
          >
            Manage Profile
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#111827] p-6 rounded-xl border border-[#1E293B] hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-[#F1F5F9] mb-2">{mockProperties.length}</h3>
            <p className="text-[#94A3B8]">Total Properties</p>
          </div>
          <div className="bg-[#111827] p-6 rounded-xl border border-[#1E293B] hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-[#14F195] mb-2">
              {mockProperties.filter(p => p.status === 'Verified').length}
            </h3>
            <p className="text-[#94A3B8]">Verified Properties</p>
          </div>
          <div className="bg-[#111827] p-6 rounded-xl border border-[#1E293B] hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-[#9945FF] mb-2">
              {mockProperties.filter(p => p.status === 'Tokenized').length}
            </h3>
            <p className="text-[#94A3B8]">Tokenized Properties</p>
          </div>
        </div>

        {/* Your Properties Section */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#F1F5F9]">
            Your Properties
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockProperties.map((property) => (
              <div
                key={property.id}
                className="bg-[#111827] p-4 rounded-xl border border-[#1E293B] shadow-lg hover:scale-105 transition duration-300 ease-in-out"
              >
                {/* Property Image */}
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />

                {/* Property Details */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[#F1F5F9]">
                    {property.title}
                  </h3>

                  <p className="text-[#94A3B8] text-sm">
                    📍 {property.location}
                  </p>

                  {/* Status Badge */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeClasses(
                        property.status
                      )}`}
                    >
                      {property.status}
                    </span>
                  </div>

                  {/* Token Address */}
                  <div className="bg-[#0B0B0F] p-3 rounded-lg border border-[#1E293B]">
                    <p className="text-xs text-[#94A3B8] mb-1">Token Address:</p>
                    <p className="text-sm text-[#14F195] font-mono break-all">
                      {property.tokenAddress}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <button className="flex-1 px-3 py-2 bg-gradient-to-r from-[#9945FF] to-[#14F195] text-[#0B0B0F] text-sm font-medium rounded-lg hover:scale-105 transition duration-300 ease-in-out">
                      View Details
                    </button>
                    {property.status === 'Verified' && (
                      <button className="flex-1 px-3 py-2 bg-[#1E293B] text-[#F1F5F9] text-sm font-medium rounded-lg hover:bg-[#334155] transition duration-300 ease-in-out">
                        Tokenize
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add New Property Button */}
          <div className="text-center mt-8">
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white font-semibold shadow-lg hover:scale-105 transition duration-300 ease-in-out">
              + Register New Property
            </button>
          </div>
        </div>

        {/* Navigation Links Section */}
        <div className="bg-[#111827] p-6 rounded-xl border border-[#1E293B] shadow-md">
          <h3 className="text-lg font-semibold text-[#F1F5F9] mb-4">Quick Actions</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <Link 
              to="/verify"
              className="text-[#94A3B8] hover:text-[#F1F5F9] text-sm uppercase tracking-wide transition-colors duration-300 ease-in-out flex items-center gap-2"
            >
              Verify New Property
              <ArrowRight size={14} />
            </Link>
            <Link 
              to="/explorer"
              className="text-[#94A3B8] hover:text-[#F1F5F9] text-sm uppercase tracking-wide transition-colors duration-300 ease-in-out flex items-center gap-2"
            >
              Explore Assets
              <ArrowRight size={14} />
            </Link>
            <Link 
              to="/profile"
              className="text-[#94A3B8] hover:text-[#F1F5F9] text-sm uppercase tracking-wide transition-colors duration-300 ease-in-out flex items-center gap-2"
            >
              Profile Settings
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardPage;