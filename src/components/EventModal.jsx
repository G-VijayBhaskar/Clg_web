import React from 'react';
import { X, ExternalLink, Sparkles, Clock } from 'lucide-react';
import { REGISTRATION_FORM_URL } from '../data/eventsData';

export default function EventModal({ event, onClose }) {
  if (!event) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-card max-w-2xl w-full p-6 sm:p-8 relative max-h-[92vh] overflow-y-auto border-emerald-500/40 shadow-[0_0_50px_rgba(16,185,129,0.3)] bg-[#070d0a]/95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-900/80 border border-slate-700 text-white flex items-center justify-center hover:border-emerald-400 hover:text-emerald-400 transition-colors z-10"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Optional Banner Image */}
        {event.image && (
          <div className="mb-6 rounded-2xl overflow-hidden border border-emerald-500/30 max-h-56">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        )}

        {/* Header Metadata */}
        <div className="mb-4">
          <div className="flex items-center justify-between gap-2 mb-1">
            {event.eventNo && (
              <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
                {event.eventNo}
              </span>
            )}
            <span className={`px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
              event.category === 'technical'
                ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                : 'bg-emerald-900/60 text-emerald-200 border border-emerald-400/30'
            }`}>
              {event.category === 'technical' ? 'TECHNICAL EVENT' : 'NON TECHNICAL EVENT'}
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide uppercase font-sans mb-1">
            {event.title}
          </h3>
          {event.tagline && (
            <p className="text-sm text-slate-300 italic font-serif">{event.tagline}</p>
          )}
        </div>

        {/* Duration & Team Size Primary Cards (Matching structure) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-[#0b1812]/90 border border-emerald-500/30">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              DURATION
            </span>
            <strong className="text-xl font-bold text-white block">
              {event.duration || "15 - 20 Minutes"}
            </strong>
          </div>
          <div className="p-4 rounded-xl bg-[#0b1812]/90 border border-emerald-500/30">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              TEAM SIZE
            </span>
            <strong className="text-xl font-bold text-white block">
              {event.teamSize}
            </strong>
          </div>
        </div>

        {/* Secondary Info Badges */}
        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 mb-6 text-xs">
          <div className="flex flex-col">
            <span className="text-slate-400 font-medium flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-emerald-400" /> Timing
            </span>
            <strong className="text-white mt-0.5">{event.timing}</strong>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <p className="text-sm text-slate-300 font-light leading-relaxed">
            {event.description}
          </p>
        </div>

        {/* Round Structure (Exact design layout from image) */}
        {event.rounds && event.rounds.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <span className="text-emerald-400">✦</span> ROUND STRUCTURE
            </h4>
            <div className="space-y-2.5">
              {event.rounds.map((rnd, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#12183b]/70 border border-indigo-500/25 text-xs sm:text-sm"
                >
                  <span className="font-extrabold text-indigo-300 bg-indigo-950/80 px-3 py-1 rounded-lg border border-indigo-500/30 shrink-0">
                    {rnd.round}
                  </span>
                  <p className="text-slate-200">
                    <strong className="text-white font-semibold">{rnd.title}</strong> — {rnd.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rules & Regulations (Numbered list format) */}
        {event.rules && event.rules.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <span className="text-indigo-400">✦</span> RULES & REGULATIONS
            </h4>
            <ol className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-light list-none">
              {event.rules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="font-bold text-indigo-400 shrink-0">{idx + 1}.</span>
                  <span className="leading-relaxed">{rule}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white transition-colors border border-slate-700 text-sm font-semibold"
          >
            Close
          </button>
          <a
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <span>Register For Event</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}


