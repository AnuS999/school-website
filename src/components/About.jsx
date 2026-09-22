import React from 'react';
import { Award, GraduationCap, Users, Building, Quote } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const About = () => {
  const stats = [
    { icon: Users, value: "1,800+", label: "Happy Students" },
    { icon: GraduationCap, value: "85+", label: "Expert Faculty" },
    { icon: Building, value: "15+", label: "Acres Campus" },
    { icon: Award, value: "28 Years", label: "Educational Excellence" },
  ];

  return (
    <section id="about" className="py-20 bg-white w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 xl:px-16">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brandPrimary font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Welcome to {siteConfig.schoolName}
          </span>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-gray-900 mt-3 tracking-tight">
            Nurturing Excellence & Character Since 1998
          </h2>
          <div className="w-16 h-1 bg-brandSecondary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-5 text-gray-600 leading-relaxed">
            <p className="text-lg xl:text-xl text-gray-800 font-medium">
              At <strong className="text-brandPrimary">{siteConfig.schoolName}</strong>, we believe that education is not merely about academic scores, but about developing critical thinking, moral integrity, and lifelong learning habits.
            </p>
            <p className="text-sm sm:text-base xl:text-lg">
              Our campus is equipped with state-of-the-art science and robotics laboratories, comprehensive sports complexes, smart classrooms, and a vibrant arts studio. We provide a safe, inclusive, and inspiring environment for every child to discover their true potential.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50/60 rounded-xl border border-blue-100">
                <h4 className="font-bold text-brandPrimary text-base">Holistic Learning</h4>
                <p className="text-xs xl:text-sm text-gray-500 mt-1">Balancing academics, sports & arts</p>
              </div>
              <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-100">
                <h4 className="font-bold text-amber-900 text-base">Global Standards</h4>
                <p className="text-xs xl:text-sm text-gray-500 mt-1">Modern CBSE curriculum & STEM</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-gray-50 p-6 xl:p-8 rounded-2xl border border-gray-100 text-center hover:bg-blue-50/50 hover:border-blue-200 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-white text-brandPrimary rounded-xl mx-auto flex items-center justify-center shadow-sm mb-4">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="text-3xl xl:text-4xl font-extrabold text-gray-900">{stat.value}</h3>
                  <p className="text-xs sm:text-sm xl:text-base font-medium text-gray-500 mt-1">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-brandPrimary rounded-3xl text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-4 lg:col-span-3 text-center">
              <div className="w-36 h-36 sm:w-44 sm:h-44 xl:w-48 xl:h-48 mx-auto rounded-full overflow-hidden border-4 border-brandSecondary shadow-lg">
                <img
                  src="https://images.unsplash.net/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                  alt="Principal"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg xl:text-xl font-bold mt-3 text-white">Dr. Sunita Sharma</h4>
              <p className="text-xs xl:text-sm text-amber-300 font-medium">Principal & Academic Director</p>
            </div>

            <div className="md:col-span-8 lg:col-span-9 space-y-4">
              <Quote className="w-10 h-10 text-amber-400 opacity-80" />
              <p className="text-base sm:text-lg xl:text-xl text-blue-50 italic leading-relaxed">
                "Our mission is to create an environment where learning is joyful and meaningful. We don't just teach subjects; we mentor students to become compassionate, resilient, and confident global citizens who can lead positive change in the world."
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};