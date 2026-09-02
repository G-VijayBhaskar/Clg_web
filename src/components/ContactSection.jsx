import React, { useState } from 'react';
import { MapPin, ChevronDown, User, Phone, Award, Users } from 'lucide-react';

export default function ContactSection() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'Are on-spot registrations allowed?',
      a: 'Yes, on-spot registrations are available on the day of the event at the registration desk.'
    },
    {
      q: 'Is lunch provided?',
      a: 'Yes, lunch will be provided for registered participants.'
    },
    {
      q: 'What is the registration fee?',
      a: 'Registration is just ₹99 per person.'
    }
  ];

  // 1. Staff Leadership & Convenors (First Separate Card Group)
  const staffCoordinators = [
    {
      name: 'Ms. S. Jeyanthi',
      role: 'Convenor',
      subtitle: 'Head of Department (MCA)',
      phone: '+91 80153 34673'
    },
    {
      name: 'T. Sri Arunakameshwaran',
      role: 'Staff Coordinator',
      subtitle: 'Staff Coordinator',
      phone: '+91 96777 52798'
    },
    {
      name: 'A. Nobel Amala',
      role: 'Staff Coordinator',
      subtitle: 'Staff Coordinator',
      phone: '+91 95667 02886'
    }
  ];

  // 2. Student Coordinators & Office Bearers (Second Separate Card Group)
  const studentCoordinators = [
    {
      name: 'Emmanuvel S',
      role: 'President',
      phone: '+91 81899 72933'
    },
    {
      name: 'S. Vignesh',
      role: 'Secretary',
      phone: '+91 63824 11698'
    },
    {
      name: 'K. Pooja',
      role: 'Treasurer',
      phone: '+91 93446 25259'
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* ================= FREQUENTLY ASKED QUESTIONS ================= */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight mb-2">
            Frequently Asked <span className="italic text-pink-400 font-serif">Questions</span>
          </h2>
          <p className="text-sky-200 text-sm sm:text-base font-light">
            Everything you need to know about TECITON 2026.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto space-y-3 mb-24">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#0e0409]/95 border border-pink-500/30 hover:border-sky-400/80 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-mono text-sm sm:text-base font-bold text-white pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-sky-400 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''
                    }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-4 pt-1 border-t border-rose-900/40 text-sky-100 text-sm font-light leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ================= CONTACT US MAIN HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight mb-2">
            Contact <span className="italic text-sky-400 font-serif">Us</span>
          </h2>
          <p className="text-pink-200 text-sm sm:text-base font-light">
            Reach out to our convenor, staff coordinators, or student office bearers.
          </p>
        </div>

        {/* ================= FIRST CARD GROUP: CONVENOR & STAFF COORDINATORS ================= */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-2 mb-6 text-center">
            <Award className="w-5 h-5 text-sky-400" />
            <h3 className="font-mono text-base sm:text-lg font-bold text-sky-300 uppercase tracking-wider">
              CONVENOR & STAFF COORDINATORS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {staffCoordinators.map((staff, idx) => (
              <div
                key={idx}
                className="bg-[#0e0409]/95 border border-pink-500/35 hover:border-sky-400 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.25)] group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#081622] border border-sky-500/40 text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <User className="w-6 h-6" />
                    </div>
                    <span className="px-3.5 py-1 rounded-full text-xs sm:text-sm font-mono font-extrabold bg-[#081622] text-sky-300 border border-sky-500/50">
                      {staff.role}
                    </span>
                  </div>
                  <h4 className="font-mono text-xl sm:text-2xl font-extrabold text-white mb-1">
                    {staff.name}
                  </h4>
                  {staff.subtitle && (
                    <p className="text-sm text-pink-300 font-mono font-bold mb-4">{staff.subtitle}</p>
                  )}
                </div>
                <a
                  href={`tel:${staff.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl bg-[#081622] hover:bg-sky-950/80 border border-sky-500/40 text-white font-mono text-base sm:text-lg font-extrabold transition-colors mt-2"
                >
                  <Phone className="w-5 h-5 text-pink-400" />
                  {staff.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECOND CARD GROUP: STUDENT COORDINATORS & OFFICE BEARERS ================= */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-2 mb-6 text-center">
            <Users className="w-6 h-6 text-pink-400" />
            <h3 className="font-mono text-lg sm:text-xl font-extrabold text-pink-300 uppercase tracking-wider">
              EVENT COORDINATORS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {studentCoordinators.map((coord, idx) => (
              <div
                key={idx}
                className="bg-[#0e0409]/95 border border-pink-500/35 hover:border-pink-400 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_25px_rgba(244,63,94,0.25)] group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#180610] border border-pink-500/40 text-pink-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <User className="w-6 h-6" />
                    </div>
                    <span className="px-3.5 py-1 rounded-full text-xs sm:text-sm font-mono font-extrabold bg-[#180610] text-pink-300 border border-pink-500/40">
                      {coord.role}
                    </span>
                  </div>
                  <h4 className="font-mono text-xl sm:text-2xl font-extrabold text-white mb-1">
                    {coord.name}
                  </h4>
                  <p className="text-sm text-sky-300 font-mono font-bold mb-4">{coord.role}</p>
                </div>
                <a
                  href={`tel:${coord.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl bg-[#180610] hover:bg-pink-950/80 border border-pink-500/40 text-white font-mono text-base sm:text-lg font-extrabold transition-colors mt-2"
                >
                  <Phone className="w-5 h-5 text-sky-400" />
                  {coord.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Google Maps Campus Location Frame */}
        <div className="glass-card p-4 sm:p-6 border-pink-500/30 bg-[#0e0409]/95 overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 px-2">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-5 h-5 text-sky-400" />
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">Campus Location Map</h3>
                <p className="text-xs text-sky-200 font-light">New Prince Shri Bhavani College of Engineering and Technology, Gowrivakkam, Chennai</p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=New+Prince+Shri+Bhavani+College+of+Engineering+and+Technology+Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold font-mono text-white hover:text-sky-300 transition-colors inline-flex items-center gap-1 bg-[#081622] px-3 py-1.5 rounded-lg border border-sky-400/40 shrink-0"
            >
              <span>Get Directions</span> ↗
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-rose-500/30 shadow-inner relative bg-[#050207]">
            <iframe
              title="Campus Google Map Location"
              src="https://maps.google.com/maps?q=New%20Prince%20Shri%20Bhavani%20College%20of%20Engineering%20and%20Technology%20Gowrivakkam%20Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

