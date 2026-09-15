import React, { useState } from 'react';
import { Check, Zap, Sparkles, ShieldCheck, ArrowRight, Star, HelpCircle } from 'lucide-react';

export default function PricingSection({ onOpenCheckout }) {
  const [billingCycle, setBillingCycle] = useState('quarterly'); // 'monthly', 'quarterly', 'annual', 'lifetime'

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      period: 'Monthly',
      price: '$47',
      subtext: 'Billed monthly, cancel anytime',
      tag: 'ENTRY LEVEL',
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
      tag: 'VIP LIFETIME',
      isPopular: false,
      features: [
        'Lifetime Script Access (Never Pay Again)',
        'Unlimited TradingView Account Relinks',
        'All Future Script Updates (V6, V7, V8+)',
        'VIP Mastermind Private Group with Founders',
        'Direct Head Quant Algorithm Directives',
        'Zero Monthly or Annual Subscription Fees'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 relative bg-[#05070E] overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>TRANSPARENT INSTITUTIONAL PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-['Outfit'] font-black text-white tracking-tight">
            Simple, Fair Pricing. <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
              Instant TradingView Delivery.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            Choose your plan. Get instant automated script access delivered to your TradingView account within 30 seconds of payment.
          </p>

          {/* 7-Day Money Back Guarantee Badge */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <ShieldCheck className="w-4 h-4" />
            <span>Risk-Free 7-Day Money-Back Guarantee Included</span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-gradient-to-b from-[#0D162B] to-[#080E1C] border-2 border-cyan-400 shadow-2xl shadow-cyan-500/20 scale-[1.03] z-10'
                  : 'glass-panel glass-panel-hover border-white/10'
              }`}
            >
              {/* Popular Glow Pill */}
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-teal-300 text-black font-['Outfit'] font-black text-[11px] tracking-wider uppercase shadow-lg shadow-cyan-500/40 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 fill-black" />
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
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                      : 'bg-white/5 text-slate-400 border-white/10'
                  }`}>
                    {plan.isPopular && <Zap className="w-3 h-3 text-cyan-300 fill-cyan-300/30" />}
                    <span>{plan.tag}</span>
                  </span>
                </div>

                {/* Price Display */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black font-['Outfit'] text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      / {plan.period}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    {plan.subtext}
                  </p>
                </div>

                <div className="w-full h-[1px] bg-white/10 my-5"></div>

                {/* Feature List */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                        plan.isPopular ? 'text-cyan-400' : 'text-emerald-400'
                      }`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => onOpenCheckout(plan.name)}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-2 group ${
                    plan.isPopular
                      ? 'bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 text-black shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-[1.02] active:scale-[0.98]'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
                  }`}
                >
                  <span>Get Instant Access</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="text-center text-[10px] text-slate-500 font-mono mt-3">
                  Instant automated TV access • 7-day guarantee
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Payment Gateways Bar */}
        <div className="mt-14 p-6 rounded-2xl bg-[#080C17] border border-white/10 flex flex-wrap items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>256-Bit Encrypted Secure Checkout</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono">
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Stripe</span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Visa / Mastercard</span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Crypto (USDT / BTC)</span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Bank / Easypaisa</span>
          </div>
        </div>

      </div>
    </section>
  );
}
