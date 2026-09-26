import React, { useState } from "react";
import { X, CreditCard, Search, CheckCircle2, ArrowRight, Upload, QrCode, Building, Download } from "lucide-react";

export default function FeePaymentModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [admissionNo, setAdmissionNo] = useState("");
  const [studentData, setStudentData] = useState(null);
  const [error, setError] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [txnId, setTxnId] = useState("");

  // Custom QR Image State
  const [customQrImage, setCustomQrImage] = useState(
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=schoolfee@saps&pn=SantAtulanandPublicSchool"
  );

  if (!isOpen) return null;

  const handleSearch = (e) => {
    e.preventDefault();
    if (!admissionNo.trim()) {
      setError("Kripya Admission / Student ID enter karein.");
      return;
    }

    setError("");
    setStudentData({
      name: "Rahul Sharma",
      class: "Class X - Section A",
      fatherName: "Rajesh Sharma",
      admissionNo: admissionNo.toUpperCase(),
      dueDate: "15 Oct 2026",
      quarter: "Q3 Fee (Oct - Dec 2026)",
      feeBreakup: [
        { title: "Tuition Fee", amount: 12500 },
        { title: "Computer & Lab Fee", amount: 1500 },
        { title: "Exam Fee", amount: 800 },
        { title: "Library & Sports Fee", amount: 700 }
      ],
      totalAmount: 15500
    });
    setStep(2);
  };

  const handleQrUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUri = URL.createObjectURL(file);
      setCustomQrImage(imageUri);
    }
  };

  const handlePayNow = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setTxnId(`TXN-${Math.floor(100000 + Math.random() * 900000)}`);
      setPaymentSuccess(true);
    }, 2000);
  };

  // Receipt Print & Download Handler
  const handleDownloadReceipt = () => {
    const printContent = document.getElementById("printable-receipt");
    const WinPrint = window.open("", "", "width=800,height=900");
    
    WinPrint.document.write(`
      <html>
        <head>
          <title>Fee_Receipt_${studentData.admissionNo}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; color: #1e293b; }
            .receipt-box { border: 2px solid #0f172a; padding: 24px; border-radius: 12px; max-width: 600px; margin: auto; }
            .header { text-align: center; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 16px; }
            .header h2 { margin: 0; font-size: 20px; color: #0f172a; }
            .header p { margin: 4px 0 0; font-size: 12px; color: #64748b; }
            .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 13px; margin-bottom: 20px; }
            .info-item span { display: block; color: #64748b; font-size: 11px; }
            .info-item strong { color: #0f172a; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13px; }
            th, td { border: 1px solid #cbd5e1; padding: 8px 12px; text-align: left; }
            th { background-color: #f8fafc; font-weight: bold; }
            .total { font-size: 15px; font-weight: bold; text-align: right; padding-top: 10px; color: #d97706; }
            .footer { text-align: center; margin-top: 30px; font-size: 11px; color: #94a3b8; border-top: 1px dashed #cbd5e1; padding-top: 10px; }
          </style>
        </head>
        <body>
          ${printContent.innerHTML}
        </body>
      </html>
    `);

    WinPrint.document.close();
    WinPrint.focus();
    setTimeout(() => {
      WinPrint.print();
      WinPrint.close();
      resetAndClose();
    }, 500);
  };

  const resetAndClose = () => {
    setStep(1);
    setAdmissionNo("");
    setStudentData(null);
    setPaymentSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative">
        
        {/* Modal Header */}
        <div className="bg-slate-900 p-5 text-white flex justify-between items-center border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-500 rounded-xl text-slate-900 shadow">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-sm uppercase tracking-wider text-white">Online Fee Payment</h3>
              <p className="text-[10px] text-amber-400 font-semibold">Sant Atulanand Public School Portal</p>
            </div>
          </div>
          <button 
            onClick={resetAndClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6">

          {/* STEP 1: Search Student */}
          {step === 1 && (
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-800">
                  Admission Number / Student ID
                </label>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="e.g. SAPS101 or SAPS-2024-089"
                    value={admissionNo}
                    onChange={(e) => setAdmissionNo(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-extrabold text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition"
                  />
                </div>
                {error && <p className="text-xs text-red-500 font-bold">{error}</p>}
              </div>

              <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl text-[11px] text-amber-900 font-medium">
                💡 **Note:** Sample ID enter karke check karein (jaise: <b>SAPS101</b>).
              </div>

              <button 
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-extrabold text-xs py-3 rounded-xl transition shadow-md flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                FETCH FEE DETAILS <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* STEP 2: Payment Selection */}
          {step === 2 && !paymentSuccess && (
            <div className="space-y-4">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs flex justify-between items-center">
                <div>
                  <h4 className="font-extrabold text-slate-900">{studentData.name} ({studentData.admissionNo})</h4>
                  <p className="text-[11px] text-slate-500">{studentData.class} | {studentData.quarter}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block">Total Payable</span>
                  <span className="text-amber-600 font-black text-sm">₹{studentData.totalAmount.toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-800">Select Payment Method</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "upi", label: "UPI / QR Code", icon: QrCode },
                    { id: "card", label: "Debit/Credit Card", icon: CreditCard },
                    { id: "netbanking", label: "Net Banking", icon: Building }
                  ].map((method) => {
                    const Icon = method.icon;
                    return (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setPaymentMethod(method.id)}
                        className={`p-2.5 rounded-xl text-[11px] font-bold border transition flex flex-col items-center justify-center gap-1 ${
                          paymentMethod === method.id 
                            ? "bg-amber-500 border-amber-500 text-slate-900 shadow-sm" 
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{method.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {paymentMethod === "upi" && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col items-center text-center space-y-3">
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm">
                    <img src={customQrImage} alt="Payment QR Code" className="w-32 h-32 object-contain" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-800">Scan & Pay via GooglePay / PhonePe / Paytm</p>
                    <p className="text-[10px] text-slate-500">Official UPI ID: <b>saps.fee@upi</b></p>
                  </div>
                  <label className="cursor-pointer bg-white border border-slate-300 hover:border-amber-500 text-slate-700 text-[11px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm transition">
                    <Upload className="w-3.5 h-3.5 text-amber-600" />
                    <span>Upload Custom QR Code</span>
                    <input type="file" accept="image/*" onChange={handleQrUpload} className="hidden" />
                  </label>
                </div>
              )}

              {paymentMethod === "card" && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-2.5">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700">Card Number</label>
                    <input type="text" placeholder="4532 •••• •••• 8921" className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-semibold focus:outline-none focus:border-amber-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700">Expiry (MM/YY)</label>
                      <input type="text" placeholder="08/28" className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-semibold focus:outline-none focus:border-amber-500" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700">CVV</label>
                      <input type="password" placeholder="•••" maxLength={3} className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-semibold focus:outline-none focus:border-amber-500" />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "netbanking" && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-2">
                  <label className="text-[11px] font-bold text-slate-700">Select Bank</label>
                  <select className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-semibold focus:outline-none focus:border-amber-500">
                    <option>State Bank of India (SBI)</option>
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                    <option>Axis Bank</option>
                  </select>
                </div>
              )}

              <div className="flex gap-2 pt-1">
                <button type="button" onClick={() => setStep(1)} className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-3 rounded-xl transition">
                  Back
                </button>
                <button type="button" onClick={handlePayNow} disabled={isProcessing} className="w-2/3 bg-slate-900 hover:bg-slate-800 text-amber-400 font-extrabold text-xs py-3 rounded-xl transition shadow-md flex items-center justify-center gap-2">
                  {isProcessing ? "Processing Payment..." : `PAY ₹${studentData.totalAmount.toLocaleString()}`}
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Payment Success & Receipt Trigger */}
          {paymentSuccess && (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-black text-slate-900">Payment Successful!</h4>
                <p className="text-xs text-slate-500">Transaction ID: <b>{txnId}</b></p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs space-y-1.5 text-left">
                <div className="flex justify-between">
                  <span className="text-slate-500">Student Name:</span>
                  <span className="font-bold text-slate-800">{studentData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Amount Paid:</span>
                  <span className="font-extrabold text-amber-600">₹{studentData.totalAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Payment Mode:</span>
                  <span className="font-bold uppercase text-slate-800">{paymentMethod}</span>
                </div>
              </div>

              <button 
                onClick={handleDownloadReceipt}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-extrabold text-xs py-3 rounded-xl transition shadow-md flex items-center justify-center gap-2 active:scale-95"
              >
                <Download className="w-4 h-4" /> DOWNLOAD RECEIPT & CLOSE
              </button>
            </div>
          )}

        </div>

      </div>

      {/* HIDDEN PRINTABLE RECEIPT TEMPLATE */}
      {studentData && (
        <div id="printable-receipt" className="hidden">
          <div className="receipt-box">
            <div className="header">
              <h2>SANT ATULANAND PUBLIC SCHOOL</h2>
              <p>Varanasi, Uttar Pradesh | Official Fee Receipt</p>
            </div>

            <div className="info-grid">
              <div className="info-item">
                <span>Student Name</span>
                <strong>{studentData.name}</strong>
              </div>
              <div className="info-item">
                <span>Admission No</span>
                <strong>{studentData.admissionNo}</strong>
              </div>
              <div className="info-item">
                <span>Class & Section</span>
                <strong>{studentData.class}</strong>
              </div>
              <div className="info-item">
                <span>Father's Name</span>
                <strong>{studentData.fatherName}</strong>
              </div>
              <div className="info-item">
                <span>Transaction ID</span>
                <strong>{txnId}</strong>
              </div>
              <div className="info-item">
                <span>Payment Date</span>
                <strong>{new Date().toLocaleDateString()}</strong>
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Particulars</th>
                  <th style={{ textAlign: "right" }}>Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                {studentData.feeBreakup.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.title}</td>
                    <td style={{ textAlign: "right" }}>₹{item.amount.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="total">
              Total Amount Paid: ₹{studentData.totalAmount.toLocaleString()}
            </div>

            <div className="footer">
              This is a computer-generated receipt and does not require a physical signature.
            </div>
          </div>
        </div>
      )}

    </div>
  );
}