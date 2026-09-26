import React, { useState } from "react";
import { 
  CreditCard, 
  Award, 
  FileSpreadsheet, 
  UserPlus, 
  Image as ImageIcon 
} from "lucide-react";

// Modal Components Import
import FeePaymentModal from "./FeePaymentModal";
import CbseResultModal from "./CbseResultModal";
import SyllabusModal from "./SyllabusModal";
import AdmissionModal from "./AdmissionModal";

export default function QuickAccessCards({ onOpenGallery }) {
  // State for active modal: 'fee' | 'cbse' | 'syllabus' | 'admission' | null
  const [activeModal, setActiveModal] = useState(null);

  const quickLinks = [
    { 
      icon: CreditCard, 
      title: "Pay Online Fee", 
      desc: "Fast & Secure Payment",
      action: () => setActiveModal("fee")
    },
    { 
      icon: Award, 
      title: "CBSE Result", 
      desc: "Session 2025-26",
      action: () => setActiveModal("cbse")
    },
    { 
      icon: FileSpreadsheet, 
      title: "Syllabus & Routine", 
      desc: "Download PDFs",
      action: () => setActiveModal("syllabus")
    },
    { 
      icon: UserPlus, 
      title: "Online Admission", 
      desc: "Apply for 2026-27",
      action: () => setActiveModal("admission")
    },
    { 
      icon: ImageIcon, 
      title: "School Gallery", 
      desc: "Events & Campus Media",
      action: onOpenGallery || (() => alert("School Gallery page view / modal trigger!"))
    },
  ];

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {quickLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                onClick={item.action}
                className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-400 transition-all duration-300 text-center flex flex-col items-center justify-center space-y-2.5 cursor-pointer group"
              >
                <div className="p-3 bg-amber-50 rounded-xl text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-slate-800 leading-snug group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] font-medium text-slate-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ALL INTEGRATED MODALS */}
      <FeePaymentModal 
        isOpen={activeModal === "fee"} 
        onClose={() => setActiveModal(null)} 
      />

      <CbseResultModal 
        isOpen={activeModal === "cbse"} 
        onClose={() => setActiveModal(null)} 
      />

      <SyllabusModal 
        isOpen={activeModal === "syllabus"} 
        onClose={() => setActiveModal(null)} 
      />

      <AdmissionModal 
        isOpen={activeModal === "admission"} 
        onClose={() => setActiveModal(null)} 
      />
    </>
  );
}