import React from 'react';
import { useSelector } from 'react-redux';
import { LogIn, ShieldAlert } from 'lucide-react';

export default function Navbar({ onOpenLogin, onOpenCms }) {
  const { schoolName, subHeading } = useSelector((state) => state.cms);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const navLinks = ['HOME', 'ABOUT US', 'ACADEMICS', 'ACHIEVEMENTS', 'CIRCULARS', 'EVENTS', 'FACILITIES', 'GALLERY', 'ADMISSION'];

  return (
    <header className="w-full bg-white shadow">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-blue-900 text-amber-400 font-bold flex items-center justify-center text-xl shadow">
            SAPS
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-black text-gray-900 tracking-wide">{schoolName}</h1>
            <p className="text-xs text-gray-600 font-semibold">{subHeading}</p>
          </div>
        </div>
        <div>
          {isAuthenticated ? (
            <button 
              onClick={onOpenCms}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded flex items-center gap-1 shadow"
            >
              <ShieldAlert className="w-4 h-4" /> STAFF CMS PANEL
            </button>
          ) : (
            <button 
              onClick={onOpenLogin}
              className="bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold px-4 py-2 rounded flex items-center gap-1 shadow"
            >
              <LogIn className="w-4 h-4" /> STAFF LOGIN
            </button>
          )}
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-sky-500 text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-1 text-xs font-bold">
          {navLinks.map((item, idx) => (
            <a key={idx} href={`#${item.toLowerCase()}`} className="px-3 py-2.5 hover:bg-sky-600 transition">
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}