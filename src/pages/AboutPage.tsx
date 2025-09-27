import React from 'react';
import { Shield, Users, Globe, Award } from 'lucide-react';
import LandingNavigation from '../components/LandingNavigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B0F]">
      <LandingNavigation />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-[#F1F5F9] mb-6">
              About <span className="bg-gradient-to-r from-[#9945FF] to-[#14F195] text-transparent bg-clip-text">Prop3</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-[#94A3B8] leading-relaxed">
              We're revolutionizing property ownership in Nigeria through blockchain technology, 
              making land registration secure, transparent, and accessible to everyone.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-[#F1F5F9] mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 dark:text-[#94A3B8] mb-6 leading-relaxed">
                  To eliminate land disputes, prevent fraud, and create a transparent property 
                  ecosystem in Nigeria using cutting-edge blockchain technology.
                </p>
                <p className="text-lg text-gray-600 dark:text-[#94A3B8] leading-relaxed">
                  We believe every Nigerian should have secure, verifiable proof of their 
                  property ownership that can never be lost, stolen, or disputed.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#9945FF]/10 to-[#14F195]/10 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#9945FF] mb-2">10K+</div>
                    <div className="text-sm text-gray-600 dark:text-[#94A3B8]">Properties Secured</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#14F195] mb-2">36</div>
                    <div className="text-sm text-gray-600 dark:text-[#94A3B8]">States Covered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#00FFFF] mb-2">99.9%</div>
                    <div className="text-sm text-gray-600 dark:text-[#94A3B8]">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#9945FF] mb-2">24/7</div>
                    <div className="text-sm text-gray-600 dark:text-[#94A3B8]">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gray-50 dark:bg-[#111827] py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-[#F1F5F9] mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 dark:text-[#94A3B8]">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#9945FF] to-[#14F195] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2">
                  Security First
                </h3>
                <p className="text-gray-600 dark:text-[#94A3B8]">
                  Your property data is protected by military-grade encryption and blockchain technology.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#14F195] to-[#00FFFF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2">
                  User-Centric
                </h3>
                <p className="text-gray-600 dark:text-[#94A3B8]">
                  We design every feature with our users' needs and experiences at the forefront.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#9945FF] to-[#00FFFF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2">
                  Transparency
                </h3>
                <p className="text-gray-600 dark:text-[#94A3B8]">
                  Open, honest communication and transparent processes in everything we do.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#14F195] to-[#9945FF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2">
                  Excellence
                </h3>
                <p className="text-gray-600 dark:text-[#94A3B8]">
                  We strive for excellence in every aspect of our platform and service delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-[#F1F5F9] mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600 dark:text-[#94A3B8]">
                Passionate experts working to secure Nigeria's property future
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((member) => (
                <div key={member} className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-[#9945FF] to-[#14F195] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    T{member}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2">
                    Team Member {member}
                  </h3>
                  <p className="text-gray-600 dark:text-[#94A3B8] mb-2">
                    {member === 1 ? 'CEO & Founder' : member === 2 ? 'CTO' : 'Head of Legal'}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-[#64748B]">
                    Experienced professional with deep expertise in blockchain technology and Nigerian property law.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#9945FF] to-[#14F195] rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Secure Your Property?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of property owners who trust Prop3 with their most valuable assets.
            </p>
            <button className="px-8 py-3 bg-white text-[#9945FF] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Get Started Today
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;