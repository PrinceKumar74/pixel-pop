

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Component1 = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden  -mt-36">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/homeVideo/home.mp4"
        autoPlay
        loop
        muted
      >
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main Header Content Positioned in the Center */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="max-w-2xl text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-helvetica">
            Let's make some marketing magic together
          </h1>
          <p className="text-lg mb-8">
            You're ready to stop blending in and start making waves. Let's make some marketing magic together.
          </p>
        </div>
      </div>

      {/* Enhanced WhatsApp Floating Button */}
      <a
        href="https://wa.me/+919065637005"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-6 right-6 z-100"
      >
        <div className="relative flex items-center justify-center w-14 h-14 ">
          {/* Pulsing Circle */}
          <div className="absolute inset-0 bg-green-500 rounded-full opacity-70 animate-ping"></div>
          {/* Solid Circle with Hover Scale */}
          <div className="absolute inset-0 bg-green-600 rounded-full transform transition-transform duration-300 group-hover:scale-110"></div>
          {/* WhatsApp Icon */}
          <FaWhatsapp className="relative text-white w-7 h-7" />
        </div>
        {/* Tooltip on Hover */}
        <span className="absolute bottom-full mb-2 px-3 py-1 text-xs text-white bg-gray-800 rounded opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          Chat on WhatsApp
        </span>
      </a>
    </section>
  );
};

export default Component1;

