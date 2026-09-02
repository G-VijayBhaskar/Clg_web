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
      className="event-card group bg-[#0e0409]/95 border border-rose-500/30 w-full max-w-full overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenModal(event)}
    >
      <div>
        <div className="event-card-top flex items-center justify-between gap-2">
          <div className="event-card-icon bg-[#180610] shrink-0">
            <IconComponent className={`w-6 h-6 ${isTech ? 'text-sky-400' : 'text-pink-400'}`} />
          </div>
          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${isTech
              ? 'bg-[#081622] text-sky-300 border border-sky-400/50'
              : 'bg-[#180610] text-pink-300 border border-pink-400/40'
            }`}>
            {isTech ? 'TECHNICAL' : 'NON TECHNICAL'}
          </span>
        </div>

        <h3 className="event-card-title group-hover:text-sky-300 transition-colors text-white break-words">{event.title}</h3>
        <p className="event-card-desc text-sky-100 break-words">{event.tagline}</p>

        <div className="event-card-meta font-medium">
          <span className="flex items-center gap-1 text-white font-bold">
            <Icons.Users className="w-4 h-4 text-pink-400 shrink-0" />
            {event.teamSize}
          </span>
        </div>

        {event.coordinators && (
          <div className="mt-3 pt-2.5 border-t border-rose-900/40 flex items-start sm:items-center gap-2 text-xs sm:text-sm text-sky-300 font-mono min-w-0">
            <Icons.Phone className="w-4 h-4 text-pink-400 shrink-0 mt-0.5 sm:mt-0" />
            <span className="font-extrabold text-white leading-snug break-words min-w-0">{event.coordinators}</span>
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
          <Icons.Eye className="w-4 h-4 text-rose-400" /> View Details
        </button>
      </div>
    </div>
  );
}

