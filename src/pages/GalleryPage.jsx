import React from 'react';
import { Image as ImageIcon, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function GalleryPage() {
  const navigate = useNavigate();

  const galleryItems = [
    { title: 'Annual Sports Meet 2026', category: 'Sports', img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=500' },
    { title: 'Science Exhibition', category: 'Academics', img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=500' },
    { title: 'Cultural Fest Celebrations', category: 'Events', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=500' },
    { title: 'Campus & Library', category: 'Infrastructure', img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=500' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 min-h-[70vh]">
      <button 
        onClick={() => navigate('/')} 
        className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 font-semibold text-sm transition"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </button>

      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-amber-100 text-amber-700 rounded-xl">
            <ImageIcon className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">School Media Gallery</h1>
            <p className="text-xs text-slate-500">Events, Campus & Student Highlights</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, idx) => (
            <div key={idx} className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
              <img src={item.img} alt={item.title} className="w-full h-44 object-cover group-hover:scale-105 transition duration-300" />
              <div className="p-3">
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">{item.category}</span>
                <h4 className="font-bold text-slate-800 text-xs mt-0.5">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}