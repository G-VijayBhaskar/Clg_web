import React from 'react';
import { REGISTRATION_FORM_URL } from '../data/eventsData';

export default function Footer() {
  return (
    <footer className="border-t border-rose-500/30 bg-[#050207]/95 py-12 px-4 sm:px-6 lg:px-8 text-center sm:text-left relative z-10 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="font-serif text-2xl font-normal text-white">
            TECITON <span className="text-pink-400 italic font-serif">2026</span>
          </h2>
          <p className="text-xs text-sky-200 font-light break-words">
            New Prince Shri Bhavani College of Engineering and Technology • Department of Computer Applications (MCA)
          </p>
          <small className="text-[11px] text-sky-300/80">© 2026 TECITON. All rights reserved.</small>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-sky-200">
          <a href="#home" className="hover:text-pink-300 transition-colors">Home</a>
          <a href="#about" className="hover:text-sky-300 transition-colors">About</a>
          <a href="#events" className="hover:text-pink-300 transition-colors">Events</a>
          <a href="#rules" className="hover:text-sky-300 transition-colors">Rules & Regulations</a>
          <a href="#schedule" className="hover:text-pink-300 transition-colors">Schedule</a>
          <a
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 font-semibold hover:text-sky-300 transition-colors"
          >
            Register Now
          </a>
          <a href="#contact" className="hover:text-sky-300 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}

