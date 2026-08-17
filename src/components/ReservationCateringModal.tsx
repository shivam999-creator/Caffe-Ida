import React, { useState } from 'react';
import { X, Calendar, Users, Clock, Phone, Mail, CheckCircle2, Sparkles, Utensils, MessageSquare } from 'lucide-react';
import { ReservationFormData } from '../types';
import { BUSINESS_INFO } from '../data/caffeData';

interface ReservationCateringModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationCateringModal: React.FC<ReservationCateringModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'dining' | 'catering'>('dining');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ReservationFormData>({
    type: 'dining',
    name: '',
    phone: '',
    email: '',
    guests: 4,
    date: new Date().toISOString().split('T')[0],
    time: '12:30 PM',
    specialRequests: '',
    cateringPackage: 'Party Hoagie Ring + Cutlet Tray',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-enter"
    >
      <div className="relative w-full max-w-2xl bg-neutral-950 text-white rounded-[2.5rem] border border-white/15 p-6 sm:p-10 shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider font-geist">
                Caffè Ida Reservations & Hospitality
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-jakarta mt-1">
                {activeTab === 'dining' ? 'Reserve a Table' : 'Plan Event Catering'}
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm font-geist mt-1">
                {activeTab === 'dining'
                  ? 'Join us on West Passyunk Ave for lunch, coffee, or a private dinner.'
                  : 'Order signature party hoagie rings, cutlet platters, and Italian feasts.'}
              </p>
            </div>

            {/* Tab selector */}
            <div className="flex bg-neutral-900 p-1.5 rounded-2xl mb-6 border border-white/10">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('dining');
                  setFormData({ ...formData, type: 'dining' });
                }}
                className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-geist transition-all ${
                  activeTab === 'dining'
                    ? 'bg-amber-500 text-black shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Table Reservation
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('catering');
                  setFormData({ ...formData, type: 'catering' });
                }}
                className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-geist transition-all ${
                  activeTab === 'catering'
                    ? 'bg-amber-500 text-black shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Party & Event Catering
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 font-geist text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anthony Rossi"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 font-medium mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(215) 555-0199"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1.5">
                    {activeTab === 'dining' ? 'Guests' : 'Estimated Headcount'}
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-amber-500"
                  >
                    {activeTab === 'dining'
                      ? [1, 2, 3, 4, 5, 6, 8, 10, 15, 20].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))
                      : [10, 15, 20, 25, 30, 40, 50, 75, 100].map((n) => (
                          <option key={n} value={n}>
                            {n} Guests
                          </option>
                        ))}
                  </select>
                </div>

                <div>
                  <label className="block text-neutral-300 font-medium mb-1.5">Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 font-medium mb-1.5">Preferred Time *</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-amber-500"
                  >
                    {[
                      '8:00 AM',
                      '9:00 AM',
                      '10:30 AM',
                      '11:30 AM',
                      '12:00 PM',
                      '12:30 PM',
                      '1:00 PM',
                      '2:00 PM',
                      '3:30 PM',
                      '5:00 PM',
                      '6:00 PM',
                      '7:00 PM',
                    ].map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {activeTab === 'catering' && (
                <div>
                  <label className="block text-neutral-300 font-medium mb-1.5">
                    Select Catering Package / Interest
                  </label>
                  <select
                    value={formData.cateringPackage}
                    onChange={(e) => setFormData({ ...formData, cateringPackage: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="Party Hoagie Ring (Serves 12-16)">
                      The Famous Party Hoagie Ring (Serves 12-16) - $89
                    </option>
                    <option value="Gourmet Cutlet Finger & Slider Platter (Serves 15-20)">
                      Gourmet Cutlet Finger & Slider Platter (Serves 15-20) - $110
                    </option>
                    <option value="Grand South Philly Antipasto Board">
                      Grand South Philly Antipasto Board - $95
                    </option>
                    <option value="Complete Italian Feast (Hoagies + Cutlets + Cannoli)">
                      Complete Italian Feast (Hoagies + Cutlets + Cannoli)
                    </option>
                    <option value="Custom Event Menu">Custom Event Menu / Request Consultation</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-neutral-300 font-medium mb-1.5">
                  Special Requests, Allergies or Delivery Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Celebrating a birthday, gluten-free sandwich needed, delivery to South Philly address..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold text-sm font-geist hover:brightness-110 shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
                >
                  {activeTab === 'dining' ? 'Confirm Reservation Request' : 'Submit Catering Inquiry'}
                </button>
              </div>

              <p className="text-[11px] text-center text-neutral-400 mt-2">
                Need immediate same-day booking? Call us directly at{' '}
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-amber-400 font-semibold underline">
                  {BUSINESS_INFO.phone}
                </a>
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-8 animate-enter">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold font-jakarta text-white">
              Grazie Mille, {formData.name}!
            </h3>
            <p className="text-amber-300 font-medium text-sm mt-1">
              Your {formData.type === 'dining' ? 'table reservation' : 'catering request'} has been received.
            </p>
            <div className="bg-neutral-900 rounded-2xl p-4 my-6 text-left border border-white/10 text-xs text-neutral-300 space-y-1.5">
              <p>
                <strong>Date & Time:</strong> {formData.date} at {formData.time}
              </p>
              <p>
                <strong>Party Size:</strong> {formData.guests} guests
              </p>
              <p>
                <strong>Location:</strong> 1732-34 West Passyunk Ave, South Philly
              </p>
              {formData.cateringPackage && formData.type === 'catering' && (
                <p>
                  <strong>Package:</strong> {formData.cateringPackage}
                </p>
              )}
            </div>
            <p className="text-xs text-neutral-400 max-w-md mx-auto mb-6">
              Our team at Caffè Ida will reach out to <strong>{formData.phone}</strong> to confirm your details.
            </p>
            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-full bg-amber-500 text-black font-bold text-xs font-geist hover:bg-amber-400 transition-all"
            >
              Done & Return to Menu
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
