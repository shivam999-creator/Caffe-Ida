import React from 'react';
import { Star, MessageSquare, ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import { REVIEWS_DATA, BUSINESS_INFO } from '../data/caffeData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="bg-neutral-950 w-full px-6 sm:px-10 md:px-16 lg:px-20 py-24 md:py-32 text-white">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest font-geist mb-4 inline-flex">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              Community Acclaim
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-jakarta tracking-tight">
              South Philly's <span className="text-amber-400">Beloved Neighborhood Gem</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-neutral-900 px-6 py-4 rounded-2xl border border-white/10">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <div className="border-l border-white/10 pl-4">
              <span className="text-xl font-bold font-jakarta text-white block leading-none">4.9 / 5.0</span>
              <span className="text-[11px] text-neutral-400 font-geist">Based on 840+ verified patrons</span>
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS_DATA.map((rev, idx) => (
            <div
              key={idx}
              className="bg-neutral-900/80 rounded-[2rem] p-8 border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between hover-lift shadow-xl"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <h3 className="text-lg font-bold font-jakarta text-white mb-3 leading-snug">
                  "{rev.highlight}"
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 font-geist leading-relaxed">
                  {rev.text}
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold font-jakarta text-white">
                    {rev.author}
                  </h4>
                  <p className="text-[11px] text-amber-300/80 font-geist">
                    {rev.role} • {rev.location}
                  </p>
                </div>
                <span className="text-[10px] text-neutral-500 font-geist px-2 py-1 rounded bg-white/5">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof & Map Link */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400 font-geist">
          <span>Read more real reviews or leave yours on Google:</span>
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 underline font-medium"
          >
            <span>View Caffè Ida on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
