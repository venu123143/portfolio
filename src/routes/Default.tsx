import React from 'react';
import { HomeIcon, ArrowLeft } from 'lucide-react';

const Default = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col items-center justify-center p-4">
      {/* Main Container */}
      <div className="max-w-md w-full">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-1 transition-all duration-300">
          {/* Home Icon Container */}
          <div className="mb-6 relative">
            <div className="absolute inset-0 bg-indigo-500 rounded-full blur-lg opacity-20 animate-pulse"></div>
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-full w-16 h-16 flex items-center justify-center relative">
              <HomeIcon className="w-8 h-8 text-white animate-float" />
            </div>
          </div>

          {/* Text Content */}
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Came to wrong place ?
          </h1>
          <p className="text-gray-600 mb-6">
            I'm Available for freelancing work
          </p>

          {/* Back Button */}
          <a
            href="/"
            className="group flex items-center gap-2 w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium 
                     hover:from-indigo-600 hover:to-purple-700 transform transition-all duration-300 
                     hover:shadow-lg hover:shadow-indigo-200 active:scale-95"
          >
            <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Homepage
          </a>

          {/* Decorative Elements */}
          <div className="mt-8 flex justify-between items-center opacity-50">
            <svg className="w-24 h-1">
              <path
                d="M0 0.5C8 0.5 8 2.5 16 2.5S24 0.5 32 0.5s8 2 16 2 8-2 16-2 8 2 16 2 8-2 16-2"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                className="text-gray-300"
              />
            </svg>
            <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
            <svg className="w-24 h-1">
              <path
                d="M0 0.5C8 0.5 8 2.5 16 2.5S24 0.5 32 0.5s8 2 16 2 8-2 16-2 8 2 16 2 8-2 16-2"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                className="text-gray-300"
              />
            </svg>
          </div>
        </div>

        {/* Subtle Footer */}
        <div className="text-center mt-6 text-gray-500 text-sm">
          Thanks for visiting! Hope to see you again soon.
        </div>
      </div>
    </div>
  );
};

export default React.memo(Default);