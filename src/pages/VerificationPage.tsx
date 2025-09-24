import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, XCircle } from 'lucide-react';

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
    <div className="w-full min-h-screen bg-[#0B0B0F] text-[#F1F5F9] px-4 md:px-12 py-20">
      {/* Page Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
        <span className="bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00FFFF] text-transparent bg-clip-text">
          Verify Your Property
        </span>
      </h1>

      {/* Verification Form */}
      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-xl mx-auto bg-[#111827] p-8 rounded-xl border border-[#1E293B] shadow-lg"
      >
        {/* Property ID Input */}
        <div className="mb-6">
          <label htmlFor="propertyId" className="block text-[#F1F5F9] font-medium mb-2">
            Property ID
          </label>
          <input
            type="text"
            id="propertyId"
            value={propertyId}
            onChange={(e) => setPropertyId(e.target.value)}
            placeholder="Enter your property ID (e.g., PROP3-2024-001)"
            className="block w-full bg-[#0B0B0F] border border-[#1E293B] text-[#F1F5F9] rounded-lg px-4 py-3 focus:outline-none focus:border-[#9945FF] transition-colors placeholder-[#64748B]"
          />
        </div>

        {/* File Upload */}
        <div className="mb-6">
          <label htmlFor="documents" className="block text-[#F1F5F9] font-medium mb-2">
            Upload Verification Documents
          </label>
          <div className="relative">
            <input
              type="file"
              id="documents"
              onChange={handleFileChange}
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              className="block w-full text-[#F1F5F9] bg-[#0B0B0F] border border-[#1E293B] rounded-lg px-4 py-3 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-gradient-to-r file:from-[#9945FF] file:to-[#14F195] file:text-[#0B0B0F] hover:file:scale-105 file:transition-transform cursor-pointer"
            />
            <div className="flex items-center mt-2 text-sm text-[#94A3B8]">
              <FileText size={16} className="mr-2" />
              {selectedFile ? (
                <span className="text-[#14F195]">Selected: {selectedFile.name}</span>
              ) : (
                <span>Accepted formats: PDF, JPG, PNG, DOC, DOCX</span>
              )}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mb-6">
          <label htmlFor="additionalInfo" className="block text-[#F1F5F9] font-medium mb-2">
            Additional Information (Optional)
          </label>
          <textarea
            id="additionalInfo"
            rows={4}
            placeholder="Provide any additional details about your property verification request..."
            className="block w-full bg-[#0B0B0F] border border-[#1E293B] text-[#F1F5F9] rounded-lg px-4 py-3 focus:outline-none focus:border-[#9945FF] transition-colors placeholder-[#64748B] resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-gradient-to-r from-[#9945FF] to-[#14F195] text-[#0B0B0F] font-semibold px-4 py-3 hover:scale-105 transition duration-300 flex items-center justify-center gap-2 shadow-lg"
        >
          <Upload size={20} />
          Verify Property
        </button>

        {/* Form Requirements */}
        <div className="mt-6 p-4 bg-[#0B0B0F] rounded-lg border border-[#1E293B]">
          <h4 className="text-[#F1F5F9] font-medium mb-2">Required Documents:</h4>
          <ul className="text-sm text-[#94A3B8] space-y-1">
            <li>• Property deed or title document</li>
            <li>• Government-issued property certificate</li>
            <li>• Recent property survey report</li>
            <li>• Valid identification document</li>
          </ul>
        </div>
      </form>

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
      <div className="w-full max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00FFFF] text-transparent bg-clip-text">
            Verification Process
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center p-6 rounded-xl bg-[#111827] border border-[#1E293B]">
            <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-[#9945FF] to-[#14F195] flex items-center justify-center text-[#0B0B0F] font-bold text-xl mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Submit Documents</h3>
            <p className="text-[#94A3B8] text-sm">
              Upload your property documents and provide necessary information
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center p-6 rounded-xl bg-[#111827] border border-[#1E293B]">
            <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-[#14F195] to-[#00FFFF] flex items-center justify-center text-[#0B0B0F] font-bold text-xl mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Review Process</h3>
            <p className="text-[#94A3B8] text-sm">
              Our experts review your documents and verify authenticity
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center p-6 rounded-xl bg-[#111827] border border-[#1E293B]">
            <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-[#9945FF] to-[#00FFFF] flex items-center justify-center text-[#0B0B0F] font-bold text-xl mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Verified</h3>
            <p className="text-[#94A3B8] text-sm">
              Receive verification status and unlock tokenization features
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;