import React from 'react';
import { REGISTRATION_FORM_URL } from '../data/eventsData';

export default function Footer() {
  return (
    <footer className="border-t border-red-500/30 bg-[#080203]/95 py-12 px-4 sm:px-6 lg:px-8 text-center sm:text-left relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="font-serif text-2xl font-normal text-white">
            TECITON <span className="text-red-500 italic font-serif">2026</span>
          </h2>
          <p className="text-xs text-slate-300 font-light">
            New Prince Shri Bhavani College of Engineering and Technology • Department of Computer Applications (MCA)
          </p>
          <small className="text-[11px] text-slate-400">© 2026 TECITON. All rights reserved. Red & White Edition.</small>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-200">
          <a href="#home" className="hover:text-red-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-red-400 transition-colors">About</a>
          <a href="#events" className="hover:text-red-400 transition-colors">Events</a>
          <a href="#rules" className="hover:text-red-400 transition-colors">Rules & Regulations</a>
          <a href="#schedule" className="hover:text-red-400 transition-colors">Schedule</a>
          <a
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 font-semibold hover:text-red-300 transition-colors"
          >
            Register Now
          </a>
          <a href="#contact" className="hover:text-red-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
