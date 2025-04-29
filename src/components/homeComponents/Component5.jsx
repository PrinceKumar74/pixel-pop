import React, { useState, useEffect, useCallback } from 'react';

// Updated slides data with image paths from Component4
const slides = [
  { id: 1, label: "Branding", bg: "bg-red-100", img: "/slider/slide1.jpg" },
  { id: 2, label: "Social Media", bg: "bg-green-100", img: "/slider/slide2.jpg" },
  { id: 3, label: "Performance Marketing", bg: "bg-blue-100", img: "/slider/slide3.jpg" },
  { id: 4, label: "Social Media Management", bg: "bg-yellow-100", img: "/slider/slide4.jpg" },
  { id: 5, label: "Website Development", bg: "bg-purple-100", img: "/slider/slide5.jpg" },
];

const Component5 = () => {
  const totalSlides = slides.length;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (!isHovered) {
      const autoSlideTimer = setInterval(nextSlide, 2000);
      return () => clearInterval(autoSlideTimer);
    }
  }, [isHovered, currentSlide, nextSlide]);

  const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
  const nextIndex = (currentSlide + 1) % totalSlides;
  const orderedSlides = [slides[prevIndex], slides[currentSlide], slides[nextIndex]];

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-2 sm:px-6">
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-8 text-gray-800">
        FEATURED PROJECTS
      </h2>
      <div
        className="relative flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Slide container with responsive spacing and overflow handling */}
        <div className="flex items-center justify-center space-x-1 sm:space-x-2 md:space-x-4 overflow-hidden w-full px-6">
          {orderedSlides.map((slide, index) => {
            const isCenter = index === 1;
            return (
              <div
                key={slide.id}
                className={`
                  flex-shrink-0 transition-all duration-500 ease-in-out rounded-lg shadow-md overflow-hidden
                  ${isCenter ? 'scale-100 opacity-100 z-10' : 'scale-75 sm:scale-85 opacity-60 sm:opacity-70 z-0'}
                  w-[150px] h-[250px]
                  sm:w-[200px] sm:h-[320px]
                  md:w-[240px] md:h-[380px]
                  lg:w-[280px] lg:h-[440px]
                  ${slide.bg} // Add a light background as fallback
                `}
              >
                <img
                  src={slide.img}
                  alt={slide.label} // Use the updated label for alt text
                  className="w-full h-full object-cover"
                  // More robust fallback placeholder
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop if placeholder fails
                    e.target.src=`https://placehold.co/300x400/cccccc/ffffff?text=Image+Not+Found`;
                    e.target.alt = "Image not found"; // Update alt text on error
                   }}
                />
                {/* Optional: Add label back if needed, maybe absolutely positioned */}
                {/* <p className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">{slide.label}</p> */}
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons - slightly adjusted for smaller screens */}
        <button
          onClick={prevSlide}
          aria-label="Previous Project"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-black text-white p-2 rounded-full opacity-60 hover:opacity-100 transition text-sm sm:text-base"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Project"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-black text-white p-2 rounded-full opacity-60 hover:opacity-100 transition text-sm sm:text-base"
        >
          &#8594;
        </button>
      </div>
       {/* Optional: Dots Indicator */}
       <div className="flex justify-center space-x-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              currentSlide === index ? 'bg-gray-700' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Component5;
