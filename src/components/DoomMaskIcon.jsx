import React from 'react';

/**
 * Sovereign Crimson Cloak & Metallic Mask Vector Icon
 */
export default function DoomMaskIcon({ className = "w-8 h-8" }) {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_12px_rgba(239,68,68,0.6)]"
      >
        <defs>
          {/* Hood Gradient - Deep Crimson Cloak */}
          <linearGradient id="doomHoodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#991b1b" />
            <stop offset="50%" stopColor="#450a0a" />
            <stop offset="100%" stopColor="#180508" />
          </linearGradient>

          {/* Hood Inner Shadow Gradient */}
          <linearGradient id="doomHoodShadow" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.4" />
            <stop offset="40%" stopColor="#080203" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#050001" />
          </linearGradient>

          {/* Titanium Armor Mask Gradient */}
          <linearGradient id="doomMetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#f1f5f9" />
            <stop offset="70%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          {/* Gold Clasp Gradient */}
          <linearGradient id="doomGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#f87171" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>

          {/* Eye Glow Filter */}
          <filter id="emeraldEyeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Cloak Hood Base */}
        <path
          d="M 50,5 C 22,5 8,24 8,50 C 8,76 22,94 50,96 C 78,94 92,76 92,50 C 92,24 78,5 50,5 Z"
          fill="url(#doomHoodGrad)"
          stroke="#ef4444"
          strokeWidth="2.5"
        />

        {/* Hood Fold Line Details */}
        <path
          d="M 12,38 C 28,14 72,14 88,38 M 16,50 C 30,22 70,22 84,50"
          stroke="#f87171"
          strokeWidth="1.2"
          strokeOpacity="0.4"
          fill="none"
        />

        {/* Hood Inner Deep Void */}
        <path
          d="M 50,14 C 30,14 20,30 20,54 C 20,74 32,86 50,88 C 68,86 80,74 80,54 C 80,30 70,14 50,14 Z"
          fill="url(#doomHoodShadow)"
        />

        {/* Mask Base Faceplate */}
        <path
          d="M 50,26 
             C 36,26 30,36 30,52 
             C 30,68 36,78 50,84 
             C 64,78 70,68 70,52 
             C 70,36 64,26 50,26 Z"
          fill="url(#doomMetalGrad)"
          stroke="#cbd5e1"
          strokeWidth="1.5"
        />

        {/* Brow Ridge / Armor Lines */}
        <path
          d="M 33,40 L 50,44 L 67,40"
          stroke="#334155"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 50,26 L 50,44"
          stroke="#475569"
          strokeWidth="2"
        />

        {/* Left Eye Socket & Lens */}
        <polygon points="34,46 45,48 43,54 34,52" fill="#080203" stroke="#1e293b" strokeWidth="1" />
        <ellipse cx="39.5" cy="50" rx="3.5" ry="2" fill="#ffffff" filter="url(#emeraldEyeGlow)" />

        {/* Right Eye Socket & Lens */}
        <polygon points="66,46 55,48 57,54 66,52" fill="#080203" stroke="#1e293b" strokeWidth="1" strokeLinejoin="round" />
        <ellipse cx="60.5" cy="50" rx="3.5" ry="2" fill="#ffffff" filter="url(#emeraldEyeGlow)" />

        {/* Mask Rivets / Cheek Plates */}
        <circle cx="34" cy="62" r="1.5" fill="#334155" />
        <circle cx="66" cy="62" r="1.5" fill="#334155" />

        {/* Nose Bridge Guard */}
        <polygon points="50,44 47,56 50,60 53,56" fill="url(#doomMetalGrad)" stroke="#475569" strokeWidth="1" />

        {/* Grille / Mouth Slits */}
        <g stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round">
          <line x1="42" y1="68" x2="42" y2="76" />
          <line x1="46" y1="67" x2="46" y2="78" />
          <line x1="50" y1="66" x2="50" y2="79" />
          <line x1="54" y1="67" x2="54" y2="78" />
          <line x1="58" y1="68" x2="58" y2="76" />
        </g>

        {/* Hood Clasps */}
        <circle cx="20" cy="80" r="5" fill="url(#doomGoldGrad)" stroke="#991b1b" strokeWidth="1" />
        <circle cx="80" cy="80" r="5" fill="url(#doomGoldGrad)" stroke="#991b1b" strokeWidth="1" />
        <circle cx="20" cy="80" r="2" fill="#ffffff" />
        <circle cx="80" cy="80" r="2" fill="#ffffff" />
      </svg>
    </div>
  );
}
