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
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
          </div>

          {/* Profile Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Profile Picture Section */}
            <div className="bg-[#111827] rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-[#F1F5F9] mb-4">Profile Picture</h2>
              <div className="flex items-center gap-6">
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
            {/* ... all the other sections you already had ... */}

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
  );
};

export default ProfilePage;
