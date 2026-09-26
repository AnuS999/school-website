import React, { useState } from "react";
import { X, Award, Search, Download, ExternalLink } from "lucide-react";

export default function CbseResultModal({ isOpen, onClose }) {
  const [rollNo, setRollNo] = useState("");
  const [classVal, setClassVal] = useState("10");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleCheckResult = (e) => {
    e.preventDefault();
    if (!rollNo.trim()) {
      setError("Kripya Roll Number enter karein.");
      return;
    }
    setError("");
    setResult({
      studentName: "Ananya Verma",
      rollNo: rollNo,
      class: `Class ${classVal}`,
      schoolName: "Sant Atulanand Public School",
      cgpa: "9.4",
      status: "PASSED",
      subjects: [
        { name: "English Communicative", marks: 92, grade: "A1" },
        { name: "Mathematics Standard", marks: 95, grade: "A1" },
        { name: "Science", marks: 94, grade: "A1" },
        { name: "Social Science", marks: 91, grade: "A1" },
        { name: "Hindi Course-A", marks: 96, grade: "A1" }
      ]
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        <div className="bg-slate-900 p-5 text-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-500 rounded-xl text-slate-900">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-sm uppercase text-white">CBSE Board Result</h3>
              <p className="text-[10px] text-amber-400 font-semibold">Session 2025-26</p>
            </div>
          </div>
          <button onClick={() => { setResult(null); onClose(); }} className="text-slate-400 hover:text-white p-1 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {!result ? (
            <form onSubmit={handleCheckResult} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">Select Class</label>
                  <select 
                    value={classVal} 
                    onChange={(e) => setClassVal(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-amber-500"
                  >
                    <option value="10">Class X</option>
                    <option value="12">Class XII</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">Roll Number</label>
                  <input 
                    type="text"
                    placeholder="e.g. 12654309"
                    value={rollNo}
                    onChange={(e) => setRollNo(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>
              {error && <p className="text-xs text-red-500 font-bold">{error}</p>}
              
              <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl text-[11px] text-amber-900 font-medium">
                💡 **Sample Roll No:** Koi bhi 8-digit number enter karein (e.g., <b>24108912</b>).
              </div>

              <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-extrabold text-xs py-3 rounded-xl transition shadow flex items-center justify-center gap-2">
                <Search className="w-4 h-4" /> CHECK RESULT
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs space-y-1">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>{result.studentName}</span>
                  <span className="text-green-600 bg-green-100 px-2 py-0.5 rounded-full text-[10px]">{result.status}</span>
                </div>
                <p className="text-slate-500 text-[11px]">Roll No: {result.rollNo} | {result.class}</p>
              </div>

              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-bold">
                    <th className="p-2 rounded-l-lg">Subject</th>
                    <th className="p-2 text-center">Marks</th>
                    <th className="p-2 text-right rounded-r-lg">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {result.subjects.map((sub, i) => (
                    <tr key={i} className="text-slate-800 font-medium">
                      <td className="p-2">{sub.name}</td>
                      <td className="p-2 text-center font-bold">{sub.marks}</td>
                      <td className="p-2 text-right font-bold text-amber-600">{sub.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex gap-2">
                <button onClick={() => setResult(null)} className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-2.5 rounded-xl transition">
                  Back
                </button>
                <button onClick={() => window.print()} className="w-2/3 bg-slate-900 hover:bg-slate-800 text-amber-400 font-extrabold text-xs py-2.5 rounded-xl transition flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" /> DOWNLOAD MARKSHEET
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}