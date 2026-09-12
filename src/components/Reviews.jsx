import React from 'react';
import { Star, CheckCircle, MessageSquare } from 'lucide-react';

const reviews = [
  {
    name: 'Hamza K.',
    handle: '@hamza_fx_trader',
    market: 'XAU/USD & NAS100',
    time: '2 days ago',
    review: 'The non-repainting feature is legit. On XAU/USD 15m, the buy confirmation took me straight to TP2 with 110 pips gain. Plus paying directly through my Meezan Bank card was super smooth compared to Whop which was blocking my card.',
    profit: '+18.4% this month'
  },
  {
    name: 'Tariq M.',
    handle: '@tariqtrades',
    market: 'BTC/USDT & ETH',
    time: '4 days ago',
    review: 'What sold me was the client dashboard. With SwiftAlgo I had no clue if my script was renewed or what. Here, I logged into my portal, copied my license key, entered my TV username, and got invite access within 2 minutes.',
    profit: '+24.1% on Bitcoin swing'
  },
  {
    name: 'Bilal R.',
    handle: '@bilal_quant',
    market: 'EUR/USD & GBP/JPY',
    time: '1 week ago',
    review: 'The Multi-Timeframe Trend Matrix alone is worth the price. I used to keep 4 charts open to monitor trend confluence. Having the 5m to Daily bias table on the chart keeps my discipline ironclad.',
    profit: '84% Winrate (52 trades)'
  },
  {
    name: 'Zeeshan A.',
    handle: '@zeeshan_scalps',
    market: 'US30 & Gold',
    time: '2 weeks ago',
    review: 'Auto TP and trailing SL saved my account during the NY session volatility spike yesterday. Secured TP1 and TP2 and trail stop broke even before the reversal. Phenomenal algorithm.',
    profit: '+1,450 pts US30'
  },
  {
    name: 'Kamran S.',
    handle: '@kamran_crypto',
    market: 'SOL & ETH',
    time: '3 weeks ago',
    review: 'Cleanest Pine Script v5 code I have seen. Doesn’t lag my TradingView layout, works seamlessly on both mobile app alerts and desktop. Top-tier engineering by MBQ ALGO.',
    profit: '+32.8% account growth'
  },
  {
    name: 'Usman D.',
    handle: '@usman_forex_pk',
    market: 'Forex Majors',
    time: '1 month ago',
    review: 'I was hesitant about Pakistani payment support, but PayFast / Safepay checkout worked instantly with my 1Link debit card. Got instant invite access on TradingView. Highly recommended.',
    profit: '+9.2% funded challenge pass'
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 sm:py-28 relative bg-[#070913]/40 border-y border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>VERIFIED TRADER FEEDBACK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Trusted By Over{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              14,000+ Active Traders.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Real feedback from verified community members trading forex, crypto, and indices daily.
          </p>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div 
              key={idx} 
              className="rounded-2xl p-6 bg-[#0B0F1A] border border-brand-border/80 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center font-bold text-black text-sm">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm flex items-center gap-1.5">
                        {rev.name}
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                      </h4>
                      <span className="text-xs text-slate-400 font-mono">{rev.handle}</span>
                    </div>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic mb-4">
                  "{rev.review}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">{rev.market}</span>
                <span className="text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                  {rev.profit}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
