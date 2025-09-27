import React from 'react';
import { Shield, Users, Globe, Award, Heart, Zap, Lock } from 'lucide-react';
import { LandingNavigation } from '../components/LandingNavigation';
import { CounterAnimation } from '../components/CounterAnimation';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 glow-bg">
      <LandingNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8 fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              About Prop3
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              We're revolutionizing property ownership through blockchain technology, making asset registration secure, transparent, and accessible to everyone.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 fade-in-up">
              <h2 className="text-4xl font-bold text-white">Our Mission</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                To eliminate property ownership disputes and fraud by providing immutable, blockchain-based proof of ownership. We believe everyone deserves secure property rights.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Through cutting-edge technology and user-friendly design, we're making property registration as simple as sending an email, while maintaining the highest security standards.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-center space-y-4">
                <div className="text-3xl font-bold text-blue-400">
                  <CounterAnimation end={12500} suffix="+" />
                </div>
                <p className="text-slate-300">Assets Secured</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-3xl font-bold text-green-400">
                  <CounterAnimation end={99.9} suffix="%" />
                </div>
                <p className="text-slate-300">Success Rate</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-3xl font-bold text-purple-400">
                  24/7
                </div>
                <p className="text-slate-300">Support</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-3xl font-bold text-orange-400">
                  <CounterAnimation end={8200} suffix="+" />
                </div>
                <p className="text-slate-300">Happy Users</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              These principles guide everything we do at Prop3
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="tilt-card bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center fade-in-up hover:border-blue-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Security First</h3>
              <p className="text-slate-300 leading-relaxed">
                We prioritize the security of your property data above all else, using military-grade encryption and blockchain technology.
              </p>
            </div>
            
            <div className="tilt-card bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center fade-in-up hover:border-green-500/30 transition-all duration-300" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">People First</h3>
              <p className="text-slate-300 leading-relaxed">
                Every feature we build is designed with our users in mind, ensuring simplicity without compromising functionality.
              </p>
            </div>
            
            <div className="tilt-card bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center fade-in-up hover:border-purple-500/30 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-slate-300 leading-relaxed">
                We continuously push the boundaries of what's possible, leveraging cutting-edge technology to solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-6">Leadership Team</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Meet the experts behind Prop3's innovative technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="tilt-card bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center fade-in-up hover:border-blue-500/30 transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">AO</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Adebayo Ogundimu</h3>
              <p className="text-blue-400 mb-4">CEO & Founder</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Former blockchain architect with 10+ years in fintech. Passionate about democratizing property ownership in Africa.
              </p>
            </div>
            
            <div className="tilt-card bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center fade-in-up hover:border-green-500/30 transition-all duration-300" style={{ animationDelay: '0.1s' }}>
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">FK</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fatima Kano</h3>
              <p className="text-green-400 mb-4">CTO</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                AI and blockchain expert. Led engineering teams at major tech companies before joining Prop3's mission.
              </p>
            </div>
            
            <div className="tilt-card bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center fade-in-up hover:border-purple-500/30 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">MC</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Michael Chen</h3>
              <p className="text-purple-400 mb-4">Head of Product</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Product strategist with deep expertise in user experience design and blockchain applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;