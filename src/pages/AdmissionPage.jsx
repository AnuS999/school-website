import React, { useState } from 'react';
import { UserPlus, CheckCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AdmissionPage() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 min-h-[70vh]">
      <button 
        onClick={() => navigate('/')} 
        className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 font-semibold text-sm transition"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </button>

      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-amber-100 text-amber-700 rounded-xl">
            <UserPlus className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Online Admission Application</h1>
            <p className="text-xs text-slate-500">Apply for Academic Session 2026-27</p>
          </div>
        </div>

        {!submitted ? (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700">Student Full Name</label>
                <input required type="text" placeholder="e.g. Rahul Sharma" className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl mt-1 text-sm font-medium" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700">Applying For Class</label>
                <select className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl mt-1 text-sm font-medium">
                  <option>Nursery / LKG / UKG</option>
                  <option>Class I - V</option>
                  <option>Class VI - VIII</option>
                  <option>Class IX & XI</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700">Parent / Guardian Name</label>
                <input required type="text" placeholder="e.g. Rajesh Sharma" className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl mt-1 text-sm font-medium" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700">Contact Number</label>
                <input required type="tel" placeholder="+91 9876543210" className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl mt-1 text-sm font-medium" />
              </div>
            </div>

            <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3.5 rounded-xl transition text-sm mt-4">
              Submit Admission Request
            </button>
          </form>
        ) : (
          <div className="text-center py-10 space-y-3">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <h3 className="text-xl font-bold text-slate-800">Application Submitted!</h3>
            <p className="text-xs text-slate-500">Our admission desk will contact you within 24–48 hours.</p>
          </div>
        )}
      </div>
    </div>
  );
}