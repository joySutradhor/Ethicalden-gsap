'use client'
import { motion } from 'framer-motion';
import { FiFileText, FiCode, FiClock, FiImage, FiDownload, FiEdit2 } from 'react-icons/fi';

const defaultProjectDetails = {
  service: "Web Development",
  description: "This is a sample project description. It will be replaced with real data from the API later.\n\nAdditional details about the project goals and requirements can go here.",
  technicalRequirements: "React.js\nNode.js backend\nMongoDB database\nResponsive design\nAPI integration",
  timeline: "3-6 months development\n2 weeks for testing\nLaunch by December 2023",
  assets: [
    { name: "design-specs.pdf", size: 2456 },
    { name: "wireframes.png", size: 1843 },
    { name: "brand-guidelines.pdf", size: 3210 }
  ],
  sketch: "https://example.com/sketch-placeholder.jpg"
};

const UserDashboard = ({ projectDetails = defaultProjectDetails }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0f0f0f] text-gray-100 px-4 py-6 sm:p-6"
    >
      {/* Dashboard Header - Responsive Layout */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-6 sm:mb-8">
          <div className="w-full sm:w-auto">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#09e5e5] to-[#a8ff57] mb-1 sm:mb-2">
              {projectDetails.service} Dashboard
            </h1>
            <p className="text-sm sm:text-base text-gray-400">Review your project details and assets</p>
          </div>
          
        </div>

        {/* Main Content Grid - Responsive Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Left Column - Project Details (Full width on mobile, 2/3 on desktop) */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Project Overview Card */}
            <div className="bg-[#1a1a1a]/90 backdrop-blur-sm border border-[#a8ff57]/20 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg shadow-[#09e5e5]/5">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#09e5e5] mb-3 sm:mb-4">Project Overview</h2>
              
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-medium text-gray-300 mb-2 sm:mb-3 flex items-center gap-1 sm:gap-2">
                  <FiFileText className="text-[#a8ff57] text-sm sm:text-base" /> 
                  <span>Description</span>
                </h3>
                <div className="bg-[#2a2a2a]/70 p-3 sm:p-4 rounded-lg border border-gray-800">
                  <p className="text-gray-300 whitespace-pre-line text-sm sm:text-base">
                    {projectDetails.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-gray-300 mb-2 sm:mb-3 flex items-center gap-1 sm:gap-2">
                    <FiCode className="text-[#a8ff57] text-sm sm:text-base" /> 
                    <span>Technical Requirements</span>
                  </h3>
                  <div className="bg-[#2a2a2a]/70 p-3 sm:p-4 rounded-lg border border-gray-800 h-auto">
                    <p className="text-gray-300 whitespace-pre-line text-sm sm:text-base">
                      {projectDetails.technicalRequirements}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-medium text-gray-300 mb-2 sm:mb-3 flex items-center gap-1 sm:gap-2">
                    <FiClock className="text-[#a8ff57] text-sm sm:text-base" /> 
                    <span>Timeline</span>
                  </h3>
                  <div className="bg-[#2a2a2a]/70 p-3 sm:p-4 rounded-lg border border-gray-800 h-auto">
                    <p className="text-gray-300 whitespace-pre-line text-sm sm:text-base">
                      {projectDetails.timeline}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Whiteboard Sketch Preview */}
            {projectDetails.sketch && (
              <div className="bg-[#1a1a1a]/90 backdrop-blur-sm border border-[#a8ff57]/20 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg shadow-[#09e5e5]/5">
                <h2 className="text-xl sm:text-2xl font-semibold text-[#a8ff57] mb-3 sm:mb-4">Your Whiteboard Sketch</h2>
                <div className="bg-[#2a2a2a] rounded-lg p-3 sm:p-4 border border-gray-800">
                  <div className="w-full h-48 sm:h-64 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded border border-gray-700 flex items-center justify-center text-gray-500 text-sm sm:text-base">
                    [Sketch Preview Placeholder]
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Assets (Full width on mobile, 1/3 on desktop) */}
          <div className="space-y-4 sm:space-y-6">
            {/* Uploaded Files Card */}
            <div className="bg-[#1a1a1a]/90 backdrop-blur-sm border border-[#09e5e5]/20 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg shadow-[#09e5e5]/5">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#09e5e5] mb-3 sm:mb-4 flex items-center gap-1 sm:gap-2">
                <FiImage className="text-sm sm:text-base" /> 
                <span>Project Assets</span>
              </h2>

              <div className="space-y-2 sm:space-y-3">
                {projectDetails.assets.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-[#2a2a2a]/70 p-2 sm:p-3 rounded-lg border border-gray-800 hover:border-[#a8ff57]/30 transition-colors">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <div className="bg-[#09e5e5]/10 p-1.5 sm:p-2 rounded text-[#09e5e5]">
                        <FiFileText className="text-sm sm:text-base" />
                      </div>
                      <div className="truncate">
                        <p className="font-medium truncate text-sm sm:text-base">{file.name}</p>
                        <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(1)} KB</p>
                      </div>
                    </div>
                    <button className="text-[#a8ff57] hover:text-[#09e5e5] transition-colors p-1 sm:p-2">
                      <FiDownload className="text-sm sm:text-base" />
                    </button>
                  </div>
                ))}
              </div>

            </div>

            {/* Project Status Card */}
            <div className="bg-[#1a1a1a]/90 backdrop-blur-sm border border-[#a8ff57]/20 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg shadow-[#09e5e5]/5">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#a8ff57] mb-3 sm:mb-4">Project Status</h2>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <div className="flex justify-between text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
                    <span>Development Progress</span>
                    <span>25%</span>
                  </div>
                  <div className="w-full bg-[#2a2a2a] rounded-full h-2 sm:h-2.5">
                    <div 
                      className="bg-gradient-to-r from-[#09e5e5] to-[#a8ff57] h-full rounded-full" 
                      style={{ width: '25%' }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div className="bg-[#2a2a2a]/70 p-2 sm:p-3 rounded-lg border border-gray-800">
                    <p className="text-gray-400 text-xs sm:text-sm">Current Phase</p>
                    <p className="text-[#a8ff57] font-medium text-sm sm:text-base">Planning</p>
                  </div>
                  <div className="bg-[#2a2a2a]/70 p-2 sm:p-3 rounded-lg border border-gray-800">
                    <p className="text-gray-400 text-xs sm:text-sm">Last Updated</p>
                    <p className="text-[#09e5e5] font-medium text-sm sm:text-base">Today</p>
                  </div>
                </div>

                <button className="w-full py-2 sm:py-2.5 rounded-lg bg-gradient-to-r from-[#09e5e5] to-[#a8ff57] text-black font-medium hover:opacity-90 transition-all text-sm sm:text-base">
                  View Project Timeline
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UserDashboard;