import React from 'react';
import { ArrowRight, Award, BookOpen, Users, CheckCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Hero = () => {
  const highlights = [
    { icon: Award, title: "100% CBSE Pass Rate", desc: "Consistently top-ranked academic results" },
    { icon: BookOpen, title: "Smart Classrooms", desc: "Interactive digital learning in every class" },
    { icon: Users, title: "1:20 Teacher Ratio", desc: "Personalized attention for every child" },
  ];

  return (
    <div id="home" className="relative bg-gradient-to-b from-blue-50 via-white to-gray-50 overflow-hidden pt-8 pb-16 w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-200 text-brandPrimary px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-brandSecondary animate-pulse"></span>
              Admissions Open for Academic Year 2026-27
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Empowering Minds, <br />
              <span className="text-brandPrimary">Building Tomorrow's</span> Leaders.
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
              {siteConfig.tagline}. Providing world-class holistic education from Nursery to Grade 12 with modern infrastructure and values.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#admissions"
                className="w-full sm:w-auto bg-brandPrimary hover:bg-blue-900 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span>Apply For Admission</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#about"
                className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-800 font-semibold px-8 py-3.5 rounded-xl border border-gray-300 shadow-sm transition text-sm sm:text-base text-center"
              >
                Explore Campus
              </a>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>CBSE Curriculum</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Safe Transport</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Robotics & Sports</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-2xl shadow-2xl border-4 border-white bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80"
                  alt="School Campus"
                  className="w-full h-[350px] sm:h-[420px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xl">
                  25+
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Extra-Curricular</p>
                  <p className="text-sm font-bold text-gray-800">Clubs & Activities</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition flex items-start gap-4"
              >
                <div className="p-3 rounded-lg bg-blue-50 text-brandPrimary shrink-0">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">{item.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};