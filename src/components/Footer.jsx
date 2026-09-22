import React from 'react';
import { siteConfig } from '../config/siteConfig';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800 w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 xl:px-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          
          <div className="space-y-4 md:col-span-1">
            <h3 className="text-white font-bold text-xl">{siteConfig.schoolName}</h3>
            <p className="text-xs xl:text-sm text-gray-400 leading-relaxed">
              Affiliated to CBSE, New Delhi. Dedicated to nurturing academic excellence, values, and leadership since 1998.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm xl:text-base">Quick Links</h4>
            <ul className="space-y-2 text-xs xl:text-sm text-gray-400">
              <li><a href="#about" className="hover:text-amber-400 transition">About Our School</a></li>
              <li><a href="#facilities" className="hover:text-amber-400 transition">Campus Facilities</a></li>
              <li><a href="#notices" className="hover:text-amber-400 transition">Notice Board</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition">Photo Gallery</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm xl:text-base">Admissions</h4>
            <ul className="space-y-2 text-xs xl:text-sm text-gray-400">
              <li><a href="#admissions" className="hover:text-amber-400 transition">Apply Online</a></li>
              <li><a href="#notices" className="hover:text-amber-400 transition">Fee Structure PDF</a></li>
              <li><a href="#notices" className="hover:text-amber-400 transition">Download Prospectus</a></li>
            </ul>
          </div>

          <div className="space-y-3 text-xs xl:text-sm text-gray-400">
            <h4 className="text-white font-semibold text-sm xl:text-base">Contact Cell</h4>
            <p>{siteConfig.contact.address}</p>
            <p>Phone: {siteConfig.contact.phone}</p>
            <p>Email: {siteConfig.contact.email}</p>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs xl:text-sm text-gray-500 gap-3">
          <p>© {new Date().getFullYear()} {siteConfig.schoolName}. All Rights Reserved.</p>
          <p className="text-sm text-gray-400 font-medium tracking-wide flex items-center gap-1.5">
  <span>Designed & Developed by</span>
  <span className="font-extrabold bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(56,189,248,0.3)] hover:brightness-125 transition duration-300 cursor-pointer">
    Line In
  </span>
</p>
        </div>

      </div>
    </footer>
  );
};