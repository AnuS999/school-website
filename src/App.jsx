import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Facilities } from './components/Facilities';
import { NoticeBoard } from './components/NoticeBoard';
import { Gallery } from './components/Gallery';
import { AdmissionAndContact } from './components/AdmissionAndContact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow w-full">
        <Hero />
        <About />
        <Facilities />
        <NoticeBoard />
        <Gallery />
        <AdmissionAndContact />
      </main>
      <Footer />
    </div>
  );
}

export default App;