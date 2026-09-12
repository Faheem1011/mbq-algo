import React from 'react';
import { ArrowUpRight, ArrowDownRight, Flame } from 'lucide-react';

const tickerItems = [
  { pair: 'BTC/USDT', price: '$64,820', change: '+3.4%', signal: 'BUY TP3 HIT', status: 'up' },
  { pair: 'XAU/USD (Gold)', price: '$2,514.80', change: '+1.2%', signal: 'TP2 SECURED', status: 'up' },
  { pair: 'EUR/USD', price: '1.0942', change: '-0.3%', signal: 'SELL CONFIRMED', status: 'down' },
  { pair: 'NAS100', price: '19,840', change: '+2.1%', signal: 'BUY ACTIVE', status: 'up' },
  { pair: 'ETH/USDT', price: '$3,410.50', change: '+4.8%', signal: 'TP3 +18.4%', status: 'up' },
  { pair: 'US30', price: '40,210', change: '+0.8%', signal: 'TP1 HIT', status: 'up' },
  { pair: 'GBP/USD', price: '1.2980', change: '+0.5%', signal: 'BUY CONFIRMED', status: 'up' },
  { pair: 'SOL/USDT', price: '$154.20', change: '+6.2%', signal: 'TP3 REACHED', status: 'up' },
];

export default function MarketTicker() {
  return (
    <div className="w-full bg-[#070913] border-y border-brand-border/60 py-3 overflow-hidden select-none">
      <div className="flex w-[200%] animate-ticker hover:[animation-play-state:paused]">
        
        {/* Double ticker items for seamless loop */}
        {[...tickerItems, ...tickerItems].map((item, idx) => (
          <div 
            key={idx} 
            className="flex items-center space-x-3 mx-4 px-3.5 py-1.5 rounded-lg bg-[#0B0F1A] border border-slate-800/80 font-mono text-xs whitespace-nowrap"
          >
            <span className="font-bold text-slate-200">{item.pair}</span>
            <span className="text-slate-400">{item.price}</span>
            <span className={`flex items-center font-bold ${item.status === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
              {item.status === 'up' ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
              {item.change}
            </span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
              {item.signal}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}
