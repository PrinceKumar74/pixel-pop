import React, { useState, useEffect } from 'react';

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Team members data array with 6 members
  const teamMembers = [
    {
      id: 1,
      title: "CEO (FOUNDER)",
      imgPath: '/teamMembers/girl1.jpg',
      name: "AKSHA",
      description: "If you won't find her anywhere, you'll find her being life of the party."
    },
    {
      id: 2,
      title: "COO/SOCIAL MEDIA MANAGER",
      imgPath: '/teamMembers/girl2.jpg',
      name: "KANCHAN",
      description: "If you won't find her anywhere, you'll find it's impossible to not to find her anywhere! She is EVERYWHERE!"
    },
    {
      id: 3,
      title: "CHIEF TECHNOLOGY OFFICER",
      imgPath: '/teamMembers/man1.jpg',
      name: "ADITYA",
      description: "If you won't find him anywhere, you'll find him sleeping in the restroom."
    },
    {
      id: 4,
      title: "ADS EXPERT",
      imgPath: '/teamMembers/man2.jpg',
      name: "SAQUIB",
      description: "If you won't find him anywhere, you'll find him in a room full of girls."
    },
    {
      id: 5,
      title: "CREATIVE DIRECTOR",
      imgPath: '/teamMembers/man3.jpg',
      name: "RAHUL",
      description: "If you won't find him anywhere, you'll find him sketching ideas on napkins at coffee shops."
    },
    {
      id: 6,
      title: "CONTENT STRATEGIST",
      imgPath: '/teamMembers/girl3.jpg',
      name: "PRIYA",
      description: "If you won't find her anywhere, you'll find her with headphones lost in her own world."
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    let interval;
    if (!isMobile) {
      interval = setInterval(() => {
        setFade(false);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
          setFade(true);
        }, 300);
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [teamMembers.length, isMobile]);

  const getVisibleMembers = () => {
    const visible = [];
    const count = isMobile ? 2 : 3;
    for (let i = 0; i < count; i++) {
      const index = (currentIndex + i) % teamMembers.length;
      visible.push(teamMembers[index]);
    }
    return visible;
  };

  
  return (
    <section className="w-full bg-[#F1EFE7] py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center border-b border-gray-200 pb-4 mb-8">
          Amazing Team
        </h2>

        <div className={`flex flex-wrap justify-center ${!isMobile ? (fade ? 'opacity-100 transition-opacity duration-500' : 'opacity-0 transition-opacity duration-500') : ''}`}>
          {getVisibleMembers().map((member) => (
            <div key={member.id} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="flex flex-col bg-[#F1EFE7] h-full shadow-lg rounded-lg p-4">
                <div className="rounded-lg aspect-square mb-4 overflow-hidden">
                  <img 
                    src={member.imgPath} 
                    alt={`${member.name} - ${member.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-2">
                  <p className="text-gray-600 text-sm mb-1">{member.title}</p>
                  <h3 className="font-bold text-lg mb-2">{member.name}</h3>
                  <p className="text-sm mb-3">{member.description}</p>
                  <button className="text-sm uppercase font-medium tracking-wider">KNOW MORE...</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;