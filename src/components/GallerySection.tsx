import React, { useState, useEffect, useCallback } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles, Camera } from 'lucide-react';
import { GalleryPhoto } from '../types';
import { GALLERY_PHOTOS } from '../data/caffeData';

export const GallerySection: React.FC = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setActivePhotoIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseLightbox = useCallback(() => {
    setActivePhotoIndex(null);
    document.body.style.overflow = 'unset';
  }, []);

  const handleNext = useCallback(() => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % GALLERY_PHOTOS.length);
    }
  }, [activePhotoIndex]);

  const handlePrev = useCallback(() => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex(
        (activePhotoIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
      );
    }
  }, [activePhotoIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, handleCloseLightbox, handleNext, handlePrev]);

  return (
    <section id="gallery" className="bg-white w-full px-6 sm:px-10 md:px-16 lg:px-20 py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-200 bg-neutral-50 text-[11px] font-semibold text-neutral-600 font-geist tracking-widest uppercase mb-4">
              <Camera className="w-3.5 h-3.5 text-amber-600" />
              Visual Story & Atmosphere
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-jakarta text-neutral-900 tracking-tight">
              A Glimpse into <span className="text-amber-800">Caffè Ida</span>
            </h2>
          </div>
          <p className="text-neutral-500 font-geist text-xs sm:text-sm max-w-md">
            Click any photo to explore our handcrafted cutlets, catering hoagie wreaths, artisan espresso bar, and cozy neighborhood space.
          </p>
        </div>

        {/* Masonry / Bento Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {GALLERY_PHOTOS.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => handleOpenLightbox(index)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-neutral-900 border border-neutral-200 hover:border-amber-500 transition-all duration-300 shadow-sm hover:shadow-xl hover-lift ${
                index === 0 || index === 5 ? 'sm:col-span-2 h-72 sm:h-80' : 'h-72 sm:h-80'
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-bold text-amber-300 uppercase font-geist tracking-wider block">
                    {photo.category}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold font-jakarta leading-snug">
                    {photo.title}
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo Lightbox"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-enter"
        >
          {/* Close button */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all z-20 border border-white/15"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all z-20 border border-white/15"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Active Image Box */}
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={GALLERY_PHOTOS[activePhotoIndex].src}
              alt={GALLERY_PHOTOS[activePhotoIndex].alt}
              className="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-white/10"
            />
            <div className="mt-4 text-center text-white">
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider font-geist">
                {GALLERY_PHOTOS[activePhotoIndex].category} • {activePhotoIndex + 1} of {GALLERY_PHOTOS.length}
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-jakarta mt-1">
                {GALLERY_PHOTOS[activePhotoIndex].title}
              </h3>
              <p className="text-xs text-neutral-400 font-geist mt-0.5">
                {GALLERY_PHOTOS[activePhotoIndex].alt}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all z-20 border border-white/15"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
