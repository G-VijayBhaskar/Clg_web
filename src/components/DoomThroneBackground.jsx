import React from 'react';

/**
 * Doctor Doom Emerald Green & Matte Black Ambient Background
 * Pure CSS ambient color light animation with high-density floating green sparks.
 */
export default function DoomThroneBackground() {
  // Generate 21 floating green sparks with random positions, delays, sizes, and durations
  const sparks = [
    { left: '4%', bottom: '-20px', width: '3px', height: '3px', delay: '0s', duration: '12s', glow: '10px' },
    { left: '12%', bottom: '-20px', width: '5px', height: '5px', delay: '3s', duration: '15s', glow: '16px' },
    { left: '18%', bottom: '-20px', width: '4px', height: '4px', delay: '7s', duration: '11s', glow: '12px' },
    { left: '26%', bottom: '-20px', width: '6px', height: '6px', delay: '1s', duration: '14s', glow: '18px' },
    { left: '33%', bottom: '-20px', width: '3px', height: '3px', delay: '5s', duration: '13s', glow: '10px' },
    { left: '40%', bottom: '-20px', width: '5px', height: '5px', delay: '9s', duration: '16s', glow: '15px' },
    { left: '47%', bottom: '-20px', width: '4px', height: '4px', delay: '2s', duration: '10s', glow: '14px' },
    { left: '53%', bottom: '-20px', width: '6px', height: '6px', delay: '6s', duration: '17s', glow: '20px' },
    { left: '60%', bottom: '-20px', width: '3px', height: '3px', delay: '11s', duration: '12s', glow: '10px' },
    { left: '67%', bottom: '-20px', width: '5px', height: '5px', delay: '4s', duration: '14s', glow: '16px' },
    { left: '74%', bottom: '-20px', width: '4px', height: '4px', delay: '8s', duration: '11s', glow: '12px' },
    { left: '81%', bottom: '-20px', width: '6px', height: '6px', delay: '3.5s', duration: '15s', glow: '18px' },
    { left: '88%', bottom: '-20px', width: '3px', height: '3px', delay: '10s', duration: '13s', glow: '10px' },
    { left: '95%', bottom: '-20px', width: '5px', height: '5px', delay: '1.5s', duration: '16s', glow: '15px' },
    { left: '8%', bottom: '-20px', width: '4px', height: '4px', delay: '6.5s', duration: '12s', glow: '14px' },
    { left: '22%', bottom: '-20px', width: '5px', height: '5px', delay: '10.5s', duration: '18s', glow: '17px' },
    { left: '36%', bottom: '-20px', width: '3px', height: '3px', delay: '4.5s', duration: '11s', glow: '10px' },
    { left: '50%', bottom: '-20px', width: '6px', height: '6px', delay: '0.5s', duration: '13.5s', glow: '22px' },
    { left: '64%', bottom: '-20px', width: '4px', height: '4px', delay: '8.5s', duration: '15.5s', glow: '13px' },
    { left: '77%', bottom: '-20px', width: '5px', height: '5px', delay: '2.5s', duration: '12.5s', glow: '16px' },
    { left: '91%', bottom: '-20px', width: '4px', height: '4px', delay: '7.5s', duration: '14.5s', glow: '14px' },
  ];

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">
      {/* 1. Matte Black Cyber Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '54px 54px'
        }}
      />

      {/* 2. Deep Matte Black Vignette Base */}
      <div className="absolute inset-0 bg-radial-vignette opacity-90" />

      {/* 3. Doomsday Emerald Green Animated Ambient Light Orbs */}
      <div className="doom-glow-1 absolute top-1/4 left-1/2 w-[90vw] max-w-[850px] h-[480px] rounded-full bg-gradient-to-tr from-emerald-500/40 via-emerald-400/30 to-teal-500/20 blur-[130px] sm:blur-[170px] pointer-events-none" />
      <div className="doom-glow-2 absolute top-2/3 right-[-10%] w-[80vw] max-w-[650px] h-[400px] rounded-full bg-gradient-to-bl from-amber-500/20 via-emerald-600/25 to-emerald-950/30 blur-[140px] sm:blur-[180px] pointer-events-none" />
      <div className="doom-glow-emerald absolute bottom-[-10%] left-[-10%] w-[85vw] max-w-[700px] h-[450px] rounded-full bg-gradient-to-tr from-emerald-500/35 via-emerald-700/20 to-[#050505]/40 blur-[150px] sm:blur-[190px] pointer-events-none" />

      {/* 4. High-Density Vibrant Floating Green Sparks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {sparks.map((spark, idx) => (
          <div
            key={idx}
            className="green-spark"
            style={{
              left: spark.left,
              bottom: spark.bottom,
              width: spark.width,
              height: spark.height,
              animationDelay: spark.delay,
              animationDuration: spark.duration,
              boxShadow: `0 0 10px #00ff88, 0 0 ${spark.glow} #10b981, 0 0 25px #34d399`
            }}
          />
        ))}
      </div>
    </div>
  );
}
