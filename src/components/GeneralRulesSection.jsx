import React from 'react';
import { Shield, UserCheck, Clock, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function GeneralRulesSection() {
  const rules = [
    {
      num: '01',
      title: 'College ID Mandatory',
      text: 'The symposium is open to college students. Participants must carry a valid college ID card.',
      icon: UserCheck,
      borderColor: 'border-pink-500/30',
      hoverBorder: 'hover:border-sky-400/80',
      iconBg: 'bg-[#081622] border-sky-500/40 text-sky-400',
      badgeBg: 'bg-[#081622] text-sky-300 border-sky-500/50',
    },
    {
      num: '02',
      title: 'Punctuality & Reporting',
      text: 'Participants must report to the respective venue 15 minutes before the scheduled event.',
      icon: Clock,
      borderColor: 'border-pink-500/30',
      hoverBorder: 'hover:border-pink-400/80',
      iconBg: 'bg-[#180610] border-pink-500/40 text-pink-400',
      badgeBg: 'bg-[#180610] text-pink-300 border-pink-500/50',
    },
    {
      num: '03',
      title: 'Zero Tolerance Policy',
      text: 'Cheating, plagiarism, or any unfair practice will lead to disqualification.',
      icon: ShieldAlert,
      borderColor: 'border-pink-500/30',
      hoverBorder: 'hover:border-sky-400/80',
      iconBg: 'bg-[#081622] border-sky-500/40 text-sky-400',
      badgeBg: 'bg-[#081622] text-sky-300 border-sky-500/50',
    },
    {
      num: '04',
      title: 'Coordinator Instructions',
      text: 'Participants must strictly follow the rules and instructions given by the respective event coordinators.',
      icon: CheckCircle2,
      borderColor: 'border-pink-500/30',
      hoverBorder: 'hover:border-pink-400/80',
      iconBg: 'bg-[#180610] border-pink-500/40 text-pink-400',
      badgeBg: 'bg-[#180610] text-pink-300 border-pink-500/50',
    },
  ];

  return (
    <section id="rules" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14060d] border border-pink-500/40 text-sky-300 text-xs font-semibold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
            <Shield className="w-4 h-4 text-pink-400" /> GENERAL RULES & REGULATIONS
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight mb-4">
            Symposium <span className="italic text-pink-400 font-serif">Rules & Regulations</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-sky-400 to-white mx-auto rounded-full"></div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rules.map((rule) => {
            const IconComponent = rule.icon;
            return (
              <div
                key={rule.num}
                className={`bg-[#0e0409]/95 border ${rule.borderColor} ${rule.hoverBorder} rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] group relative overflow-hidden`}
              >
                {/* Background Number Glow */}
                <span className="absolute right-4 top-2 text-7xl font-mono font-extrabold text-pink-950/40 select-none group-hover:text-pink-900/60 transition-colors pointer-events-none">
                  {rule.num}
                </span>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl border ${rule.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${rule.badgeBg}`}>
                      RULE {rule.num}
                    </span>
                  </div>

                  <h3 className="font-mono text-xl font-bold text-white mb-3">
                    {rule.title}
                  </h3>

                  <p className="text-sky-100 text-base sm:text-lg font-bold leading-relaxed">
                    {rule.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

