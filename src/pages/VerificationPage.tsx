import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, XCircle, ArrowLeft, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import DashboardNavigation from '../components/DashboardNavigation';

const VerificationPage: React.FC = () => {
  const [propertyId, setPropertyId] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showMessage, setShowMessage] = useState<'success' | 'error' | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission with dummy logic
    if (propertyId.trim() && selectedFile) {
      setShowMessage('success');
    } else {
      setShowMessage('error');
    }

    // Clear message after 5 seconds
    setTimeout(() => {
      setShowMessage(null);
    }, 5000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0B0B0F]">
      <DashboardNavigation />
      
      <main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto page-transition">
          {/* Back to Dashboard Link */}
          <Link 
            to="/dashboard" 
            className="inline-flex items-center gap-2 text-gray-600 dark:text-[#64748B] hover:text-gray-900 dark:hover:text-[#F1F5F9] text-sm mb-6 transition-colors duration-300 nav-link animate-fadeInUp"
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </Link>

      {/* Page Heading */}
          <div className="mb-8 animate-fadeInUp" style={{animationDelay: '0.1s'}}>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-[#F1F5F9] mb-2">
              Property Verification
            </h1>
            <p className="text-gray-600 dark:text-[#94A3B8]">
              Submit your property for professional verification and legal compliance
            </p>
          </div>

      {/* Verification Form */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Verification Form */}
            <div className="lg:col-span-2">
              <form 
                onSubmit={handleSubmit}
                className="bg-white dark:bg-[#111827] p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-[#1E293B] animate-fadeInUp" 
                style={{animationDelay: '0.2s'}}
              >
        {/* Property ID Input */}
        <div className="mb-6">
                  <label htmlFor="propertyId" className="block text-gray-700 dark:text-[#F1F5F9] font-medium mb-2">
            Property ID
          </label>
          <input
            type="text"
            id="propertyId"
            value={propertyId}
            onChange={(e) => setPropertyId(e.target.value)}
            placeholder="Enter your property ID (e.g., PROP3-2024-001)"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#1E293B] bg-white dark:bg-[#0B0B0F] text-gray-900 dark:text-[#F1F5F9] focus:ring-2 focus:ring-[#9945FF] focus:border-transparent transition-colors duration-200 placeholder-gray-500 dark:placeholder-[#64748B]"
          />
        </div>

        {/* File Upload */}
        <div className="mb-6">
                  <label htmlFor="documents" className="block text-gray-700 dark:text-[#F1F5F9] font-medium mb-2">
            Upload Verification Documents
          </label>
                  <div className="border-2 border-dashed border-gray-300 dark:border-[#1E293B] rounded-lg p-8 hover:border-[#9945FF] transition-colors duration-300">
            <input
              type="file"
              id="documents"
              onChange={handleFileChange}
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      className="hidden"
            />
                    <label
                      htmlFor="documents"
                      className="cursor-pointer flex flex-col items-center"
                    >
                      <Upload className="w-12 h-12 text-gray-400 dark:text-[#64748B] mb-4" />
                      <span className="text-gray-600 dark:text-[#94A3B8] text-center">
                        Click to upload or drag and drop
                        <br />
                        <span className="text-sm">PDF, JPG, PNG, DOC, DOCX (max 10MB each)</span>
                      </span>
                    </label>
                  </div>
                  
                  {selectedFile && (
                    <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <div className="flex items-center text-sm text-green-800 dark:text-green-400">
                        <FileText size={16} className="mr-2" />
              {selectedFile ? (
                        <span>Selected: {selectedFile.name}</span>
                      ) : null}
                      </div>
                    </div>
                  )}
        </div>

        {/* Additional Information */}
        <div className="mb-6">
                  <label htmlFor="additionalInfo" className="block text-gray-700 dark:text-[#F1F5F9] font-medium mb-2">
            Additional Information (Optional)
          </label>
          <textarea
            id="additionalInfo"
            rows={4}
            placeholder="Provide any additional details about your property verification request..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#1E293B] bg-white dark:bg-[#0B0B0F] text-gray-900 dark:text-[#F1F5F9] focus:ring-2 focus:ring-[#9945FF] focus:border-transparent transition-colors duration-200 resize-none placeholder-gray-500 dark:placeholder-[#64748B]"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white font-semibold px-4 py-3 btn-premium shadow-lg flex items-center justify-center gap-2"
        >
          <Upload size={20} />
          Verify Property
        </button>

        {/* Form Requirements */}
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="text-blue-900 dark:text-blue-400 font-medium mb-2">Required Documents:</h4>
                  <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
            <li>• Property deed or title document</li>
            <li>• Government-issued property certificate</li>
            <li>• Recent property survey report</li>
            <li>• Valid identification document</li>
          </ul>
        </div>
              </form>
            </div>

            {/* Verification Info Sidebar */}
            <div className="space-y-6">
              {/* Status Card */}
              <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-sm border border-gray-200 dark:border-[#1E293B] p-6 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-[#F1F5F9] mb-4">
                  Verification Status
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-[#F1F5F9]">Pending Submission</p>
                      <p className="text-xs text-gray-500 dark:text-[#64748B]">Submit documents to begin</p>
                    </div>
                  </div>
                </div>
              </div>
      {/* Success/Error Message */}
      {showMessage && (
        <div className="w-full max-w-xl mx-auto mt-6">
          {showMessage === 'success' ? (
            <div className="flex items-center justify-center gap-2 text-center p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <CheckCircle size={20} className="text-green-400" />
              <span className="text-green-400 font-medium">
                ✅ Property verification submitted successfully. You will receive an email confirmation shortly.
              </span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2 text-center p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <XCircle size={20} className="text-red-400" />
              <span className="text-red-400 font-medium">
                ❌ Verification failed. Please ensure all required fields are filled and try again.
              </span>
            </div>
          )}
        </div>
      )}

      {/* Process Information */}
          <div className="mt-16 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-[#F1F5F9] mb-4">
                Verification Process
              </h2>
            </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
            <div className="text-center p-6 rounded-2xl bg-white dark:bg-[#111827] border border-gray-200 dark:border-[#1E293B] shadow-sm card-tilt">
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-[#9945FF] to-[#14F195] flex items-center justify-center text-white font-bold text-xl mb-4">
              1
            </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2">Submit Documents</h3>
              <p className="text-gray-600 dark:text-[#94A3B8] text-sm">
              Upload your property documents and provide necessary information
            </p>
          </div>

          {/* Step 2 */}
            <div className="text-center p-6 rounded-2xl bg-white dark:bg-[#111827] border border-gray-200 dark:border-[#1E293B] shadow-sm card-tilt">
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-[#14F195] to-[#00FFFF] flex items-center justify-center text-white font-bold text-xl mb-4">
              2
            </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2">Review Process</h3>
              <p className="text-gray-600 dark:text-[#94A3B8] text-sm">
              Our experts review your documents and verify authenticity
            </p>
          </div>

          {/* Step 3 */}
            <div className="text-center p-6 rounded-2xl bg-white dark:bg-[#111827] border border-gray-200 dark:border-[#1E293B] shadow-sm card-tilt">
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-[#9945FF] to-[#00FFFF] flex items-center justify-center text-white font-bold text-xl mb-4">
              3
            </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2">Get Verified</h3>
              <p className="text-gray-600 dark:text-[#94A3B8] text-sm">
              Receive verification status and unlock tokenization features
            </p>
          </div>
        </div>
      </div>
        </div>
      </main>
    </div>
  );
};

export default VerificationPage;