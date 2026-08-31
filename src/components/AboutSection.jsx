import React from 'react';
import { Shield, Cpu, Users, CreditCard, Trophy, Coins } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-red-500/40 text-red-400 text-xs font-semibold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
            <Shield className="w-4 h-4 text-red-400" /> ABOUT TECITON 2026
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight mb-4">
            About <span className="italic text-red-500 font-serif">TECITON 2026</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-white mx-auto rounded-full mb-6"></div>
          
          <p className="text-slate-200 text-base sm:text-lg font-light leading-relaxed">
            Welcome to <strong className="text-white font-semibold">TECITON 2026</strong>, the premier National-Level Technical Symposium hosted by the <strong className="text-red-400 font-semibold">Department of Computer Applications (MCA), New Prince Shri Bhavani College of Engineering and Technology (NPSBCET)</strong>. <strong className="text-white font-semibold">TECITON 2026</strong> brings together brilliant minds, emerging technologies, and exciting technical challenges.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Events */}
          <div className="bg-[#0e0e0e]/95 border border-red-500/30 hover:border-red-400/80 rounded-2xl p-8 text-center flex flex-col items-center justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.25)] group">
            <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border border-red-500/40 text-red-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-mono text-2xl font-bold text-white mb-4">
                8 Events
              </h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                A perfect blend of challenging technical competitions and fun-filled non-technical activities.
              </p>
            </div>
          </div>

          {/* Card 2: Participants */}
          <div className="bg-[#0e0e0e]/95 border border-red-500/30 hover:border-red-400/80 rounded-2xl p-8 text-center flex flex-col items-center justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.25)] group">
            <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border border-red-500/40 text-red-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-mono text-2xl font-bold text-white mb-4">
                100+ Participants
              </h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                Join a massive crowd of brilliant minds from all over the region to network and compete.
              </p>
            </div>
          </div>

          {/* Card 3: Registration Fee */}
          <div className="bg-[#0e0e0e]/95 border border-red-500/30 hover:border-red-400/80 rounded-2xl p-8 text-center flex flex-col items-center justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.25)] group">
            <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border border-red-500/40 text-red-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <CreditCard className="w-7 h-7" />
            </div>
            <div className="w-full">
              <h3 className="font-mono text-xl font-bold text-white mb-1">
                Registration Fee
              </h3>
              <p className="text-red-400 text-xs font-mono font-medium mb-3">
                (Affordable Entry)
              </p>
              <div className="text-white font-mono text-2xl font-extrabold mb-4 drop-shadow-[0_0_10px_rgba(239,68,68,0.6)]">
                ₹99/- only
              </div>
              <div className="pt-3 border-t border-slate-800 text-slate-400 text-xs font-mono">
                Per person
              </div>
            </div>
          </div>

          {/* Card 4: Cash Prizes */}
          <div className="bg-[#0e0e0e]/95 border border-red-500/30 hover:border-red-400/80 rounded-2xl p-8 text-center flex flex-col items-center justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.25)] group">
            <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border border-red-500/40 text-red-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform flex-row gap-1">
              <Trophy className="w-6 h-6" />
              <Coins className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-mono text-2xl font-bold text-red-500 mb-1 drop-shadow-[0_0_12px_rgba(239,68,68,0.7)]">
                Cash Prizes
              </h3>
              <p className="font-mono text-lg font-bold text-white mb-1">
                Worth
              </p>
              <p className="font-mono text-2xl font-extrabold text-white mb-4 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]">
                ₹10000
              </p>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                Compete and win exciting cash prizes, certificates, and recognition.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
