import React from 'react';

const logos = [
  {
    id: 1,
    src: "/ClientLogo/k-glow.png",
    alt: "k-glow logo"
  },
  {
    id: 2,
    src: "/ClientLogo/hairlyf.png",
    alt: "hairlyf logo"
  },
  {
    id: 3,
    src: "/ClientLogo/plusS.png",
    alt: "plusS logo"
  },
  {
    id: 4,
    src: "/ClientLogo/shagraskin.png",
    alt: "shagraskin logo"
  },
  {
    id: 5,
    src: "/ClientLogo/shapify.png",
    alt: "shapify logo"
  },
  {
    id: 6,
    src: "/ClientLogo/sleekoutfitsociety.png",
    alt: "sleekoutfitsociety logo"
  },
  {
    id: 7,
    src: "/ClientLogo/sethuinstitute.png",
    alt: "sethuinstitute logo"
  },{
    id: 8,
    src: "/ClientLogo/k-glow.png",
    alt: "k-glow logo"
  },
  {
    id: 9,
    src: "/ClientLogo/hairlyf.png",
    alt: "hairlyf logo"
  },
  {
    id: 10,
    src: "/ClientLogo/plusS.png",
    alt: "plusS logo"
  },
  {
    id: 11,
    src: "/ClientLogo/shagraskin.png",
    alt: "shagraskin logo"
  },
  {
    id: 12,
    src: "/ClientLogo/shapify.png",
    alt: "shapify logo"
  },
  {
    id: 13,
    src: "/ClientLogo/sleekoutfitsociety.png",
    alt: "sleekoutfitsociety logo"
  },
  {
    id: 14,
    src: "/ClientLogo/sethuinstitute.png",
    alt: "sethuinstitute logo"
  },
  {
    id: 15,
    src: "/ClientLogo/k-glow.png",
    alt: "k-glow logo"
  }
];

const Client = () => {
  return (
    <section className="py-12 bg-[#F1EFE7]">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8 font-helvetica">
          Happy Clients
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center   hover:shadow-lg transition-shadow duration-300 p-4"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Client;