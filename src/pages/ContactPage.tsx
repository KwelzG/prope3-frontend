import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import LandingNavigation from '../components/LandingNavigation';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B0F]">
      <LandingNavigation />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-[#F1F5F9] mb-6">
              Get in <span className="bg-gradient-to-r from-[#9945FF] to-[#14F195] text-transparent bg-clip-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-[#94A3B8] leading-relaxed">
              Have questions about Prop3? We're here to help you secure your property 
              and navigate the future of land ownership in Nigeria.
            </p>
          </div>
        </section>

        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-[#9945FF] to-[#14F195] p-8 rounded-2xl text-white">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <p className="mb-8 text-white/90">
                    Reach out to us through any of these channels. We're always ready to help.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-white/80">hello@prop3.ng</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-medium">Phone</div>
                        <div className="text-white/80">+234 800 PROP3 (77673)</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-medium">Office</div>
                        <div className="text-white/80">
                          Victoria Island, Lagos<br />
                          Nigeria
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/20">
                    <h3 className="font-semibold mb-4">Business Hours</h3>
                    <div className="space-y-2 text-sm text-white/80">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-[#111827] p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-[#1E293B]">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9] mb-6">
                    Send us a Message
                  </h2>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600 dark:text-[#94A3B8]">
                        Thank you for contacting us. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-[#F1F5F9] mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#1E293B] bg-white dark:bg-[#0B0B0F] text-gray-900 dark:text-[#F1F5F9] focus:ring-2 focus:ring-[#9945FF] focus:border-transparent transition-colors duration-200"
                            placeholder="Enter your full name"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-[#F1F5F9] mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#1E293B] bg-white dark:bg-[#0B0B0F] text-gray-900 dark:text-[#F1F5F9] focus:ring-2 focus:ring-[#9945FF] focus:border-transparent transition-colors duration-200"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-[#F1F5F9] mb-2">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#1E293B] bg-white dark:bg-[#0B0B0F] text-gray-900 dark:text-[#F1F5F9] focus:ring-2 focus:ring-[#9945FF] focus:border-transparent transition-colors duration-200"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="support">Technical Support</option>
                          <option value="partnership">Partnership</option>
                          <option value="legal">Legal Questions</option>
                          <option value="pricing">Pricing Information</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-[#F1F5F9] mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#1E293B] bg-white dark:bg-[#0B0B0F] text-gray-900 dark:text-[#F1F5F9] focus:ring-2 focus:ring-[#9945FF] focus:border-transparent transition-colors duration-200 resize-none"
                          placeholder="Tell us how we can help you..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-200 flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={20} className="mr-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="px-4 sm:px-6 lg:px-8 mt-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-[#F1F5F9] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 dark:text-[#94A3B8]">
                Quick answers to common questions about Prop3
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How secure is my property data on Prop3?",
                  answer: "Your property data is secured using military-grade encryption and stored on the blockchain, making it tamper-proof and permanently accessible."
                },
                {
                  question: "What documents do I need to register my property?",
                  answer: "You'll need your Certificate of Occupancy, Deed of Assignment, Survey Plan, and other relevant ownership documents."
                },
                {
                  question: "How long does the verification process take?",
                  answer: "Our verification process typically takes 3-5 business days, depending on the complexity of your property documentation."
                },
                {
                  question: "Can I access my property records offline?",
                  answer: "Yes, our mobile app allows you to download and access your property documents offline for your convenience."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white dark:bg-[#111827] p-6 rounded-lg border border-gray-200 dark:border-[#1E293B]">
                  <h3 className="font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-[#94A3B8]">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;