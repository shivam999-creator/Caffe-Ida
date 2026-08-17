import React from 'react';
import { X, Phone, Calendar, Check, ChefHat, Tag } from 'lucide-react';
import { MenuItem } from '../types';
import { BUSINESS_INFO } from '../data/caffeData';

interface DishDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onOpenReservation?: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  item,
  onClose,
  onOpenReservation,
}) => {
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-enter"
    >
      <div className="relative w-full max-w-lg bg-neutral-950 text-white rounded-[2.5rem] border border-white/15 overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-72 w-full">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/30" />

          {item.badge && (
            <span className="absolute top-4 left-4 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full font-geist">
              {item.badge}
            </span>
          )}

          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <span className="text-2xl sm:text-3xl font-bold font-jakarta text-white">
              {item.price}
            </span>
            {item.italianName && (
              <span className="text-amber-300 text-xs italic font-geist">
                {item.italianName}
              </span>
            )}
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold font-jakarta text-white mb-2">
            {item.name}
          </h3>

          <p className="text-neutral-300 text-xs sm:text-sm font-geist leading-relaxed mb-6">
            {item.description}
          </p>

          {/* Ingredients list */}
          {item.ingredients && item.ingredients.length > 0 && (
            <div className="mb-6">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider font-geist block mb-2">
                Fresh Ingredients & Craft
              </span>
              <div className="flex flex-wrap gap-1.5">
                {item.ingredients.map((ing, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1.5 bg-neutral-900 border border-white/10 text-neutral-300 px-3 py-1 rounded-xl text-xs font-geist"
                  >
                    <Check className="w-3 h-3 text-amber-400" />
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Dietary notes */}
          {item.dietary && item.dietary.length > 0 && (
            <div className="mb-6 flex gap-2">
              {item.dietary.map((d, i) => (
                <span
                  key={i}
                  className="text-[11px] bg-amber-500/15 border border-amber-500/30 text-amber-300 px-2.5 py-1 rounded-lg font-geist"
                >
                  {d}
                </span>
              ))}
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex-1 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 text-black font-bold text-sm font-geist flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call to Order ({item.price})</span>
            </a>

            {onOpenReservation && (
              <button
                onClick={() => {
                  onClose();
                  onOpenReservation();
                }}
                className="py-3.5 px-6 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-white/15 text-white font-semibold text-xs font-geist flex items-center justify-center gap-2 transition-all"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Reserve Table</span>
              </button>
            )}
          </div>

          <p className="text-[11px] text-center text-neutral-500 font-geist mt-3">
            Order at the counter or call {BUSINESS_INFO.phone} for 15-min curbside pickup.
          </p>
        </div>
      </div>
    </div>
  );
};
