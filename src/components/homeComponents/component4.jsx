import React from 'react';

const Component4 = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6">
      {/* Title */}
      <h1 className="text-center text-3xl font-bold mb-6">What We Will Do</h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Column 1: Two rows */}
        <div className="flex flex-col gap-6"> {/* Increased gap here */}
          <div className="aspect-w-16 aspect-h-12 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden"> {/* Increased height */}
            <img
              src="/branding.jpg"
              alt="Brand"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="aspect-w-16 aspect-h-12 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">  {/* Increased height */}
            <img
              src="/socialmedia.jpg"
              alt="Social Media"
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* Column 2: Three rows */}
        <div className="flex flex-col gap-4">
          <div className="aspect-w-16 aspect-h-9 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="/PERFORMANCEMARKETING.png"
              alt="Performance Marketing"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="aspect-w-16 aspect-h-9 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="/brand.jpg"
              alt="Brand"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="aspect-w-16 aspect-h-9 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="/SOCIALMEDIAMANAGEMENT.png"
              alt="Social Media Management"
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* Column 3: Two rows */}
        <div className="flex flex-col gap-6"> {/* Increased gap here */}
          <div className="aspect-w-16 aspect-h-12 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden"> {/* Increased height */}
            <img
              src="/WEBSITEDEVELOPMENT.jpg"
              alt="Website Development"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="aspect-w-16 aspect-h-12 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden"> {/* Increased height */}
            <img
              src="/Influencer-Marketing.jpg"
              alt="Influencer Marketing"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Call to Action Button */}
      <div className="mt-6 flex justify-center">
        <button className="bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition-colors">
          Explore All
        </button>
      </div>
    </div>
  );
};

export default Component4;
