import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  CreditCard, 
  Award, 
  FileSpreadsheet, 
  UserPlus, 
  Image as ImageIcon 
} from "lucide-react";

export default function QuickAccessCards() {
  const navigate = useNavigate();

  const quickLinks = [
    { 
      icon: CreditCard, 
      title: "Pay Online Fee", 
      desc: "Fast & Secure Payment",
      path: "/pay-fee" // <-- Fee Payment Route
    },
    { 
      icon: Award, 
      title: "CBSE Result", 
      desc: "Session 2025-26",
      path: "/cbse-result"
    },
    { 
      icon: FileSpreadsheet, 
      title: "Syllabus & Routine", 
      desc: "Download PDFs",
      path: "/syllabus-routine"
    },
    { 
      icon: UserPlus, 
      title: "Online Admission", 
      desc: "Apply for 2026-27",
      path: "/admission"
    },
    { 
      icon: ImageIcon, 
      title: "School Gallery", 
      desc: "Events & Campus Media",
      path: "/gallery"
    },
  ];

  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {quickLinks.map((item, index) => {
        const Icon = item.icon;
        return (
          <div 
            key={index} 
            onClick={() => navigate(item.path)}
            className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-amber-400 transition-all duration-300 transform hover:-translate-y-1 text-center flex flex-col items-center justify-center space-y-2.5 cursor-pointer group"
          >
            <div className="p-3 bg-amber-100 rounded-xl text-amber-700 group-hover:bg-amber-500 group-hover:text-slate-900 group-hover:rotate-6 transition duration-300 shadow-sm">
              <Icon className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-slate-900 leading-snug group-hover:text-amber-600 transition">
                {item.title}
              </h4>
              <p className="text-[10px] font-semibold text-slate-500 mt-0.5">
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}