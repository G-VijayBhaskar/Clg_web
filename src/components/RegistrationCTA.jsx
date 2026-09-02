import React from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { REGISTRATION_FORM_URL } from '../data/eventsData';
import DoomMaskIcon from './DoomMaskIcon';

export default function RegistrationCTA() {
  return (
    <section id="register" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div
          className="glass-card p-8 sm:p-12 text-center border-rose-500/50 bg-[#0e0409]/95 shadow-[0_0_50px_rgba(244,63,94,0.3)] relative overflow-hidden"
        >
          <div className="flex justify-center mb-3">
            <DoomMaskIcon className="w-12 h-12 text-sky-400" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#081622] text-sky-300 text-xs font-semibold uppercase mb-4 border border-sky-400/40">
            <ShieldCheck className="w-4 h-4 text-pink-400" /> REGISTRATION PORTAL
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white mb-4">
            Claim Your Spot at <span className="italic text-pink-400 font-serif">TECITON 2026</span>
          </h2>

          <p className="text-sky-100 text-lg sm:text-xl max-w-2xl mx-auto mb-8 font-bold">
            Registration deadline closes on <strong className="text-white font-extrabold">SEPTEMBER 18, 2026 - 11:59 PM</strong>. Register your guild via the official Google Form below.
          </p>

          <a
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-10 py-4 text-lg font-bold"
          >
            <span>OPEN OFFICIAL REGISTRATION FORM</span>
            <ExternalLink className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

