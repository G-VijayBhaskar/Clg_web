import React, { useState, useEffect, useRef } from 'react';

/**
 * Cinematic 3D Squid Game Atmosphere Loading Page
 * - Full-screen dark game-arena environment with neon PINK & CYAN/BLUE lighting
 * - 3D floating and rotating neon symbols: CIRCLE (○), TRIANGLE (△), SQUARE (□)
 * - Wet reflective floor with pink/blue reflections & subtle distant guard silhouettes
 * - Center UI: "TECITON 2026" with "ENTERING THE GAME..." subtitle
 * - Futuristic segmented pink & blue circular loading ring with "LOADING 0%" -> "100%"
 * - Slow forward camera zoom & cinematic pulse transition at 100%
 * - Mobile performance optimized: Tab Visibility API, DPR limit, particle count scaling
 */
export default function LoadingScreen({ onLoadingComplete }) {
  const canvasRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(false);
  const [pulse100, setPulse100] = useState(false);

  // 1. Smooth Progress & Transition Handler
  useEffect(() => {
    const totalDuration = 4800;
    const intervalTime = 30;
    const totalSteps = totalDuration / intervalTime;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const currProgress = Math.min(Math.round((step / totalSteps) * 100), 100);
      setProgress(currProgress);

      if (currProgress >= 100) {
        clearInterval(timer);
        setPulse100(true);
        setTimeout(() => setFade(true), 500);
        setTimeout(() => {
          if (onLoadingComplete) onLoadingComplete();
        }, 1200);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  // 2. 60 FPS 3D Environment & Atmospheric Canvas Engine (Mobile Optimized)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let frame = 0;
    let isTabActive = true;

    const isMobile = window.innerWidth < 768;
    const maxDpr = isMobile ? 1.0 : Math.min(window.devicePixelRatio || 1, 1.5);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * maxDpr;
      canvas.height = height * maxDpr;
      ctx.scale(maxDpr, maxDpr);
    };
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    // Atmospheric Dust & Light Orbs - Optimized count on mobile
    const particleCount = isMobile ? 16 : 60;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.6,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -(Math.random() * 0.4 + 0.15),
      alpha: Math.random() * 0.6 + 0.2,
      color: Math.random() < 0.5 ? '#f43f5e' : '#38bdf8'
    }));

    // Draw 3D Neon Symbols
    const draw3DSymbols = (t) => {
      ctx.save();

      const centerY = height * 0.42;
      const pulseFactor = Math.sin(t * 0.003) * 0.12 + 1;

      // Symbol 1: Pink Neon CIRCLE (Left)
      const circleX = width * (isMobile ? 0.18 : 0.22);
      const circleY = centerY + Math.sin(t * 0.002) * 12;
      const circleRadius = (isMobile ? 36 : 60) * pulseFactor;

      ctx.beginPath();
      ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
      ctx.lineWidth = isMobile ? 3.5 : 5;
      ctx.strokeStyle = '#f43f5e';
      ctx.shadowColor = '#f43f5e';
      ctx.shadowBlur = isMobile ? 12 : 22;
      ctx.stroke();

      // Symbol 2: Hot Pink/Rose Neon TRIANGLE (Center Top)
      const triX = width * 0.5;
      const triY = centerY - (isMobile ? 65 : 110) + Math.cos(t * 0.002) * 10;
      const triSize = (isMobile ? 38 : 65) * pulseFactor;

      ctx.beginPath();
      ctx.moveTo(triX, triY - triSize);
      ctx.lineTo(triX - triSize * 0.86, triY + triSize * 0.6);
      ctx.lineTo(triX + triSize * 0.86, triY + triSize * 0.6);
      ctx.closePath();
      ctx.lineWidth = isMobile ? 3.5 : 5;
      ctx.strokeStyle = '#fb7185';
      ctx.shadowColor = '#fb7185';
      ctx.shadowBlur = isMobile ? 12 : 22;
      ctx.stroke();

      // Symbol 3: Cyan/Blue Neon SQUARE (Right)
      const sqX = width * (isMobile ? 0.82 : 0.78);
      const sqY = centerY + Math.sin(t * 0.0025 + 1) * 12;
      const sqSize = (isMobile ? 32 : 55) * pulseFactor;

      ctx.save();
      ctx.translate(sqX, sqY);
      ctx.rotate(Math.sin(t * 0.0015) * 0.1);
      ctx.beginPath();
      ctx.rect(-sqSize, -sqSize, sqSize * 2, sqSize * 2);
      ctx.lineWidth = isMobile ? 3.5 : 5;
      ctx.strokeStyle = '#38bdf8';
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = isMobile ? 12 : 22;
      ctx.stroke();
      ctx.restore();

      ctx.restore();
    };

    // Draw Wet Floor Reflections
    const drawReflectiveFloor = (t) => {
      const floorTop = height * 0.62;
      const grad = ctx.createLinearGradient(0, floorTop, 0, height);
      grad.addColorStop(0, 'rgba(10, 3, 12, 0.4)');
      grad.addColorStop(0.5, 'rgba(5, 2, 7, 0.85)');
      grad.addColorStop(1, '#050208');

      ctx.fillStyle = grad;
      ctx.fillRect(0, floorTop, width, height - floorTop);

      // Floor Reflection Glows
      const pinkGlow = ctx.createRadialGradient(width * 0.3, floorTop + 60, 10, width * 0.3, floorTop + 60, width * 0.35);
      pinkGlow.addColorStop(0, `rgba(244, 63, 94, ${0.18 + Math.sin(t * 0.003) * 0.04})`);
      pinkGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = pinkGlow;
      ctx.fillRect(0, floorTop, width, height - floorTop);

      const cyanGlow = ctx.createRadialGradient(width * 0.7, floorTop + 60, 10, width * 0.7, floorTop + 60, width * 0.35);
      cyanGlow.addColorStop(0, `rgba(56, 189, 248, ${0.18 + Math.cos(t * 0.003) * 0.04})`);
      cyanGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = cyanGlow;
      ctx.fillRect(0, floorTop, width, height - floorTop);
    };

    // Main Render Loop
    const render = () => {
      if (!isTabActive) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      frame++;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Wet Floor & Ambient Neon Reflections
      drawReflectiveFloor(frame);

      // 2. Draw Floating 3D Neon Symbols (Circle, Triangle, Square)
      draw3DSymbols(frame);

      // 3. Draw Atmospheric Floating Dust & Glowing Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.size > 1.2 ? (isMobile ? 3 : 6) : 0;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Tab Visibility API Listener
    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div
      id="loading-screen"
      className={`fixed inset-0 z-[9999] bg-[#050208] flex flex-col items-center justify-center overflow-hidden select-none transition-all duration-700 ${fade ? 'opacity-0 scale-105 blur-lg pointer-events-none' : 'opacity-100 scale-100'
        }`}
    >
      {/* 1. 60 FPS 3D ENVIRONMENT CANVAS (NEON SYMBOLS, FLOOR REFLECTIONS, PARTICLES) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* 2. ATMOSPHERIC VOLUMETRIC SPOTLIGHTS (PINK & CYAN) */}
      <div
        className="absolute inset-0 pointer-events-none z-1"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(244, 63, 94, 0.2) 0%, transparent 45%),
            radial-gradient(circle at 80% 30%, rgba(56, 189, 248, 0.2) 0%, transparent 45%),
            radial-gradient(ellipse at 50% 100%, rgba(5, 2, 8, 0.85) 0%, #050208 85%)
          `
        }}
      />

      {/* 3. DISTANT GUARD SILHOUETTES IN FAR CORNERS (SECONDARY DETAILS) */}
      <div className="absolute bottom-16 left-6 sm:left-12 opacity-25 pointer-events-none z-1 flex flex-col items-center">
        {/* Guard Silhouette Left */}
        <div className="w-8 h-12 rounded-t-full bg-[#180610] border border-rose-500/30 flex items-center justify-center relative shadow-[0_0_15px_rgba(244,63,94,0.3)]">
          <div className="w-2 h-2 rounded-full border border-rose-400" />
        </div>
      </div>
      <div className="absolute bottom-16 right-6 sm:right-12 opacity-25 pointer-events-none z-1 flex flex-col items-center">
        {/* Guard Silhouette Right */}
        <div className="w-8 h-12 rounded-t-full bg-[#081520] border border-cyan-500/30 flex items-center justify-center relative shadow-[0_0_15px_rgba(56,189,248,0.3)]">
          <div className="w-2 h-2 rounded-sm border border-cyan-400" />
        </div>
      </div>

      {/* 4. MAIN CENTRED LOADING UI OVERLAY */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-xl animate-cameraZoomIn">

        {/* FUTURISTIC SEGMENTED NEON LOADING INDICATOR */}
        <div className="relative w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center mb-6">
          {/* Outer Rotating Pink Ring */}
          <div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-rose-500 border-r-rose-500/40 animate-spin"
            style={{ animationDuration: '3s', filter: 'drop-shadow(0 0 10px #f43f5e)' }}
          />

          {/* Inner Counter-Rotating Pink Ring */}
          <div
            className="absolute inset-3 rounded-full border-2 border-transparent border-b-pink-400 border-l-pink-400/40 animate-spin-reverse"
            style={{ animationDuration: '2.2s', filter: 'drop-shadow(0 0 10px #fb7185)' }}
          />

          {/* Pulsing Core Logo Frame */}
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#08020b] border-2 border-white/30 p-1 flex items-center justify-center shadow-[0_0_40px_rgba(244,63,94,0.7)] relative z-10">
            <img
              src="/teciton_logo.jpg"
              alt="TECITON Logo"
              className="w-full h-full object-cover rounded-full filter brightness-110"
            />
          </div>
        </div>

        {/* MAIN SYMPOSIUM TITLE */}
        <h1
          className={`font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-2 transition-all duration-300 ${pulse100 ? 'scale-105 drop-shadow-[0_0_40px_#f43f5e]' : ''
            }`}
          style={{
            textShadow: '0 0 35px rgba(244, 63, 94, 0.8), 0 0 15px rgba(251, 113, 133, 0.6), 0 0 5px #ffffff'
          }}
        >
          TECITON <span className="italic text-pink-400 font-serif">2026</span>
        </h1>

        {/* SUBTITLE */}
        <p className="font-mono text-xs sm:text-sm font-extrabold tracking-[0.35em] text-pink-300 uppercase mb-8 drop-shadow-[0_0_10px_rgba(244,63,94,0.7)]">
          ENTERING THE GAME...
        </p>

        {/* SMOOTH PERCENTAGE COUNTER */}
        <div className="bg-[#0b0312]/90 border border-rose-500/40 px-6 py-2.5 rounded-2xl backdrop-blur-xl shadow-[0_0_25px_rgba(244,63,94,0.3)] flex flex-col items-center w-64 sm:w-72">
          <div className="flex items-center justify-between w-full font-mono text-xs text-pink-300 font-bold mb-1.5">
            <span>LOADING</span>
            <span className="text-white font-extrabold tracking-wider">{progress}%</span>
          </div>

          {/* Progress Fill Bar */}
          <div className="w-full h-2 bg-[#180614] rounded-full overflow-hidden border border-rose-500/30 p-0.5 relative">
            <div
              className="h-full rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_#f43f5e]"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #f43f5e 0%, #fb7185 60%, #ffe4e6 100%)'
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
