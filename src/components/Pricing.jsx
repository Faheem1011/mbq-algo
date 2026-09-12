import React from 'react';
import { Check, Sparkles, Shield, ArrowRight, CreditCard, Lock } from 'lucide-react';

export default function Pricing({ currency, onOpenCheckout }) {
  const plans = [
    {
      id: 'starter',
      name: 'Starter Monthly',
      tagline: 'Test the full system with zero long-term commitment.',
      pricePKR: 9500,
      priceUSD: 35,
      period: 'Billed monthly',
      popular: false,
      features: [
        'MBQ ALGO Core v5 Indicator',
        '100% Non-Repainting Execution',
        'Auto Take-Profit & Stop-Loss Lines',
        '1 TradingView Account Linked',
        'Discord Community Access',
        'TradingView Setup Video Guide'
      ]
    },
    {
      id: 'pro',
      name: 'Pro Quarterly',
      tagline: 'The trader favorite. Unlocks multi-timeframe confluence.',
      pricePKR: 24000,
      priceUSD: 89,
      period: 'Billed every 3 months (~20% off)',
      popular: true,
      features: [
        'Everything in Starter Plan',
        'Live Multi-Timeframe Trend Matrix HUD',
        '2 TradingView Accounts Linked',
        'Custom Webhook & Telegram Alerts',
        'VIP Discord Signals & Trade Ideas',
        'Priority Customer Support (WhatsApp & Discord)',
        'Full Customer License Dashboard'
      ]
    },
    {
      id: 'lifetime',
      name: 'Lifetime Access',
      tagline: 'Pay once, own the indicator forever with lifetime updates.',
      pricePKR: 75000,
      priceUSD: 279,
      period: 'One-time payment • Lifetime',
      popular: false,
      features: [
        'Everything in Pro Plan Forever',
        'Lifetime Indicator Access (No Renewals)',
        'All Future Pine Script v5 Updates Included',
        '3 TradingView Accounts Linked',
        '1-on-1 VIP Strategy Onboarding Call',
        'Direct Access to Lead Algo Developers',
        'Highest Priority Support Queue'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 relative">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT VALUE-LADDER PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Choose Your Edge.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Instant Access Today.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Automated delivery directly to your TradingView account. Secure checkout via Pakistani & International merchant gateways.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const price = currency === 'PKR' 
              ? `₨ ${plan.pricePKR.toLocaleString()}` 
              : `$ ${plan.priceUSD}`;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-8 bg-[#0B0F1A] border flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'border-cyan-400 shadow-[0_0_35px_rgba(0,240,255,0.25)] lg:-translate-y-2 bg-gradient-to-b from-[#121829] to-[#0B0F1A]'
                    : 'border-brand-border/80 hover:border-slate-600'
                }`}
              >
                {/* Most Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black text-xs font-extrabold tracking-wider uppercase shadow-lg">
                    MOST POPULAR CHOICE
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-400 min-h-[32px]">{plan.tagline}</p>

                  <div className="my-6 pb-6 border-b border-slate-800">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
                        {price}
                      </span>
                    </div>
                    <span className="text-xs text-cyan-400 font-mono mt-1 block">
                      {plan.period}
                    </span>
                  </div>

                  {/* Feature list */}
                  <div className="space-y-3 mb-8 text-sm">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-slate-300">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => onOpenCheckout(plan)}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center space-x-2 group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-400 to-cyan-300 text-black shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:opacity-95'
                        : 'bg-[#121829] border border-slate-700 text-white hover:border-cyan-400/50 hover:bg-[#182138]'
                    }`}
                  >
                    <span>Get Instant Access</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="mt-4 flex items-center justify-center space-x-2 text-[11px] text-slate-500 font-mono">
                    <Lock className="w-3 h-3 text-slate-400" />
                    <span>Instant TradingView invite on checkout</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Pakistani Payment Methods Strip */}
        <div className="mt-14 p-6 rounded-2xl bg-[#0B0F1A] border border-brand-border text-center max-w-3xl mx-auto shadow-xl">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-3">
            DIRECT PAKISTANI BANK & CARD PAYMENT SUPPORT
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-300">
            <span className="px-3 py-1.5 rounded-lg bg-[#121829] border border-slate-800 text-emerald-400 font-bold">
              Meezan Bank MPGS
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#121829] border border-slate-800 text-cyan-400 font-bold">
              Safepay Gateway
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#121829] border border-slate-800 text-purple-400 font-bold">
              PayFast APPS
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#121829] border border-slate-800 text-amber-400 font-bold">
              1Link PayPak & Debit
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#121829] border border-slate-800 text-pink-400 font-bold">
              JazzCash / EasyPaisa
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#121829] border border-slate-800 text-slate-300 font-bold">
              Visa & Mastercard
            </span>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-center space-x-2 text-xs text-slate-400">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>7-Day Risk-Free Money Back Guarantee • Encrypted 256-bit Checkout</span>
          </div>
        </div>

      </div>
    </section>
  );
}
