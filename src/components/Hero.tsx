import React from 'react';
import { Star, ArrowUpRight, Calendar, Phone, MapPin, Sparkles, Coffee, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/caffeData';

interface HeroProps {
  onOpenReservation: () => void;
  onOpenAiConcierge: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onOpenAiConcierge }) => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[92vh] lg:h-[92vh] bg-neutral-950 overflow-hidden flex flex-col justify-between rounded-b-[2.5rem] md:rounded-b-[3.5rem] shadow-2xl"
    >
      {/* Background Image with Dark Vignette & Gradient */}
      <div className="absolute inset-0 animate-enter duration-1000 z-0">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1800&auto=format&fit=crop&q=80"
          alt="Caffè Ida Italian Food and Ambiance"
          className="w-full h-full object-cover object-center opacity-45 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-transparent to-neutral-950/70" />
        {/* Grain Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.04] bg-grain pointer-events-none" />
      </div>

      {/* Top spacing spacer for sticky header */}
      <div className="h-24 md:h-28" />

      {/* Hero Central / Bottom Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 pb-16 md:pb-24">
        {/* Badges / Trust Row */}
        <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8 animate-enter delay-100">
          <div className="flex items-center gap-2 bg-white text-neutral-900 px-4 py-1.5 rounded-full text-xs font-semibold font-geist shadow-xl hover:scale-105 transition-transform border border-white">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>{BUSINESS_INFO.rating}</span>
            <span className="text-neutral-500 font-normal">({BUSINESS_INFO.reviewsCount}+ South Philly Reviews)</span>
          </div>

          <div className="flex items-center gap-2 glass-panel text-amber-200 px-4 py-1.5 rounded-full text-xs font-medium font-geist hover:bg-white/20 transition-colors">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>1732-34 W Passyunk Ave, Philadelphia</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 glass-panel text-white/90 px-4 py-1.5 rounded-full text-xs font-medium font-geist">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Authentic Italian-American Deli</span>
          </div>
        </div>

        {/* Main Display Headline */}
        <h1 className="text-white font-jakarta leading-[0.92] drop-shadow-2xl max-w-5xl text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 animate-enter delay-200">
          Good Food...
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-white">
            Good People.
          </span>
        </h1>

        {/* Subtitle / Narrative */}
        <p className="text-neutral-300 text-base sm:text-lg md:text-xl font-light max-w-2xl leading-relaxed font-geist mb-8 sm:mb-10 animate-enter delay-300">
          Welcome to <strong className="text-amber-200 font-semibold">{BUSINESS_INFO.name}</strong> on West Passyunk Ave. Handcrafted golden chicken cutlets, imported charcuterie hoagies, slow-simmered chicken soup, and authentic Italian espresso crafted with warm family pride.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 animate-enter delay-500">
          <a
            href="#menu"
            className="flex items-center gap-3 bg-white text-black pl-6 pr-2 py-2 rounded-full font-semibold text-sm hover:bg-neutral-100 transition-all font-geist group shadow-xl shadow-white/10"
          >
            <span>Explore Menu</span>
            <span className="bg-black text-white p-2 rounded-full transition-transform group-hover:rotate-45 duration-300 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>

          <button
            onClick={onOpenReservation}
            className="flex items-center gap-3 glass-panel text-white pl-6 pr-2 py-2 rounded-full font-medium text-sm hover:bg-white/20 transition-all font-geist group backdrop-blur-md"
          >
            <span>Reserve or Inquire Catering</span>
            <span className="bg-white/15 text-white p-2 rounded-full border border-white/20 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </span>
          </button>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-sm font-semibold font-geist hover:bg-amber-500/30 transition-colors"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>

          <button
            onClick={onOpenAiConcierge}
            className="hidden xl:flex items-center gap-2 text-xs text-neutral-300 hover:text-amber-300 font-geist glass-panel px-4 py-3 rounded-full transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Ask Nonna's AI for Custom Platters & Pairings</span>
          </button>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-geist text-neutral-400">
          <div>
            <span className="text-white font-semibold block text-sm">West Passyunk Ave</span>
            <span>South Philadelphia, PA</span>
          </div>
          <div>
            <span className="text-white font-semibold block text-sm">Fresh Made Daily</span>
            <span>Cutlets, Soups & Bread</span>
          </div>
          <div>
            <span className="text-white font-semibold block text-sm">Party Catering Trays</span>
            <span>Hoagie Rings & Platters</span>
          </div>
          <div>
            <span className="text-white font-semibold block text-sm">Dine-In & Takeout</span>
            <span>Curbside Pickup Available</span>
          </div>
        </div>
      </div>
    </section>
  );
};
