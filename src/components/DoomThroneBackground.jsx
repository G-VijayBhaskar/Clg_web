import React, { useEffect, useRef } from 'react';
import { getDeviceTier, isMobileDevice } from '../utils/deviceOptimizer';

/**
 * Custom Uploaded Background with Volumetric Smoke / Fog Effect & Steady Ambient Lighting (No Flickering, No Rain)
 * - Uses exact uploaded photo (/user_squid_bg.jpg)
 * - Stable, constant lighting without flickering
 * - 60 FPS realistic volumetric smoke & fog puff canvas engine (pink, cyan & atmospheric white smoke)
 * - Mobile performance optimized: adaptive smoke puff counts, Tab Visibility API, DPR scaling
 * - Rain effect remains completely removed
 */
export default function DoomThroneBackground() {
  const canvasRef = useRef(null);

  // Volumetric Smoke / Fog Canvas Engine (No Rain, No Flickering)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let isVisible = true;
    let isTabActive = true;

    const tier = getDeviceTier();
    const mobile = isMobileDevice();

    // Determine adaptive device limits
    const maxDpr = mobile ? 1.0 : Math.min(window.devicePixelRatio || 1, 1.25);
    const smokeCount = tier === 'low' ? 10 : tier === 'medium' ? 16 : 32;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * maxDpr;
      canvas.height = height * maxDpr;
      ctx.scale(maxDpr, maxDpr);
    };
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    // Initialize Volumetric Smoke Puffs
    const smokePuffs = Array.from({ length: smokeCount }, () => ({
      x: Math.random() * (width + 400) - 200,
      y: Math.random() * height * 0.9 + height * 0.1,
      radius: Math.random() * 140 + (mobile ? 80 : 110),
      vx: (Math.random() - 0.5) * (mobile ? 0.25 : 0.4),
      vy: -(Math.random() * 0.2 + 0.1),
      alpha: Math.random() * 0.12 + 0.04,
      growthRate: Math.random() * 0.04 + 0.02,
      colorType: Math.random() < 0.45 ? 'pink' : Math.random() < 0.8 ? 'cyan' : 'white'
    }));

    let lastFrameTime = 0;
    const targetFps = mobile ? 30 : 60;
    const frameInterval = 1000 / targetFps;

    // Render Loop with Mobile FPS Throttling & Visibility Control
    const render = (timestamp) => {
      if (!isTabActive || !isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      if (mobile && timestamp - lastFrameTime < frameInterval) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }
      lastFrameTime = timestamp;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < smokePuffs.length; i++) {
        const puff = smokePuffs[i];
        puff.x += puff.vx;
        puff.y += puff.vy;
        puff.radius += puff.growthRate;

        if (puff.y < -puff.radius * 2 || puff.radius > (mobile ? 320 : 450)) {
          puff.y = height + puff.radius;
          puff.x = Math.random() * (width + 400) - 200;
          puff.radius = Math.random() * 140 + (mobile ? 80 : 110);
          puff.alpha = Math.random() * 0.12 + 0.04;
        }

        const grad = ctx.createRadialGradient(
          puff.x, puff.y, 0,
          puff.x, puff.y, puff.radius
        );

        const rgb = puff.colorType === 'pink' 
          ? '244, 63, 94' 
          : puff.colorType === 'cyan' 
            ? '56, 189, 248' 
            : '230, 230, 250';

        grad.addColorStop(0, `rgba(${rgb}, ${puff.alpha})`);
        grad.addColorStop(0.4, `rgba(${rgb}, ${puff.alpha * 0.45})`);
        grad.addColorStop(0.75, `rgba(${rgb}, ${puff.alpha * 0.15})`);
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(puff.x, puff.y, puff.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Tab Visibility API Listener
    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Intersection Observer for Canvas
    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
      }, { threshold: 0.01 });
      observer.observe(canvas);
    }

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#040107] select-none">

      {/* 1. EXACT UPLOADED BACKGROUND PHOTO (WEBP OPTIMIZED) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url('/user_squid_bg.webp')`,
          backgroundAttachment: 'fixed',
          opacity: 1,
          filter: 'brightness(1.1) contrast(1.2) saturate(1.25)'
        }}
      />

      {/* 2. STEADY NEON AMBIENT GLOW (BALANCED PINK & CYAN SIDE SPOTLIGHTS) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 22% 38%, rgba(244, 63, 94, 0.25) 0%, rgba(244, 63, 94, 0.07) 35%, transparent 60%),
            radial-gradient(circle at 78% 38%, rgba(56, 189, 248, 0.25) 0%, rgba(56, 189, 248, 0.07) 35%, transparent 60%),
            radial-gradient(ellipse at 50% 85%, rgba(244, 63, 94, 0.12) 0%, rgba(56, 189, 248, 0.12) 50%, transparent 80%)
          `
        }}
      />

      {/* 3. 60 FPS VOLUMETRIC SMOKE & FOG CANVAS OVERLAY */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-90" 
      />

      {/* 4. REFINED ATMOSPHERIC SQUID GAME VIGNETTE OVERLAY */}
      <div 
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background: `
            radial-gradient(ellipse at 50% 40%, rgba(4, 1, 7, 0.15) 0%, rgba(4, 1, 7, 0.5) 75%, rgba(4, 1, 7, 0.8) 100%),
            linear-gradient(to bottom, rgba(4, 1, 7, 0.25) 0%, transparent 35%, transparent 70%, rgba(4, 1, 7, 0.65) 100%)
          `
        }}
      />

    </div>
  );
}
