import React, { useState } from 'react';
import { SearchX, Shield } from 'lucide-react';
import { EVENTS_DATA } from '../data/eventsData';
import EventCard from './EventCard';

export default function EventsSection({ onOpenModal }) {
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');

  const filteredEvents = EVENTS_DATA.filter((evt) => {
    const matchesCategory = category === 'all' || evt.category === category;
    const matchesSearch =
      evt.title.toLowerCase().includes(search.toLowerCase()) ||
      evt.description.toLowerCase().includes(search.toLowerCase()) ||
      evt.tagline.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="events" className="py-24 px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14060d] border border-pink-500/40 text-sky-300 text-xs font-semibold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
            <Shield className="w-4 h-4 text-pink-400" /> COMPETITIONS & ARENAS
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight mb-3">
            Explore Arenas of <span className="italic text-pink-400 font-serif">TECITON 2026</span>
          </h2>
          <p className="text-sky-100 text-base sm:text-lg font-bold leading-relaxed">
            Explore arenas of TECITON 2026 — where ideas become innovation, skills meet challenges, and every competition is a chance to stand out. Choose your event, build your strategy, and compete to conquer!
          </p>
        </div>

        {/* Filters & Search Header */}
        {(() => {
          const techCount = EVENTS_DATA.filter(e => e.category === 'technical').length;
          const nonTechCount = EVENTS_DATA.filter(e => e.category === 'non-technical').length;
          return (
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 w-full max-w-full">
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 bg-[#0e0409] p-1.5 rounded-2xl border border-rose-500/30 backdrop-blur-md w-full md:w-auto max-w-full">
                <button
                  onClick={() => setCategory('all')}
                  className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${category === 'all'
                      ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-[0_0_15px_rgba(244,63,94,0.5)]'
                      : 'text-rose-200 hover:text-white'
                    }`}
                >
                  All Events ({EVENTS_DATA.length})
                </button>
                <button
                  onClick={() => setCategory('technical')}
                  className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${category === 'technical'
                      ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-[0_0_15px_rgba(244,63,94,0.5)]'
                      : 'text-rose-200 hover:text-white'
                    }`}
                >
                  Technical ({techCount})
                </button>
                <button
                  onClick={() => setCategory('non-technical')}
                  className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${category === 'non-technical'
                      ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-[0_0_15px_rgba(244,63,94,0.5)]'
                      : 'text-rose-200 hover:text-white'
                    }`}
                >
                  Non-Technical ({nonTechCount})
                </button>
              </div>

              <div className="w-full md:w-72 relative">
                <input
                  type="text"
                  placeholder="Search events..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#0e0409] border border-rose-500/30 rounded-xl text-sm text-white placeholder-rose-300/60 focus:outline-none focus:border-rose-400 font-sans"
                />
              </div>
            </div>
          );
        })()}

        {/* Event Cards Grid */}
        {filteredEvents.length === 0 ? (
          <div className="glass-card text-center p-12 col-span-full border-rose-500/30 bg-[#0e0409]">
            <SearchX className="w-12 h-12 text-rose-300 mx-auto mb-4" />
            <h3 className="text-xl font-serif text-white mb-2">No events found matching your search</h3>
            <p className="text-rose-200 text-sm">Try clearing your filter or searching for another keyword.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="events-grid">
            {filteredEvents.map((evt) => (
              <EventCard key={evt.id} event={evt} onOpenModal={onOpenModal} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

