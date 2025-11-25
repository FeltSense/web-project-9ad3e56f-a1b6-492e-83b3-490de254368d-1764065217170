'use client';

import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Get lifetime access to HotOrNot with our exclusive pre-order offer. 
            No subscriptions, no hidden fees—just one payment.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="rounded-2xl bg-white shadow-lg border border-slate-100 p-8 md:p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6">
              <span className="text-sm font-semibold text-emerald-600">
                🔥 Limited Pre-Order Offer
              </span>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
                  $29
                </span>
                <span className="text-lg text-slate-500 line-through">
                  $49
                </span>
              </div>
              <p className="text-slate-600">
                One-time payment • Lifetime access
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {[
                'Unlimited photo ratings',
                'Advanced AI-powered scoring',
                'Detailed attractiveness insights',
                'Compare with global trends',
                'Privacy-first design',
                'No ads, ever',
                'Priority customer support',
                'Lifetime updates included'
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
                  </div>
                  <span className="text-slate-600 leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Stripe Button */}
            <button
              onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
              className="w-full py-4 bg-slate-600 hover:bg-slate-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Pre-Order Now - $29
            </button>

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-slate-100">
              <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Money-Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <p className="text-center text-sm text-slate-500 mt-6">
            Join 10,000+ early adopters • Offer ends soon
          </p>
        </div>
      </div>
    </section>
  );
