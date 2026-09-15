import React from 'react';
import { DollarSign, Globe, Layers, Gem, Coins } from 'lucide-react';

export default function MarketStrip() {
  const markets = [
    { label: 'FOREX', icon: DollarSign },
    { label: 'INDICES', icon: Globe },
    { label: 'ALTCOINS', icon: Layers },
    { label: 'MATERIALS', icon: Gem },
    { label: 'CRYPTO', icon: Coins },
  ];

  return (
    <div className="py-14 border-t border-white/[0.06] bg-[#070514] text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-xs uppercase tracking-widest text-[#9490A8] font-bold block mb-8">
          Our Indicator works on all markets.
        </span>

        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-300">
          {markets.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="flex items-center space-x-2.5 text-[#C7D2FE] font-bold text-sm tracking-wider font-mono">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[#818CF8]" />
                </div>
                <span>{m.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
