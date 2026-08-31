import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, GraduationCap, ExternalLink, Layers, ShieldCheck, Zap } from 'lucide-react';
import { EVENT_DATE, REGISTRATION_FORM_URL } from '../data/eventsData';

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState(() => {
    const now = new Date().getTime();
    const distance = EVENT_DATE - now;
    if (distance <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    };
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = EVENT_DATE - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        
        <p className="text-sm sm:text-base md:text-xl font-bold tracking-wider text-red-400 uppercase mb-3 mt-4 font-sans drop-shadow-[0_0_12px_rgba(239,68,68,0.5)]">
          NEW PRINCE SHRI BHAVANI COLLEGE OF ENGINEERING AND TECHNOLOGY
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121212] border border-red-500/50 text-white text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(239,68,68,0.35)]">
          <GraduationCap className="w-4 h-4 text-red-400" /> DEPARTMENT OF COMPUTER APPLICATIONS (MCA)
        </div>

        <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-red-400 uppercase my-3 font-mono">
          PROUDLY PRESENTS
        </p>

        {/* Sovereign Title */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight text-white leading-none mb-6" style={{ textShadow: '0 0 50px rgba(239, 68, 68, 0.6), 0 0 20px rgba(255, 255, 255, 0.6)' }}>
          TECITON <span className="italic text-red-500 font-serif">2026</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-3xl font-light leading-relaxed mb-10">
          A National-Level Technical Symposium organized by the <strong className="text-red-400 font-semibold">Department of Computer Applications (MCA)</strong>, New Prince Shri Bhavani College of Engineering and Technology, bringing together technology enthusiasts to showcase their skills, creativity, and innovation.
        </p>

        {/* Telemetry Stat Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-3xl mb-10">
          <div className="glass-card p-4 text-left border-red-500/30 bg-[#0e0e0e]/95">
            <Calendar className="w-5 h-5 text-red-400 mb-2" />
            <span className="text-[11px] text-slate-300 uppercase tracking-wider block font-semibold">Event Date</span>
            <strong className="text-sm sm:text-base text-white font-bold block">SEPTEMBER 19, 2026</strong>
          </div>

          <div className="glass-card p-4 text-left border-red-500/30 bg-[#0e0e0e]/95">
            <MapPin className="w-5 h-5 text-red-400 mb-2" />
            <span className="text-[11px] text-slate-300 uppercase tracking-wider block font-semibold">Venue</span>
            <strong className="text-sm sm:text-base text-white font-bold block truncate">NPSBCET Campus, Chennai</strong>
          </div>

          <div className="glass-card p-4 text-left border-red-500/30 bg-[#0e0e0e]/95">
            <Clock className="w-5 h-5 text-red-400 mb-2" />
            <span className="text-[11px] text-slate-300 uppercase tracking-wider block font-semibold">Deadline</span>
            <strong className="text-sm sm:text-base text-white font-bold block">SEP 18, 2026</strong>
          </div>
        </div>

        {/* Cybernetic HUD Countdown Timer */}
        <div className="mb-10 w-full max-w-xl p-4 sm:p-5 rounded-2xl glass-card border-red-500/40 bg-[#0e0e0e]/95 shadow-[0_0_35px_rgba(239,68,68,0.2)]">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-red-400 uppercase tracking-widest mb-4">
            <Zap className="w-4 h-4 text-red-400" />
            <span>SYMPOSIUM BEGINS IN</span>
          </div>
          <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
            <div className="bg-[#181818] p-3 rounded-2xl border border-red-500/40 shadow-[0_0_20px_rgba(239,68,68,0.25)]">
              <span className="text-2xl sm:text-4xl font-bold font-mono text-white drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="text-[10px] sm:text-xs text-red-400 uppercase block font-semibold mt-1">Days</span>
            </div>
            <div className="bg-[#181818] p-3 rounded-2xl border border-red-500/40 shadow-[0_0_20px_rgba(239,68,68,0.25)]">
              <span className="text-2xl sm:text-4xl font-bold font-mono text-white drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-[10px] sm:text-xs text-red-400 uppercase block font-semibold mt-1">Hours</span>
            </div>
            <div className="bg-[#181818] p-3 rounded-2xl border border-red-500/40 shadow-[0_0_20px_rgba(239,68,68,0.25)]">
              <span className="text-2xl sm:text-4xl font-bold font-mono text-white drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-[10px] sm:text-xs text-red-400 uppercase block font-semibold mt-1">Mins</span>
            </div>
            <div className="bg-[#181818] p-3 rounded-2xl border border-red-500/40 shadow-[0_0_20px_rgba(239,68,68,0.25)]">
              <span className="text-2xl sm:text-4xl font-bold font-mono text-white drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="text-[10px] sm:text-xs text-red-400 uppercase block font-semibold mt-1">Secs</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <a
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto text-base min-h-[52px]"
          >
            <ShieldCheck className="w-5 h-5" />
            <span>REGISTER NOW</span>
            <ExternalLink className="w-5 h-5" />
          </a>
          <a
            href="#events"
            className="btn-secondary w-full sm:w-auto text-base min-h-[52px]"
          >
            <Layers className="w-5 h-5 text-red-400" />
            <span>Explore Events</span>
          </a>
        </div>

      </div>
    </section>
  );
}
