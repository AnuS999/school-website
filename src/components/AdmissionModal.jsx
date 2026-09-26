import React, { useState } from "react";
import { X, UserPlus, CheckCircle2, ArrowRight } from "lucide-react";

export default function AdmissionModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    classApplying: "Nursery",
    email: ""
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        <div className="bg-slate-900 p-5 text-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-500 rounded-xl text-slate-900">
              <UserPlus className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-sm uppercase text-white">Online Admission Registration</h3>
              <p className="text-[10px] text-amber-400 font-semibold">Academic Session 2026-27</p>
            </div>
          </div>
          <button onClick={() => { setSubmitted(false); onClose(); }} className="text-slate-400 hover:text-white p-1 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-700">Student's Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="e.g. Aarav Sharma"
                  value={formData.studentName}
                  onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700">Class Applying For</label>
                  <select 
                    value={formData.classApplying}
                    onChange={(e) => setFormData({...formData, classApplying: e.target.value})}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-amber-500"
                  >
                    <option>Nursery</option>
                    <option>Class LKG/UKG</option>
                    <option>Class 1 - 5</option>
                    <option>Class 6 - 8</option>
                    <option>Class 9 - 11</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700">Parent / Guardian Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.parentName}
                    onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700">Contact Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="parent@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-extrabold text-xs py-3 rounded-xl transition shadow flex items-center justify-center gap-2 mt-2">
                SUBMIT ADMISSION APPLICATION <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-3">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-base font-black text-slate-900">Application Submitted!</h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Thank you, <b>{formData.parentName}</b>. Application ID: <b>REG-2026-8921</b>. Admission counselor contact karenge.
              </p>
              <button 
                onClick={() => { setSubmitted(false); onClose(); }} 
                className="bg-slate-900 text-amber-400 font-extrabold text-xs px-6 py-2.5 rounded-xl transition mt-2"
              >
                DONE & CLOSE
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}