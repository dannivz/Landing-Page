import React from "react";
import { CONFIG } from "../config/config";
import { analytics } from "../services/analytics";

export default function Pricing() {
  const handleCheckout = () => {
    analytics.clickBuyButton(CONFIG.currentPrice);
    analytics.beginCheckout(CONFIG.currentPrice);

    if (!CONFIG.stripePaymentLink || CONFIG.stripePaymentLink.includes("XXXXXXXX")) {
      alert(
        "⚠️ CONFIGURACIÓN REQUERIDA:\n\nPor favor actualiza stripePaymentLink en src/config/config.js con tu enlace real de Stripe Payment Link."
      );
      return;
    }

    window.open(CONFIG.stripePaymentLink, "_blank");
  };

  return (
    <section id="pricing" className="py-24 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="text-[var(--color-primary)] font-bold text-sm uppercase tracking-wide">
            Investment
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text)] mb-6 mt-3">
            An Investment That Pays For Itself
          </h2>
          <p className="text-xl text-[var(--color-text-light)] max-w-3xl mx-auto">
            Full access, no monthly fees or surprises. One-time payment and lifetime access.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Comparación de precios */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Plan básico */}
            <div className="bg-[var(--color-bg)] rounded-2xl p-8 border-2 border-gray-200 relative opacity-60">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-400 text-white px-4 py-1 rounded-full text-sm font-bold">
                Without Bonuses
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4 text-center">
                Course Only
              </h3>
              <div className="text-center mb-6">
                <span className="text-5xl font-extrabold text-[var(--color-text-light)] line-through">
                  {CONFIG.currency}
                  {CONFIG.originalPrice}
                </span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-[var(--color-primary)] mr-3 text-xl">✓</span>
                  <span className="text-[var(--color-text-light)]">6 Complete Modules</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-primary)] mr-3 text-xl">✓</span>
                  <span className="text-[var(--color-text-light)]">22+ Hours of Video</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-primary)] mr-3 text-xl">✓</span>
                  <span className="text-[var(--color-text-light)]">Lifetime Access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 text-xl">✗</span>
                  <span className="text-gray-400 line-through">Private Community</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 text-xl">✗</span>
                  <span className="text-gray-400 line-through">Exclusive Bonuses</span>
                </li>
              </ul>
            </div>

            {/* Plan completo */}
            <div className="bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--gradient-to)] rounded-2xl p-8 border-2 border-[var(--color-primary-dark)] relative shadow-2xl transform md:scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[var(--color-accent)] text-[var(--color-text)] px-6 py-2 rounded-full text-sm font-bold animate-pulse">
                🔥 LIMITED OFFER
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center mt-4">
                Complete Package
              </h3>

              <div className="text-center mb-6">
                <div className="text-white/70 text-xl line-through mb-2">
                  {CONFIG.currency}
                  {CONFIG.originalPrice}
                </div>
                <span className="text-6xl font-extrabold text-white">
                  {CONFIG.currency}
                  {CONFIG.currentPrice}
                </span>
                <div className="text-[var(--color-accent)] font-bold mt-2 text-lg">Special Price</div>
              </div>

              <ul className="space-y-4 mb-8 text-white">
                <li className="flex items-start">
                  <span className="text-[var(--color-accent)] mr-3 text-xl">✓</span>
                  <span>6 Complete Modules</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-accent)] mr-3 text-xl">✓</span>
                  <span>22+ Hours of HD Video</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-accent)] mr-3 text-xl">✓</span>
                  <span>Lifetime Access + Updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-accent)] mr-3 text-xl">✓</span>
                  <span className="font-bold">VIP Private Community</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-accent)] mr-3 text-xl">✓</span>
                  <span className="font-bold">$311 Worth of Bonuses FREE</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-accent)] mr-3 text-xl">✓</span>
                  <span className="font-bold">Professional Certification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-accent)] mr-3 text-xl">✓</span>
                  <span className="font-bold">24/7 Priority Support</span>
                </li>
              </ul>

              <button
                onClick={handleCheckout}
                className="w-full bg-white text-[var(--color-primary)] py-5 rounded-full font-bold text-xl hover:bg-gray-100 transform hover:scale-105 transition-all shadow-2xl"
              >
                Buy Now For {CONFIG.currency}
                {CONFIG.currentPrice}
              </button>

              <p className="text-center text-white/90 text-sm mt-4">
                🔒 Secure payment with Stripe | {CONFIG.guarantee}-day guarantee
              </p>
            </div>
          </div>

          {/* Garantía + urgencia modernizada */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* Garantía de satisfacción */}
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-200 transform transition-transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l9 4.5v5.25c0 5.25-3.75 9.75-9 10.5-5.25-.75-9-5.25-9-10.5V6.5L12 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                100% Satisfaction Guarantee
              </h3>
              <p className="text-gray-600 text-lg text-center">
                Implement the course for the next <span className="font-semibold text-gray-900">{CONFIG.guarantee} days</span>. 
                If you don’t see measurable results, we’ll refund <span className="font-semibold text-gray-900">100%</span> of your investment—no questions asked.
              </p>
            </div>

            {/* Urgencia / oferta limitada */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 border border-red-300 rounded-2xl p-10 shadow-lg transform transition-transform hover:scale-105 animate-pulse">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-red-700 mb-3 text-center">
                Limited-Time Offer – Ends Soon
              </h3>
              <p className="text-gray-700 text-center text-lg mb-2">
                Only <span className="font-bold text-red-600">8 spots</span> remaining at this special price.
              </p>
              <p className="text-gray-500 text-center text-sm">
                Secure your spot now to lock in this exclusive deal.
              </p>
            </div>
          </div>

          {/* Métodos de pago */}
          <div className="mt-12 text-center">
            <p className="text-[var(--color-text-light)] text-lg mb-6">We accept all payment methods:</p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {/* Tarjeta de crédito */}
              <div className="bg-white px-6 py-3 rounded-lg shadow-md flex items-center gap-2">
                <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 4h20v16H2V4zm2 2v2h16V6H4zm0 4v8h16v-8H4z" />
                </svg>
                <span className="font-bold text-gray-700">Credit Cards</span>
              </div>

              {/* PayPal */}
              <div className="bg-white px-6 py-3 rounded-lg shadow-md flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#003087" d="M72.5 40h33.5c22.3 0 37.5 11.4 34.7 33.7-2.8 22.3-18.1 33.7-40.4 33.7H72.5V40z"/>
                  <path fill="#009cde" d="M72.5 40h33.5c22.3 0 37.5 11.4 34.7 33.7-2.8 22.3-18.1 33.7-40.4 33.7H72.5V40z"/>
                  <path fill="#012169" d="M72.5 40v68.3h33.5c22.3 0 37.5-11.4 34.7-33.7-2.8-22.3-18.1-34.6-40.4-34.6H72.5z"/>
                </svg>
                <span className="font-bold text-gray-700">PayPal</span>
              </div>

              {/* Bank Transfer */}
              <div className="bg-white px-6 py-3 rounded-lg shadow-md flex items-center gap-2">
                <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 6h20v4H2V6zm0 6h20v4H2v-4zm0 6h20v2H2v-2z" />
                </svg>
                <span className="font-bold text-gray-700">Bank Transfer</span>
              </div>
            </div>
            <p className="text-[var(--color-text-light)] mt-6 text-sm">
              * 3-installment payment option available with no interest
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
