import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Zap, Activity } from 'lucide-react';

export default function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const statusMessages = [
    "[01/10] INITIALIZING SYSTEM PROTOCOLS...",
    "[02/10] SYNCHRONIZING QUANTUM MAINFRAME NODES...",
    "[03/10] CALIBRATING TITANIUM MASK GRAPHICS ENGINE...",
    "[04/10] LOADING ARCANE VECTOR SHADERS...",
    "[05/10] CHARGING RED REACTOR CORE MATRIX...",
    "[06/10] ACCESSING SYMPOSIUM DATABASE...",
    "[07/10] ENGAGING CYBER DEFENSES...",
    "[08/10] VERIFYING CONTESTANT CREDENTIALS...",
    "[09/10] COMMAND CENTER FULLY CHARGED...",
    "[10/10] ACCESS GRANTED: WELCOME TO TECITON 2026"
  ];

  // 1. Progress & Status Ticker (Exactly 5 Seconds Duration)
  useEffect(() => {
    const totalDuration = 5000;
    const intervalTime = 40;
    const totalSteps = totalDuration / intervalTime;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const currentProgress = Math.min(Math.round((step / totalSteps) * 100), 100);
      setProgress(currentProgress);

      const msgIndex = Math.min(
        Math.floor((currentProgress / 100) * statusMessages.length),
        statusMessages.length - 1
      );
      setStatusIndex(msgIndex);

      if (currentProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => setFade(true), 400);
        setTimeout(() => {
          if (onLoadingComplete) onLoadingComplete();
        }, 1100);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div id="loading-screen" className={`loading-container ${fade ? 'fade-out' : ''}`}>
      {/* Exact Volcanic Lava Photo Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 scale-105 animate-liveVeinPulse"
        style={{ backgroundImage: `url('/exact_lava_bg.png')` }}
      />
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />

      {/* Futuristic Scanline Overlay */}
      <div className="scanline" />

      {/* Cyber Grid Lines */}
      <div className="cyber-grid-overlay" />

      {/* Main Loader Content */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-lg px-4 text-center">
        
        {/* 4-RING GYROSCOPIC REACTOR CORE WITH LOGO */}
        <div className="loading-core-wrapper">
          <div className="ring-gyro ring-gyro-1" />
          <div className="ring-gyro ring-gyro-2" />
          <div className="ring-gyro ring-gyro-3" />
          <div className="ring-gyro ring-gyro-4" />
          <div className="reactor-core-glow" />
          
          <div className="reactor-icon">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-black p-1 border-2 border-red-500 shadow-[0_0_35px_rgba(239,68,68,0.9)] overflow-hidden flex items-center justify-center animate-pulse">
              <img src="/teciton_logo.jpg" alt="TECITON Logo" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </div>

        {/* Sovereign Symposium Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/80 border border-red-500/40 text-red-200 text-xs font-semibold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(239,68,68,0.3)] backdrop-blur-md">
          <Shield className="w-4 h-4 text-red-400" />
          <span>Think. Code. Compete. Conquer — your journey begins at TECITON 2026.</span>
        </div>

        {/* Holographic Glowing Title */}
        <h1 className="loading-title-glow text-4xl sm:text-5xl">
          TECITON <span className="italic text-red-500 font-serif">2026</span>
        </h1>
        
        <p className="text-[11px] sm:text-xs font-mono tracking-[0.25em] text-red-200/90 uppercase mb-6 flex items-center justify-center gap-2">
          <Activity className="w-3.5 h-3.5 text-red-400" />
          <span>ALL BOW BEFORE INNOVATION</span>
          <Activity className="w-3.5 h-3.5 text-red-400" />
        </p>

        {/* Terminal Status Box */}
        <div className="loading-status-card">
          <div className="flex items-center justify-between text-[11px] font-mono text-red-300 mb-2 border-b border-red-500/25 pb-1.5">
            <span className="flex items-center gap-1.5 text-red-400 font-bold">
              <Terminal className="w-3.5 h-3.5" /> DOOM_MAINFRAME_BOOT
            </span>
            <span className="text-white font-bold tracking-widest">
              {Math.round(progress)}%
            </span>
          </div>

          {/* Animated Status Message Ticker */}
          <div className="text-left font-mono text-xs text-slate-100 py-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 shrink-0 animate-ping" />
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
        <div className="mt-6 flex items-center gap-2 text-[10px] font-mono text-slate-300 uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5 text-red-400" />
          <span>LATVERIAN ACCELERATION ACTIVE</span>
        </div>

      </div>
    </div>
  );
}
