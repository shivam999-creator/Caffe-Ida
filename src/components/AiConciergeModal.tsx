import React, { useState } from 'react';
import { X, Sparkles, Send, Bot, User, ChefHat, ArrowRight } from 'lucide-react';
import { MENU_ITEMS, BUSINESS_INFO } from '../data/caffeData';

interface AiConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory?: (category: string) => void;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const AiConciergeModal: React.FC<AiConciergeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Buon giorno! I am Nonna Ida's AI Kitchen Advisor. Ask me anything about our authentic South Philly cutlets, party hoagie ring catering, espresso, or custom party menus on West Passyunk Ave!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const quickPrompts = [
    'What cutlet do you recommend for a first-timer?',
    'Planning a party catering for 15-20 people',
    'Best Italian espresso & pastry pairing',
    'Vegetarian options on the menu',
  ];

  const generateAnswer = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('cutlet') || q.includes('first-time') || q.includes('recommend') || q.includes('signature')) {
      return "You must try **The Passyunk Special Cutlet** ($15.95)! It is our pride—golden hand-breaded chicken cutlet with sauteed broccoli rabe, sharp Italian provolone, and roasted sweet peppers on a freshly baked seeded roll. If you like it spicy, our **Spicy Calabrian Cutlet** with Calabrian chili relish is phenomenal!";
    }

    if (q.includes('catering') || q.includes('party') || q.includes('15') || q.includes('20') || q.includes('people') || q.includes('office') || q.includes('event')) {
      return "For 15 to 20 guests, we highly recommend combining **The Famous Party Hoagie Ring** ($89.00, serves 12-16) with a tray of our **Gourmet Cutlet Finger & Slider Platter** ($110.00) and a dozen freshly piped **Sicilian Cannoli** ($4.75 ea). We prepare everything fresh for your pickup or delivery in South Philly!";
    }

    if (q.includes('coffee') || q.includes('espresso') || q.includes('pastry') || q.includes('morning') || q.includes('sweet') || q.includes('cannoli')) {
      return "The classic Italian morning pairing: our **Espresso Doppio** or **Classic Cappuccino Italiano** with a **Freshly Piped Sicilian Cannoli** (filled to order with sweet whole milk ricotta and Bronte pistachios) or **Nonna Ida's Classic Tiramisù**!";
    }

    if (q.includes('vegetarian') || q.includes('veggie') || q.includes('meatless')) {
      return "For our vegetarian guests, we recommend our **Eggplant Milanese Panini** ($13.95) with crisp layered eggplant, roasted peppers, and fresh pesto, or the **Caprese Panini al Pesto** ($12.95) with fresh buffalo mozzarella and Modena balsamic glaze.";
    }

    if (q.includes('soup') || q.includes('chicken soup')) {
      return "Nonna's **Signature Chicken Escarole Soup** ($7.95) is simmered every single morning from scratch with rich golden bone broth, tender chicken breast, fresh escarole greens, and ditalini pasta. It is pure comfort!";
    }

    if (q.includes('hours') || q.includes('location') || q.includes('address') || q.includes('open')) {
      return `We are located at ${BUSINESS_INFO.address}. Open Monday–Thursday 7:30 AM–6:00 PM, Friday–Saturday 7:30 AM–8:00 PM, and Sunday 8:00 AM–5:00 PM. Call us at ${BUSINESS_INFO.phone} anytime!`;
    }

    return `At Caffè Ida on West Passyunk Ave, all our food is made fresh daily with authentic Italian recipes. Whether you are craving our handcrafted cutlets, imported charcuterie hoagies, or party platters, we are ready to serve you! Buon appetito!`;
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const reply = generateAnswer(text);
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
      setIsLoading(false);
    }, 450);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-enter"
    >
      <div className="relative w-full max-w-2xl bg-neutral-950 text-white rounded-[2.5rem] border border-white/15 overflow-hidden shadow-2xl flex flex-col h-[85vh] max-h-[700px]">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-neutral-900/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-jakarta flex items-center gap-2">
                Nonna Ida's Menu & Catering Advisor
              </h3>
              <p className="text-[11px] text-amber-300/80 font-geist">
                AI Culinary Concierge • 1732-34 West Passyunk Ave
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 font-geist text-xs sm:text-sm">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex gap-3 ${
                m.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {m.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-amber-500 text-black flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                  <ChefHat className="w-4 h-4" />
                </div>
              )}

              <div
                className={`p-4 rounded-2xl max-w-[85%] leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-amber-500 text-black font-semibold rounded-tr-none'
                    : 'bg-neutral-900 border border-white/10 text-neutral-200 rounded-tl-none'
                }`}
              >
                {m.content}
              </div>

              {m.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 justify-start items-center text-xs text-neutral-400 italic">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Sparkles className="w-4 h-4 animate-spin" />
              </div>
              <span>Nonna is thinking of the perfect pairing...</span>
            </div>
          )}
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-6 py-2 border-t border-white/5 flex gap-2 overflow-x-auto scrollbar-none">
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="text-[11px] bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-neutral-300 hover:text-amber-300 px-3 py-1.5 rounded-full whitespace-nowrap transition-colors font-geist"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-white/10 bg-neutral-900/60">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              placeholder="Ask about sandwiches, catering sizes, ingredients..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-3 rounded-full bg-neutral-950 border border-white/15 text-white placeholder-neutral-500 text-xs sm:text-sm font-geist focus:outline-none focus:border-amber-500"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-3 rounded-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black transition-colors"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
