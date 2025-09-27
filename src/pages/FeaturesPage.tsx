import React from 'react';
import { 
  Shield, 
  FileText, 
  DollarSign, 
  MapPin, 
  Smartphone, 
  Clock,
  CheckCircle,
  Zap,
  Building,
  Lock
} from 'lucide-react';
import LandingNavigation from '../components/LandingNavigation';
import Footer from '../components/Footer';

const FeaturesPage: React.FC = () => {
  const features = [
    {
      icon: Building,
      title: 'Asset Registry',
      description: 'Register properties, land, vehicles, and valuable assets with immutable blockchain certificates',
      benefits: [
        'Tamper-proof ownership records',
        'Cryptographic security',
        'Decentralized verification',
        'Permanent data storage'
      ]
    },
    {
      icon: FileText,
      title: 'Digital Registry',
      description: 'Comprehensive digital property documentation and management system',
      benefits: [
        'Upload and store documents securely',
        'Organize property portfolios',
        'Access documents anywhere',
        'Share with authorized parties'
      ]
    },
    {
      icon: DollarSign,
      title: 'AI Valuation',
      description: 'Real-time property valuations using advanced AI algorithms',
      benefits: [
        'Market-based pricing analysis',
        'Comparable property data',
        'Trend forecasting',
        'Investment insights'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Legal Verification',
      description: 'Professional verification by legal experts and government agencies',
      benefits: [
        'Expert document review',
        'Government database checks',
        'Legal compliance verification',
        'Dispute prevention'
      ]
    },
    {
      icon: MapPin,
      title: 'Location Intelligence',
      description: 'Advanced mapping and location-based property insights',
      benefits: [
        'Interactive property maps',
        'Neighborhood analysis',
        'Development tracking',
        'Location scoring'
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Access',
      description: 'Full-featured mobile app for property management on the go',
      benefits: [
        'iOS and Android apps',
        'Offline document access',
        'Push notifications',
        'Mobile document scanning'
      ]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Register',
      description: 'Upload your property documents and create your digital record',
      icon: FileText
    },
    {
      step: 2,
      title: 'Verify',
      description: 'Our experts verify your documents and legal ownership',
      icon: Shield
    },
    {
      step: 3,
      title: 'Secure',
      description: 'Your property is secured on the blockchain with an NFT certificate',
      icon: CheckCircle
    },
    {
      step: 4,
      title: 'Manage',
      description: 'Access, share, and manage your property portfolio anytime',
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B0F]">
      <LandingNavigation />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-[#F1F5F9] mb-6">
              Powerful <span className="bg-gradient-to-r from-[#9945FF] to-[#14F195] text-transparent bg-clip-text">Features</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-[#94A3B8] leading-relaxed">
              Discover how Prop3's comprehensive suite of features makes property ownership 
              secure, transparent, and accessible for everyone in Nigeria.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white dark:bg-[#111827] p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-[#1E293B] hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#9945FF] to-[#14F195] rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-[#F1F5F9] mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-[#94A3B8] mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600 dark:text-[#94A3B8]">
                        <div className="w-1.5 h-1.5 bg-[#14F195] rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gray-50 dark:bg-[#111827] py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-[#F1F5F9] mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-600 dark:text-[#94A3B8]">
                Simple steps to secure your property on the blockchain
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#9945FF] to-[#14F195] rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-[#111827] rounded-full flex items-center justify-center border-2 border-[#14F195] text-[#14F195] font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-[#94A3B8]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-[#F1F5F9] mb-6">
                  Why Choose Prop3?
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-[#F1F5F9] mb-1">
                        Eliminate Land Disputes
                      </h3>
                      <p className="text-gray-600 dark:text-[#94A3B8]">
                        Immutable blockchain records prevent ownership disputes and fraud
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-[#F1F5F9] mb-1">
                        Instant Verification
                      </h3>
                      <p className="text-gray-600 dark:text-[#94A3B8]">
                        Verify property ownership instantly with blockchain technology
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-[#F1F5F9] mb-1">
                        Increase Property Value
                      </h3>
                      <p className="text-gray-600 dark:text-[#94A3B8]">
                        Verified properties command higher market values and trust
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-[#F1F5F9] mb-1">
                        Legal Protection
                      </h3>
                      <p className="text-gray-600 dark:text-[#94A3B8]">
                        Government-recognized verification provides legal protection
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#9945FF]/10 to-[#14F195]/10 p-8 rounded-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9] mb-4">
                    Platform Statistics
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#9945FF] mb-2">10,000+</div>
                    <div className="text-sm text-gray-600 dark:text-[#94A3B8]">Properties Registered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#14F195] mb-2">5,000+</div>
                    <div className="text-sm text-gray-600 dark:text-[#94A3B8]">Verified Owners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#00FFFF] mb-2">₦50B+</div>
                    <div className="text-sm text-gray-600 dark:text-[#94A3B8]">Assets Secured</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#9945FF] mb-2">99.9%</div>
                    <div className="text-sm text-gray-600 dark:text-[#94A3B8]">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#9945FF] to-[#14F195] rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of property owners who have secured their assets with Prop3.
            </p>
            <button className="px-8 py-3 bg-white text-[#9945FF] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Start Your Free Trial
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FeaturesPage;