import React from 'react';
import { Monitor, FlaskConical, BookOpen, Trophy, Bus, Cpu } from 'lucide-react';

export const Facilities = () => {
  const facilitiesList = [
    {
      icon: Monitor,
      title: "Smart Digital Classrooms",
      desc: "Interactive smart boards, 3D visual learning tools, and high-speed internet in every classroom.",
      image: "https://images.unsplash.net/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: FlaskConical,
      title: "Advanced STEM & Science Labs",
      desc: "Fully equipped Physics, Chemistry, Biology, and Math laboratories for practical learning.",
      image: "https://images.unsplash.net/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: BookOpen,
      title: "Central Library & E-Resource",
      desc: "Over 15,000+ books, journals, encyclopedias, and a quiet digital reading zone.",
      image: "https://images.unsplash.net/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Trophy,
      title: "Sports Complex & Swimming",
      desc: "Basketball courts, football ground, cricket pitch, indoor badminton, and trained coaches.",
      image: "https://images.unsplash.net/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Bus,
      title: "GPS Tracked Safe Transport",
      desc: "Air-conditioned fleet of buses with real-time GPS tracking, CCTV, and female attendants.",
      image: "https://images.unsplash.net/photo-1557223562-6c77ef16210f?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Cpu,
      title: "Robotics & AI Innovation Lab",
      desc: "Hands-on coding, 3D printing, and robotics kits to foster early engineering skills.",
      image: "https://images.unsplash.net/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-gray-50 w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 xl:px-16">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brandPrimary font-bold text-xs uppercase tracking-widest bg-blue-100/80 px-3 py-1 rounded-full">
            World-Class Infrastructure
          </span>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-gray-900 mt-3 tracking-tight">
            Campus Facilities Designed For Excellence
          </h2>
          <p className="text-gray-600 text-sm sm:text-base xl:text-lg mt-2">
            We provide a modern, safe, and stimulating environment to support all-round student development.
          </p>
          <div className="w-16 h-1 bg-brandSecondary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {facilitiesList.map((facility, idx) => {
            const IconComponent = facility.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-56 xl:h-64 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
                  
                  <div className="absolute bottom-4 left-4 bg-white p-3 rounded-xl text-brandPrimary shadow-md">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-6 xl:p-8 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg xl:text-xl font-bold text-gray-900 group-hover:text-brandPrimary transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-xs sm:text-sm xl:text-base text-gray-600 mt-2 leading-relaxed">
                      {facility.desc}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center text-xs xl:text-sm font-semibold text-brandPrimary group-hover:text-blue-900">
                    <span>Learn more</span>
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};