import React, { useState, useEffect } from "react";

export default function HeroCarousel() {
  const [heroIndex, setHeroIndex] = useState(0);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
      tag: "FEATURED INFRASTRUCTURE",
      title: "Advanced Science & Technology Labs",
      subtitle: "Fostering innovation, practical problem solving, and modern scientific inquiry in students."
    },
    {
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80",
      tag: "SPORTS & ATHLETICS",
      title: "State-of-the-Art Sports Complex",
      subtitle: "Encouraging sportsmanship, fitness, and national level athletic training."
    },
    {
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
      tag: "ACADEMIC EXCELLENCE",
      title: "Holistic & Value Based Education",
      subtitle: "Preparing young minds for global challenges with strong ethical roots."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group min-h-[320px] flex items-end">
      {heroSlides.map((slide, idx) => (
        <div 
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === heroIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img 
            src={slide.image} 
            alt={slide.title} 
            className={`w-full h-full object-cover transform transition-transform duration-[7000ms] ${
              idx === heroIndex ? "scale-110" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent flex flex-col justify-end p-6 space-y-2">
            <span className="bg-amber-500 text-slate-900 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md inline-block w-fit shadow">
              {slide.tag}
            </span>
            <h2 className="text-xl md:text-3xl font-black text-white leading-tight">
              {slide.title}
            </h2>
            <p className="text-xs md:text-sm text-slate-200 font-medium max-w-xl">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      <div className="absolute bottom-3 right-4 z-20 flex gap-1.5">
        {heroSlides.map((_, i) => (
          <button 
            key={i}
            onClick={() => setHeroIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === heroIndex ? "w-6 bg-amber-400" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}