import React from "react";
import { ChevronRight } from "lucide-react";

export default function PrincipalMessage() {
  return (
    <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
      <div className="md:col-span-1 flex flex-col items-center text-center space-y-2">
        <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-amber-400 shadow-md hover:scale-105 transition duration-300">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" 
            alt="Principal" 
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-extrabold text-slate-900 text-sm mt-2">Dr. Usha Singh</h3>
        <p className="text-xs text-amber-600 font-bold uppercase tracking-wider">Principal Message</p>
      </div>
      <div className="md:col-span-2 space-y-3">
        <h3 className="text-lg md:text-xl font-black text-slate-900">
          Welcome to Sant Atulanand Public School
        </h3>
        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
          We believe in nurturing holistic learning environment combining traditional values with state-of-the-art educational infrastructure. Our focus is to empower students with scientific temperament, strong ethics, and leadership skills.
        </p>
        <div className="pt-2">
          <button className="text-xs font-extrabold text-amber-600 hover:text-amber-700 flex items-center gap-1 hover:underline group">
            Read Full Message <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </button>
        </div>
      </div>
    </section>
  );
}