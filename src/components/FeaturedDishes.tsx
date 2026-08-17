import React from 'react';
import { Star, Phone, ArrowRight, Sparkles, Check, Info } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS, BUSINESS_INFO } from '../data/caffeData';

interface FeaturedDishesProps {
  onSelectItem: (item: MenuItem) => void;
}

export const FeaturedDishes: React.FC<FeaturedDishesProps> = ({ onSelectItem }) => {
  const featuredItems = MENU_ITEMS.filter((item) => item.featured);

  return (
    <section id="featured" className="bg-neutral-900 w-full px-6 sm:px-10 md:px-16 lg:px-20 py-20 md:py-28 text-white">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold font-geist uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              House Signatures
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-jakarta tracking-tight">
              Crafted With <span className="text-amber-400">South Philly Pride</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base font-geist max-w-md">
            Our most celebrated signatures—from the legendary Passyunk cutlet to our towering party hoagie rings and fresh Sicilian cannoli.
          </p>
        </div>

        {/* Featured Grid (4 Large Hero Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-neutral-950 rounded-[2rem] overflow-hidden border border-white/10 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between hover-lift shadow-xl"
            >
              {/* Image Container with Badge */}
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/20" />

                {item.badge && (
                  <span className="absolute top-4 left-4 bg-amber-500 text-black text-[11px] font-bold px-3 py-1 rounded-full font-geist tracking-wide shadow-md">
                    {item.badge}
                  </span>
                )}

                <span className="absolute bottom-3 right-4 text-xl font-bold font-jakarta text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-xl border border-white/10">
                  {item.price}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-medium text-amber-400/90 font-geist tracking-wider uppercase mb-1">
                    {item.italianName || 'Caffè Ida Specialità'}
                  </div>
                  <h3
                    onClick={() => onSelectItem(item)}
                    className="text-lg font-bold font-jakarta text-white group-hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    {item.name}
                  </h3>
                  <p className="text-xs text-neutral-400 font-geist mt-2 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Ingredients preview */}
                  {item.ingredients && item.ingredients.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.ingredients.slice(0, 3).map((ing, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-md text-neutral-300 font-geist"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectItem(item)}
                    className="text-xs font-semibold text-neutral-300 hover:text-white font-geist flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform"
                  >
                    <Info className="w-3.5 h-3.5 text-amber-400" />
                    <span>View Recipe</span>
                  </button>

                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-black px-3.5 py-2 rounded-xl text-xs font-bold font-geist transition-all active:scale-95 shadow-md shadow-amber-500/20"
                    title={`Call to order ${item.name}`}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Order by Phone</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
