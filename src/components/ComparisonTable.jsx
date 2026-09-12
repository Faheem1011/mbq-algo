import React from 'react';
import { Check, X, ShieldAlert, Sparkles } from 'lucide-react';

const comparisonRows = [
  {
    feature: 'Signal Integrity & Repainting',
    other: 'Vanishing signals after adverse moves; repainting arrows',
    mbq: '100% strictly non-repainting upon candle close. What you test is what prints live.',
    mbqWins: true
  },
  {
    feature: 'Customer Dashboard & License Portal',
    other: 'No customer account. Zero visibility into license, renewal, or settings.',
    mbq: 'Full self-serve portal: view license key, re-bind TradingView username, view invoices.',
    mbqWins: true
  },
  {
    feature: 'Pakistani Payment Methods (Meezan / 1Link)',
    other: 'Whop only (requires international credit cards, USD billing, blocked by some PK banks).',
    mbq: 'Direct Pakistani support: Meezan Bank, 1Link cards, Safepay, JazzCash & EasyPaisa.',
    mbqWins: true
  },
  {
    feature: 'TradingView Access Automation',
    other: 'Manual invite entry, often taking 12–24 hours to activate.',
    mbq: 'Automated invite-only access engine synced directly to your TradingView username.',
    mbqWins: true
  },
  {
    feature: 'Multi-Timeframe Trend Confluence Matrix',
    other: 'Single timeframe only or requires cluttering charts with 5 separate indicators.',
    mbq: 'Built-in on-chart HUD tracking 5M, 15M, 1H, 4H, and Daily directional bias in 1 screen.',
    mbqWins: true
  },
  {
    feature: 'Dynamic TP / Trailing SL Levels',
    other: 'Generic static lines or manual guesswork for exits.',
    mbq: 'Automated ATR-calculated TP1, TP2, TP3 targets + adaptive trailing stop loss.',
    mbqWins: true
  },
  {
    feature: 'Dedicated Support & VIP Community',
    other: 'Generic ticket queue with automated bot responses.',
    mbq: 'Direct priority Discord channel + WhatsApp support for Pakistani traders.',
    mbqWins: true
  }
];

export default function ComparisonTable() {
  return (
    <section id="comparison" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>UNCOMPROMISING SUPERIORITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How MBQ ALGO Compares To{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              SwiftAlgo & Generic Tools.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            See exactly why seasoned traders choose MBQ ALGO over basic indicator templates.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-brand-border bg-[#0B0F1A] shadow-2xl backdrop-blur-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-brand-border/80 bg-[#070913]/90">
                <th className="py-5 px-6 text-sm font-bold text-slate-300 uppercase tracking-wider w-1/3">
                  Capability / Feature
                </th>
                <th className="py-5 px-6 text-sm font-bold text-slate-400 uppercase tracking-wider w-1/3 opacity-70">
                  Generic Tools & SwiftAlgo
                </th>
                <th className="py-5 px-6 text-sm font-extrabold text-cyan-400 uppercase tracking-wider w-1/3 bg-cyan-500/10 border-l border-r border-cyan-500/30">
                  <div className="flex items-center gap-2">
                    <span>MBQ ALGO X Pro</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-cyan-400 text-black font-bold">SUPERIOR</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-sm">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#121829]/50 transition-colors">
                  
                  {/* Feature Label */}
                  <td className="py-5 px-6 font-semibold text-white">
                    {row.feature}
                  </td>

                  {/* Other / SwiftAlgo */}
                  <td className="py-5 px-6 text-slate-400">
                    <div className="flex items-start space-x-2.5">
                      <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-snug">{row.other}</span>
                    </div>
                  </td>

                  {/* MBQ ALGO */}
                  <td className="py-5 px-6 text-slate-100 bg-cyan-500/[0.04] border-l border-r border-cyan-500/20 font-medium">
                    <div className="flex items-start space-x-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_0_8px_rgba(16,185,129,0.5)]">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug text-slate-200 font-normal">
                        {row.mbq}
                      </span>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
