import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  DollarSign, 
  Shield, 
  MapPin, 
  TrendingUp, 
  Plus,
  ArrowRight
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import DashboardNavigation from '../components/DashboardNavigation';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  // Mock data
  const stats = {
    totalProperties: 3,
    verifiedProperties: 2,
    totalValue: '₦45,000,000',
    pendingVerifications: 1
  };

  const recentProperties = [
    {
      id: 1,
      title: 'Lagos Mainland Property',
      location: 'Yaba, Lagos',
      status: 'Verified',
      value: '₦15,000,000',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Abuja Commercial Plot',
      location: 'Wuse II, Abuja',
      status: 'Pending',
      value: '₦25,000,000',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Port Harcourt Residential',
      location: 'GRA, Port Harcourt',
      status: 'Verified',
      value: '₦5,000,000',
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Verified':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0B0B0F]">
      <DashboardNavigation />
      
      <main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-[#F1F5F9] mb-2">
              Welcome back, {user?.name?.split(' ')[0]}!
            </h1>
            <p className="text-gray-600 dark:text-[#94A3B8]">
              Here's an overview of your property portfolio
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white dark:bg-[#111827] p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-[#1E293B]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-[#94A3B8]">Total Properties</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">{stats.totalProperties}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#111827] p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-[#1E293B]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-[#94A3B8]">Verified</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">{stats.verifiedProperties}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#111827] p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-[#1E293B]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-[#94A3B8]">Total Value</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">{stats.totalValue}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#111827] p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-[#1E293B]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-[#94A3B8]">Pending</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">{stats.pendingVerifications}</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Properties */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-sm border border-gray-200 dark:border-[#1E293B] p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-[#F1F5F9]">
                    Your Properties
                  </h2>
                  <Link
                    to="/registry"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white font-medium hover:opacity-90 transition-opacity duration-200"
                  >
                    <Plus size={16} className="mr-2" />
                    Add Property
                  </Link>
                </div>

                <div className="space-y-4">
                  {recentProperties.map((property) => (
                    <div key={property.id} className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-[#0B0B0F] border border-gray-200 dark:border-[#1E293B]">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-900 dark:text-[#F1F5F9] truncate">
                          {property.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 dark:text-[#64748B] mt-1">
                          <MapPin size={14} className="mr-1" />
                          {property.location}
                        </div>
                        <p className="text-sm font-medium text-gray-900 dark:text-[#F1F5F9] mt-1">
                          {property.value}
                        </p>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(property.status)}`}>
                          {property.status}
                        </span>
                        <button className="text-[#9945FF] hover:text-[#14F195] text-sm font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Link
                    to="/registry"
                    className="inline-flex items-center text-[#9945FF] hover:text-[#14F195] font-medium transition-colors duration-200"
                  >
                    View All Properties
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              {/* Quick Actions Card */}
              <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-sm border border-gray-200 dark:border-[#1E293B] p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-[#F1F5F9] mb-4">
                  Quick Actions
                </h2>
                <div className="space-y-3">
                  <Link
                    to="/registry"
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-[#0B0B0F] transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3">
                      <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-[#F1F5F9]">Register Property</p>
                      <p className="text-xs text-gray-500 dark:text-[#64748B]">Add new property to registry</p>
                    </div>
                    <ArrowRight size={16} className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                  </Link>

                  <Link
                    to="/valuation"
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-[#0B0B0F] transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-3">
                      <DollarSign className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-[#F1F5F9]">Get Valuation</p>
                      <p className="text-xs text-gray-500 dark:text-[#64748B]">AI-powered property assessment</p>
                    </div>
                    <ArrowRight size={16} className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                  </Link>

                  <Link
                    to="/verify"
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-[#0B0B0F] transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3">
                      <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-[#F1F5F9]">Verify Property</p>
                      <p className="text-xs text-gray-500 dark:text-[#64748B]">Legal verification process</p>
                    </div>
                    <ArrowRight size={16} className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                  </Link>
                </div>
              </div>

              {/* Map Preview */}
              <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-sm border border-gray-200 dark:border-[#1E293B] p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-[#F1F5F9] mb-4">
                  Property Locations
                </h2>
                <div className="aspect-square bg-gray-100 dark:bg-[#0B0B0F] rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 dark:text-[#64748B] mx-auto mb-2" />
                    <p className="text-sm text-gray-500 dark:text-[#64748B]">Interactive map</p>
                    <p className="text-xs text-gray-400 dark:text-[#64748B]">Coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;