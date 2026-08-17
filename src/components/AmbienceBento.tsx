import React from 'react';
import { Bell, Wifi, Accessibility, Coffee, CheckCircle, Sparkles, Shield, HeartHandshake } from 'lucide-react';

export const AmbienceBento: React.FC = () => {
  return (
    <section id="ambience" className="bg-[#0A0A0A] w-full text-white px-6 sm:px-10 md:px-16 lg:px-20 py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-amber-300 text-xs font-semibold uppercase tracking-widest font-geist mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Hospitality & Atmosphere
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-jakarta leading-[1.1]">
              Designed for <span className="text-amber-400">Connection</span> & Comfort.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-light max-w-lg font-geist mt-3">
              Whether grabbing a fast morning espresso, enjoying a relaxed lunch on West Passyunk Ave, or gathering the family for a catered milestone.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8">
          {/* Card 1: Services (Tall / 2 cols) */}
          <div className="md:col-span-2 relative bg-neutral-900/90 rounded-[2rem] p-8 border border-white/10 transition-all hover:border-amber-500/30 flex flex-col justify-between min-h-[380px] group shadow-xl">
            <div>
              <div className="w-12 h-12 glass-panel-dark rounded-2xl flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                <Bell className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-jakarta tracking-tight mb-4 text-white">
                Hospitality & Services
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm font-geist mb-6">
                Attentive Italian hospitality tailored for your routine and special celebrations.
              </p>
              <ul className="space-y-3.5">
                {[
                  'Indoor Table Service & Seating',
                  '15-Minute Curbside Pickup',
                  'Custom Event & Family Catering',
                  'Private Evening Gathering Bookings',
                  'Fresh Daily Seeded Bread Deliveries',
                ].map((service, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-300 font-geist text-xs sm:text-sm">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-neutral-400 font-geist">
              Authentic Italian-American family service
            </div>
          </div>

          {/* Card 2: Visual (Wide / 4 cols) */}
          <div className="md:col-span-4 relative bg-neutral-900 rounded-[2rem] overflow-hidden p-8 sm:p-10 group border border-white/10 min-h-[380px] shadow-xl flex flex-col justify-between">
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&auto=format&fit=crop&q=80"
              alt="Caffè Ida cafe vibe and espresso counter"
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

            <div className="relative z-10 flex justify-between items-start">
              <span className="px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[10px] tracking-wider uppercase font-semibold backdrop-blur-md border border-amber-500/30">
                South Philly Warmth
              </span>
              <span className="text-white/60 text-xs font-geist">1732-34 W Passyunk Ave</span>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-2xl sm:text-3xl font-bold font-jakarta tracking-tight mb-2 text-white">
                Cozy Neighborhood Vibe
              </h3>
              <p className="text-neutral-300 font-geist text-xs sm:text-sm max-w-lg leading-relaxed">
                Step off West Passyunk into a sunlit, welcoming space filled with the sounds of fresh espresso grinders and classic Italian music.
              </p>
            </div>
          </div>

          {/* Card 3: Free WiFi (Small / 2 cols) */}
          <div className="md:col-span-2 bg-neutral-900/60 rounded-[2rem] p-7 border border-white/10 flex flex-col justify-between hover:bg-neutral-900 transition-colors shadow-lg">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-400">
                <Wifi className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-semibold text-neutral-400 font-geist uppercase tracking-wider">
                Complimentary
              </span>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-bold font-jakarta text-white">High-Speed Wi-Fi</h4>
              <p className="text-xs text-neutral-400 mt-1 font-geist">
                Fast, reliable internet for morning work sessions and meetings over espresso.
              </p>
            </div>
          </div>

          {/* Card 4: Accessibility (Small / 2 cols) */}
          <div className="md:col-span-2 bg-neutral-900/60 rounded-[2rem] p-7 border border-white/10 flex flex-col justify-between hover:bg-neutral-900 transition-colors shadow-lg">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400">
                <Accessibility className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-semibold text-neutral-400 font-geist uppercase tracking-wider">
                100% ADA
              </span>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-bold font-jakarta text-white">Fully Accessible</h4>
              <p className="text-xs text-neutral-400 mt-1 font-geist">
                Step-free entrance, wide pathways, and accessible dining accommodations.
              </p>
            </div>
          </div>

          {/* Card 5: South Philly Pride (Small / 2 cols) */}
          <div className="md:col-span-2 bg-neutral-900/60 rounded-[2rem] p-7 border border-white/10 flex flex-col justify-between hover:bg-neutral-900 transition-colors shadow-lg">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-400">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-semibold text-neutral-400 font-geist uppercase tracking-wider">
                Daily Roast
              </span>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-bold font-jakarta text-white">Neapolitan Espresso</h4>
              <p className="text-xs text-neutral-400 mt-1 font-geist">
                Custom bean blend roasted specifically for thick crema and velvety cappuccinos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
