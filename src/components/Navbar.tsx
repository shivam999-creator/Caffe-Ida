import React, { useState, useEffect } from 'react';
import { Phone, Clock, Menu as MenuIcon, X, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/caffeData';

interface NavbarProps {
  onOpenReservation: () => void;
  onOpenAiConcierge: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenReservation,
  onOpenAiConcierge,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Story', href: '#story' },
    { label: 'Featured', href: '#featured' },
    { label: 'Menu', href: '#menu' },
    { label: 'Catering', href: '#catering' },
    { label: 'Ambience', href: '#ambience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit', href: '#visit' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 rounded-2xl bg-amber-500/20 backdrop-blur-xl border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300 shadow-lg shadow-amber-950/20">
            <span className="font-cinzel text-lg font-bold">CI</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-jakarta font-bold text-lg sm:text-xl tracking-tight leading-none group-hover:text-amber-300 transition-colors">
              {BUSINESS_INFO.name}
            </span>
            <span className="text-amber-200/70 font-geist text-[10px] font-medium tracking-widest uppercase mt-0.5">
              West Passyunk • South Philly
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 glass-panel-dark px-4 py-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-all font-geist tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {/* AI Menu Pairing Helper */}
          <button
            onClick={onOpenAiConcierge}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all"
            title="Nonna Ida's Food & Catering Advisor"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span className="font-geist">AI Menu Advisor</span>
          </button>

          {/* Quick Phone Call Link */}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 rounded-full border border-white/15 text-neutral-200 bg-black/40 backdrop-blur-md text-xs font-medium font-geist hover:bg-white/10 hover:border-white/30 transition-all whitespace-nowrap shrink-0"
            title={`Call ${BUSINESS_INFO.phone}`}
            aria-label={`Call ${BUSINESS_INFO.phone}`}
          >
            <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="hidden md:inline font-medium">{BUSINESS_INFO.phone}</span>
            <span className="md:hidden font-semibold">Call</span>
          </a>

          {/* Reserve / Catering CTA */}
          <button
            onClick={onOpenReservation}
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-black px-4 py-2 rounded-full font-semibold text-xs font-geist hover:brightness-110 transition-all shadow-lg shadow-amber-500/20 active:scale-95"
          >
            Book Table / Catering
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/10 border border-white/15 text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950/95 border-b border-white/10 px-6 py-6 mt-2 backdrop-blur-2xl animate-enter">
          <div className="flex flex-col gap-3 font-geist text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-300 hover:text-amber-400 py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAiConcierge();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold"
              >
                <Sparkles className="w-4 h-4" /> Nonna Ida's AI Menu Sommelier
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 rounded-full bg-amber-500 text-black font-semibold text-xs shadow-lg shadow-amber-500/20"
              >
                Reserve Table or Inquire Catering
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-white/20 text-white text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" /> Call {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
