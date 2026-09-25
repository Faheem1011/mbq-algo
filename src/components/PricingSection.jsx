import React, { useState } from 'react';
import { Check, Zap, Sparkles, ShieldCheck, ArrowRight, ArrowUpRight, HelpCircle } from 'lucide-react';

export default function PricingSection({ onOpenCheckout }) {
  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      period: 'Monthly',
      price: '$47',
      subtext: 'Billed monthly, cancel anytime',
      tag: 'ENTRY TIER',
      isPopular: false,
      features: [
        'Full MBQ Algo V5 Pro Script Access',
        '1 TradingView Account Linked',
        '100% Non-Repainting Signals',
        'Dynamic 3-Tier Take Profit (TP1/TP2/TP3)',
        'Single-Pair Webhook Alerts',
        'Step-by-Step Setup Guides',
        'Standard Community Support'
      ]
    },
    {
      id: 'pro',
      name: 'Pro Quarterly',
      period: 'Quarterly',
      price: '$127',
      subtext: 'Billed quarterly (~$42/mo) • Save 15%',
      tag: 'MOST POPULAR',
      isPopular: true,
      features: [
        'Everything in Starter, Plus:',
        '2 TradingView Accounts Linked',
        'Multi-Timeframe Trend Matrix HUD (5M to 1D)',
        'Multi-Pair Webhook Push Alerts',
        'Customer SaaS Licensing Dashboard',
        'Signed License Key (MBQ-XXXX-XXXX)',
        'Priority Discord Lounge & Trader Queue',
        '24/7 Priority Support SLA (< 1h response)'
      ]
    },
    {
      id: 'elite',
      name: 'Elite Annual',
      period: 'Annual',
      price: '$349',
      subtext: 'Billed annually (~$29/mo) • Save 40%',
      tag: 'BEST VALUE',
      isPopular: false,
      features: [
        'Everything in Pro, Plus:',
        '5 TradingView Accounts Linked',
        'Automated Backtest Strategy Exports',
        '1-on-1 Strategy Setup & Optimization Call',
        'Private Weekly Prop-Firm Prep Webinars',
        'Early Access to Upcoming MBQ V6 Engine',
        'Dedicated VIP Account Manager'
      ]
    },
    {
      id: 'lifetime',
      name: 'Lifetime Access',
      period: 'One-Time',
      price: '$699',
      subtext: 'Pay once, own forever • No recurring fees',
      tag: 'UNLIMITED',
      isPopular: false,
      features: [
        'Lifetime Access to MBQ Algo V5 & All Future Versions',
        'Unlimited TradingView Accounts Linked',
        'Full Pine Script V5 Source Code Walkthrough',
        'VIP Direct Access to Lead Algorithmic Developers',
        'Private Prop Firm Funding Mentorship',
        'Custom Webhook Integration Setup Support',
        'Unlimited Priority Lifetime Updates'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 relative bg-[#07090E] border-t border-slate-800/60 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono mb-4">
            <Zap className="w-3.5 h-3.5 text-slate-400" />
            <span>TRANSPARENT PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-['Outfit'] font-black text-white tracking-tight">
            Simple, Institutional Pricing. <br />
            <span className="text-slate-400">
              Instant TradingView Script Delivery.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400">
            Select your plan. Instant automated script entitlement delivered to your TradingView account within 30 seconds of authorization.
          </p>

          {/* 7-Day Money Back Guarantee Badge */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Risk-Free 7-Day Money-Back Guarantee Included</span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative transition-all duration-200 ${
                plan.isPopular
                  ? 'bg-[#0E1320] border-2 border-slate-500 shadow-xl scale-[1.02] z-10'
                  : 'bg-[#0B0F17] border border-slate-800/80 hover:border-slate-700'
              }`}
            >
              {/* Popular Pill */}
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-white text-black font-['Outfit'] font-bold text-[11px] tracking-wider uppercase shadow flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 fill-black" />
                  <span>Most Popular Choice</span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold font-['Outfit'] text-white">
                    {plan.name}
                  </h3>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border inline-flex items-center gap-1 ${
                    plan.isPopular
                      ? 'bg-slate-800 text-white border-slate-700'
                      : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}>
                    {plan.isPopular && <Zap className="w-3 h-3 text-slate-300" />}
                    <span>{plan.tag}</span>
                  </span>
                </div>

                {/* Price Display */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black font-mono text-white">
                      {plan.price}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      / {plan.period.toLowerCase()}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-mono mt-1">
                    {plan.subtext}
                  </p>
                </div>

                <div className="border-t border-slate-800/80 my-5"></div>

                {/* Features List */}
                <div className="space-y-2.5 mb-8">
                  <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Included Features:
                  </div>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => onOpenCheckout(plan.name)}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                    plan.isPopular
                      ? 'bg-white hover:bg-slate-200 text-black shadow'
                      : 'bg-slate-800 hover:bg-slate-750 text-white border border-slate-700'
                  }`}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-center text-slate-500 font-mono mt-2.5">
                  Instant TradingView Invite • 7-Day Guarantee
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
