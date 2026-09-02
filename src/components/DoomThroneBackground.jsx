import React, { useEffect, useRef, useState } from 'react';

/**
 * Custom Uploaded Background with 60 FPS Rain Shower & Dynamic Neon Light Flicker
 * - Uses exact uploaded photo (/user_squid_bg.jpg)
 * - Real-time realistic rain shower with wind streaks & floor splash ripples
 * - Atmospheric neon light flicker effect simulating electric neon stability
 */
export default function DoomThroneBackground() {
  const canvasRef = useRef(null);
  const [flickerOpacity, setFlickerOpacity] = useState(1);

  // 1. Neon Tube Light Flicker Animation Engine
  useEffect(() => {
    let timeoutId;
    const triggerFlicker = () => {
      // Random flicker pattern simulating electric neon tube instability
      const randomFlickerSequence = [0.82, 1, 0.4, 0.95, 0.2, 1, 0.88, 1];
      let step = 0;

      const runStep = () => {
        if (step < randomFlickerSequence.length) {
          setFlickerOpacity(randomFlickerSequence[step]);
          step++;
          timeoutId = setTimeout(runStep, Math.random() * 60 + 30);
        } else {
          setFlickerOpacity(1);
          // Next flicker burst in 2 to 6 seconds
          timeoutId = setTimeout(triggerFlicker, Math.random() * 4000 + 2000);
        }
      };

      runStep();
    };

    timeoutId = setTimeout(triggerFlicker, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  // 2. 60 FPS Rain Shower & Floor Splash Ripple Canvas Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const mobileMode = window.innerWidth < 768;

    // RAIN STREAKS
    const rainCount = mobileMode ? 120 : 260;
    const raindrops = Array.from({ length: rainCount }, () => ({
      x: Math.random() * (width + 200) - 100,
      y: Math.random() * height,
      length: Math.random() * 22 + 12,
      vy: Math.random() * 14 + 18,
      vx: -1.2,
      thickness: Math.random() * 1.2 + 0.6,
      alpha: Math.random() * 0.5 + 0.3,
      color: Math.random() < 0.3 ? '#f43f5e' : Math.random() < 0.6 ? '#fb7185' : '#ffffff'
    }));

    // FLOOR SPLASH RIPPLES
    const splashes = [];

    const createSplash = (x, y, color) => {
      splashes.push({
        x,
        y,
        rx: 1,
        ry: 0.4,
        maxRx: Math.random() * 10 + 6,
        alpha: 0.8,
        color
      });
    };

    // SLOW VOLUMETRIC SMOKE / FOG PUFFS
    const smokeCount = mobileMode ? 18 : 38;
    const smokePuffs = Array.from({ length: smokeCount }, () => ({
      x: Math.random() * (width + 300) - 150,
      y: Math.random() * height * 0.8 + height * 0.2,
      radius: Math.random() * 150 + 90,
      vx: (Math.random() - 0.5) * 0.35,
      vy: -(Math.random() * 0.2 + 0.1),
      alpha: Math.random() * 0.14 + 0.05,
      colorType: Math.random() < 0.45 ? 'pink' : Math.random() < 0.8 ? 'cyan' : 'white'
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render Slow Volumetric Smoke / Fog Clouds
      for (let k = 0; k < smokePuffs.length; k++) {
        const puff = smokePuffs[k];
        puff.x += puff.vx;
        puff.y += puff.vy;
        puff.radius += 0.04;

        if (puff.y < -puff.radius * 2) {
          puff.y = height + puff.radius;
          puff.x = Math.random() * (width + 300) - 150;
          puff.radius = Math.random() * 150 + 90;
        }

        const grad = ctx.createRadialGradient(puff.x, puff.y, 0, puff.x, puff.y, puff.radius);
        const rColor = puff.colorType === 'pink' ? '244, 63, 94' : puff.colorType === 'cyan' ? '56, 189, 248' : '220, 220, 240';
        grad.addColorStop(0, `rgba(${rColor}, ${puff.alpha})`);
        grad.addColorStop(0.5, `rgba(${rColor}, ${puff.alpha * 0.4})`);
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(puff.x, puff.y, puff.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render Falling Rain Shower
      for (let i = 0; i < raindrops.length; i++) {
        const drop = raindrops[i];

        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x + drop.vx * 2, drop.y + drop.length);
        ctx.lineWidth = drop.thickness;
        ctx.strokeStyle = drop.color === '#ffffff'
          ? `rgba(255, 255, 255, ${drop.alpha})`
          : drop.color === '#f43f5e'
            ? `rgba(244, 63, 94, ${drop.alpha * 0.85})`
            : `rgba(251, 113, 133, ${drop.alpha * 0.85})`;
        ctx.stroke();

        drop.y += drop.vy;
        drop.x += drop.vx;

        // Check if raindrop hits floor area
        const floorY = height * (0.62 + (drop.x / width) * 0.05);
        if (drop.y >= floorY && Math.random() < 0.35) {
          createSplash(drop.x, drop.y, drop.color);
        }

        if (drop.y > height + 20) {
          drop.y = -drop.length - Math.random() * 50;
          drop.x = Math.random() * (width + 200) - 100;
        }
      }

      // Render Floor Splash Ripples
      for (let s = splashes.length - 1; s >= 0; s--) {
        const splash = splashes[s];
        ctx.beginPath();
        ctx.ellipse(splash.x, splash.y, splash.rx, splash.ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = splash.color === '#ffffff'
          ? `rgba(255, 255, 255, ${splash.alpha})`
          : splash.color === '#f43f5e'
            ? `rgba(244, 63, 94, ${splash.alpha})`
            : `rgba(251, 113, 133, ${splash.alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        splash.rx += 0.8;
        splash.ry += 0.3;
        splash.alpha -= 0.05;

        if (splash.alpha <= 0 || splash.rx >= splash.maxRx) {
          splashes.splice(s, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#040107] select-none">

      {/* 1. EXACT UPLOADED BACKGROUND PHOTO WITH REFINED CINEMATIC BRIGHTNESS */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none transition-opacity duration-75"
        style={{
          backgroundImage: `url('/user_squid_bg.jpg')`,
          backgroundAttachment: 'fixed',
          opacity: flickerOpacity,
          filter: `brightness(${1.0 + flickerOpacity * 0.15}) contrast(1.2) saturate(1.25)`
        }}
      />

      {/* 2. DYNAMIC NEON AMBIENT GLOW (BALANCED PINK & CYAN SIDE SPOTLIGHTS) */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-100"
        style={{
          opacity: flickerOpacity,
          background: `
            radial-gradient(circle at 22% 38%, rgba(244, 63, 94, ${0.28 * flickerOpacity}) 0%, rgba(244, 63, 94, 0.08) 35%, transparent 60%),
            radial-gradient(circle at 78% 38%, rgba(56, 189, 248, ${0.28 * flickerOpacity}) 0%, rgba(56, 189, 248, 0.08) 35%, transparent 60%),
            radial-gradient(ellipse at 50% 85%, rgba(244, 63, 94, 0.12) 0%, rgba(56, 189, 248, 0.12) 50%, transparent 80%)
          `
        }}
      />

      {/* 3. 60 FPS REAL-TIME RAIN SHOWER & SPLASH CANVAS */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-90" 
      />

      {/* 4. REFINED ATMOSPHERIC SQUID GAME VIGNETTE OVERLAY */}
      <div 
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background: `
            radial-gradient(ellipse at 50% 40%, rgba(4, 1, 7, 0.2) 0%, rgba(4, 1, 7, 0.55) 75%, rgba(4, 1, 7, 0.82) 100%),
            linear-gradient(to bottom, rgba(4, 1, 7, 0.28) 0%, transparent 35%, transparent 70%, rgba(4, 1, 7, 0.7) 100%)
          `
        }}
      />

    </div>
  );
}


