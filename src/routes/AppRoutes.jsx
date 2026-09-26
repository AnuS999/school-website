import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import PayFeePage from '../pages/PayFeePage'; // <-- Import Fee Page
import CbseResultPage from '../pages/CbseResultPage';
import SyllabusPage from '../pages/SyllabusPage';
import AdmissionPage from '../pages/AdmissionPage';
import GalleryPage from '../pages/GalleryPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pay-fee" element={<PayFeePage />} /> {/* <-- New Fee Route */}
      <Route path="/cbse-result" element={<CbseResultPage />} />
      <Route path="/syllabus-routine" element={<SyllabusPage />} />
      <Route path="/admission" element={<AdmissionPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}