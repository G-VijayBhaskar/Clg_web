import React from 'react';
import { X, ExternalLink, Clock } from 'lucide-react';
import { REGISTRATION_FORM_URL } from '../data/eventsData';

export default function EventModal({ event, onClose }) {
  if (!event) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-card max-w-2xl w-full p-6 sm:p-8 relative max-h-[92vh] overflow-y-auto border-rose-500/40 shadow-[0_0_50px_rgba(244,63,94,0.3)] bg-[#0e0409]/95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#180610] border border-rose-500/40 text-white flex items-center justify-center hover:border-rose-400 hover:text-rose-400 transition-colors z-10"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Optional Banner Image */}
        {event.image && (
          <div className="mb-6 rounded-2xl overflow-hidden border border-rose-500/30 max-h-56">
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
              <span className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase">
                {event.eventNo}
              </span>
            )}
            <span className={`px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
              event.category === 'technical'
                ? 'bg-[#081622] text-sky-300 border border-sky-400/50'
                : 'bg-pink-950/80 text-pink-300 border border-pink-400/40'
            }`}>
              {event.category === 'technical' ? 'TECHNICAL EVENT' : 'NON TECHNICAL EVENT'}
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide uppercase font-sans mb-1">
            {event.title}
          </h3>
          {event.tagline && (
            <p className="text-sm text-sky-300 italic font-serif">{event.tagline}</p>
          )}
        </div>

        {/* Duration & Team Size Primary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-[#180610]/90 border border-pink-500/30">
            <span className="text-[11px] font-bold uppercase tracking-wider text-sky-300 block mb-1">
              DURATION
            </span>
            <strong className="text-xl font-bold text-white block">
              {event.duration || "15 - 20 Minutes"}
            </strong>
          </div>
          <div className="p-4 rounded-xl bg-[#180610]/90 border border-pink-500/30">
            <span className="text-[11px] font-bold uppercase tracking-wider text-pink-300 block mb-1">
              TEAM SIZE
            </span>
            <strong className="text-xl font-bold text-white block">
              {event.teamSize}
            </strong>
          </div>
        </div>



        {/* Description */}
        <div className="mb-6">
          <p className="text-sm text-white font-light leading-relaxed">
            {event.description}
          </p>
        </div>

        {/* Rules & Regulations */}
        {event.rules && event.rules.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-bold text-sky-300 uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <span className="text-pink-400">✦</span> RULES & REGULATIONS
            </h4>
            <ol className="space-y-2.5 text-xs sm:text-sm text-white font-light list-none">
              {event.rules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="font-bold text-sky-400 shrink-0">{idx + 1}.</span>
                  <span className="leading-relaxed">{rule}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-rose-500/20">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#180610] text-rose-200 hover:text-white transition-colors border border-rose-500/30 text-sm font-semibold"
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

