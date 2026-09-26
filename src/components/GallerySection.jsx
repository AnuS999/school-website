import React from "react";
import { ExternalLink } from "lucide-react";

export default function GallerySection({ gallery }) {
  return (
    <section id="school-gallery" className="space-y-4">
      <div className="flex justify-between items-end border-b pb-2">
        <div>
          <h3 className="text-lg font-black text-slate-900 uppercase">School Gallery</h3>
          <p className="text-xs text-slate-500">Highlights from recent campus events and activities</p>
        </div>
        <span className="text-xs font-bold text-amber-600 cursor-pointer hover:underline flex items-center gap-1">
          View All <ExternalLink className="w-3.5 h-3.5" />
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {gallery && gallery.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200 group cursor-pointer transition">
            <div className="h-40 overflow-hidden relative">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition duration-300"></div>
            </div>
            <div className="p-3">
              <h4 className="text-xs font-bold text-slate-800 line-clamp-1 group-hover:text-amber-600 transition">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}