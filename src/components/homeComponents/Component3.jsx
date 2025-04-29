import React from 'react';

const Component3 = () => {
  return (
    <section className="relative bg-[#f6f5f2] py-8">
      <div className="container mx-auto px-6">
        {/* Title in magenta, centered */}
        <h1 className="text-4xl md:text-5xl font-semibold text-[#a9125a] mb-4 text-center">
          Who We Are
        </h1>
        
        {/* Text description centered with responsive sizing */}
        <p className="text-base md:text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed text-center">
          At Pixel & Pop, we don't just "do marketing"—we build bold, scroll-stopping, 
          and strategy-backed creative that makes brands stand out, sell more, 
          and stay top of mind.
        </p>
        
        {/* Know More button positioned to the left with shadow */}
        <div className="max-w-2xl mx-auto">
          <button className="bg-black text-white text-sm font-medium px-8 py-3 
            rounded-md hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Component3;