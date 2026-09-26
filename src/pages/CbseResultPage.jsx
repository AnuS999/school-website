import React, { useState } from 'react';
import { Award, Search, CheckCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CbseResultPage() {
  const navigate = useNavigate();
  const [rollNo, setRollNo] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!rollNo) return;
    
    // Dummy result data
    setResult({
      name: 'Aman Kumar',
      rollNo: rollNo,
      class: 'X-A',
      marks: [
        { subject: 'English Language & Lit.', marks: 88, grade: 'A1' },
        { subject: 'Mathematics Standard', marks: 92, grade: 'A1' },
        { subject: 'Science', marks: 85, grade: 'A2' },
        { subject: 'Social Science', marks: 90, grade: 'A1' },
        { subject: 'Hindi Course-A', marks: 86, grade: 'A2' },
      ],
      total: '441/500',
      percentage: '88.2%',
      status: 'PASS'
    });
  };

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
            <Award className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">CBSE Board Exam Result</h1>
            <p className="text-xs text-slate-500">Session 2025-26 Performance Portal</p>
          </div>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 mb-8">
          <input
            type="text"
            required
            placeholder="Enter CBSE Roll Number (e.g. 12654091)"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            className="flex-1 px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 font-medium text-sm"
          />
          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-6 py-3 rounded-xl transition flex items-center justify-center gap-2 text-sm"
          >
            <Search className="w-4 h-4" /> Get Result
          </button>
        </form>

        {/* Result Table */}
        {result && (
          <div className="border border-slate-200 rounded-xl p-6 bg-slate-50/50 space-y-6">
            <div className="flex flex-wrap justify-between items-center border-b pb-4 gap-2">
              <div>
                <h3 className="text-lg font-bold text-slate-800">{result.name}</h3>
                <p className="text-xs text-slate-500">Roll No: <span className="font-semibold text-slate-700">{result.rollNo}</span> | Class: <span className="font-semibold text-slate-700">{result.class}</span></p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 font-bold text-xs rounded-full flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> {result.status}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700">
                <thead>
                  <tr className="border-b bg-slate-100 text-xs font-bold text-slate-600 uppercase">
                    <th className="py-2.5 px-3">Subject</th>
                    <th className="py-2.5 px-3">Marks</th>
                    <th className="py-2.5 px-3">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {result.marks.map((m, idx) => (
                    <tr key={idx} className="hover:bg-slate-100/50">
                      <td className="py-2.5 px-3 font-medium">{m.subject}</td>
                      <td className="py-2.5 px-3 font-semibold">{m.marks}</td>
                      <td className="py-2.5 px-3 font-bold text-amber-600">{m.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center bg-amber-50 p-4 rounded-xl border border-amber-200 text-slate-800">
              <span className="text-sm font-bold">Overall Percentage:</span>
              <span className="text-xl font-black text-amber-700">{result.percentage} ({result.total})</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}