import React, { useState } from "react";
import { X, FileText, Download, Calendar } from "lucide-react";

export default function SyllabusModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("syllabus");
  const [selectedClass, setSelectedClass] = useState("Class 10");

  if (!isOpen) return null;

  const syllabusData = [
    { title: "Mathematics Complete Syllabus 2025-26", size: "2.4 MB", type: "PDF" },
    { title: "Science & Physics Lab Manual", size: "4.1 MB", type: "PDF" },
    { title: "Social Science Term-Wise Syllabus", size: "1.8 MB", type: "PDF" },
    { title: "English Communicative Syllabus", size: "1.2 MB", type: "PDF" }
  ];

  const routineData = [
    { title: "Annual Examination Datesheet 2025-26", date: "Starts 15 Feb 2026", type: "Exam" },
    { title: "Class 9 to 12 Daily Routine & Time Table", date: "Session 2025-26", type: "Routine" },
    { title: "Pre-Board II Schedule & Instructions", date: "Jan 2026", type: "Exam" }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        <div className="bg-slate-900 p-5 text-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-500 rounded-xl text-slate-900">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-sm uppercase text-white">Syllabus & Routine</h3>
              <p className="text-[10px] text-amber-400 font-semibold">Academic Downloads</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          <div className="flex justify-between items-center gap-2">
            <div className="flex bg-slate-100 p-1 rounded-xl w-full">
              <button 
                onClick={() => setActiveTab("syllabus")} 
                className={`flex-1 py-1.5 text-xs font-extrabold rounded-lg transition ${activeTab === "syllabus" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"}`}
              >
                Syllabus PDFs
              </button>
              <button 
                onClick={() => setActiveTab("routine")} 
                className={`flex-1 py-1.5 text-xs font-extrabold rounded-lg transition ${activeTab === "routine" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"}`}
              >
                Routines & Datesheets
              </button>
            </div>

            <select 
              value={selectedClass} 
              onChange={(e) => setSelectedClass(e.target.value)}
              className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800"
            >
              <option>Class 9</option>
              <option>Class 10</option>
              <option>Class 11</option>
              <option>Class 12</option>
            </select>
          </div>

          <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
            {activeTab === "syllabus" ? (
              syllabusData.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center bg-slate-50 border border-slate-200 p-3 rounded-xl hover:bg-amber-50/50 hover:border-amber-200 transition">
                  <div>
                    <h5 className="text-xs font-extrabold text-slate-900">{item.title}</h5>
                    <p className="text-[10px] text-slate-500 font-medium">{selectedClass} • {item.size}</p>
                  </div>
                  <button className="p-2 bg-amber-500 hover:bg-amber-400 text-slate-900 rounded-lg font-bold text-xs flex items-center gap-1 shadow-sm">
                    <Download className="w-3.5 h-3.5" /> PDF
                  </button>
                </div>
              ))
            ) : (
              routineData.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center bg-slate-50 border border-slate-200 p-3 rounded-xl hover:bg-amber-50/50 hover:border-amber-200 transition">
                  <div>
                    <h5 className="text-xs font-extrabold text-slate-900">{item.title}</h5>
                    <p className="text-[10px] text-slate-500 font-medium flex items-center gap-1 mt-0.5">
                      <Calendar className="w-3 h-3 text-amber-600" /> {item.date}
                    </p>
                  </div>
                  <button className="p-2 bg-slate-900 hover:bg-slate-800 text-amber-400 rounded-lg font-bold text-xs flex items-center gap-1 shadow-sm">
                    <Download className="w-3.5 h-3.5" /> View
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}