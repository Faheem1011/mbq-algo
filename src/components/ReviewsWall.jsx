import React, { useState } from 'react';
import { Star, CheckCircle2, MessageSquare, TrendingUp, ShieldCheck, Quote } from 'lucide-react';

export default function ReviewsWall({ onOpenCheckout }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const reviews = [
    {
      name: 'Marcus Sterling',
      handle: '@msterling_fx',
      badge: 'Funded Trader ($100k FTMO)',
      avatar: 'MS',
      avatarBg: 'bg-emerald-500/20 text-emerald-400',
      stars: 5,
      gain: '+$14,280.00 Payout',
      pnlBadge: 'FTMO Stage 2 Passed',
      market: 'forex',
      text: 'Used SwiftAlgo for 4 months and kept getting chopped out on vanishing signals. Switched to MBQ Algo X v5 — the non-repainting barstate confirmation completely stopped my FOMO. Just passed my $100k funded evaluation with a 79% win rate on NAS100.',
      date: 'Verified 2 days ago'
    },
    {
      name: 'Alexandre Dubois',
      handle: '@alex_crypto_btc',
      badge: 'Bybit VIP Trader',
      avatar: 'AD',
      avatarBg: 'bg-cyan-500/20 text-cyan-400',
      stars: 5,
      gain: '+482% PnL (Q1)',
      pnlBadge: 'BTC & SOL Swings',
      market: 'crypto',
      text: 'The MTF Matrix HUD is the best thing that happened to my TradingView setup. I used to keep 6 monitors open just to check 15m vs 4h trend bias. Now it’s right there on the top-right corner. TP2 and TP3 targets hit with insane consistency.',
      date: 'Verified 4 days ago'
    },
    {
      name: 'Tariq Al-Mansoor',
      handle: '@tariq_gold',
      badge: 'XAU/USD Specialist',
      avatar: 'TA',
      avatarBg: 'bg-amber-500/20 text-amber-400',
      stars: 5,
      gain: '+640 Pips this week',
      pnlBadge: 'Gold London Sessions',
      market: 'forex',
      text: 'The dynamic ATR stop loss saved me so many times during London liquidity sweeps. Most indicators give you a static SL that gets wick-hunted. MBQ adjusts automatically to market volatility. The client dashboard is also super slick.',
      date: 'Verified 1 week ago'
    },
    {
      name: 'Elena Rostova',
      handle: '@elena_trades',
      badge: 'Indices & US30 Day Trader',
      avatar: 'ER',
      avatarBg: 'bg-purple-500/20 text-purple-400',
      stars: 5,
      gain: '+$8,950.00 in 2 Weeks',
      pnlBadge: 'US30 & SPX500',
      market: 'indices',
      text: 'Instant automated invite right after checkout. Within 30 seconds I had the script loaded on TradingView. The 9/21 momentum ribbon is beautiful and gives you extreme confidence during trend pullbacks. 10/10.',
      date: 'Verified 1 week ago'
    },
    {
      name: 'Daniel Zhao',
      handle: '@dzhao_quant',
      badge: 'Algo & Systematic Trader',
      avatar: 'DZ',
      avatarBg: 'bg-blue-500/20 text-blue-400',
      stars: 5,
      gain: '3.42 Profit Factor',
      pnlBadge: 'Systematic Backtest',
      market: 'crypto',
      text: 'I audited the Pine Script code myself. It genuinely uses `barstate.isconfirmed` and doesn’t cheat on historical bars like 95% of scam indicators on TikTok. If you want verified math instead of marketing hype, this is it.',
      date: 'Verified 2 weeks ago'
    },
    {
      name: 'Sarah Jenkins',
      handle: '@sarah_j_forex',
      badge: 'Full-Time Forex Trader',
      avatar: 'SJ',
      avatarBg: 'bg-pink-500/20 text-pink-400',
      stars: 5,
      gain: '+18.4% Monthly ROI',
      pnlBadge: 'EUR/USD & GBP/JPY',
      market: 'forex',
      text: 'The customer portal with the license key and TradingView account linker is what convinced me. It feels like a real institutional financial software, not a shady Discord bot. Customer support answered my setup question in 10 minutes.',
      date: 'Verified 2 weeks ago'
    }
  ];

  const filteredReviews = activeFilter === 'all' 
    ? reviews 
    : reviews.filter((r) => r.market === activeFilter);

  return (
    <section id="reviews" className="py-20 md:py-28 relative bg-[#05070E] border-t border-white/5 overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono mb-4">
            <Star className="w-3.5 h-3.5 fill-cyan-400" />
            <span>VERIFIED TRADER FEEDBACK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-['Outfit'] font-black text-white tracking-tight">
            Trusted by 14,280+ Traders. <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
              Real Results. Zero Fake Hype.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            See how funded traders, crypto swingers, and prop-firm challenge takers use MBQ Algo X to eliminate emotion and secure consistent risk-to-reward.
          </p>

          {/* Aggregate Trust Score */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 p-3 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold font-['Outfit'] text-white">
              4.9 / 5.0 Rating
            </span>
            <span className="text-slate-500 font-mono text-xs">|</span>
            <span className="text-xs text-slate-300 font-mono flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              840+ Verified Discord & TV Reviews
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'forex', label: 'Forex & Gold' },
            { id: 'crypto', label: 'Crypto & Bitcoin' },
            { id: 'indices', label: 'Indices (NAS100/US30)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                activeFilter === tab.id
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/25'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-6 relative flex flex-col justify-between group"
            >
              <div>
                {/* Header: User Info & PnL Tag */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${rev.avatarBg}`}>
                      {rev.avatar}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {rev.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 font-mono">
                        {rev.handle}
                      </p>
                    </div>
                  </div>

                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    {rev.gain}
                  </span>
                </div>

                {/* Stars & Category */}
                <div className="flex items-center justify-between mb-3 text-xs">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    {rev.pnlBadge}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              {/* Footer: Date & Verified Tag */}
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Buyer
                </span>
                <span>{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to join Discord */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenCheckout('Pro')}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-bold text-xs shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
          >
            <span>Join 14,280+ Winning Traders Now →</span>
          </button>
        </div>

      </div>
    </section>
  );
}
