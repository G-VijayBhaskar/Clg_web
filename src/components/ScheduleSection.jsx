import React from 'react';
import { Clock, Shield, Sparkles } from 'lucide-react';
import DoomMaskIcon from './DoomMaskIcon';

export default function ScheduleSection() {
  return (
    <section id="schedule" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14060d] border border-pink-500/40 text-sky-300 text-xs font-semibold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
            <Shield className="w-4 h-4 text-pink-400" /> TIMELINE OF EVENTS
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight mb-4">
            Symposium <span className="italic text-pink-400 font-serif">Schedule</span>
          </h2>
        </div>

        {/* Coming Soon Display Card */}
        <div className="glass-card p-8 sm:p-14 text-center border-pink-500/40 bg-[#0e0409]/95 shadow-[0_0_50px_rgba(244,63,94,0.25)] relative overflow-hidden flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-[#180610] border border-pink-500/50 flex items-center justify-center mb-5 shadow-[0_0_30px_rgba(244,63,94,0.4)] animate-pulse">
            <DoomMaskIcon className="w-10 h-10 text-sky-400" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#081622] border border-sky-400/40 text-sky-300 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Clock className="w-4 h-4 text-pink-400 animate-spin" style={{ animationDuration: '4s' }} />
            <span>FULL SCHEDULE RELEASE</span>
          </div>

          <h3 className="font-serif text-4xl sm:text-6xl font-extrabold text-white tracking-wider uppercase mb-3" style={{ textShadow: '0 0 35px rgba(244, 63, 94, 0.75), 0 0 12px rgba(56, 189, 248, 0.6)' }}>
            COMING SOON
          </h3>

          <p className="text-sky-100 text-base sm:text-lg max-w-xl font-bold leading-relaxed mb-5">
            The official symposium schedule, event timings, and venue details for TECITON 2026 will be released shortly. Stay tuned!
          </p>

          <div className="flex items-center gap-2 text-xs font-mono text-pink-300 uppercase tracking-widest font-semibold">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>EVENT DATE: SEPTEMBER 19, 2026</span>
            <Sparkles className="w-4 h-4 text-sky-400" />
          </div>
        </div>
      </div>
    </section>
  );
}

