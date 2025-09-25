import React, { useState } from 'react';
import { User, Camera, ArrowLeft, Wallet, Settings, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import DashboardNavigation from '../components/DashboardNavigation';

const ProfilePage: React.FC = () => {
  const { user, connectWallet } = useAuth();
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'johndoe@email.com',
    phone: '+234 801 234 5678',
    walletAddress: '0x742d35Cc6634C0532925a3b8D404d3aABf5b9e75',
    password: ''
  });

  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfilePicture(file);
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - static for now
    console.log('Profile updated:', formData);
    alert('Profile updated successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0B0B0F]">
      <DashboardNavigation />
      
      <main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto page-transition">
        {/* Back to Dashboard Link */}
          <div className="mb-8 animate-fadeInUp">
            <Link 
              to="/dashboard" 
              className="inline-flex items-center gap-2 text-gray-600 dark:text-[#64748B] hover:text-gray-900 dark:hover:text-[#F1F5F9] text-sm mb-6 transition-colors duration-300 nav-link"
            >
              <ArrowLeft size={16} />
              Back to Dashboard
            </Link>

        {/* Page Heading */}
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-[#F1F5F9] mb-2">
              Profile Settings
            </h1>
            <p className="text-gray-600 dark:text-[#94A3B8]">
              Manage your account settings and preferences
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <div className="bg-white dark:bg-[#111827] p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-[#1E293B] hover:shadow-lg transition-all duration-300 card-tilt">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-[#94A3B8]">Wallet Status</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-[#F1F5F9]">
                    {user?.walletAddress ? 'Connected' : 'Not Connected'}
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </div>
        {/* Profile Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Profile Picture Section */}
          <div className="bg-[#111827] rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-[#F1F5F9] mb-4">Profile Picture</h2>
            <div className="flex items-center gap-6">
              {/* Current Profile Picture */}
              <div className="relative">
                {previewUrl ? (
                  <img 
                    src={previewUrl} 
                    alt="Profile" 
                    className="w-20 h-20 rounded-full object-cover border-2 border-gray-200 dark:border-[#1E293B] hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#9945FF] to-[#14F195] flex items-center justify-center text-[#0B0B0F] font-bold text-2xl">
                    JD
                  </div>
                )}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#14F195] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Camera size={12} className="text-[#0B0B0F]" />
                </div>
              </div>

              {/* Upload Button */}
              <div>
                <label htmlFor="profilePicture" className="cursor-pointer">
                  <div className="px-4 py-2 bg-gray-200 dark:bg-[#1E293B] text-gray-900 dark:text-[#F1F5F9] rounded-lg hover:bg-gray-300 dark:hover:bg-[#334155] transition-all duration-300 text-sm font-medium hover:scale-105">
                    Change Picture
                  </div>
                  <input
                    type="file"
                    id="profilePicture"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                <p className="text-xs text-gray-500 dark:text-[#64748B] mt-1">JPG, PNG or GIF (max. 2MB)</p>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-sm border border-gray-200 dark:border-[#1E293B] p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-[#F1F5F9] mb-6">Personal Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-[#F1F5F9] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#1E293B] bg-white dark:bg-[#0B0B0F] text-gray-900 dark:text-[#F1F5F9] focus:ring-2 focus:ring-[#9945FF] focus:border-transparent transition-colors duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-[#F1F5F9] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#1E293B] bg-white dark:bg-[#0B0B0F] text-gray-900 dark:text-[#F1F5F9] focus:ring-2 focus:ring-[#9945FF] focus:border-transparent transition-colors duration-200"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-[#F1F5F9] mb-2">
                  Phone Number <span className="text-gray-500 dark:text-[#64748B] text-xs">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#1E293B] bg-white dark:bg-[#0B0B0F] text-gray-900 dark:text-[#F1F5F9] focus:ring-2 focus:ring-[#9945FF] focus:border-transparent transition-colors duration-200"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Wallet Address */}
              <div>
                <label htmlFor="walletAddress" className="block text-sm font-medium text-gray-700 dark:text-[#F1F5F9] mb-2">
                  Solana Wallet Address
                </label>
                {user?.walletAddress ? (
                  <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <span className="text-sm font-mono text-green-800 dark:text-green-400 truncate">
                      {user.walletAddress}
                    </span>
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">Connected</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={connectWallet}
                    className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white font-medium btn-premium shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Wallet size={20} />
                    <span>Connect Solana Wallet</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-sm border border-gray-200 dark:border-[#1E293B] p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-[#F1F5F9] mb-6">Security Settings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-[#F1F5F9] mb-2">
                  New Password <span className="text-gray-500 dark:text-[#64748B] text-xs">(Optional)</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#1E293B] bg-white dark:bg-[#0B0B0F] text-gray-900 dark:text-[#F1F5F9] focus:ring-2 focus:ring-[#9945FF] focus:border-transparent transition-colors duration-200"
                  placeholder="Enter new password"
                />
              </div>

              {/* Two-Factor Authentication */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-[#F1F5F9] mb-2">
                  Two-Factor Authentication
                </label>
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-[#0B0B0F] rounded-lg border border-gray-200 dark:border-[#1E293B]">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-[#64748B]">Not enabled</span>
                  <button 
                    type="button"
                    className="ml-auto text-xs text-[#14F195] hover:text-[#00FFFF] transition-colors duration-300 hover:scale-105"
                  >
                    Enable
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Account Preferences */}
          <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-sm border border-gray-200 dark:border-[#1E293B] p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-[#F1F5F9] mb-6">Preferences</h2>
            
            <div className="space-y-4">
              {/* Email Notifications */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-[#F1F5F9]">Email Notifications</h3>
                  <p className="text-xs text-gray-500 dark:text-[#64748B]">Receive updates about your properties</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 dark:bg-[#1E293B] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[#9945FF] peer-checked:to-[#14F195]"></div>
                </label>
              </div>

              {/* SMS Notifications */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-[#F1F5F9]">SMS Notifications</h3>
                  <p className="text-xs text-gray-500 dark:text-[#64748B]">Receive SMS alerts for important updates</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 dark:bg-[#1E293B] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[#9945FF] peer-checked:to-[#14F195]"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 py-3 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white font-semibold text-center btn-premium shadow-lg"
            >
              Save Changes
            </button>
            <button
              type="button"
              className="px-6 py-3 rounded-lg bg-gray-200 dark:bg-[#1E293B] text-gray-900 dark:text-[#F1F5F9] font-medium hover:bg-gray-300 dark:hover:bg-[#334155] transition-all duration-300 hover:scale-105"
            >
              Cancel
            </button>
          </div>
        </form>
        </div>
      </main>
      </div>
    </div>
  );
};

export default ProfilePage;