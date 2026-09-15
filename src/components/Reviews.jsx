import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const reviewsData = [
  {
    author: 'Zomboy',
    date: '5/17/25, 7:09 PM',
    avatarBg: 'bg-emerald-600',
    avatarText: 'Z',
    message: "1st day using the algo, and safe to say I'm feeling pretty confident with the execution accuracy.",
    pnlHeader: 'SUMMARY: Today +$1,738.38',
    trades: [
      { pair: 'US30.PRO', type: 'BUY 0.11 Lots', profit: '+$835.89' },
      { pair: 'GBPCAD', type: 'BUY 7.37 Lots', profit: '+$902.49' },
    ],
    reactions: ['Verified 4', 'TP3 Hit 3', 'Bullish 7']
  },
  {
    author: 'RahulFX',
    date: '6/28/25, 6:19 PM',
    avatarBg: 'bg-indigo-600',
    avatarText: 'R',
    message: 'just first day of trading funded account 200k',
    pnlHeader: 'FUNDED ACCOUNT P&L',
    trades: [
      { pair: 'XAUUSD', type: 'BUY Scalp', profit: '+$1,605.36' },
      { pair: 'NAS100', type: 'BUY Breakout', profit: '+$1,205.29' },
      { pair: 'EURUSD', type: 'SELL Trend', profit: '+$1,404.07' },
      { pair: 'XAUUSD', type: 'BUY TP2 Hit', profit: '+$1,056.20' },
      { pair: 'US30', type: 'BUY Pullback', profit: '+$557.54' }
    ],
    reactions: ['Verified 8', 'Funded 4']
  },
  {
    author: 'DCOST',
    date: '8/26/25, 9:23 PM',
    avatarBg: 'bg-blue-600',
    avatarText: 'D',
    message: 'SOL 15m signal was pinpoint accurate. Took 20x cross to TP3!',
    pnlHeader: 'FUTURES POSITION: SOL · USD',
    trades: [
      { pair: 'SOL/USD', type: 'Long 20x Cross', profit: '+46.50%' },
      { pair: 'Entry 181.41', type: 'Exit 185.78', profit: '+$1,840.00' }
    ],
    reactions: ['Target Hit 6', 'Verified 4']
  },
  {
    author: 'Lars $NQ',
    date: '8/1/25, 2:43 PM',
    avatarBg: 'bg-purple-600',
    avatarText: 'L',
    message: 'NY session results with MBQ Algo. 8 green trades in a row on NASDAQ:',
    pnlHeader: 'NASDAQ SESSION P&L',
    trades: [
      { pair: 'NQ 1m', type: 'BUY', profit: '+$480.00' },
      { pair: 'NQ 1m', type: 'BUY', profit: '+$220.00' },
      { pair: 'NQ 1m', type: 'SELL', profit: '+$260.00' },
      { pair: 'NQ 1m', type: 'BUY', profit: '+$160.00' }
    ],
    reactions: ['Verified 5', 'Pips +240']
  },
  {
    author: 'George',
    date: '5/21/25, 9:44 AM',
    avatarBg: 'bg-amber-600',
    avatarText: 'G',
    message: 'Yes! MBQ Algo Gold 1m non-repainting signal hit TP2 smoothly:',
    pnlHeader: 'CFDs on Gold (US$ / OZ) 1m',
    trades: [
      { pair: 'XAUUSD', type: 'BUY 0.20 Lots', profit: '+$637.49' },
      { pair: 'Gold 1m', type: 'TP2 Target Hit', profit: '+110 Pips' }
    ],
    reactions: ['Verified 9', 'Approved 2', 'Gold 4']
  },
  {
    author: 'Tariq M.',
    date: 'Yesterday at 8:15 PM',
    avatarBg: 'bg-emerald-700',
    avatarText: 'T',
    message: 'Paid with Meezan Bank card, received TradingView invite instantly. Passed Phase 1 of funded test today!',
    pnlHeader: 'FUNDED EVALUATION: PHASE 1 PASSED',
    trades: [
      { pair: 'Status', type: 'Target Reached', profit: '+$5,420.00' },
      { pair: 'Win Rate', type: '14 Trades', profit: '85.7%' }
    ],
    reactions: ['Passed 12', 'Verified 8']
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 relative bg-[#070514]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pill Badge */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A153A] border border-[#3B346E] text-[11px] font-bold tracking-widest text-[#A5B4FC] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#818CF8]"></span>
            <span>REVIEWS</span>
          </div>
        </div>

        {/* H2 Title */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white text-center mb-4">
          Real Traders. Real Results.
        </h2>

        {/* Subtext */}
        <p className="text-sm sm:text-base text-[#9490A8] max-w-2xl mx-auto text-center mb-16">
          Thousands of traders worldwide already rely on MBQ Algo to trade with more clarity and confidence.
        </p>

        {/* Masonry Discord Chat Wall */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-5 bg-[#0D0A1E] border border-white/10 hover:border-[#6366F1]/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Author row */}
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-9 h-9 rounded-full ${item.avatarBg} text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-md`}>
                    {item.avatarText}
                  </div>
                  <div className="overflow-hidden">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-white text-sm truncate">{item.author}</span>
                      <span className="text-[10px] text-[#716C8A] font-mono">{item.date}</span>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed mb-4">
                  {item.message}
                </p>

                {/* P&L Embed Box */}
                <div className="p-3.5 rounded-xl bg-[#070512] border border-white/[0.08] mb-4 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#9490A8] border-b border-white/[0.06] pb-1.5 font-semibold">
                    <span>{item.pnlHeader}</span>
                  </div>
                  {item.trades.map((t, i) => (
                    <div key={i} className="flex items-center justify-between text-xs font-mono">
                      <div>
                        <span className="text-slate-200 font-bold block">{t.pair}</span>
                        <span className="text-[10px] text-[#716C8A]">{t.type}</span>
                      </div>
                      <span className="text-emerald-400 font-extrabold">{t.profit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reaction Emojis Row */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {item.reactions.map((r, ri) => (
                  <span
                    key={ri}
                    className="px-2.5 py-1 rounded-lg bg-[#14102C] border border-white/10 text-xs font-medium text-slate-300 hover:bg-[#1D1740] cursor-pointer transition-colors"
                  >
                    {r}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
