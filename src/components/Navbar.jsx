import React, { useState } from 'react';
import { Phone, Mail, Clock, Menu, X, ChevronRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Notices', href: '#notices' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm bg-white">
      {/* Top Bar */}
      <div className="bg-brandPrimary text-white text-xs py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-1.5 hover:text-brandSecondary transition">
              <Phone className="w-3.5 h-3.5" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-1.5 hover:text-brandSecondary transition">
              <Mail className="w-3.5 h-3.5" />
              <span>{siteConfig.contact.email}</span>
            </a>
            <span className="hidden lg:flex items-center gap-1.5 text-blue-200">
              <Clock className="w-3.5 h-3.5" />
              <span>{siteConfig.contact.timing}</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="bg-brandSecondary text-blue-950 font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
              ADMISSIONS OPEN
            </span>
            <span className="text-xs text-blue-100 hidden sm:inline">
              Session 2026-27 Enrollment Started!
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20 gap-4">
          
          {/* Logo & Branding */}
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-brandSecondary bg-blue-50 flex items-center justify-center font-bold text-brandPrimary text-base shrink-0">
              SX
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                {siteConfig.schoolName}
              </span>
              <span className="text-[10px] text-gray-500 font-medium tracking-tight">
                Affiliated to CBSE | Estd. 1998
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-brandPrimary font-medium text-sm transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brandSecondary transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="#admissions"
              className="bg-brandPrimary hover:bg-blue-900 text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow transition flex items-center gap-1.5"
            >
              <span>Apply Now</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-md text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-brandPrimary"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#admissions"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-brandPrimary text-white text-center font-semibold py-2.5 rounded-lg block shadow text-sm"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};