import React from 'react';
import { FileSpreadsheet, Download, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SyllabusPage() {
  const navigate = useNavigate();

  const documents = [
    { title: 'Class X - Examination Syllabus 2026-27', class: 'Class 10', size: '2.4 MB' },
    { title: 'Class XII - Science Stream Syllabus', class: 'Class 12', size: '3.1 MB' },
    { title: 'Class XII - Commerce & Arts Syllabus', class: 'Class 12', size: '2.8 MB' },
    { title: 'Annual Examination Routine 2026', class: 'All Classes', size: '1.5 MB' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 min-h-[70vh]">
      <button 
        onClick={() => navigate('/')} 
        className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 font-semibold text-sm transition"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </button>

      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-amber-100 text-amber-700 rounded-xl">
            <FileSpreadsheet className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Syllabus & Exam Routine</h1>
            <p className="text-xs text-slate-500">Download official academic PDFs</p>
          </div>
        </div>

        <div className="space-y-3">
          {documents.map((doc, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-amber-400 transition">
              <div>
                <h4 className="font-bold text-slate-800 text-sm">{doc.title}</h4>
                <p className="text-xs text-slate-500">{doc.class} • {doc.size}</p>
              </div>
              <button className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-4 py-2 rounded-lg text-xs transition">
                <Download className="w-3.5 h-3.5" /> Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}