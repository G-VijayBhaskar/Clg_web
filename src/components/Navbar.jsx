import React, { useState, useEffect } from 'react';
import { ExternalLink, Menu, X } from 'lucide-react';
import { REGISTRATION_FORM_URL } from '../data/eventsData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Absolute Top Dynamic Scrolling Registration Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#050505]/95 border-b border-red-500/40 py-2 overflow-hidden shadow-[0_4px_20px_rgba(239,68,68,0.25)] backdrop-blur-xl">
        <div className="animate-marquee items-center gap-12 font-mono text-xs sm:text-sm text-red-400 font-bold tracking-wider cursor-pointer">
          <span className="inline-flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shrink-0" />
            Date for online registration is September 18, 2026. Spot Registration is also available.
          </span>
          <span className="inline-flex items-center gap-2 text-white font-semibold">
            ✦ TECITON 2026 • NATIONAL LEVEL TECHNICAL SYMPOSIUM ✦
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shrink-0" />
            Date for online registration is September 18, 2026. Spot Registration is also available.
          </span>
          <span className="inline-flex items-center gap-2 text-white font-semibold">
            ✦ DEPARTMENT OF COMPUTER APPLICATIONS (MCA) • NPSBCET ✦
          </span>
        </div>
      </div>

      <header className={`navbar mt-[38px] ${scrolled ? 'scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between pt-1">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-black p-0.5 border border-red-500/60 flex items-center justify-center group-hover:border-red-400 transition-all shadow-[0_0_15px_rgba(239,68,68,0.4)] overflow-hidden">
              <img src="/teciton_logo.jpg" alt="TECITON Logo" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-normal text-white tracking-wide">
                TECITON <span className="italic text-red-500 font-serif">2026</span>
              </span>
              <span className="text-xs text-red-400 uppercase tracking-widest font-semibold font-mono">
                DEPARTMENT OF COMPUTER APPLICATIONS (MCA) • NPSBCET
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-base font-semibold text-white hover:text-red-400 transition-colors">Home</a>
            <a href="#about" className="text-base font-semibold text-white hover:text-red-400 transition-colors">About</a>
            <a href="#events" className="text-base font-semibold text-white hover:text-red-400 transition-colors">Events</a>
            <a href="#rules" className="text-base font-semibold text-white hover:text-red-400 transition-colors">Rules & Regulations</a>
            <a href="#schedule" className="text-base font-semibold text-white hover:text-red-400 transition-colors">Schedule</a>
            <a href="#contact" className="text-base font-semibold text-white hover:text-red-400 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm font-bold"
            >
              <span>Register Now</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#121212] border border-red-500/40 text-red-400"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a]/95 border-b border-red-500/30 px-6 py-6 mt-3 backdrop-blur-xl flex flex-col gap-4">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-semibold text-white hover:text-red-400"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-semibold text-white hover:text-red-400"
            >
              About
            </a>
            <a
              href="#events"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-semibold text-white hover:text-red-400"
            >
              Events
            </a>
            <a
              href="#rules"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-semibold text-white hover:text-red-400"
            >
              Rules & Regulations
            </a>
            <a
              href="#schedule"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-semibold text-white hover:text-red-400"
            >
              Schedule
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-semibold text-white hover:text-red-400"
            >
              Contact
            </a>
            <a
              href={REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center mt-2 text-base font-bold"
            >
              <span>Register Now</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </header>
    </>
  );
}
