import React from 'react';
import { Clock, Shield, Sparkles } from 'lucide-react';
import DoomMaskIcon from './DoomMaskIcon';

export default function ScheduleSection() {
  return (
    <section id="schedule" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-red-500/40 text-red-400 text-xs font-semibold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
            <Shield className="w-4 h-4 text-red-400" /> TIMELINE OF EVENTS
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight mb-4">
            Symposium <span className="italic text-red-500 font-serif">Schedule</span>
          </h2>
        </div>

        {/* Coming Soon Display Card */}
        <div className="glass-card p-10 sm:p-16 text-center border-red-500/40 bg-[#0e0e0e]/95 shadow-[0_0_50px_rgba(239,68,68,0.25)] relative overflow-hidden flex flex-col items-center justify-center">
          <div className="w-20 h-20 rounded-2xl bg-[#181818] border border-red-500/50 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(239,68,68,0.4)] animate-pulse">
            <DoomMaskIcon className="w-12 h-12 text-red-400" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181818] border border-red-400/40 text-red-400 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Clock className="w-4 h-4 text-red-400 animate-spin" style={{ animationDuration: '4s' }} />
            <span>FULL SCHEDULE RELEASE</span>
          </div>

          <h3 className="font-serif text-5xl sm:text-7xl font-extrabold text-white tracking-wider uppercase mb-4" style={{ textShadow: '0 0 40px rgba(239, 68, 68, 0.6)' }}>
            COMING SOON
          </h3>

          <p className="text-slate-200 text-base sm:text-lg max-w-xl font-light leading-relaxed mb-6">
            The official symposium schedule, event timings, and venue details for TECITON 2026 will be released shortly. Stay tuned!
          </p>

          <div className="flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-widest font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>EVENT DATE: SEPTEMBER 19, 2026</span>
            <Sparkles className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
