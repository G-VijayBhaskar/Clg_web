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
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden">
      <div className="max-w-5xl w-full mx-auto text-center flex flex-col items-center">

        <div className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-1 rounded-full bg-[#081622]/90 border border-sky-400/80 shadow-[0_0_15px_rgba(56,189,248,0.4)] mb-3 mt-2 backdrop-blur-md max-w-full">
          <p className="text-[11px] sm:text-sm font-bold tracking-normal sm:tracking-wider text-sky-300 uppercase font-sans drop-shadow-[0_0_8px_rgba(56,189,248,0.7)] text-center break-words">
            NEW PRINCE SHRI BHAVANI COLLEGE OF ENGINEERING AND TECHNOLOGY
          </p>
        </div>

        <div className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 sm:py-1 rounded-full bg-[#14060d]/90 border border-pink-500/50 text-sky-200 text-[11px] sm:text-sm font-bold uppercase tracking-wider mb-3 shadow-[0_0_15px_rgba(244,63,94,0.35)] max-w-full text-center flex-wrap">
          <GraduationCap className="w-4 h-4 text-pink-400 shrink-0" /> <span className="break-words">DEPARTMENT OF COMPUTER APPLICATIONS (MCA)</span>
        </div>

        <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-pink-300 uppercase my-3 font-mono">
          PROUDLY PRESENTS
        </p>

        {/* Sovereign Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-none mb-5 break-words max-w-full" style={{ textShadow: '0 0 45px rgba(244, 63, 94, 0.75), 0 0 18px rgba(56, 189, 248, 0.7)' }}>
          TECITON <span className="italic text-pink-400 font-serif">2026</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-white max-w-3xl font-bold leading-relaxed mb-8 px-1">
          A National-Level Technical Symposium organized by the <strong className="text-sky-300 font-extrabold">Department of Computer Applications (MCA)</strong>, New Prince Shri Bhavani College of Engineering and Technology, bringing together technology enthusiasts to showcase their skills, creativity, and innovation.
        </p>

        {/* Telemetry Stat Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-3xl mb-10">
          <div className="glass-card p-4 text-left border-pink-500/30 bg-[#0e0409]/95">
            <Calendar className="w-5 h-5 text-sky-400 mb-2" />
            <span className="text-[11px] text-pink-300 uppercase tracking-wider block font-semibold">Event Date</span>
            <strong className="text-sm sm:text-base text-white font-bold block">SEPTEMBER 19, 2026</strong>
          </div>

          <div className="glass-card p-4 text-left border-pink-500/30 bg-[#0e0409]/95">
            <MapPin className="w-5 h-5 text-pink-400 mb-2" />
            <span className="text-[11px] text-sky-300 uppercase tracking-wider block font-semibold">Venue</span>
            <strong className="text-sm sm:text-base text-white font-bold block truncate">NPSBCET Campus, Chennai</strong>
          </div>

          <div className="glass-card p-4 text-left border-pink-500/30 bg-[#0e0409]/95">
            <Clock className="w-5 h-5 text-sky-400 mb-2" />
            <span className="text-[11px] text-pink-300 uppercase tracking-wider block font-semibold">Deadline</span>
            <strong className="text-sm sm:text-base text-white font-bold block">SEPTEMBER 18, 2026</strong>
          </div>
        </div>

        {/* Cybernetic HUD Countdown Timer */}
        <div className="mb-10 w-full max-w-xl p-3 sm:p-5 rounded-2xl glass-card border-pink-500/40 bg-[#0e0409]/95 shadow-[0_0_35px_rgba(244,63,94,0.25)]">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-sky-300 uppercase tracking-widest mb-4">
            <Zap className="w-4 h-4 text-pink-400" />
            <span>SYMPOSIUM BEGINS IN</span>
          </div>
          <div className="grid grid-cols-4 gap-1.5 sm:gap-4 text-center">
            <div className="bg-[#180610] p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-pink-500/40 shadow-[0_0_20px_rgba(244,63,94,0.25)] min-w-0">
              <span className="text-xl sm:text-4xl font-bold font-mono text-white drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="text-[10px] sm:text-xs text-sky-300 uppercase block font-semibold mt-1">Days</span>
            </div>
            <div className="bg-[#180610] p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-pink-500/40 shadow-[0_0_20px_rgba(244,63,94,0.25)] min-w-0">
              <span className="text-xl sm:text-4xl font-bold font-mono text-white drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-[10px] sm:text-xs text-pink-300 uppercase block font-semibold mt-1">Hours</span>
            </div>
            <div className="bg-[#180610] p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-pink-500/40 shadow-[0_0_20px_rgba(244,63,94,0.25)] min-w-0">
              <span className="text-xl sm:text-4xl font-bold font-mono text-white drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-[10px] sm:text-xs text-sky-300 uppercase block font-semibold mt-1">Mins</span>
            </div>
            <div className="bg-[#180610] p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-pink-500/40 shadow-[0_0_20px_rgba(244,63,94,0.25)] min-w-0">
              <span className="text-xl sm:text-4xl font-bold font-mono text-white drop-shadow-[0_0_12px_rgba(244,63,94,0.8)]">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="text-[10px] sm:text-xs text-pink-300 uppercase block font-semibold mt-1">Secs</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md">
          <a
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto text-sm sm:text-base min-h-[48px] sm:min-h-[52px]"
          >
            <ShieldCheck className="w-5 h-5" />
            <span>REGISTER NOW</span>
            <ExternalLink className="w-5 h-5" />
          </a>
          <a
            href="#events"
            className="btn-secondary w-full sm:w-auto text-sm sm:text-base min-h-[48px] sm:min-h-[52px]"
          >
            <Layers className="w-5 h-5 text-rose-400" />
            <span>Explore Events</span>
          </a>
        </div>

      </div>
    </section>
  );
}

