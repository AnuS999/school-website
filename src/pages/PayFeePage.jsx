import React, { useState } from 'react';
import { CreditCard, ArrowLeft, CheckCircle2, QrCode, Upload, Download, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PayFeePage() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('qr');
  const [uploadedReceipt, setUploadedReceipt] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    studentName: 'Rahul sharma',
    rollNo: '123456',
    classVal: 'Class X-A',
    term: 'Quarter 1 (Apr - Jun)',
    amount: '4500'
  });

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) setUploadedReceipt(file.name);
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  return (
    <>
      {/* 1. PRINT ONLY SECTION: Browser print par SIRF YAHI dikhega */}
      {submitted && (
        <div className="hidden print:block fixed inset-0 bg-white p-8 z-[9999]">
          <div className="max-w-md mx-auto space-y-4">
            
            {/* Top School Logo + Name Header */}
            <div className="flex items-center gap-3 border-b pb-4 mb-2">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-white font-black text-xl">
                SA
              </div>
              <div>
                <h1 className="text-lg font-black text-slate-900 uppercase tracking-tight">
                  Sant Atulanand Public School
                </h1>
                <p className="text-xs text-slate-500 font-bold">Varanasi, Uttar Pradesh</p>
              </div>
            </div>

            {/* Exact Receipt Card */}
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-4">
              <div className="flex justify-between items-center border-b pb-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-amber-600" />
                  <span className="font-bold text-slate-800 text-sm">Fee Payment Receipt</span>
                </div>
                <span className="text-[11px] font-extrabold bg-green-100 text-green-700 px-2.5 py-1 rounded-full">
                  PAID
                </span>
              </div>

              <div className="grid grid-cols-2 gap-y-3 text-xs">
                <div>
                  <span className="text-slate-500 block font-semibold">Student Name</span>
                  <span className="font-bold text-slate-800">{formData.studentName}</span>
                </div>
                <div>
                  <span className="text-slate-500 block font-semibold">Roll Number</span>
                  <span className="font-bold text-slate-800">{formData.rollNo}</span>
                </div>
                <div>
                  <span className="text-slate-500 block font-semibold">Term / Period</span>
                  <span className="font-bold text-slate-800">{formData.term}</span>
                </div>
                <div>
                  <span className="text-slate-500 block font-semibold">Date & Time</span>
                  <span className="font-bold text-slate-800">{new Date().toLocaleDateString('en-GB')}</span>
                </div>
              </div>

              <div className="pt-3 border-t flex justify-between items-center">
                <span className="text-sm font-bold text-slate-700">Total Amount Paid</span>
                <span className="text-xl font-black text-slate-900">₹{formData.amount}</span>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 2. MAIN WEB APP VIEW: Print ke waqt poora container hide ho jayega */}
      <div className="min-h-screen bg-slate-50 p-4 sm:p-6 print:hidden">
        <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 text-slate-500 hover:text-slate-800 mb-6 font-bold text-xs transition"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>

          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="p-3 bg-amber-100 rounded-xl text-amber-700">
              <CreditCard className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-800">Online Fee Payment</h1>
              <p className="text-xs text-slate-500">Fast & Secure Payment Gateway Portal</p>
            </div>
          </div>

          {!submitted ? (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700">Student Full Name</label>
                  <input 
                    required 
                    type="text" 
                    value={formData.studentName}
                    onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl mt-1 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400" 
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700">Enrollment / Roll No</label>
                  <input 
                    required 
                    type="text" 
                    value={formData.rollNo}
                    onChange={(e) => setFormData({...formData, rollNo: e.target.value})}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl mt-1 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700">Select Term / Quarter</label>
                  <select 
                    value={formData.term}
                    onChange={(e) => setFormData({...formData, term: e.target.value})}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl mt-1 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option>Quarter 1 (Apr - Jun)</option>
                    <option>Quarter 2 (Jul - Sep)</option>
                    <option>Quarter 3 (Oct - Dec)</option>
                    <option>Quarter 4 (Jan - Mar)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700">Fee Amount (₹)</label>
                  <input 
                    required 
                    type="number" 
                    value={formData.amount}
                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl mt-1 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400" 
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 mb-2 block">Choose Payment Mode</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('qr')}
                    className={`p-3 rounded-xl border font-bold text-xs flex items-center justify-center gap-2 transition ${
                      paymentMethod === 'qr' 
                        ? 'border-amber-500 bg-amber-50 text-amber-800' 
                        : 'border-slate-200 bg-slate-50 text-slate-600'
                    }`}
                  >
                    <QrCode className="w-4 h-4" /> Scan QR Code (UPI)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border font-bold text-xs flex items-center justify-center gap-2 transition ${
                      paymentMethod === 'card' 
                        ? 'border-amber-500 bg-amber-50 text-amber-800' 
                        : 'border-slate-200 bg-slate-50 text-slate-600'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" /> Debit / Credit Card
                  </button>
                </div>
              </div>

              {paymentMethod === 'qr' ? (
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center space-y-4">
                  <p className="text-xs font-bold text-slate-700">Scan QR Code using Google Pay, PhonePe, or Paytm</p>
                  
                  <div className="bg-white p-3 inline-block rounded-xl border border-slate-200 shadow-sm">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=saps@upi%26pn=Sant%20Atulanand%20School%26am=${formData.amount}%26cu=INR`} 
                      alt="School Fee Payment QR Code" 
                      className="w-40 h-40 mx-auto"
                    />
                    <p className="text-[10px] font-extrabold text-slate-500 mt-2">UPI ID: saps@upi</p>
                  </div>

                  <div className="pt-2 text-left">
                    <label className="text-xs font-bold text-slate-700 mb-1 block">Upload Payment Screenshot / Receipt Proof</label>
                    <label className="flex items-center justify-center gap-2 p-3 bg-white border border-dashed border-amber-400 rounded-xl cursor-pointer hover:bg-amber-50/50 transition">
                      <Upload className="w-4 h-4 text-amber-600" />
                      <span className="text-xs font-bold text-slate-600">
                        {uploadedReceipt ? uploadedReceipt : 'Choose Screenshot file (JPG, PNG or PDF)'}
                      </span>
                      <input type="file" accept="image/*,.pdf" onChange={handleFileUpload} className="hidden" />
                    </label>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div>
                    <label className="text-xs font-bold text-slate-700">Card Number</label>
                    <input required type="text" placeholder="4532 •••• •••• 8921" className="w-full p-2.5 bg-white border rounded-lg mt-1 text-sm font-semibold" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700">Expiry (MM/YY)</label>
                      <input required type="text" placeholder="08/28" className="w-full p-2.5 bg-white border rounded-lg mt-1 text-sm font-semibold" />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700">CVV</label>
                      <input required type="password" maxLength={3} placeholder="•••" className="w-full p-2.5 bg-white border rounded-lg mt-1 text-sm font-semibold" />
                    </div>
                  </div>
                </div>
              )}

              <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-extrabold py-3.5 rounded-xl transition shadow-sm">
                Confirm & Submit Payment (₹{formData.amount})
              </button>
            </form>
          ) : (

            <div className="space-y-6">
              <div className="text-center py-4 space-y-2">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
                <h3 className="text-2xl font-black text-slate-800">Fee Payment Successful!</h3>
                <p className="text-xs font-semibold text-slate-500">Transaction ID: <b className="text-slate-800">TXN-202688921</b></p>
              </div>

              {/* On-screen Preview Receipt */}
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-4">
                <div className="flex justify-between items-center border-b pb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-amber-600" />
                    <span className="font-bold text-slate-800 text-sm">Fee Payment Receipt</span>
                  </div>
                  <span className="text-[11px] font-extrabold bg-green-100 text-green-700 px-2.5 py-1 rounded-full">PAID</span>
                </div>

                <div className="grid grid-cols-2 gap-y-3 text-xs">
                  <div>
                    <span className="text-slate-500 block font-semibold">Student Name</span>
                    <span className="font-bold text-slate-800">{formData.studentName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block font-semibold">Roll Number</span>
                    <span className="font-bold text-slate-800">{formData.rollNo}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block font-semibold">Term / Period</span>
                    <span className="font-bold text-slate-800">{formData.term}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block font-semibold">Date & Time</span>
                    <span className="font-bold text-slate-800">{new Date().toLocaleDateString('en-GB')}</span>
                  </div>
                </div>

                <div className="pt-3 border-t flex justify-between items-center">
                  <span className="text-sm font-bold text-slate-700">Total Amount Paid</span>
                  <span className="text-xl font-black text-slate-900">₹{formData.amount}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={handlePrintReceipt} 
                  className="flex-1 bg-amber-500 hover:bg-amber-400 text-slate-900 font-extrabold py-3 rounded-xl transition flex items-center justify-center gap-2 text-xs"
                >
                  <Download className="w-4 h-4" /> Download / Print Official Receipt
                </button>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="p-3 border border-slate-300 font-bold text-slate-600 rounded-xl text-xs hover:bg-slate-100 transition"
                >
                  Make Another Payment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}