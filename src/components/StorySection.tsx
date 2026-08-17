import React from 'react';
import { ChefHat, Coffee, Sparkles, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/caffeData';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="bg-white w-full px-6 sm:px-10 md:px-16 lg:px-20 py-20 md:py-32">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-start gap-12 lg:gap-20">
        {/* Narrative Column */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-200 bg-amber-50 text-xs font-semibold text-amber-800 font-geist tracking-wider uppercase mb-6">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              West Passyunk Avenue • South Philadelphia
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-neutral-900 font-jakarta mb-6">
              Where every bite <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
                tastes like family.
              </span>
            </h2>

            <p className="text-neutral-600 font-geist leading-relaxed text-base sm:text-lg mb-6 font-normal">
              At <strong className="text-neutral-900 font-semibold">{BUSINESS_INFO.name}</strong>, we honor the timeless Italian-American tradition of South Philadelphia. Located at 1732-34 West Passyunk Avenue, our kitchen is built on three unbreakable pillars: <span className="italic font-medium text-amber-900">Good Coffee, Good Food, Good People.</span>
            </p>

            <p className="text-neutral-600 font-geist leading-relaxed text-base sm:text-lg mb-8 font-normal">
              From our crispy golden chicken cutlets loaded with garlicky broccoli rabe and aged sharp provolone, to our rich house-simmered chicken escarole soup and authentic double-shot espresso, everything is prepared fresh daily with imported Italian ingredients and genuine warmth.
            </p>

            {/* Value Props Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-amber-50/60 border border-amber-100/80 transition-all hover:bg-amber-50 hover:shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-amber-500 text-black flex items-center justify-center shrink-0 shadow-md shadow-amber-500/20">
                  <ChefHat className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold font-jakarta text-neutral-900">
                    Hand-Breaded Cutlets & Sarcone-Style Rolls
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 font-geist mt-1 leading-relaxed">
                    Tender chicken cutlets breaded with our signature herb-pecorino crust, fried to golden perfection and served on fresh seeded rolls.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 transition-all hover:border-neutral-300">
                <div className="w-11 h-11 rounded-xl bg-neutral-900 text-amber-400 flex items-center justify-center shrink-0">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold font-jakarta text-neutral-900">
                    Artisan Neapolitan Espresso & Cappuccino
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 font-geist mt-1 leading-relaxed">
                    Authentic dark roast pulled with velvety crema, paired perfectly with fresh Sicilian cannoli piped to order and warm pastries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 transition-all hover:border-neutral-300">
                <div className="w-11 h-11 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold font-jakarta text-neutral-900">
                    Full-Service Catering & Party Platters
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 font-geist mt-1 leading-relaxed">
                    Famous braided party hoagie rings, cutlet finger trays, and antipasto boards for family parties, game days, and office luncheons.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Story / Mosaic Column */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-neutral-200 group">
            <img
              src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=1200&auto=format&fit=crop&q=80"
              alt="Freshly prepared Italian cutlet sandwich with broccoli rabe"
              className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="px-3 py-1 rounded-full bg-amber-500 text-black text-[11px] font-bold tracking-wider uppercase mb-2 inline-block">
                South Philly Icon
              </span>
              <h3 className="text-2xl font-bold font-jakarta text-white mb-1">
                The Passyunk Avenue Experience
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm font-geist">
                Step inside for a warm greeting, the aroma of roasting espresso beans, and fresh seeded bread warm from the morning bake.
              </p>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-4 bg-neutral-950 rounded-2xl p-6 text-white text-center border border-neutral-800">
            <div>
              <span className="text-2xl sm:text-3xl font-bold font-jakarta text-amber-400 block">4.9★</span>
              <span className="text-[11px] sm:text-xs text-neutral-400 font-geist">840+ Reviews</span>
            </div>
            <div className="border-x border-neutral-800">
              <span className="text-2xl sm:text-3xl font-bold font-jakarta text-white block">100%</span>
              <span className="text-[11px] sm:text-xs text-neutral-400 font-geist">Fresh Daily</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-bold font-jakarta text-amber-400 block">1732</span>
              <span className="text-[11px] sm:text-xs text-neutral-400 font-geist">W Passyunk Ave</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
