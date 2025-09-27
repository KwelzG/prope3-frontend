import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, MapPin, TrendingUp, Users, CheckCircle, Star, Building, FileText, Zap } from 'lucide-react';
import { LandingNavigation } from '../components/LandingNavigation';
import { CounterAnimation } from '../components/CounterAnimation';
import { MouseTrail } from '../components/MouseTrail';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 glow-bg">
      <MouseTrail />
      <LandingNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8 fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent leading-tight">
              Own Your Assets.
              <br />
              <span className="text-blue-400">Prove It Forever.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Secure your property and asset ownership with blockchain technology. Register, verify, and protect your rights with immutable digital certificates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Link 
                to="/auth" 
                className="apple-button bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-3 shimmer"
              >
                <Shield className="w-5 h-5" />
                Protect Your Assets Now
              </Link>
              
              <Link 
                to="/registry" 
                className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/5 flex items-center gap-3"
              >
                <FileText className="w-5 h-5" />
                Register Property
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2 fade-in-up">
              <div className="text-4xl md:text-5xl font-bold text-white">
                <CounterAnimation end={12500} suffix="+" className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent" />
              </div>
              <p className="text-slate-300">Assets Secured</p>
            </div>
            <div className="text-center space-y-2 fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl font-bold text-white">
                <CounterAnimation end={99.9} suffix="%" className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent" />
              </div>
              <p className="text-slate-300">Verification Rate</p>
            </div>
            <div className="text-center space-y-2 fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-bold text-white">
                <CounterAnimation end={8200} suffix="+" className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent" />
              </div>
              <p className="text-slate-300">Verified Owners</p>
            </div>
            <div className="text-center space-y-2 fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl md:text-5xl font-bold text-white">
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">24/7</span>
              </div>
              <p className="text-slate-300">Protection Active</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-32 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Complete Asset Protection
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From registration to verification, we provide end-to-end solutions for property and asset ownership security.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="tilt-card bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Asset Registry</h3>
              <p className="text-slate-300 leading-relaxed">
                Register your properties, land, and valuable assets with blockchain-backed certificates. Immutable proof of ownership that lasts forever.
              </p>
            </div>
            
            <div className="tilt-card bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10 fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart Verification</h3>
              <p className="text-slate-300 leading-relaxed">
                AI-powered verification system that validates property documents and ownership claims with institutional-grade accuracy.
              </p>
            </div>
            
            <div className="tilt-card bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Instant Valuation</h3>
              <p className="text-slate-300 leading-relaxed">
                Get accurate asset valuations using advanced AI algorithms, market data, and predictive analytics for informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Section */}
      <section className="py-32 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Property Owners Worldwide
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Join thousands of property owners who have secured their assets with Prop3's blockchain technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 fade-in-up hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-slate-300 italic">
                "Prop3 gave me complete peace of mind about my property ownership. The blockchain certificate is invaluable."
              </blockquote>
              <cite className="text-blue-400 font-semibold">- Sarah Johnson, Lagos</cite>
            </div>
            
            <div className="text-center space-y-4 fade-in-up hover:transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.1s' }}>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-slate-300 italic">
                "The verification process was seamless and the AI valuation helped me make informed decisions."
              </blockquote>
              <cite className="text-blue-400 font-semibold">- Michael Chen, Abuja</cite>
            </div>
            
            <div className="text-center space-y-4 fade-in-up hover:transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-slate-300 italic">
                "Finally, a secure way to prove property ownership. The technology is impressive and user-friendly."
              </blockquote>
              <cite className="text-blue-400 font-semibold">- Amina Kano, Kano</cite>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-32 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-6 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Secure Your Assets?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Join the future of property ownership. Get started with Prop3 today and protect your assets forever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/auth" 
              className="apple-button bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-10 py-5 rounded-2xl font-semibold text-xl flex items-center justify-center gap-3 shimmer"
            >
              <Shield className="w-6 h-6" />
              Get Started Free
            </Link>
            
            <Link 
              to="/contact" 
              className="border-2 border-white/20 hover:border-white/40 text-white px-10 py-5 rounded-2xl font-semibold text-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/5 flex items-center justify-center gap-3"
            >
              <Users className="w-6 h-6" />
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">Prop3</span>
            </div>
            
            <div className="flex space-x-8 text-slate-300">
              <Link to="/about" className="hover:text-white transition-colors">About</Link>
              <Link to="/features" className="hover:text-white transition-colors">Features</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-slate-400">
            <p>&copy; 2024 Prop3. All rights reserved. Securing property ownership with blockchain technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};