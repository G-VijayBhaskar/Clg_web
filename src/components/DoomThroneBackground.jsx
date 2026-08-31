import React, { useState, useEffect } from 'react';

/**
 * Exact Live Volcanic Lava Vein Background System with Ultra-High Density Fire Sparks
 * Features 85+ high-density floating fire sparks (white-hot, amber gold, molten orange, crimson red) over the live glowing magma fracture texture.
 * 100% GPU Accelerated & Mobile Compatible for 60FPS Performance.
 */
export default function DoomThroneBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 1. Ultra-High Density Fire Sparks & Embers (85 Sparks Desktop, 40 Mobile)
  const emberCount = isMobile ? 40 : 85;
  const embers = Array.from({ length: emberCount }, (_, i) => {
    const isWhiteHot = i % 6 === 0;
    const isGold = i % 4 === 0 && !isWhiteHot;
    const isOrange = i % 2 === 0 && !isWhiteHot && !isGold;
    return {
      id: i,
      left: `${(i * (100 / emberCount) + (i % 7) * 2.1) % 98.5}%`,
      size: isMobile 
        ? (i % 3 === 0 ? '4px' : '2px') 
        : (i % 5 === 0 ? '7px' : i % 3 === 0 ? '4.5px' : i % 2 === 0 ? '3.5px' : '2px'),
      delay: `${(i * 0.18) % 6.5}s`,
      duration: `${4.5 + (i % 6) * 1.3}s`,
      type: isWhiteHot ? 'white' : isGold ? 'gold' : isOrange ? 'orange' : 'red',
      glow: `${12 + (i % 4) * 4}px`
    };
  });

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#030102]">
      
      {/* LAYER 1: User's Exact Volcanic Magma Veins Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 sm:opacity-92 transition-opacity duration-1000 scale-105 animate-liveVeinPulse pointer-events-none"
        style={{
          backgroundImage: `url('/exact_lava_bg.png')`,
          backgroundAttachment: 'fixed',
          filter: 'brightness(1.15) contrast(1.25)'
        }}
      />

      {/* LAYER 2: Live Molten Magma Core Pulse in Bottom-Right Corner */}
      <div className="absolute -bottom-20 -right-20 w-[90vw] max-w-[800px] h-[80vh] rounded-full bg-gradient-to-tl from-red-600/45 via-orange-600/35 to-transparent blur-[70px] sm:blur-[110px] opacity-65 mix-blend-screen pointer-events-none animate-infernoPulse" />

      {/* LAYER 3: Live Heatwave Shimmer Overlay */}
      <div className="heatwave-shimmer absolute inset-0 bg-gradient-to-tr from-orange-600/18 via-red-600/12 to-transparent mix-blend-color-dodge animate-heatwaveShimmer pointer-events-none" />

      {/* LAYER 4: ULTRA-HIGH DENSITY RISING FIRE SPARKS & EMBERS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {embers.map((ember) => {
          let bg = '#ef4444';
          let shadow = `0 0 10px #ef4444, 0 0 ${ember.glow} #dc2626, 0 0 20px #f97316`;
          
          if (ember.type === 'white') {
            bg = '#ffffff';
            shadow = `0 0 10px #ffffff, 0 0 ${ember.glow} rgba(255, 255, 255, 0.95), 0 0 25px rgba(255, 255, 255, 0.8)`;
          } else if (ember.type === 'gold') {
            bg = '#fbbf24';
            shadow = `0 0 10px #fbbf24, 0 0 ${ember.glow} #f59e0b, 0 0 22px rgba(245, 158, 11, 0.9)`;
          } else if (ember.type === 'orange') {
            bg = '#f97316';
            shadow = `0 0 10px #f97316, 0 0 ${ember.glow} #ea580c, 0 0 20px #fbbf24`;
          }

          return (
            <div
              key={ember.id}
              className="fire-ember"
              style={{
                left: ember.left,
                bottom: '-25px',
                width: ember.size,
                height: ember.size,
                animationDelay: ember.delay,
                animationDuration: ember.duration,
                backgroundColor: bg,
                boxShadow: shadow
              }}
            />
          );
        })}
      </div>

      {/* LAYER 5: Deep Obsidian Vignette Overlay (Guarantees 100% Crisp Legibility of Content) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at center, rgba(3, 1, 2, 0.28) 0%, rgba(3, 1, 2, 0.76) 75%, #030102 100%),
            linear-gradient(to bottom, rgba(3, 1, 2, 0.55) 0%, transparent 35%, transparent 65%, rgba(3, 1, 2, 0.82) 100%)
          `
        }}
      />
    </div>
  );
}
