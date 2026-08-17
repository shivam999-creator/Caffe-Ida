import React, { useState, useMemo } from 'react';
import { Search, Phone, ChefHat, Sandwich, Utensils, Soup, Coffee, Cake, Sparkles, Check, Info, Store } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_CATEGORIES, MENU_ITEMS, BUSINESS_INFO } from '../data/caffeData';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  onOpenReservation: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectItem,
  onOpenReservation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.italianName && item.italianName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'cutlets':
        return <ChefHat className="w-4 h-4" />;
      case 'hoagies':
        return <Sandwich className="w-4 h-4" />;
      case 'catering':
        return <Utensils className="w-4 h-4" />;
      case 'soups':
        return <Soup className="w-4 h-4" />;
      case 'coffee':
        return <Coffee className="w-4 h-4" />;
      case 'dolci':
        return <Cake className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="menu" className="bg-neutral-50 w-full px-6 sm:px-10 md:px-16 lg:px-20 py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto">
        {/* Header & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-300 bg-white text-[11px] font-semibold text-neutral-600 font-geist tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
              Authentic South Philly Menu
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-jakarta text-neutral-900 tracking-tight">
              Curated Delicacies & <span className="text-amber-700">Daily Specials</span>
            </h2>
            <p className="text-neutral-500 font-geist mt-2 text-sm sm:text-base max-w-xl">
              Made fresh to order with imported Italian meats, hand-stretched mozzarella, crisp seeded bread, and family recipes.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search cutlets, hoagies, catering..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-neutral-200 text-xs sm:text-sm font-geist text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-700 font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Counter Ordering & Takeout Notice Strip */}
        <div className="mb-10 bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-geist">
          <div className="flex items-center gap-3 text-amber-950">
            <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300/50 flex items-center justify-center text-amber-800 shrink-0">
              <Store className="w-5 h-5" />
            </div>
            <div>
              <strong className="block font-bold font-jakarta text-neutral-900 text-sm">
                Walk-In Counter Service & Phone Takeout
              </strong>
              <span>
                Order at our West Passyunk counter or call ahead for quick 15-minute pickup at{' '}
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="underline font-bold text-amber-900">
                  {BUSINESS_INFO.phone}
                </a>
                .
              </span>
            </div>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white px-5 py-2.5 rounded-full font-bold text-xs font-geist transition-colors whitespace-nowrap shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Call to Order</span>
          </a>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold font-geist whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-neutral-900 text-white shadow-md'
                : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-100'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Full Menu ({MENU_ITEMS.length})</span>
          </button>

          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold font-geist whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                  : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-100'
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Catering Banner Card */}
        {selectedCategory === 'catering' || selectedCategory === 'all' ? (
          <div className="mb-10 bg-gradient-to-r from-neutral-900 via-neutral-800 to-amber-950 rounded-[2rem] p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-neutral-700 shadow-xl">
            <div className="max-w-xl">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider font-geist mb-2 inline-block">
                Party & Event Catering
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-jakarta mt-1">
                Hosting a South Philly Gathering or Office Lunch?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-geist mt-1.5 leading-relaxed">
                Order custom party hoagie rings, hot cutlet trays, pasta dishes, and cannoli platters. We offer customized packages for 10 to 150 guests with delivery or pickup.
              </p>
            </div>
            <button
              onClick={onOpenReservation}
              className="whitespace-nowrap px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs sm:text-sm font-geist shadow-lg shadow-amber-500/20 transition-transform active:scale-95"
            >
              Request Catering Quote
            </button>
          </div>
        ) : null}

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-neutral-200">
            <p className="text-neutral-500 font-geist text-base">No menu items found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs font-bold text-amber-700 underline"
            >
              Clear filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-[2rem] p-5 border border-neutral-200/80 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col justify-between hover-lift"
              >
                <div>
                  {/* Image & Price */}
                  <div
                    onClick={() => onSelectItem(item)}
                    className="relative h-52 w-full rounded-2xl overflow-hidden mb-4 bg-neutral-100 cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                    {item.badge && (
                      <span className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-full font-geist border border-white/10">
                        {item.badge}
                      </span>
                    )}

                    <span className="absolute bottom-3 right-3 text-base font-bold font-jakarta text-neutral-900 bg-white/95 backdrop-blur-md px-3 py-1 rounded-xl shadow-md border border-neutral-100">
                      {item.price}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col gap-1">
                    {item.italianName && (
                      <span className="text-[11px] font-medium text-amber-800 font-geist italic">
                        {item.italianName}
                      </span>
                    )}
                    <h3
                      onClick={() => onSelectItem(item)}
                      className="text-base sm:text-lg font-bold font-jakarta text-neutral-900 group-hover:text-amber-800 transition-colors cursor-pointer"
                    >
                      {item.name}
                    </h3>
                    <p className="text-xs text-neutral-500 font-geist mt-1 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Dietary / Highlight tags */}
                  {item.dietary && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {item.dietary.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-amber-50 text-amber-800 border border-amber-200/60 px-2 py-0.5 rounded-full font-geist font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Actions */}
                <div className="mt-5 pt-3.5 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectItem(item)}
                    className="text-xs font-semibold text-neutral-500 hover:text-neutral-900 font-geist flex items-center gap-1"
                  >
                    <Info className="w-3.5 h-3.5" /> Recipe & Details
                  </button>

                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="flex items-center gap-1.5 bg-neutral-900 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-xs font-semibold font-geist transition-colors active:scale-95 shadow-sm"
                    title={`Call (215) 218-0100 to order ${item.name}`}
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Call to Order</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
