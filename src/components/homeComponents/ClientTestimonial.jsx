import React from 'react';

export default function ClientTestimonial() {
  const testimonials = [
    {
      id: 1,
      image: "/ClientTestimonial/img1.png",
      alt: "People in a business meeting"
    },
    {
      id: 2,
      image: "/ClientTestimonial/img2.png",
      alt: "Professional in formal attire reviewing documents"
    },
    {
      id: 3,
      image: "/ClientTestimonial/img3.png",
      alt: "People collaborating in an office environment"
    }
  ];

  return (
    <div className="w-full bg-[#F1EFE7] mt-4 mb-10">
      {/* Header with bottom border and updated h2 */}
      <div className="text-center py-16 border-b border-pink-300">
        <h2 className="text-4xl font-extrabold text-black font-helvetica">Client Testimonial</h2>
      </div>

      {/* Testimonials container */}
      <div className="max-w-7xl mx-auto py-12 px-4 flex flex-col md:flex-row justify-center gap-10">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="relative w-full md:w-72 h-64 bg-gray-50 rounded-lg"
          >
            {/* Image container with rounded corners */}
            <div className="absolute top-0 left-0 right-0 mx-4 mt-4">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.alt}
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>
            
            {/* Bottom section with avatar and Read More */}
            <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 flex justify-between items-center">
              <div className="bg-purple-900 rounded-full p-1 w-8 h-8 flex items-center justify-center">
                <span className="text-white text-xs">AB</span>
              </div>
              <span className="text-xs font-medium text-gray-700 uppercase tracking-wider">Read More</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}