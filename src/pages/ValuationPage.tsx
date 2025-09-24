import React, { useState } from 'react';
import { DollarSign, MapPin, TrendingUp, BarChart3, Calculator } from 'lucide-react';
import DashboardNavigation from '../components/DashboardNavigation';

const ValuationPage: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [valuationResult, setValuationResult] = useState<any>(null);

  // Mock properties
  const properties = [
    { id: '1', title: 'Lagos Mainland Property', location: 'Yaba, Lagos' },
    { id: '2', title: 'Abuja Commercial Plot', location: 'Wuse II, Abuja' },
    { id: '3', title: 'Port Harcourt Residential', location: 'GRA, Port Harcourt' }
  ];

  const handleValuation = async () => {
    if (!selectedProperty) return;

    setIsCalculating(true);
    
    // Simulate AI valuation process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Mock valuation result
    setValuationResult({
      currentValue: '₦25,000,000',
      previousValue: '₦22,000,000',
      change: '+13.6%',
      confidence: '92%',
      factors: [
        { name: 'Location Score', value: '9.2/10', impact: 'High' },
        { name: 'Market Trends', value: 'Rising', impact: 'Positive' },
        { name: 'Property Condition', value: 'Excellent', impact: 'High' },
        { name: 'Neighborhood Development', value: 'Growing', impact: 'Positive' }
      ],
      comparables: [
        { address: 'Similar property 1', price: '₦23,500,000', distance: '0.5km' },
        { address: 'Similar property 2', price: '₦26,200,000', distance: '0.8km' },
        { address: 'Similar property 3', price: '₦24,800,000', distance: '1.2km' }
      ]
    });
    
    setIsCalculating(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0B0B0F]">
      <DashboardNavigation />
      
      <main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-[#F1F5F9] mb-2">
              AI Property Valuation
            </h1>
            <p className="text-gray-600 dark:text-[#94A3B8]">
              Get accurate, real-time property valuations powered by advanced AI
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Valuation Form */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-sm border border-gray-200 dark:border-[#1E293B] p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-[#F1F5F9] mb-6">
                  Select Property
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-[#F1F5F9] mb-2">
                      Choose Property
                    </label>
                    <select
                      value={selectedProperty}
                      onChange={(e) => setSelectedProperty(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#1E293B] bg-white dark:bg-[#0B0B0F] text-gray-900 dark:text-[#F1F5F9] focus:ring-2 focus:ring-[#9945FF] focus:border-transparent"
                    >
                      <option value="">Select a property</option>
                      {properties.map((property) => (
                        <option key={property.id} value={property.id}>
                          {property.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {selectedProperty && (
                    <div className="p-4 bg-gray-50 dark:bg-[#0B0B0F] rounded-lg">
                      <div className="flex items-center text-sm text-gray-600 dark:text-[#94A3B8]">
                        <MapPin size={16} className="mr-2" />
                        {properties.find(p => p.id === selectedProperty)?.location}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handleValuation}
                    disabled={!selectedProperty || isCalculating}
                    className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-200 flex items-center justify-center"
                  >
                    {isCalculating ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Calculating...
                      </>
                    ) : (
                      <>
                        <Calculator size={20} className="mr-2" />
                        Get AI Valuation
                      </>
                    )}
                  </button>
                </div>

                {/* Valuation Features */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-[#1E293B]">
                  <h3 className="font-medium text-gray-900 dark:text-[#F1F5F9] mb-4">
                    Our AI Considers:
                  </h3>
                  <div className="space-y-3 text-sm text-gray-600 dark:text-[#94A3B8]">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#9945FF] rounded-full mr-3"></div>
                      Location and neighborhood data
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#14F195] rounded-full mr-3"></div>
                      Recent comparable sales
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#00FFFF] rounded-full mr-3"></div>
                      Market trends and forecasts
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#9945FF] rounded-full mr-3"></div>
                      Property characteristics
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#14F195] rounded-full mr-3"></div>
                      Economic indicators
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Valuation Results */}
            <div className="lg:col-span-2">
              {valuationResult ? (
                <div className="space-y-6">
                  {/* Main Valuation Card */}
                  <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-sm border border-gray-200 dark:border-[#1E293B] p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-[#F1F5F9]">
                        Current Valuation
                      </h2>
                      <div className="flex items-center text-sm text-gray-500 dark:text-[#64748B]">
                        <BarChart3 size={16} className="mr-1" />
                        Confidence: {valuationResult.confidence}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-900 dark:text-[#F1F5F9] mb-2">
                          {valuationResult.currentValue}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-[#94A3B8]">Current Value</div>
                      </div>

                      <div className="text-center">
                        <div className="text-2xl font-semibold text-gray-600 dark:text-[#94A3B8] mb-2">
                          {valuationResult.previousValue}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-[#94A3B8]">Previous Value</div>
                      </div>

                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                          {valuationResult.change}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-[#94A3B8]">Change</div>
                      </div>
                    </div>
                  </div>

                  {/* Valuation Factors */}
                  <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-sm border border-gray-200 dark:border-[#1E293B] p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-[#F1F5F9] mb-4">
                      Valuation Factors
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {valuationResult.factors.map((factor: any, index: number) => (
                        <div key={index} className="p-4 bg-gray-50 dark:bg-[#0B0B0F] rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium text-gray-900 dark:text-[#F1F5F9]">
                              {factor.name}
                            </h4>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              factor.impact === 'High' || factor.impact === 'Positive'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                            }`}>
                              {factor.impact}
                            </span>
                          </div>
                          <div className="text-sm text-gray-600 dark:text-[#94A3B8]">
                            {factor.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Comparable Properties */}
                  <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-sm border border-gray-200 dark:border-[#1E293B] p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-[#F1F5F9] mb-4">
                      Comparable Properties
                    </h3>
                    <div className="space-y-4">
                      {valuationResult.comparables.map((comp: any, index: number) => (
                        <div key={index} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-[#0B0B0F] rounded-lg">
                          <div>
                            <div className="font-medium text-gray-900 dark:text-[#F1F5F9]">
                              {comp.address}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-[#94A3B8]">
                              Distance: {comp.distance}
                            </div>
                          </div>
                          <div className="text-lg font-semibold text-gray-900 dark:text-[#F1F5F9]">
                            {comp.price}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-sm border border-gray-200 dark:border-[#1E293B] p-12 text-center">
                  <DollarSign className="w-16 h-16 text-gray-400 dark:text-[#64748B] mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-[#F1F5F9] mb-2">
                    Ready for AI Valuation
                  </h3>
                  <p className="text-gray-600 dark:text-[#94A3B8]">
                    Select a property and click "Get AI Valuation" to see detailed analysis
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ValuationPage;