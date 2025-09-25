import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, FileText, TrendingUp, MapPin } from 'lucide-react';
import LandingNavigation from '../components/LandingNavigation';
import Footer from '../components/Footer';
import prop3Logo from '../assets/pop3-removebg-preview.png';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B0F]">
      <LandingNavigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 page-transition">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Logo */}
            <div className="mb-8 animate-fadeIn">
              <img 
                src={prop3Logo} 
                alt="Prop3 Logo" 
                className="w-24 h-24 mx-auto drop-shadow-lg animate-float"
              />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-[#F1F5F9] mb-6 leading-tight animate-fadeInUp">
              Secure Your Property.
              <br />
              <span className="bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00FFFF] text-transparent bg-clip-text">
                Prove Your Ownership.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-[#94A3B8] mb-12 max-w-4xl mx-auto leading-relaxed animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              Nigeria's first blockchain-powered land registry, verification, and valuation platform. 
              Protect your assets with immutable proof of ownership.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                to="/auth"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white font-semibold text-lg btn-premium animate-glow flex items-center space-x-2 shadow-lg animate-fadeInUp" style={{animationDelay: '0.4s'}}
              >
                <span>Get Started</span>
                <ArrowRight size={20} />
              </Link>
              
              <Link
                to="/registry"
                className="px-8 py-4 rounded-full border-2 border-gray-300 dark:border-[#1E293B] text-gray-900 dark:text-[#F1F5F9] font-semibold text-lg hover:bg-gray-50 dark:hover:bg-[#1E293B] transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fadeInUp" style={{animationDelay: '0.6s'}}
              >
                Claim Property Ownership
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center animate-fadeInUp" style={{animationDelay: '0.8s'}}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#9945FF] to-[#14F195] flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2">Blockchain Secured</h3>
                <p className="text-sm text-gray-600 dark:text-[#94A3B8]">Immutable ownership records</p>
              </div>

              <div className="text-center animate-fadeInUp" style={{animationDelay: '1.0s'}}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#14F195] to-[#00FFFF] flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2">Legal Verification</h3>
                <p className="text-sm text-gray-600 dark:text-[#94A3B8]">Government-backed validation</p>
              </div>

              <div className="text-center animate-fadeInUp" style={{animationDelay: '1.2s'}}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#9945FF] to-[#00FFFF] flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2">AI Valuation</h3>
                <p className="text-sm text-gray-600 dark:text-[#94A3B8]">Real-time property assessment</p>
              </div>

              <div className="text-center animate-fadeInUp" style={{animationDelay: '1.4s'}}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#14F195] to-[#9945FF] flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2">Nationwide Coverage</h3>
                <p className="text-sm text-gray-600 dark:text-[#94A3B8]">All 36 states + FCT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#111827] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-[#F1F5F9] mb-4">
              Why Choose Prop3?
            </h2>
            <p className="text-xl text-gray-600 dark:text-[#94A3B8] max-w-3xl mx-auto">
              Experience the future of property ownership with our comprehensive platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-[#0B0B0F] p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-[#1E293B] hover:shadow-xl transition-all duration-300 card-tilt group">
              <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-r from-[#9945FF] to-[#14F195] flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-[#F1F5F9] mb-4">
                Digital Registry
              </h3>
              <p className="text-gray-600 dark:text-[#94A3B8] leading-relaxed">
                Upload and manage your property documents in a secure, blockchain-backed registry. 
                Never lose important papers again.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0B0B0F] p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-[#1E293B] hover:shadow-xl transition-all duration-300 card-tilt group">
              <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-r from-[#14F195] to-[#00FFFF] flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-[#F1F5F9] mb-4">
                Instant Verification
              </h3>
              <p className="text-gray-600 dark:text-[#94A3B8] leading-relaxed">
                Get your property verified by legal experts and government agencies. 
                Build trust with buyers and lenders.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0B0B0F] p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-[#1E293B] hover:shadow-xl transition-all duration-300 card-tilt group">
              <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-r from-[#9945FF] to-[#00FFFF] flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-[#F1F5F9] mb-4">
                AI-Powered Valuation
              </h3>
              <p className="text-gray-600 dark:text-[#94A3B8] leading-relaxed">
                Get accurate, real-time property valuations using advanced AI algorithms 
                and market data analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00FFFF]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Property?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of property owners who trust Prop3 to protect their most valuable assets.
          </p>
          <Link
            to="/auth"
            className="inline-flex items-center px-8 py-4 rounded-full bg-white text-[#9945FF] font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl btn-premium"
          >
            <span>Start Your Journey</span>
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;