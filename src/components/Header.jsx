import React, { useState } from 'react';
import { Menu, X, User, Phone, MapPin, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header({ onOpenLogin }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      
      {/* Top Bar for Desktop */}
      <div className="hidden md:block bg-slate-900 text-slate-300 text-[11px] py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-medium">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" /> Varanasi, Uttar Pradesh
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-400" /> +91 9415201234
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-[10px]">
              CBSE Affiliated School
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & School Name Section */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0 flex-1 sm:flex-initial mr-2">
            {/* School Logo */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-tr from-amber-600 to-amber-400 rounded-xl flex-shrink-0 flex items-center justify-center text-white font-black text-lg sm:text-xl shadow-md group-hover:scale-105 transition-transform">
              SA
            </div>

            {/* School Name - Responsive with No Text Break */}
            <div className="min-w-0 flex-1">
              <h1 className="text-xs xs:text-sm sm:text-lg font-black text-slate-900 uppercase tracking-tight truncate leading-tight">
                Sant Atulanand Public School
              </h1>
              <p className="text-[10px] sm:text-xs font-bold text-amber-600 tracking-wide uppercase truncate">
                Service Before Self
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-bold text-xs text-slate-600 uppercase tracking-wider">
            <Link to="/" className="hover:text-amber-600 transition">Home</Link>
            <a href="#about" className="hover:text-amber-600 transition">About Us</a>
            <a href="#academics" className="hover:text-amber-600 transition">Academics</a>
            <a href="#admission" className="hover:text-amber-600 transition">Admissions</a>
            <Link to="/pay-fee" className="text-amber-600 hover:text-amber-700 transition flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Pay Fee
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={() => navigate('/pay-fee')}
              className="hidden sm:flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-extrabold px-4 py-2 rounded-xl text-xs transition shadow-sm"
            >
              Pay Fee Online
            </button>

            <button
              onClick={onOpenLogin}
              className="p-2 sm:px-3.5 sm:py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs flex items-center gap-2 transition"
              title="Admin Login"
            >
              <User className="w-4 h-4 text-slate-600" />
              <span className="hidden sm:inline">Portal Login</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 font-bold text-sm text-slate-700">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)} 
              className="p-2.5 rounded-lg hover:bg-slate-50 transition"
            >
              Home
            </Link>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)} 
              className="p-2.5 rounded-lg hover:bg-slate-50 transition"
            >
              About Us
            </a>
            <a 
              href="#academics" 
              onClick={() => setMobileMenuOpen(false)} 
              className="p-2.5 rounded-lg hover:bg-slate-50 transition"
            >
              Academics
            </a>
            <a 
              href="#admission" 
              onClick={() => setMobileMenuOpen(false)} 
              className="p-2.5 rounded-lg hover:bg-slate-50 transition"
            >
              Admissions
            </a>
            <Link 
              to="/pay-fee" 
              onClick={() => setMobileMenuOpen(false)} 
              className="p-2.5 bg-amber-50 text-amber-800 rounded-xl font-extrabold flex items-center justify-between"
            >
              <span>Online Fee Payment</span>
              <Sparkles className="w-4 h-4 text-amber-600" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}