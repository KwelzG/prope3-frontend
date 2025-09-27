import React, { useState } from 'react';
import { Building, MapPin, Calendar, DollarSign, Shield, Eye, CreditCard as Edit, Trash2, Filter, Search } from 'lucide-react';
import { DashboardNavigation } from '../components/DashboardNavigation';
import { Link } from 'react-router-dom';

interface Property {
  id: string;
  title: string;
  location: string;
  value: string;
  status: 'verified' | 'pending' | 'rejected';
  type: 'residential' | 'commercial' | 'land';
  registeredDate: string;
  image: string;
}

export const PropertiesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterType, setFilterType] = useState<string>('all');

  // Mock data - replace with actual API call
  const properties: Property[] = [
    {
      id: '1',
      title: 'Lagos Mansion',
      location: 'Victoria Island, Lagos',
      value: '₦25,000,000',
      status: 'verified',
      type: 'residential',
      registeredDate: '2024-01-15',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '2',
      title: 'Abuja Estate',
      location: 'Maitama, Abuja',
      value: '₦15,000,000',
      status: 'pending',
      type: 'residential',
      registeredDate: '2024-01-10',
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '3',
      title: 'Kano Commercial Plaza',
      location: 'Sabon Gari, Kano',
      value: '₦5,000,000',
      status: 'verified',
      type: 'commercial',
      registeredDate: '2024-01-05',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '4',
      title: 'Port Harcourt Land',
      location: 'GRA, Port Harcourt',
      value: '₦8,000,000',
      status: 'verified',
      type: 'land',
      registeredDate: '2023-12-20',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || property.status === filterStatus;
    const matchesType = filterType === 'all' || property.type === filterType;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified': return 'text-green-400 bg-green-400/10';
      case 'pending': return 'text-yellow-400 bg-yellow-400/10';
      case 'rejected': return 'text-red-400 bg-red-400/10';
      default: return 'text-slate-400 bg-slate-400/10';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'residential': return <Building className="w-4 h-4" />;
      case 'commercial': return <Building className="w-4 h-4" />;
      case 'land': return <MapPin className="w-4 h-4" />;
      default: return <Building className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <DashboardNavigation />
      
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center fade-in-up">
            <div>
              <h1 className="text-3xl font-bold text-white">All Properties</h1>
              <p className="text-slate-400 mt-2">Manage your registered properties and assets</p>
            </div>
            <Link 
              to="/registry"
              className="apple-button bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 shimmer"
            >
              <Building className="w-5 h-5" />
              Register New Property
            </Link>
          </div>

          {/* Filters */}
          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search properties..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
              
              <div className="flex gap-4">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="all">All Status</option>
                  <option value="verified">Verified</option>
                  <option value="pending">Pending</option>
                  <option value="rejected">Rejected</option>
                </select>
                
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="all">All Types</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="land">Land</option>
                </select>
              </div>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property, index) => (
              <div 
                key={property.id} 
                className="tilt-card bg-slate-800 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden fade-in-up"
                style={{ animationDelay: `${0.1 * (index + 2)}s` }}
              >
                <div className="relative">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(property.status)}`}>
                      {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg">
                      {getTypeIcon(property.type)}
                      <span className="text-white text-xs capitalize">{property.type}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{property.title}</h3>
                  <div className="flex items-center gap-2 text-slate-400 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 font-semibold">{property.value}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs">{new Date(property.registeredDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      View
                    </button>
                    <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="bg-red-600/20 hover:bg-red-600/30 text-red-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-12 fade-in-up">
              <Building className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-400 mb-2">No properties found</h3>
              <p className="text-slate-500 mb-6">Try adjusting your search or filters</p>
              <Link 
                to="/registry"
                className="apple-button bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 inline-flex items-center gap-2"
              >
                <Building className="w-5 h-5" />
                Register Your First Property
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};