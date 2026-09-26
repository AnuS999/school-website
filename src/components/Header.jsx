import React from "react";
import { Sparkles, Lock } from "lucide-react";

export default function Header({ onOpenLogin }) {
  return (
    <>
      {/* Top Ticker / Marquee Animation */}
      <div className="bg-amber-500 text-slate-900 text-xs font-bold py-1.5 px-4 overflow-hidden shadow-inner flex items-center">
        <span className="bg-slate-900 text-amber-400 text-[10px] px-2 py-0.5 rounded uppercase font-black shrink-0 mr-3 flex items-center gap-1">
          <Sparkles className="w-3 h-3 animate-spin" /> UPDATE
        </span>
        <div className="whitespace-nowrap animate-marquee flex gap-8 text-[11px]">
          <span> Admissions Open for Session 2026-27 from Nursery to Class IX & XI.</span>
          <span> CBSE Board Exams Schedule released for Classes X & XII.</span>
          <span> Annual Sports Meet scheduled for October 2026.</span>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-40 shadow-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-amber-500 to-amber-300 rounded-xl flex items-center justify-center font-black text-slate-900 text-lg shadow-md ring-2 ring-amber-400/50 transform hover:rotate-6 transition duration-300">
              SA
            </div>
            <div>
              <h1 className="font-black text-sm md:text-base leading-tight tracking-wide text-white">
                SANT ATULANAND PUBLIC SCHOOL
              </h1>
              <p className="text-[10px] text-amber-400 font-semibold tracking-wider">
                Varanasi, Uttar Pradesh | Affiliated to CBSE
              </p>
            </div>
          </div>
          
          <button 
            onClick={onOpenLogin} 
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-extrabold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition duration-300 shadow-md hover:shadow-amber-500/20 active:scale-95"
          >
            <Lock className="w-3.5 h-3.5" /> Staff Portal
          </button>
        </div>
      </header>
    </>
  );
}