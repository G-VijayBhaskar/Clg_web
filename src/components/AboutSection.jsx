import React from 'react';
import { Shield, Cpu, Users, CreditCard, Trophy, Coins } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14060d] border border-pink-500/40 text-sky-300 text-xs font-semibold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
            <Shield className="w-4 h-4 text-pink-400" /> ABOUT TECITON 2026
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight mb-4">
            About <span className="italic text-pink-400 font-serif">TECITON 2026</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-sky-400 to-white mx-auto rounded-full mb-6"></div>

          <p className="text-sky-100 text-lg sm:text-xl font-semibold leading-relaxed">
            Welcome to <strong className="text-white font-extrabold">TECITON 2026</strong>, the premier National-Level Technical Symposium hosted by the <strong className="text-pink-300 font-extrabold">Department of Computer Applications (MCA), New Prince Shri Bhavani College of Engineering and Technology (NPSBCET)</strong>. <strong className="text-sky-300 font-extrabold">TECITON 2026</strong> brings together brilliant minds, emerging technologies, and exciting technical challenges.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1: Events */}
          <div className="bg-[#0e0409]/95 border border-pink-500/30 hover:border-sky-400/80 rounded-2xl p-8 text-center flex flex-col items-center justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] group">
            <div className="w-16 h-16 rounded-full bg-[#180610] border border-pink-500/40 text-sky-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-mono text-2xl font-bold text-white mb-4">
                8 Events
              </h3>
              <p className="text-sky-200 text-base font-semibold leading-relaxed">
                A perfect blend of challenging technical competitions and fun-filled non-technical activities.
              </p>
            </div>
          </div>

          {/* Card 2: Participants */}
          <div className="bg-[#0e0409]/95 border border-pink-500/30 hover:border-pink-400/80 rounded-2xl p-8 text-center flex flex-col items-center justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(244,63,94,0.25)] group">
            <div className="w-16 h-16 rounded-full bg-[#180610] border border-pink-500/40 text-pink-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-mono text-2xl font-bold text-white mb-4">
                100+ Participants
              </h3>
              <p className="text-pink-200 text-base font-semibold leading-relaxed">
                Join a massive crowd of brilliant minds from all over the region to network and compete.
              </p>
            </div>
          </div>

          {/* Card 3: Registration Fee */}
          <div className="bg-[#0e0409]/95 border border-pink-500/30 hover:border-sky-400/80 rounded-2xl p-8 text-center flex flex-col items-center justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] group">
            <div className="w-16 h-16 rounded-full bg-[#180610] border border-pink-500/40 text-sky-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <CreditCard className="w-7 h-7" />
            </div>
            <div className="w-full">
              <h3 className="font-mono text-2xl font-bold text-white mb-1">
                ₹99 / Person
              </h3>
              <span className="text-sm text-sky-300 uppercase tracking-widest font-mono font-extrabold block mb-4">
                Registration fees
              </span>
              <p className="text-sky-200 text-sm font-semibold leading-relaxed">
                Covers access to events, participation certificate, food & welcome kit.
              </p>
            </div>
          </div>

          {/* Card 4: Cash Prizes */}
          <div className="bg-[#0e0409]/95 border border-pink-500/30 hover:border-pink-400/80 rounded-2xl p-8 text-center flex flex-col items-center justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(244,63,94,0.25)] group">
            <div className="w-16 h-16 rounded-full bg-[#180610] border border-pink-500/40 text-pink-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Trophy className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-mono text-2xl font-bold text-white mb-4">
                Cash Prizes
              </h3>
              <p className="text-pink-200 text-base font-semibold leading-relaxed">
                Win exciting cash rewards and merit certificates.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

