import React from 'react';
import { Check, X, ShieldCheck, ArrowRight, ArrowUpRight, Scale } from 'lucide-react';

export default function ComparisonMatrix({ onOpenCheckout }) {
  const comparisons = [
    {
      feature: 'Signal Calculation & Bar Logic',
      others: 'Repaints / arrows vanish after candle completes',
      othersBad: true,
      mbq: '100% Non-Repainting (barstate.isconfirmed)',
      mbqGood: true,
      highlight: true
    },
    {
      feature: 'Customer Licensing Portal',
      others: 'Zero dashboard — unmanaged third-party checkout only',
      othersBad: true,
      mbq: 'Dedicated Client Portal & Signed License Key',
      mbqGood: true,
      highlight: true
    },
    {
      feature: 'TradingView Script Delivery',
      others: 'Manual form submission (12 to 48 hour delay)',
      othersBad: true,
      mbq: 'Automated script invite entitlement in < 30s',
      mbqGood: true
    },
    {
      feature: 'Exit Engine & Take Profit Levels',
      others: 'Single static target or no exits provided',
      othersBad: true,
      mbq: 'Dynamic 3-Tier TP (1.5x, 2.8x, 4.5x) + ATR SL',
      mbqGood: true
    },
    {
      feature: 'Multi-Timeframe Trend Matrix',
      others: 'Requires manual tab flipping across charts',
      othersBad: true,
      mbq: 'On-Chart HUD Matrix (5M, 15M, 1H, 4H, 1D)',
      mbqGood: true
    },
    {
      feature: 'Works on 100% Free TradingView?',
      others: 'Often requires expensive Pro+ subscription',
      othersBad: true,
      mbq: 'Fully compatible with Free Basic TradingView',
      mbqGood: true
    },
    {
      feature: 'Mobile & Webhook Alerts',
      others: 'Delayed alerts with complex bot setup',
      othersBad: true,
      mbq: 'Native TradingView push & Telegram/Discord webhooks',
      mbqGood: true
    },
    {
      feature: 'Money-Back Guarantee',
      others: 'Strict no-refunds or unresponsive support',
      othersBad: true,
      mbq: '7-Day Zero-Risk Money-Back Guarantee',
      mbqGood: true
    }
  ];

  return (
    <section id="compare" className="py-20 md:py-28 relative bg-[#07090E] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono mb-4">
            <Scale className="w-3.5 h-3.5 text-slate-400" />
            <span>OBJECTIVE COMPARISON</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-['Outfit'] font-black text-white tracking-tight">
            How MBQ Algo X Compares <br />
            <span className="text-slate-400">
              Against Standard Retail Indicators.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400">
            A side-by-side technical evaluation of algorithm execution, infrastructure, and user control.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#0B0F17] border border-slate-800/80 overflow-hidden shadow-2xl">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#0E131F] p-4 sm:p-6 border-b border-slate-800/80 text-xs sm:text-sm font-['Outfit'] font-bold">
            <div className="col-span-5 text-slate-400 uppercase tracking-wider font-mono text-xs">
              Feature / Capability
            </div>
            <div className="col-span-3 sm:col-span-3 text-center text-slate-400 font-mono text-xs">
              Generic Indicators
            </div>
            <div className="col-span-4 text-center text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 bg-slate-800 py-1.5 rounded-lg border border-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>MBQ ALGO X PRO</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-800/60 font-mono text-xs">
            {comparisons.map((row, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-12 p-4 sm:p-5 items-center transition-colors ${
                  row.highlight ? 'bg-slate-900/40' : 'hover:bg-slate-900/20'
                }`}
              >
                {/* Feature Name */}
                <div className="col-span-5 font-sans font-semibold text-slate-200 text-xs sm:text-sm">
                  {row.feature}
                </div>

                {/* Others Bad Result */}
                <div className="col-span-3 sm:col-span-3 text-center text-slate-400 text-[11px] sm:text-xs px-2 flex flex-col items-center justify-center">
                  <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center mb-1">
                    <X className="w-3.5 h-3.5" />
                  </span>
                  <span className="leading-tight">{row.others}</span>
                </div>

                {/* MBQ Good Result */}
                <div className="col-span-4 text-center text-slate-100 text-[11px] sm:text-xs px-2 flex flex-col items-center justify-center font-bold">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-1">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="leading-tight text-white">{row.mbq}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Table Footer CTA */}
          <div className="p-6 bg-[#0E131F] border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold font-['Outfit'] text-white">
                Ready to upgrade to verified institutional calculations?
              </h4>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Instant automated access on TradingView • 7-day money-back guarantee
              </p>
            </div>

            <button
              onClick={() => onOpenCheckout('Pro')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-slate-200 text-black font-bold text-xs font-mono transition-colors flex items-center justify-center gap-2 shadow"
            >
              <span>Get MBQ Algo X</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
