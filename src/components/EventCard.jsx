import React, { useRef } from 'react';
import * as Icons from 'lucide-react';

export default function EventCard({ event, onOpenModal, isLowMotion }) {
  const cardRef = useRef(null);
  const isTech = event.category === 'technical';

  // Dynamic Lucide Icon Resolver
  const IconComponent = Icons[event.icon] || (isTech ? Icons.Terminal : Icons.Gamepad2);

  const handleMouseMove = (e) => {
    if (isLowMotion || window.innerWidth < 768 || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(12px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  };

  return (
    <div
      ref={cardRef}
      className="event-card group bg-[#0e0e0e]/95 border border-red-500/30"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenModal(event)}
    >
      <div>
        <div className="event-card-top flex items-center justify-between">
          <div className="event-card-icon bg-[#181818]">
            <IconComponent className="w-6 h-6 text-red-400" />
          </div>
          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
            isTech
              ? 'bg-[#181818] text-white border border-red-500/50'
              : 'bg-[#181818] text-red-300 border border-red-400/40'
          }`}>
            {isTech ? 'TECHNICAL' : 'NON TECHNICAL'}
          </span>
        </div>

        <h3 className="event-card-title group-hover:text-red-400 transition-colors text-white">{event.title}</h3>
        <p className="event-card-desc text-slate-300">{event.tagline}</p>

        <div className="event-card-meta font-medium">
          <span className="flex items-center gap-1 text-slate-200">
            <Icons.Users className="w-3.5 h-3.5 text-red-400" />
            {event.teamSize}
          </span>
          <span className="flex items-center gap-1 text-slate-200">
            <Icons.Clock className="w-3.5 h-3.5 text-red-400" />
            {event.timing}
          </span>
        </div>

        {event.coordinators && (
          <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center gap-2 text-xs text-red-400 font-mono">
            <Icons.Phone className="w-3.5 h-3.5 text-red-400 shrink-0" />
            <span className="truncate font-semibold text-slate-200">{event.coordinators}</span>
          </div>
        )}
      </div>

      <div className="mt-5">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenModal(event);
          }}
          className="btn-view-details w-full py-2.5 text-sm font-semibold"
        >
          <Icons.Eye className="w-4 h-4 text-red-400" /> View Details
        </button>
      </div>
    </div>
  );
}
