import React from 'react';
import { MapPin, Clock, Navigation, Phone, Car, CheckCircle2, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, HOURS_SCHEDULE } from '../data/caffeData';

export const VisitHoursSection: React.FC = () => {
  // Compute live open/closed indicator
  const now = new Date();
  const currentHour = now.getHours();
  const currentDay = now.getDay(); // 0 = Sun, 1 = Mon ... 6 = Sat
  const isOpen =
    currentDay === 0
      ? currentHour >= 8 && currentHour < 17
      : currentDay === 5 || currentDay === 6
      ? currentHour >= 7 && currentHour < 20
      : currentHour >= 7 && currentHour < 18;

  return (
    <section id="visit" className="bg-neutral-50 w-full px-6 sm:px-10 md:px-16 lg:px-20 py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-300 bg-white text-[11px] font-semibold text-neutral-600 font-geist tracking-widest uppercase mb-4">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            Plan Your Visit
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-jakarta text-neutral-900 tracking-tight">
            Visit Caffè Ida on <span className="text-amber-800">Passyunk Ave</span>
          </h2>
          <p className="text-neutral-500 font-geist text-sm sm:text-base mt-2">
            Located in the heart of historic South Philadelphia. Stop in for espresso, pick up fresh cutlet sandwiches, or plan event catering.
          </p>
        </div>

        {/* 2 Big Cards Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Location & Directions Card */}
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-neutral-200 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-800 shadow-inner">
                  <MapPin className="w-7 h-7" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full font-geist">
                  South Philadelphia
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-jakarta mb-3 tracking-tight">
                Our Location
              </h3>

              <p className="text-neutral-600 font-geist text-base sm:text-lg leading-relaxed mb-6">
                <strong className="text-neutral-900 block font-semibold">{BUSINESS_INFO.name}</strong>
                {BUSINESS_INFO.street}
                <br />
                {BUSINESS_INFO.cityStateZip}
              </p>

              <div className="space-y-2.5 text-xs sm:text-sm font-geist text-neutral-500 mb-8">
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Street parking & convenient 15-min curbside pickup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Between S 17th & S 18th St on W Passyunk Ave</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm font-geist transition-all shadow-md active:scale-95"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Get Google Maps Directions</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm font-geist transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Hours Card (Dark Luxury) */}
          <div className="bg-neutral-950 text-white rounded-[2.5rem] p-8 sm:p-12 border border-neutral-800 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            {/* Decor glow */}
            <div className="absolute top-0 right-0 w-56 h-56 bg-amber-500/10 rounded-bl-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10 text-amber-400">
                  <Clock className="w-7 h-7" />
                </div>

                {/* Real-time Status Badge */}
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-white/10 text-xs font-geist">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isOpen ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'
                    }`}
                  />
                  <span className={isOpen ? 'text-emerald-400 font-bold' : 'text-amber-300 font-medium'}>
                    {isOpen ? 'Open Now For Service' : 'Closed • Reopens Morning'}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-jakarta mb-2 tracking-tight">
                Opening Hours
              </h3>
              <p className="text-neutral-400 font-geist text-xs mb-8">
                *Kitchen prepares hot cutlets & breakfast daily; catering pickups welcome.
              </p>

              <div className="space-y-4 font-geist text-sm">
                {HOURS_SCHEDULE.map((schedule, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center border-b border-white/10 pb-3.5"
                  >
                    <span className="text-neutral-300 font-medium">{schedule.day}</span>
                    <span className="text-amber-200 font-semibold">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 relative z-10 flex items-center justify-between text-xs text-neutral-400 font-geist">
              <span>Advance catering pickup available by request</span>
              <span className="text-amber-400 font-semibold">Passyunk Ave</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
