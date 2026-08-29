import React from 'react';
import { Shield, Cpu, Users, CreditCard, Trophy, Coins } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            <Shield className="w-4 h-4 text-emerald-400" /> ABOUT TECITON 2026
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight mb-4">
            About <span className="italic text-emerald-400 font-serif">TECITON 2026</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300 mx-auto rounded-full mb-6"></div>
          
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Welcome to <strong className="text-white font-semibold">TECITON 2026</strong>, the premier National-Level Technical Symposium hosted by the <strong className="text-emerald-300 font-semibold">Department of Computer Applications (MCA), New Prince Shri Bhavani College of Engineering and Technology (NPSBCET)</strong>. <strong className="text-white font-semibold">TECITON 2026</strong> brings together brilliant minds, emerging technologies, and exciting technical challenges. Join us to learn, innovate, compete, and showcase your skills!
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Events */}
          <div className="bg-[#0b1017]/90 border border-slate-800/80 hover:border-cyan-500/50 rounded-2xl p-8 text-center flex flex-col items-center justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] group">
            <div className="w-16 h-16 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-mono text-2xl font-bold text-white mb-4">
                8 Events
              </h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                A perfect blend of challenging technical competitions and fun-filled non-technical activities.
              </p>
            </div>
          </div>

          {/* Card 2: Participants */}
          <div className="bg-[#0b1017]/90 border border-slate-800/80 hover:border-purple-500/50 rounded-2xl p-8 text-center flex flex-col items-center justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] group">
            <div className="w-16 h-16 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-mono text-2xl font-bold text-white mb-4">
                100+ Participants
              </h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Join a massive crowd of brilliant minds from all over the region to network and compete.
              </p>
            </div>
          </div>

          {/* Card 3: Registration Fee */}
          <div className="bg-[#0b1017]/90 border border-slate-800/80 hover:border-emerald-500/50 rounded-2xl p-8 text-center flex flex-col items-center justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] group">
            <div className="w-16 h-16 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <CreditCard className="w-7 h-7" />
            </div>
            <div className="w-full">
              <h3 className="font-mono text-xl font-bold text-white mb-1">
                Registration Fee
              </h3>
              <p className="text-emerald-400 text-xs font-mono font-medium mb-3">
                (Affordable Entry)
              </p>
              <div className="text-emerald-400 font-mono text-2xl font-extrabold mb-4 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">
                ₹99/- only
              </div>
              <div className="pt-3 border-t border-slate-800/80 text-slate-400 text-xs font-mono">
                Per person
              </div>
            </div>
          </div>

          {/* Card 4: Cash Prizes */}
          <div className="bg-[#0b1017]/90 border border-slate-800/80 hover:border-sky-500/50 rounded-2xl p-8 text-center flex flex-col items-center justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] group">
            <div className="w-16 h-16 rounded-full bg-sky-950/40 border border-sky-500/30 text-sky-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform flex-row gap-1">
              <Trophy className="w-6 h-6" />
              <Coins className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-mono text-2xl font-bold text-sky-400 mb-1 drop-shadow-[0_0_12px_rgba(56,189,248,0.7)]">
                Cash Prizes
              </h3>
              <p className="font-mono text-lg font-bold text-sky-300 mb-1">
                Worth
              </p>
              <p className="font-mono text-2xl font-extrabold text-sky-400 mb-4 drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]">
                ₹10000
              </p>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Compete and win exciting cash prizes, certificates, and recognition.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
