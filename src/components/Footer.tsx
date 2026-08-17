import React from 'react';
import { Phone, MapPin, Instagram, Heart, ArrowUp, Navigation, CreditCard, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/caffeData';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white w-full border-t border-neutral-100 px-6 sm:px-10 md:px-16 lg:px-20 py-20 md:py-28">
      <div className="max-w-[1600px] mx-auto">
        {/* Main CTA Conversion Card matching reference */}
        <div className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-amber-950 rounded-[2.5rem] p-8 sm:p-14 md:p-20 text-center relative overflow-hidden shadow-2xl text-white mb-16">
          {/* Subtle pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider font-geist mb-4 inline-block">
              Buon Appetito
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-jakarta text-white mb-6 tracking-tight leading-[1.1]">
              Ready for authentic South Philly Italian flavors?
            </h2>
            <p className="text-neutral-300 text-sm sm:text-lg font-geist mb-10 font-light max-w-2xl mx-auto leading-relaxed">
              Order fresh handcrafted cutlet sandwiches, stop in for morning espresso, or let us cater your family gathering with signature hoagie rings.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto bg-amber-500 text-black px-8 py-4 rounded-full font-bold text-sm font-geist hover:bg-amber-400 transition-all flex items-center justify-center gap-3 shadow-xl shadow-amber-500/20 active:scale-95"
              >
                <Phone className="w-5 h-5" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={onOpenReservation}
                className="w-full sm:w-auto glass-panel text-white px-8 py-4 rounded-full font-bold text-sm font-geist hover:bg-white/20 transition-all flex items-center justify-center gap-3 border border-white/20"
              >
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>Inquire Table / Catering</span>
              </button>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-neutral-900 border border-white/10 hover:border-white/30 text-neutral-300 hover:text-white px-6 py-4 rounded-full font-semibold text-sm font-geist transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Secure Payment Options Strip */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-6 text-neutral-400 text-xs font-geist uppercase tracking-widest">
            <span className="text-neutral-400">Payment Accepted</span>
            <div className="flex items-center gap-5 text-neutral-300 font-normal normal-case">
              <span>Apple Pay</span>
              <span>•</span>
              <span>Major Credit Cards</span>
              <span>•</span>
              <span>Contactless Tap</span>
              <span>•</span>
              <span>Cash</span>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Brand Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-neutral-200 text-neutral-600 font-geist text-xs sm:text-sm">
          {/* Col 1 */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-neutral-900 text-amber-400 font-cinzel font-bold text-base flex items-center justify-center">
                CI
              </div>
              <span className="font-jakarta font-bold text-lg text-neutral-900">
                {BUSINESS_INFO.name}
              </span>
            </div>
            <p className="text-neutral-500 text-xs leading-relaxed mb-4">
              Authentic Italian-American café & delicatessen in South Philadelphia. Good Coffee. Good Food. Good People.
            </p>
            <a
              href={BUSINESS_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 hover:text-amber-600"
            >
              <Instagram className="w-4 h-4 text-amber-700" />
              <span>Follow @caffe_ida on Instagram</span>
            </a>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-bold text-neutral-900 font-jakarta text-sm mb-3">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#story" className="hover:text-amber-800 transition-colors">Our South Philly Story</a></li>
              <li><a href="#featured" className="hover:text-amber-800 transition-colors">Featured Cutlets & Hoagies</a></li>
              <li><a href="#menu" className="hover:text-amber-800 transition-colors">Curated Full Menu</a></li>
              <li><a href="#catering" className="hover:text-amber-800 transition-colors">Party Platters & Catering</a></li>
              <li><a href="#gallery" className="hover:text-amber-800 transition-colors">Photo Gallery</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-bold text-neutral-900 font-jakarta text-sm mb-3">
              Visit & Contact
            </h4>
            <div className="space-y-2 text-xs text-neutral-600">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-800 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-amber-800 font-bold">
                  {BUSINESS_INFO.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Col 4: Back to top */}
          <div className="flex flex-col justify-between items-start md:items-end">
            <h4 className="font-bold text-neutral-900 font-jakarta text-sm mb-3">
              Hours
            </h4>
            <div className="text-xs text-neutral-600 space-y-1 md:text-right mb-4">
              <p>Mon – Thu: 7:30 AM – 6:00 PM</p>
              <p>Fri – Sat: 7:30 AM – 8:00 PM</p>
              <p>Sunday: 8:00 AM – 5:00 PM</p>
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs font-bold text-neutral-800 hover:text-amber-700 p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition-all"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-400 font-geist">
          <p>© {new Date().getFullYear()} Caffè Ida. All rights reserved. South Philadelphia, PA.</p>
          <div className="flex gap-6 text-neutral-500">
            <a href={BUSINESS_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 transition-colors">
              Google Maps
            </a>
            <a href={BUSINESS_INFO.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 transition-colors">
              Instagram @caffe_ida
            </a>
            <a href="#menu" className="hover:text-neutral-900 transition-colors">
              Menu & Catering
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
