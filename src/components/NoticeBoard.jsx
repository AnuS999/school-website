import React from "react";
import { Bell, Download } from "lucide-react";

export default function NoticeBoard({ notices }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex flex-col h-[340px]">
      <div className="flex items-center justify-between border-b pb-3 mb-3">
        <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
          <Bell className="w-4 h-4 text-amber-500 animate-bounce" /> NOTICE BOARD
        </h3>
        <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span> LIVE
        </span>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 custom-scrollbar">
        {notices && notices.map((notice) => (
          <div 
            key={notice.id} 
            className="p-3 bg-slate-50 hover:bg-amber-50/60 border border-slate-200 hover:border-amber-400 rounded-xl transition-all duration-200 hover:-translate-y-0.5 space-y-1.5 group cursor-pointer shadow-sm hover:shadow"
          >
            <div className="flex items-start justify-between gap-2">
              <h4 className="text-xs font-bold text-slate-900 group-hover:text-amber-700 line-clamp-2 leading-snug transition">
                {notice.title}
              </h4>
              {notice.isNew && (
                <span className="text-[9px] bg-red-600 text-white font-black px-1.5 py-0.5 rounded uppercase tracking-wider shrink-0 animate-pulse">
                  NEW
                </span>
              )}
            </div>
            <div className="flex justify-between items-center text-[10px] text-slate-500 font-medium pt-1 border-t border-slate-100">
              <span>{notice.date}</span>
              <span className="text-sky-600 font-bold flex items-center gap-0.5 hover:underline">
                <Download className="w-3 h-3" /> Download
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}