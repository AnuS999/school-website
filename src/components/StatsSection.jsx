import React from 'react';
import { Users, GraduationCap, Award, Trophy } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    { icon: Users, count: "3,500+", label: "Active Students" },
    { icon: GraduationCap, count: "180+", label: "Qualified Teachers" },
    { icon: Award, count: "99.4%", label: "CBSE Pass Percentage" },
    { icon: Trophy, count: "45+", label: "National Awards" },
  ];

  return (
    <section className="py-6 px-4 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 md:p-8 shadow-xl border border-slate-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-5 text-center space-y-2 hover:bg-white/15 transition duration-300"
              >
                <div className="flex justify-center">
                  <div className="p-3 bg-amber-400/20 rounded-full text-amber-400">
                    <Icon className="w-6 h-6 stroke-[2.5]" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                  {stat.count}
                </h3>
                <p className="text-xs md:text-sm font-semibold text-slate-200">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}