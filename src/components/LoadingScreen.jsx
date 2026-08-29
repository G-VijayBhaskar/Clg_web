import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Zap, Activity, Shield } from 'lucide-react';
import DoomMaskIcon from './DoomMaskIcon';

export default function LoadingScreen({ isLowMotion = false }) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [hidden, setHidden] = useState(false);
  const canvasRef = useRef(null);

  const statusMessages = [
    "[01/10] INITIALIZING LATVERIAN DOOM PROTOCOLS...",
    "[02/10] SYNCHRONIZING QUANTUM MAINFRAME NODES...",
    "[03/10] CALIBRATING TITANIUM MASK GRAPHICS ENGINE...",
    "[04/10] LOADING ARCANE VECTOR SHADERS...",
    "[05/10] CHARGING EMERALD RECTOR CORE MATRIX...",
    "[06/10] ACCESSING SOVEREIGN SYMPOSIUM DATABASE...",
    "[07/10] ENGAGING HIGH-LATITUDE CYBER DEFENSES...",
    "[08/10] VERIFYING CONTESTANT CREDENTIALS WITH DOOM...",
    "[09/10] LATVERIA COMMAND CENTER FULLY CHARGED...",
    "[10/10] SOVEREIGN ACCESS GRANTED: WELCOME TO TECITON 2026"
  ];

  // 1. Progress & Status Ticker (Exactly 5 Seconds Duration)
  useEffect(() => {
    const totalDuration = 5000; // 5 seconds duration
    const intervalTime = 30;
    const step = 100 / (totalDuration / intervalTime);


    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + step, 100);

        if (next < 10) setStatusIndex(0);
        else if (next < 20) setStatusIndex(1);
        else if (next < 30) setStatusIndex(2);
        else if (next < 40) setStatusIndex(3);
        else if (next < 50) setStatusIndex(4);
        else if (next < 60) setStatusIndex(5);
        else if (next < 70) setStatusIndex(6);
        else if (next < 80) setStatusIndex(7);
        else if (next < 90) setStatusIndex(8);
        else setStatusIndex(9);

        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setFade(true);
            setTimeout(() => setHidden(true), 600);
          }, 200);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);


  // 2. Lightweight Arcane Green Sparks Canvas (Skipped on low-motion)
  useEffect(() => {
    if (isLowMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const isMobile = window.innerWidth < 768;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Reduced spark count on mobile
    const numSparks = isMobile ? 20 : 50;
    const sparks = Array.from({ length: numSparks }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
      alpha: Math.random() * 0.8 + 0.2,
      color: Math.random() > 0.4 ? '#10b981' : Math.random() > 0.5 ? '#34d399' : '#fbbf24'
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < numSparks; i++) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;

        if (s.x < 0) s.x = canvas.width;
        if (s.x > canvas.width) s.x = 0;
        if (s.y < 0) s.y = canvas.height;
        if (s.y > canvas.height) s.y = 0;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.alpha;
        ctx.fill();

        if (!isMobile) {
          for (let j = i + 1; j < numSparks; j++) {
            const s2 = sparks[j];
            const dist = Math.hypot(s.x - s2.x, s.y - s2.y);
            if (dist < 90) {
              ctx.beginPath();
              ctx.moveTo(s.x, s.y);
              ctx.lineTo(s2.x, s2.y);
              ctx.strokeStyle = s.color;
              ctx.globalAlpha = (1 - dist / 90) * 0.2;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isLowMotion]);

  if (hidden) return null;

  return (
    <div id="loading-screen" className={`loading-container ${fade ? 'fade-out' : ''}`}>
      {/* Background Interactive Particle Canvas */}
      {!isLowMotion && <canvas ref={canvasRef} className="loading-spark-canvas" />}

      {/* Futuristic Scanline Overlay */}
      <div className="scanline" />

      {/* Cyber Grid Lines */}
      <div className="cyber-grid-overlay" />

      {/* Main Loader Content */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-lg px-4 text-center">
        
        {/* 4-RING GYROSCOPIC REACTOR CORE WITH DOOM MASK */}
        <div className="loading-core-wrapper">
          <div className="ring-gyro ring-gyro-1" />
          <div className="ring-gyro ring-gyro-2" />
          <div className="ring-gyro ring-gyro-3" />
          <div className="ring-gyro ring-gyro-4" />
          <div className="reactor-core-glow" />
          
          <div className="reactor-icon">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white p-1.5 border-2 border-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.8)] overflow-hidden flex items-center justify-center animate-pulse">
              <img src="/teciton_logo.jpg" alt="TECITON Logo" className="w-full h-full object-contain rounded-full" />
            </div>
          </div>
        </div>

        {/* Sovereign Symposium Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(16,185,129,0.3)] backdrop-blur-md">
          <Shield className="w-4 h-4 text-emerald-400" />
          <span>Think. Code. Compete. Conquer — your journey begins at TECITON 2026.</span>
        </div>

        {/* Holographic Glowing Title */}
        <h1 className="loading-title-glow text-4xl sm:text-5xl">
          TECITON <span className="italic text-emerald-400 font-serif">2026</span>
        </h1>
        
        <p className="text-[11px] sm:text-xs font-mono tracking-[0.25em] text-emerald-200/90 uppercase mb-6 flex items-center justify-center gap-2">
          <Activity className="w-3.5 h-3.5 text-emerald-400" />
          <span>ALL BOW BEFORE INNOVATION</span>
          <Activity className="w-3.5 h-3.5 text-emerald-400" />
        </p>

        {/* Terminal Status Box */}
        <div className="loading-status-card">
          <div className="flex items-center justify-between text-[11px] font-mono text-emerald-300 mb-2 border-b border-emerald-500/25 pb-1.5">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <Terminal className="w-3.5 h-3.5" /> DOOM_MAINFRAME_BOOT
            </span>
            <span className="text-amber-400 font-bold tracking-widest">
              {Math.round(progress)}%
            </span>
          </div>

          {/* Animated Status Message Ticker */}
          <div className="text-left font-mono text-xs text-slate-200 py-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-ping" />
            <span className="truncate">{statusMessages[statusIndex]}</span>
          </div>

          {/* Progress Bar Container */}
          <div className="loading-bar-bg mt-3">
            <div className="loading-bar-fill" style={{ width: `${progress}%` }}>
              <div className="bar-spark-head" />
            </div>
          </div>
        </div>

        {/* Footer Security Note */}
        <div className="mt-6 flex items-center gap-2 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>LATVERIAN ACCELERATION ACTIVE</span>
        </div>

      </div>
    </div>
  );
}


