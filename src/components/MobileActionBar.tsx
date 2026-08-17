import React from 'react';
import { Phone, Utensils, Navigation, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/caffeData';

interface MobileActionBarProps {
  onOpenReservation: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({
  onOpenReservation,
}) => {
  return (
    <aside
      aria-label="Quick actions"
      className="md:hidden fixed bottom-3 left-3 right-3 z-40 bg-neutral-950/95 backdrop-blur-xl border border-white/15 rounded-full p-1.5 shadow-2xl flex items-center justify-between text-white font-geist text-xs"
    >
      {/* 1-Tap Call */}
      <a
        href={`tel:${BUSINESS_INFO.phoneRaw}`}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold active:scale-95 transition-all shadow-md whitespace-nowrap"
      >
        <Phone className="w-3.5 h-3.5 shrink-0" />
        <span className="text-[11px] whitespace-nowrap">Call Us</span>
      </a>

      {/* Menu */}
      <a
        href="#menu"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full hover:bg-white/10 active:scale-95 transition-all text-neutral-200"
      >
        <Utensils className="w-4 h-4 text-amber-400" />
        <span className="font-semibold text-[11px]">Menu</span>
      </a>

      {/* Reserve / Catering */}
      <button
        onClick={onOpenReservation}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full hover:bg-white/10 active:scale-95 transition-all text-neutral-200"
      >
        <Calendar className="w-4 h-4 text-amber-400" />
        <span className="font-semibold text-[11px]">Reserve</span>
      </button>

      {/* Directions */}
      <a
        href={BUSINESS_INFO.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-neutral-200"
      >
        <Navigation className="w-3.5 h-3.5 text-amber-400" />
        <span className="font-semibold text-[11px]">Map</span>
      </a>
    </aside>
  );
};
