import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNotice, deleteNotice, addGalleryImage, deleteGalleryImage } from '../features/cmsSlice';
import { logout } from '../features/authSlice';
import { Trash2, Plus, ImagePlus, FileText, LogOut, ArrowLeft } from 'lucide-react';

export default function CmsDashboard({ onClose }) {
  const dispatch = useDispatch();
  const { notices, gallery } = useSelector((state) => state.cms);

  const [noticeTitle, setNoticeTitle] = useState('');
  const [galleryTitle, setGalleryTitle] = useState('');
  const [galleryUrl, setGalleryUrl] = useState('');

  const handleAddNotice = (e) => {
    e.preventDefault();
    if (!noticeTitle) return;
    dispatch(addNotice({
      title: noticeTitle,
      date: new Date().toLocaleDateString('en-GB'),
      isNew: true
    }));
    setNoticeTitle('');
  };

  const handleAddGallery = (e) => {
    e.preventDefault();
    if (!galleryTitle || !galleryUrl) return;
    dispatch(addGalleryImage({
      title: galleryTitle,
      image: galleryUrl
    }));
    setGalleryTitle('');
    setGalleryUrl('');
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Top Header */}
        <div className="bg-white p-5 rounded-2xl shadow-md border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-xl font-black text-slate-900">Sant Atulanand Staff CMS Portal</h2>
            <p className="text-xs text-slate-500 mt-1">Manage dynamic notices, circulars and photo gallery updates in real-time.</p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={onClose} 
              className="bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition"
            >
              <ArrowLeft className="w-4 h-4" /> View Portal
            </button>
            <button 
              onClick={() => dispatch(logout())} 
              className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition shadow"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Notice Manager */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border space-y-5">
            <h3 className="font-bold text-slate-800 flex items-center gap-2 border-b pb-3">
              <FileText className="w-5 h-5 text-sky-600" /> Post Circular / Notice
            </h3>
            <form onSubmit={handleAddNotice} className="flex gap-2">
              <input
                type="text"
                placeholder="Notice Title..."
                value={noticeTitle}
                onChange={(e) => setNoticeTitle(e.target.value)}
                className="flex-1 border p-2.5 text-xs rounded-xl focus:outline-sky-500"
              />
              <button type="submit" className="bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1 transition">
                <Plus className="w-4 h-4" /> Add
              </button>
            </form>

            <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Notices ({notices.length}):</h4>
              {notices.map((item) => (
                <div key={item.id} className="flex justify-between items-center p-3 bg-slate-50 border rounded-xl text-xs gap-3">
                  <div className="space-y-0.5">
                    <p className="font-semibold text-slate-800">{item.title}</p>
                    <p className="text-[10px] text-slate-400">{item.date}</p>
                  </div>
                  <button onClick={() => dispatch(deleteNotice(item.id))} className="text-red-500 hover:text-red-700 p-1">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Manager */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border space-y-5">
            <h3 className="font-bold text-slate-800 flex items-center gap-2 border-b pb-3">
              <ImagePlus className="w-5 h-5 text-emerald-600" /> Upload Gallery Image
            </h3>
            <form onSubmit={handleAddGallery} className="space-y-3">
              <input
                type="text"
                placeholder="Event Name / Title..."
                value={galleryTitle}
                onChange={(e) => setGalleryTitle(e.target.value)}
                className="w-full border p-2.5 text-xs rounded-xl focus:outline-emerald-500"
              />
              <input
                type="url"
                placeholder="Image URL..."
                value={galleryUrl}
                onChange={(e) => setGalleryUrl(e.target.value)}
                className="w-full border p-2.5 text-xs rounded-xl focus:outline-emerald-500"
              />
              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 rounded-xl flex justify-center items-center gap-1 transition">
                <Plus className="w-4 h-4" /> Add Image
              </button>
            </form>

            <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Gallery Images ({gallery.length}):</h4>
              {gallery.map((item) => (
                <div key={item.id} className="flex justify-between items-center p-2.5 bg-slate-50 border rounded-xl text-xs gap-3">
                  <div className="flex items-center gap-3">
                    <img src={item.image} alt={item.title} className="w-10 h-10 rounded-lg object-cover" />
                    <span className="font-semibold text-slate-800">{item.title}</span>
                  </div>
                  <button onClick={() => dispatch(deleteGalleryImage(item.id))} className="text-red-500 hover:text-red-700 p-1">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}