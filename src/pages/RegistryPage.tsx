import React, { useState } from 'react';
import { Upload, FileText, MapPin, Camera, Wallet, CheckCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import DashboardNavigation from '../components/DashboardNavigation';

const RegistryPage: React.FC = () => {
  const { user, connectWallet } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    propertyTitle: '',
    location: '',
    propertyType: '',
    description: '',
    documents: [] as File[],
    images: [] as File[]
  });

  const steps = [
    { id: 1, title: 'Property Details', icon: FileText },
    { id: 2, title: 'Upload Documents', icon: Upload },
    { id: 3, title: 'Add Images', icon: Camera },
    { id: 4, title: 'Connect Wallet', icon: Wallet },
    { id: 5, title: 'Complete Registration', icon: CheckCircle }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'documents' | 'images') => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setFormData(prev => ({ ...prev, [type]: [...prev[type], ...files] }));
    }
  };

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsUploading(true);
    
    // Simulate upload process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // TODO: Implement actual property registration
    console.log('Property registered:', formData);
    
    setIsUploading(false);
    setCurrentStep(5);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-[#F1F5F9] mb-2">
                Property Title
              </label>
              <input
                type="text"
                name="propertyTitle"
                value={formData.propertyTitle}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#1E293B] bg-white dark:bg-[#0B0B0F] text-gray-900 dark:text-[#F1F5F9] focus:ring-2 focus:ring-[#9945FF] focus:border-transparent"
                placeholder="Enter property title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-[#F1F5F9] mb-2">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-[#64748B]" size={20} />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-[#1E293B] bg-white dark:bg-[#0B0B0F] text-gray-900 dark:text-[#F1F5F9] focus:ring-2 focus:ring-[#9945FF] focus:border-transparent"
                  placeholder="Enter property location"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-[#F1F5F9] mb-2">
                Property Type
              </label>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#1E293B] bg-white dark:bg-[#0B0B0F] text-gray-900 dark:text-[#F1F5F9] focus:ring-2 focus:ring-[#9945FF] focus:border-transparent"
              >
                <option value="">Select property type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
                <option value="agricultural">Agricultural</option>
                <option value="mixed-use">Mixed Use</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-[#F1F5F9] mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#1E293B] bg-white dark:bg-[#0B0B0F] text-gray-900 dark:text-[#F1F5F9] focus:ring-2 focus:ring-[#9945FF] focus:border-transparent resize-none"
                placeholder="Describe your property..."
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Upload className="w-16 h-16 text-gray-400 dark:text-[#64748B] mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-[#F1F5F9] mb-2">
                Upload Property Documents
              </h3>
              <p className="text-gray-600 dark:text-[#94A3B8] mb-6">
                Upload legal documents that prove your ownership
              </p>
            </div>

            <div className="border-2 border-dashed border-gray-300 dark:border-[#1E293B] rounded-lg p-8">
              <input
                type="file"
                multiple
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                onChange={(e) => handleFileUpload(e, 'documents')}
                className="hidden"
                id="documents-upload"
              />
              <label
                htmlFor="documents-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <FileText className="w-12 h-12 text-gray-400 dark:text-[#64748B] mb-4" />
                <span className="text-gray-600 dark:text-[#94A3B8] text-center">
                  Click to upload or drag and drop
                  <br />
                  <span className="text-sm">PDF, DOC, DOCX, JPG, PNG (max 10MB each)</span>
                </span>
              </label>
            </div>

            {formData.documents.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900 dark:text-[#F1F5F9]">Uploaded Documents:</h4>
                {formData.documents.map((file, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 dark:bg-[#0B0B0F] rounded-lg">
                    <FileText className="w-5 h-5 text-gray-400 dark:text-[#64748B] mr-3" />
                    <span className="text-sm text-gray-900 dark:text-[#F1F5F9]">{file.name}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-blue-900 dark:text-blue-400 mb-2">Required Documents:</h4>
              <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
                <li>• Certificate of Occupancy (C of O)</li>
                <li>• Deed of Assignment</li>
                <li>• Survey Plan</li>
                <li>• Tax Clearance Certificate</li>
                <li>• Building Plan Approval</li>
              </ul>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Camera className="w-16 h-16 text-gray-400 dark:text-[#64748B] mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-[#F1F5F9] mb-2">
                Add Property Images
              </h3>
              <p className="text-gray-600 dark:text-[#94A3B8] mb-6">
                Upload clear photos of your property
              </p>
            </div>

            <div className="border-2 border-dashed border-gray-300 dark:border-[#1E293B] rounded-lg p-8">
              <input
                type="file"
                multiple
                accept=".jpg,.jpeg,.png"
                onChange={(e) => handleFileUpload(e, 'images')}
                className="hidden"
                id="images-upload"
              />
              <label
                htmlFor="images-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <Camera className="w-12 h-12 text-gray-400 dark:text-[#64748B] mb-4" />
                <span className="text-gray-600 dark:text-[#94A3B8] text-center">
                  Click to upload property images
                  <br />
                  <span className="text-sm">JPG, PNG (max 5MB each)</span>
                </span>
              </label>
            </div>

            {formData.images.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {formData.images.map((file, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Property ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                      {file.name}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6 text-center">
            <Wallet className="w-16 h-16 text-gray-400 dark:text-[#64748B] mx-auto" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-[#F1F5F9]">
              Connect Your Wallet
            </h3>
            <p className="text-gray-600 dark:text-[#94A3B8]">
              Connect your Solana wallet to mint your property NFT certificate
            </p>

            {user?.walletAddress ? (
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                <p className="text-green-800 dark:text-green-400 font-medium">Wallet Connected</p>
                <p className="text-sm text-green-600 dark:text-green-300 font-mono mt-1">
                  {user.walletAddress}
                </p>
              </div>
            ) : (
              <button
                onClick={connectWallet}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white font-semibold hover:opacity-90 transition-opacity duration-200"
              >
                Connect Solana Wallet
              </button>
            )}
          </div>
        );

      case 5:
        return (
          <div className="space-y-6 text-center">
            <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-[#F1F5F9]">
              Registration Complete!
            </h3>
            <p className="text-gray-600 dark:text-[#94A3B8]">
              Your property has been successfully registered on the blockchain.
              An NFT certificate has been minted to your wallet.
            </p>
            
            <div className="bg-gray-50 dark:bg-[#0B0B0F] p-6 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-[#F1F5F9] mb-4">What's Next?</h4>
              <div className="space-y-2 text-sm text-gray-600 dark:text-[#94A3B8]">
                <p>✓ Your property is now on the blockchain</p>
                <p>✓ NFT certificate has been minted</p>
                <p>✓ Verification process will begin within 24 hours</p>
                <p>✓ You'll receive email updates on verification status</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0B0B0F]">
      <DashboardNavigation />
      
      <main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-[#F1F5F9] mb-2">
              Register Your Property
            </h1>
            <p className="text-gray-600 dark:text-[#94A3B8]">
              Secure your property ownership on the blockchain
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    currentStep >= step.id
                      ? 'bg-gradient-to-r from-[#9945FF] to-[#14F195] border-transparent text-white'
                      : 'border-gray-300 dark:border-[#1E293B] text-gray-400 dark:text-[#64748B]'
                  }`}>
                    <step.icon size={20} />
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-full h-0.5 mx-2 ${
                      currentStep > step.id
                        ? 'bg-gradient-to-r from-[#9945FF] to-[#14F195]'
                        : 'bg-gray-300 dark:bg-[#1E293B]'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {steps.map((step) => (
                <div key={step.id} className="text-xs text-gray-600 dark:text-[#94A3B8] text-center">
                  {step.title}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-sm border border-gray-200 dark:border-[#1E293B] p-8">
            {renderStepContent()}

            {/* Navigation Buttons */}
            {currentStep < 5 && (
              <div className="flex justify-between mt-8">
                <button
                  onClick={handlePrevStep}
                  disabled={currentStep === 1}
                  className="px-6 py-2 rounded-lg border border-gray-300 dark:border-[#1E293B] text-gray-700 dark:text-[#F1F5F9] font-medium hover:bg-gray-50 dark:hover:bg-[#0B0B0F] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  Previous
                </button>

                {currentStep === 4 && user?.walletAddress ? (
                  <button
                    onClick={handleSubmit}
                    disabled={isUploading}
                    className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-200"
                  >
                    {isUploading ? 'Registering...' : 'Complete Registration'}
                  </button>
                ) : currentStep < 4 ? (
                  <button
                    onClick={handleNextStep}
                    className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white font-medium hover:opacity-90 transition-opacity duration-200"
                  >
                    Next
                  </button>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegistryPage;