import React from 'react';
import { TrendingUp, TrendingDown, Zap } from 'lucide-react';

export default function MarketTicker() {
  const tickerItems = [
    { symbol: 'BTC/USDT', price: '$67,420.50', change: '+4.82%', isUp: true, signal: 'MBQ BUY ▲', asset: 'Crypto' },
    { symbol: 'ETH/USDT', price: '$3,540.20', change: '+3.15%', isUp: true, signal: 'BULLISH', asset: 'Crypto' },
    { symbol: 'XAU/USD', price: '$2,412.80', change: '+1.85%', isUp: true, signal: 'TP3 TARGET HIT', asset: 'Gold' },
    { symbol: 'NAS100', price: '19,845.20', change: '+1.24%', isUp: true, signal: 'MBQ BUY ▲', asset: 'Index' },
    { symbol: 'EUR/USD', price: '1.08940', change: '-0.14%', isUp: false, signal: 'NEUTRAL', asset: 'Forex' },
    { symbol: 'SOL/USDT', price: '$156.40', change: '+7.12%', isUp: true, signal: 'TP2 TARGET HIT', asset: 'Crypto' },
    { symbol: 'GBP/USD', price: '1.29650', change: '+0.38%', isUp: true, signal: 'MBQ BUY ▲', asset: 'Forex' },
    { symbol: 'US30', price: '39,480.00', change: '+0.52%', isUp: true, signal: 'BULLISH', asset: 'Index' },
    { symbol: 'NVDA', price: '$129.80', change: '+4.35%', isUp: true, signal: 'MBQ BUY ▲', asset: 'Stock' },
    { symbol: 'OIL (WTI)', price: '$82.40', change: '-0.85%', isUp: false, signal: 'MBQ SELL ▼', asset: 'Commodity' },
  ];

  // Double the list for seamless continuous infinite marquee
  const displayItems = [...tickerItems, ...tickerItems];

  return (
    <div className="relative w-full overflow-hidden bg-[#070B16] border-y border-white/10 py-3 select-none">
      
      {/* Side gradient fades for seamless scrolling */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#070B16] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#070B16] to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
        {displayItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-6 border-r border-white/5 font-mono text-xs whitespace-nowrap cursor-default hover:bg-white/[0.02] transition-colors"
          >
            {/* Symbol & Asset Type */}
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white tracking-wider">{item.symbol}</span>
              <span className="text-[10px] text-slate-500 uppercase">({item.asset})</span>
            </div>

            {/* Price */}
            <span className="font-semibold text-slate-200">{item.price}</span>

            {/* 24h Change */}
            <div className={`flex items-center gap-0.5 text-[11px] font-bold ${
              item.isUp ? 'text-emerald-400' : 'text-rose-400'
            }`}>
              {item.isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              <span>{item.change}</span>
            </div>

            {/* Algorithm Signal Tag */}
            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold tracking-tight border ${
              item.isUp
                ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/25'
                : item.signal === 'NEUTRAL'
                ? 'bg-slate-800 text-slate-400 border-slate-700'
                : 'bg-rose-500/10 text-rose-300 border-rose-500/25'
            }`}>
              {item.signal}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
