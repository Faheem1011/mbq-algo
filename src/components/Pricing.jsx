import React from 'react';
import { Check, ArrowUpRight, Shield, Lock } from 'lucide-react';

export default function Pricing({ currency, onOpenCheckout }) {
  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      duration: 'Monthly Plan',
      tagline: 'Try the full system, cancel anytime with zero friction.',
      pricePKR: 9500,
      priceUSD: 35,
      period: 'Billed monthly',
      popular: false,
      features: [
        'MBQ Algo X Core Indicator',
        '100% Non-Repainting Signals',
        'Auto TP / SL Calculations',
        '1 TradingView Account Linked',
        'TradingView Setup Video Guide',
        'Standard Discord Community'
      ]
    },
    {
      id: 'pro',
      name: 'Pro (Most Popular)',
      duration: 'Quarterly Plan',
      tagline: 'Save 20%, unlock multi-timeframe trend table & VIP Discord.',
      pricePKR: 24000,
      priceUSD: 89,
      period: 'Billed every 3 months',
      popular: true,
      features: [
        'Everything in Starter Plan',
        'Live Multi-Timeframe Trend Table HUD',
        '2 TradingView Accounts Linked',
        'Custom Push & Webhook Alerts',
        'VIP Discord Signals & Live Mentorship',
        'Priority Support via WhatsApp & Discord',
        'Full Customer License Dashboard'
      ]
    },
    {
      id: 'lifetime',
      name: 'Lifetime',
      duration: 'One-Time Payment',
      tagline: 'Pay once, own it forever, all future updates included.',
      pricePKR: 75000,
      priceUSD: 279,
      period: 'One-time payment • Lifetime access',
      popular: false,
      features: [
        'Everything in Pro Plan Forever',
        'Lifetime Indicator Access (No Renewals)',
        'All Future Pine Script Updates Included',
        '3 TradingView Accounts Linked',
        '1-on-1 VIP Strategy Onboarding Call',
        'Direct Access to Lead Algo Developers',
        'Highest Priority Support Queue'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 relative bg-[#070514] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A153A] border border-[#3B346E] text-[11px] font-bold tracking-widest text-[#A5B4FC] uppercase mb-4">
          <span className="w-2 h-2 rounded-full bg-[#818CF8]"></span>
          <span>PRICING</span>
        </div>

        {/* H2 Title */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Simple, Transparent Pricing.
        </h2>

        {/* Subtext */}
        <p className="text-sm sm:text-base text-[#9490A8] max-w-2xl mx-auto mb-14">
          Instant automated access delivered straight to your TradingView account.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch text-left">
          {plans.map((plan) => {
            const priceFormatted = currency === 'PKR' 
              ? `₨ ${plan.pricePKR.toLocaleString()}` 
              : `$ ${plan.priceUSD}`;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 bg-[#0E0B1E] border flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'border-[#6366F1] shadow-[0_0_45px_rgba(99,102,241,0.3)] bg-gradient-to-b from-[#151035] to-[#0E0B1E] lg:-translate-y-2'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Most Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#5551FF] text-white text-[11px] font-bold tracking-widest uppercase shadow-lg">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                  <span className="text-xs font-mono text-[#818CF8] block mb-2">{plan.duration}</span>
                  <p className="text-xs text-[#9490A8] min-h-[32px] mb-6">{plan.tagline}</p>

                  {/* Price */}
                  <div className="pb-6 border-b border-white/10 mb-6">
                    <span className="text-4xl sm:text-5xl font-extrabold font-mono text-white block">
                      {priceFormatted}
                    </span>
                    <span className="text-xs text-[#716C8A] font-mono mt-1 block">
                      {plan.period}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8 text-xs text-slate-300">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="w-4 h-4 rounded-full bg-[#5551FF]/20 text-[#818CF8] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => onOpenCheckout(plan)}
                    className={`w-full py-4 rounded-full font-bold text-xs transition-all duration-300 flex items-center justify-center space-x-2 group ${
                      plan.popular
                        ? 'bg-[#5551FF] hover:bg-[#4641FF] text-white shadow-[0_0_25px_rgba(99,102,241,0.5)]'
                        : 'bg-[#171338] border border-white/10 text-white hover:border-[#6366F1]'
                    }`}
                  >
                    <span>Get Indicator Access</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <div className="mt-3 flex items-center justify-center space-x-1.5 text-[11px] text-[#716C8A] font-mono">
                    <Lock className="w-3 h-3" />
                    <span>Instant TradingView invite on checkout</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Pakistani Bank Badges Strip */}
        <div className="mt-14 p-6 rounded-2xl bg-[#0E0B1E] border border-white/10 max-w-3xl mx-auto shadow-xl">
          <span className="text-xs uppercase tracking-widest text-[#9490A8] font-bold block mb-3 font-mono">
            DIRECT PAKISTANI BANK & GATEWAY INTEGRATION
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
            <span className="px-3 py-1.5 rounded-lg bg-[#171338] border border-white/10 text-white font-bold">
              Meezan Bank MPGS
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#171338] border border-white/10 text-[#818CF8] font-bold">
              Safepay Gateway
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#171338] border border-white/10 text-[#A5B4FC] font-bold">
              PayFast APPS
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#171338] border border-white/10 text-emerald-400 font-bold">
              1Link PayPak & Debit
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#171338] border border-white/10 text-pink-400 font-bold">
              JazzCash / EasyPaisa
            </span>
          </div>

          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-center space-x-2 text-xs text-[#9490A8]">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>7-Day Risk-Free Money Back Guarantee • Encrypted 256-bit Checkout</span>
          </div>
        </div>

      </div>
    </section>
  );
}
