import React from 'react';
import { Check, X, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ComparisonMatrix({ onOpenCheckout }) {
  const comparisons = [
    {
      feature: 'Signal Repainting & Bar Logic',
      others: 'Repaints / arrows vanish after bar closes',
      othersBad: true,
      mbq: '100% Non-Repainting (barstate.isconfirmed)',
      mbqGood: true,
      highlight: true
    },
    {
      feature: 'Customer Dashboard & Portal',
      others: 'Zero dashboard — manual Whop redirect only',
      othersBad: true,
      mbq: 'Institutional SaaS Client Portal & License Key',
      mbqGood: true,
      highlight: true
    },
    {
      feature: 'TradingView Access Delivery',
      others: 'Manual form submission (12 to 48 hour delay)',
      othersBad: true,
      mbq: 'Instant automated script invite in < 30 seconds',
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
      mbq: 'Live On-Chart HUD Matrix (5M, 15M, 1H, 4H, 1D)',
      mbqGood: true
    },
    {
      feature: 'Works on 100% Free TradingView?',
      others: 'Often requires expensive Pro+ subscription',
      othersBad: true,
      mbq: 'Fully compatible with Free TradingView accounts',
      mbqGood: true
    },
    {
      feature: 'Mobile & Webhook Alerts',
      others: 'Delayed alerts with complicated bot setup',
      othersBad: true,
      mbq: 'Native TradingView push & Telegram/Discord webhooks',
      mbqGood: true
    },
    {
      feature: 'Money-Back Guarantee',
      others: 'Strict no-refunds or ghosting support',
      othersBad: true,
      mbq: '7-Day Zero-Risk Money-Back Guarantee',
      mbqGood: true
    }
  ];

  return (
    <section id="compare" className="py-20 md:py-28 relative bg-[#060913] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIRECT COMPETITIVE COMPARISON</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-['Outfit'] font-black text-white tracking-tight">
            Why Traders Are Leaving <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
              SwiftAlgo For MBQ Algo X.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            See the side-by-side differences between generic repainting indicators and MBQ Algo's institutional trading intelligence system.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#090D1A] border border-white/10 overflow-hidden shadow-2xl">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#0C1224] p-4 sm:p-6 border-b border-white/10 text-xs sm:text-sm font-['Outfit'] font-bold">
            <div className="col-span-5 text-slate-400 uppercase tracking-wider font-mono text-xs">
              Feature / Capability
            </div>
            <div className="col-span-3 sm:col-span-3 text-center text-slate-400 font-mono text-xs">
              SwiftAlgo & Others
            </div>
            <div className="col-span-4 text-center text-cyan-400 font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 bg-cyan-500/10 py-1 rounded-lg border border-cyan-500/30">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>MBQ ALGO X PRO</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-white/5 font-mono text-xs">
            {comparisons.map((row, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-12 p-4 sm:p-5 items-center transition-colors ${
                  row.highlight ? 'bg-cyan-500/[0.03]' : 'hover:bg-white/[0.02]'
                }`}
              >
                {/* Feature Name */}
                <div className="col-span-5 text-slate-200 font-sans font-semibold text-xs sm:text-sm pr-2">
                  {row.feature}
                </div>

                {/* Other Indicators Column */}
                <div className="col-span-3 sm:col-span-3 text-center px-2">
                  <div className="inline-flex items-center justify-center gap-1 text-rose-400 text-[11px] sm:text-xs">
                    <X className="w-3.5 h-3.5 shrink-0" />
                    <span className="hidden sm:inline">{row.others}</span>
                  </div>
                </div>

                {/* MBQ Algo X Column (Winner Column) */}
                <div className="col-span-4 text-center px-2">
                  <div className="inline-flex items-center justify-center gap-1 text-emerald-300 font-bold text-[11px] sm:text-xs bg-emerald-500/10 px-2.5 py-1.5 rounded-lg border border-emerald-500/25">
                    <Check className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                    <span>{row.mbq}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Table Bottom Call to Action */}
          <div className="bg-[#0C1224] p-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold font-['Outfit'] text-white">
                Ready for non-repainting precision?
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Join now and receive immediate script invite on TradingView.
              </div>
            </div>

            <button
              onClick={() => onOpenCheckout('Pro')}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-bold text-xs shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
            >
              <span>Get Access Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
