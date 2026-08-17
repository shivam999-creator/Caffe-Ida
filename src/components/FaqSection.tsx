import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { FAQS_DATA, BUSINESS_INFO } from '../data/caffeData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white w-full px-6 sm:px-10 md:px-16 lg:px-20 py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-200 bg-neutral-50 text-[11px] font-semibold text-neutral-600 font-geist tracking-widest uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-jakarta text-neutral-900 tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="text-neutral-500 font-geist text-sm sm:text-base mt-2">
            Have questions regarding our South Philly kitchen, pickup process, or event catering?
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-neutral-200 overflow-hidden transition-all bg-neutral-50/50 hover:bg-neutral-50"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-jakarta font-bold text-neutral-900 text-base sm:text-lg focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-amber-500 text-black border-amber-500' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm font-geist text-neutral-600 leading-relaxed border-t border-neutral-100 animate-enter">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Strip */}
        <div className="mt-12 text-center bg-amber-50 rounded-2xl p-6 border border-amber-200/60 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold font-jakarta text-neutral-900">
              Have a specific question or custom order?
            </h4>
            <p className="text-xs text-neutral-600 font-geist">
              Give our West Passyunk counter a call directly.
            </p>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center gap-2 bg-neutral-900 hover:bg-amber-600 text-white px-5 py-2.5 rounded-full text-xs font-bold font-geist transition-colors whitespace-nowrap shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
