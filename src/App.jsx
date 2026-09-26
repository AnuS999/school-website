import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom"; // <-- Removed BrowserRouter / Router from here
// Components
import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import NoticeBoard from "./components/NoticeBoard";
import QuickAccessCards from "./components/QuickAccessCards";
import StatsSection from "./components/StatsSection";
import PrincipalMessage from "./components/PrincipalMessage";
import GallerySection from "./components/GallerySection";
import Footer from "./components/Footer";
import PayFeePage from "./pages/PayFeePage";
import CbseResultPage from "./pages/CbseResultPage";
import SyllabusPage from "./pages/SyllabusPage";
import AdmissionPage from "./pages/AdmissionPage";
import GalleryPage from "./pages/GalleryPage";
// Modals & Pages
import LoginModal from "./components/LoginModal";
import CmsDashboard from "./pages/CmsDashboard";



// Home Page Content Wrapper
function HomeContent({ setShowLoginModal, setShowFeeModal, notices, gallery }) {
  return (
    <main className="max-w-7xl mx-auto px-4 py-6 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <HeroCarousel />
        <NoticeBoard notices={notices} />
      </div>

      <QuickAccessCards onOpenFeeModal={() => setShowFeeModal(true)} />
      <StatsSection />
      <PrincipalMessage />
      <GallerySection gallery={gallery} />
    </main>
  );
}

export default function App() {
  const [showCms, setShowCms] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showFeeModal, setShowFeeModal] = useState(false);

  // Redux state
  const { notices, gallery } = useSelector((state) => state.cms || { notices: [], gallery: [] });

  if (showCms) {
    return <CmsDashboard onClose={() => setShowCms(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans selection:bg-amber-400 selection:text-slate-900">
      <Header onOpenLogin={() => setShowLoginModal(true)} />

      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
        onSuccess={() => {
          setShowLoginModal(false);
          setShowCms(true);
        }} 
      />

   

      <Routes>
        <Route 
          path="/" 
          element={
            <HomeContent 
              setShowLoginModal={setShowLoginModal} 
              setShowFeeModal={setShowFeeModal} 
              notices={notices} 
              gallery={gallery} 
            />
          } 
        />
     <Route path="/pay-fee" element={<PayFeePage />} />
        <Route path="/cbse-result" element={<CbseResultPage />} />
        <Route path="/syllabus-routine" element={<SyllabusPage />} />
        <Route path="/admission" element={<AdmissionPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="*" element={<HomeContent setShowLoginModal={setShowLoginModal} setShowFeeModal={setShowFeeModal} notices={notices} gallery={gallery} />} />
      </Routes>

      <Footer onOpenLogin={() => setShowLoginModal(true)} />
    </div>
  );
}