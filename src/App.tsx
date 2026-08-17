import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { FeaturedDishes } from './components/FeaturedDishes';
import { MenuSection } from './components/MenuSection';
import { AmbienceBento } from './components/AmbienceBento';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { VisitHoursSection } from './components/VisitHoursSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { ReservationCateringModal } from './components/ReservationCateringModal';
import { DishDetailModal } from './components/DishDetailModal';
import { AiConciergeModal } from './components/AiConciergeModal';
import { MenuItem } from './types';

export default function App() {
  // Modal States
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [isAiConciergeOpen, setIsAiConciergeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-900 flex flex-col items-center justify-center p-0 md:p-3 lg:p-4 selection:bg-amber-400 selection:text-black">
      {/* Outer frame container matching the user reference */}
      <div className="relative w-full max-w-[1600px] bg-white md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-black/10 flex flex-col">
        {/* Sticky Top Navbar */}
        <Navbar
          onOpenReservation={() => setIsReservationOpen(true)}
          onOpenAiConcierge={() => setIsAiConciergeOpen(true)}
        />

        {/* Hero Section */}
        <Hero
          onOpenReservation={() => setIsReservationOpen(true)}
          onOpenAiConcierge={() => setIsAiConciergeOpen(true)}
        />

        {/* Story Section */}
        <StorySection />

        {/* Featured Items Section */}
        <FeaturedDishes
          onSelectItem={(dish) => setSelectedDish(dish)}
        />

        {/* Categorized Deep Menu Section */}
        <MenuSection
          onSelectItem={(dish) => setSelectedDish(dish)}
          onOpenReservation={() => setIsReservationOpen(true)}
        />

        {/* Dark Bento Ambience & Facilities Section */}
        <AmbienceBento />

        {/* Visual Gallery with Lightbox */}
        <GallerySection />

        {/* Community Reviews Section */}
        <ReviewsSection />

        {/* Visit, Map & Opening Hours Section */}
        <VisitHoursSection />

        {/* FAQ Accordion Section */}
        <FaqSection />

        {/* Conversion Footer */}
        <Footer onOpenReservation={() => setIsReservationOpen(true)} />
      </div>

      {/* Floating Action Bar on Mobile */}
      <MobileActionBar
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Interactive Reservation & Catering Modal */}
      <ReservationCateringModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Dish Detail Inspection Modal */}
      <DishDetailModal
        item={selectedDish}
        onClose={() => setSelectedDish(null)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* AI Kitchen Concierge Modal */}
      <AiConciergeModal
        isOpen={isAiConciergeOpen}
        onClose={() => setIsAiConciergeOpen(false)}
      />
    </div>
  );
}
