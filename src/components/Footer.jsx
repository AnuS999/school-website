import React from "react";
import { MapPin, Phone, Mail, ChevronRight, Lock } from "lucide-react";

export default function Footer({ onOpenLogin }) {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 mt-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="space-y-3">
          <h4 className="text-white text-sm font-black uppercase tracking-wider">Sant Atulanand Public School</h4>
          <p className="leading-relaxed text-slate-400">
            Varanasi, Uttar Pradesh - 221002 | Affiliated to CBSE, New Delhi.
          </p>
          <div className="space-y-1.5 pt-1">
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-amber-400" /> Holapur, Parmanandpur, Varanasi</p>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-amber-400" /> +91 9415201234</p>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-amber-400" /> info@saps.edu.in</p>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-white text-sm font-black uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2">
            {['Academics', 'Admissions 2026-27', 'CBSE Mandatory Disclosure', 'Exam Syllabus', 'Contact Support'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-amber-400 transition flex items-center gap-1 group">
                  <ChevronRight className="w-3 h-3 text-amber-500 group-hover:translate-x-1 transition" /> {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-white text-sm font-black uppercase tracking-wider">About Portal</h4>
          <p className="leading-relaxed">
            Official Web Portal for online admissions, notice updates, fee portal, and campus gallery.
          </p>
          <div className="pt-2">
            <button 
              onClick={onOpenLogin} 
              className="bg-slate-800 hover:bg-slate-700 text-amber-400 px-3.5 py-2 rounded-xl font-bold flex items-center gap-2 border border-slate-700 transition"
            >
              <Lock className="w-3.5 h-3.5" /> Staff Management Console
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-slate-800 text-center text-slate-500 text-[11px]">
        © {new Date().getFullYear()} Sant Atulanand Public School. All Rights Reserved.
      </div>
    </footer>
  );
}