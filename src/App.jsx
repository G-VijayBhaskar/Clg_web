import React, { useState } from 'react';
import DoomThroneBackground from './components/DoomThroneBackground';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import GeneralRulesSection from './components/GeneralRulesSection';
import EventModal from './components/EventModal';
import ScheduleSection from './components/ScheduleSection';
import RegistrationCTA from './components/RegistrationCTA';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isLowMotion, setIsLowMotion] = useState(false);

  const togglePerformanceMode = () => {
    setIsLowMotion((prev) => !prev);
  };

  return (
    <div className={`relative min-h-screen bg-[#050207] text-white font-sans selection:bg-rose-600/50 selection:text-white ${isLowMotion ? 'low-motion' : ''}`}>
      {/* Squid Game Rose Ambient Background */}
      <DoomThroneBackground />

      {/* Cinematic Loading Overlay */}
      <LoadingScreen isLowMotion={isLowMotion} />

      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection isLowMotion={isLowMotion} />
        <AboutSection />
        <EventsSection onOpenModal={(evt) => setSelectedEvent(evt)} isLowMotion={isLowMotion} />
        <GeneralRulesSection />
        <ScheduleSection />
        <RegistrationCTA />
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Event Details Modal Popup */}
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
}


