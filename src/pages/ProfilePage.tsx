import React, { useState } from 'react';
import { User, Camera, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProfilePage: React.FC = () => {
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
    <div className="w-full min-h-screen bg-[#0B0B0F] text-[#F1F5F9] py-12 px-4 md:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Back to Dashboard Link */}
        <Link 
          to="/dashboard" 
          className="inline-flex items-center gap-2 text-[#64748B] hover:text-[#F1F5F9] text-sm mb-6 transition-colors duration-300 ease-in-out"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>

        {/* Page Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="bg-gradient-to-r from-[#9945FF] to-[#14F195] text-transparent bg-clip-text">
            Your Profile
          </span>
        </h1>

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
                    className="w-20 h-20 rounded-full object-cover border-2 border-[#1E293B]"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#9945FF] to-[#14F195] flex items-center justify-center text-[#0B0B0F] font-bold text-2xl">
                    JD
                  </div>
                )}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#14F195] rounded-full flex items-center justify-center">
                  <Camera size={12} className="text-[#0B0B0F]" />
                </div>
              </div>

              {/* Upload Button */}
              <div>
                <label htmlFor="profilePicture" className="cursor-pointer">
                  <div className="px-4 py-2 bg-[#1E293B] text-[#F1F5F9] rounded-lg hover:bg-[#334155] transition-colors duration-300 ease-in-out text-sm font-medium">
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
                <p className="text-xs text-[#64748B] mt-1">JPG, PNG or GIF (max. 2MB)</p>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="bg-[#111827] rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-[#F1F5F9] mb-6">Personal Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-[#F1F5F9] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full rounded bg-[#0F172A] text-[#F1F5F9] px-4 py-2 placeholder-[#64748B] border border-[#1E293B] focus:ring-2 focus:ring-[#9945FF] outline-none transition-colors duration-300 ease-in-out"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#F1F5F9] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded bg-[#0F172A] text-[#F1F5F9] px-4 py-2 placeholder-[#64748B] border border-[#1E293B] focus:ring-2 focus:ring-[#9945FF] outline-none transition-colors duration-300 ease-in-out"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#F1F5F9] mb-2">
                  Phone Number <span className="text-[#64748B] text-xs">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full rounded bg-[#0F172A] text-[#F1F5F9] px-4 py-2 placeholder-[#64748B] border border-[#1E293B] focus:ring-2 focus:ring-[#9945FF] outline-none transition-colors duration-300 ease-in-out"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Wallet Address */}
              <div>
                <label htmlFor="walletAddress" className="block text-sm font-medium text-[#F1F5F9] mb-2">
                  Wallet Address <span className="text-[#64748B] text-xs">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="walletAddress"
                  name="walletAddress"
                  value={formData.walletAddress}
                  onChange={handleInputChange}
                  className="w-full rounded bg-[#0F172A] text-[#F1F5F9] px-4 py-2 placeholder-[#64748B] border border-[#1E293B] focus:ring-2 focus:ring-[#9945FF] outline-none transition-colors duration-300 ease-in-out font-mono text-sm"
                  placeholder="0x..."
                />
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-[#111827] rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-[#F1F5F9] mb-6">Security Settings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#F1F5F9] mb-2">
                  New Password <span className="text-[#64748B] text-xs">(Optional)</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full rounded bg-[#0F172A] text-[#F1F5F9] px-4 py-2 placeholder-[#64748B] border border-[#1E293B] focus:ring-2 focus:ring-[#9945FF] outline-none transition-colors duration-300 ease-in-out"
                  placeholder="Enter new password"
                />
              </div>

              {/* Two-Factor Authentication */}
              <div>
                <label className="block text-sm font-medium text-[#F1F5F9] mb-2">
                  Two-Factor Authentication
                </label>
                <div className="flex items-center gap-3 p-3 bg-[#0F172A] rounded border border-[#1E293B]">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-[#64748B]">Not enabled</span>
                  <button 
                    type="button"
                    className="ml-auto text-xs text-[#14F195] hover:text-[#00FFFF] transition-colors duration-300 ease-in-out"
                  >
                    Enable
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Account Preferences */}
          <div className="bg-[#111827] rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-[#F1F5F9] mb-6">Preferences</h2>
            
            <div className="space-y-4">
              {/* Email Notifications */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-[#F1F5F9]">Email Notifications</h3>
                  <p className="text-xs text-[#64748B]">Receive updates about your properties</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-[#1E293B] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[#9945FF] peer-checked:to-[#14F195]"></div>
                </label>
              </div>

              {/* SMS Notifications */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-[#F1F5F9]">SMS Notifications</h3>
                  <p className="text-xs text-[#64748B]">Receive SMS alerts for important updates</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-[#1E293B] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[#9945FF] peer-checked:to-[#14F195]"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 py-3 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#14F195] text-[#0B0B0F] font-semibold text-center hover:opacity-90 transition-opacity duration-300 ease-in-out"
            >
              Save Changes
            </button>
            <button
              type="button"
              className="px-6 py-3 rounded-lg bg-[#1E293B] text-[#F1F5F9] font-medium hover:bg-[#334155] transition-colors duration-300 ease-in-out"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;