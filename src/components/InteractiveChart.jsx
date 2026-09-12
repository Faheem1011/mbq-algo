import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Target, ShieldCheck, Activity, RefreshCw } from 'lucide-react';

const assets = [
  { symbol: 'BTC/USDT', price: '64,820.50', change: '+3.42%', isBullish: true },
  { symbol: 'XAU/USD (Gold)', price: '2,514.80', change: '+1.18%', isBullish: true },
  { symbol: 'EUR/USD', price: '1.0942', change: '-0.24%', isBullish: false },
  { symbol: 'NAS100', price: '19,840.10', change: '+2.05%', isBullish: true },
];

export default function InteractiveChart() {
  const [selectedAsset, setSelectedAsset] = useState(assets[0]);
  const [timeframe, setTimeframe] = useState('15m');
  const [signalType, setSignalType] = useState('BUY');
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick(prev => prev + 1);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative rounded-2xl border border-brand-border bg-[#0B0F1A]/90 p-4 sm:p-6 shadow-2xl backdrop-blur-xl overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Terminal Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-brand-border/60">
        
        {/* Asset Selector */}
        <div className="flex items-center space-x-2">
          {assets.map((asset) => (
            <button
              key={asset.symbol}
              onClick={() => setSelectedAsset(asset)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedAsset.symbol === asset.symbol
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                  : 'text-slate-400 hover:text-white bg-[#121829] border border-transparent'
              }`}
            >
              {asset.symbol}
            </button>
          ))}
        </div>

        {/* Timeframes & Live Status */}
        <div className="flex items-center space-x-3">
          <div className="hidden sm:flex items-center space-x-1 bg-[#121829] p-1 rounded-lg border border-slate-800 text-xs">
            {['1m', '5m', '15m', '1H', '4H', '1D'].map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-2 py-0.5 rounded font-mono text-[11px] ${
                  timeframe === tf ? 'bg-brand-purple text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>NON-REPAINTING V5</span>
          </div>
        </div>
      </div>

      {/* Live Chart Canvas Area */}
      <div className="relative my-4 h-72 sm:h-80 w-full rounded-xl bg-[#070913] border border-slate-800/80 p-4 flex flex-col justify-between overflow-hidden">
        
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d15_1px,transparent_1px),linear-gradient(to_bottom,#1f293d15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

        {/* Top Info Bar */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-lg sm:text-xl font-bold font-mono text-white">
              {selectedAsset.symbol} <span className="text-cyan-400">{selectedAsset.price}</span>
            </span>
            <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded ${
              selectedAsset.isBullish ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
            }`}>
              {selectedAsset.change}
            </span>
          </div>

          <div className="text-right font-mono text-xs text-slate-400">
            <span className="text-slate-500">Vol: </span>
            <span className="text-slate-300">14.8M</span>
          </div>
        </div>

        {/* Candlesticks Visualization with Simulated Signals */}
        <div className="relative z-10 w-full h-44 flex items-end justify-between px-2 pt-6">
          
          {/* Simulated candlesticks */}
          {[
            { h: 40, up: true }, { h: 55, up: true }, { h: 48, up: false }, 
            { h: 62, up: true }, { h: 58, up: false }, { h: 75, up: true },
            { h: 70, up: false }, { h: 90, up: true }, { h: 84, up: false },
            { h: 105, up: true, signal: 'BUY' }, { h: 120, up: true }, { h: 112, up: false },
            { h: 135, up: true }, { h: 145, up: true }, { h: 140, up: false },
            { h: 160, up: true }
          ].map((bar, idx) => (
            <div key={idx} className="relative flex flex-col items-center group">
              
              {/* Signal Trigger Badge */}
              {bar.signal === 'BUY' && (
                <div className="absolute -top-12 z-20 flex flex-col items-center animate-bounce">
                  <div className="px-2.5 py-1 rounded-md bg-emerald-500 text-black font-extrabold text-[10px] tracking-wider shadow-[0_0_15px_rgba(16,185,129,0.8)] flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> MBQ BUY
                  </div>
                  <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-emerald-500"></div>
                </div>
              )}

              {/* Wick */}
              <div 
                className={`w-[1px] ${bar.up ? 'bg-emerald-400' : 'bg-red-400'}`}
                style={{ height: `${bar.h + 20}px` }}
              ></div>

              {/* Candle Body */}
              <div 
                className={`absolute bottom-2 w-3 sm:w-4 rounded-xs transition-all duration-300 ${
                  bar.up 
                    ? 'bg-gradient-to-t from-emerald-600 to-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.4)]' 
                    : 'bg-gradient-to-t from-red-600 to-red-400 shadow-[0_0_8px_rgba(239,68,68,0.4)]'
                }`}
                style={{ height: `${bar.h}px` }}
              ></div>
            </div>
          ))}

          {/* Dynamic Target Overlays: TP3, TP2, TP1, SL */}
          <div className="absolute top-4 right-4 z-20 flex flex-col gap-1.5 font-mono text-[10px]">
            <div className="flex items-center justify-between px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
              <span>TP 3 (Target Hit)</span>
              <span className="ml-3 font-bold">+184.5 pips (1:4.8)</span>
            </div>
            <div className="flex items-center justify-between px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30 text-emerald-400">
              <span>TP 2 (Target Hit)</span>
              <span className="ml-3 font-bold">+112.0 pips</span>
            </div>
            <div className="flex items-center justify-between px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/20 text-emerald-400">
              <span>TP 1 (Secured)</span>
              <span className="ml-3 font-bold">+58.0 pips</span>
            </div>
            <div className="flex items-center justify-between px-2 py-0.5 rounded bg-red-950/60 border border-red-500/30 text-red-400">
              <span>Trailing SL (Risk Free)</span>
              <span className="ml-3 font-bold">Entry + 15 pips</span>
            </div>
          </div>
        </div>

        {/* Chart Bottom Ticker Legend */}
        <div className="relative z-10 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center space-x-3">
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Non-Repainting Algorithm Engine
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-400">Calculated ATR Volatility: 1.42</span>
          </div>
          <div className="text-cyan-400 font-semibold flex items-center gap-1">
            <Activity className="w-3.5 h-3.5" /> 94.2% Confluence Score
          </div>
        </div>

      </div>

      {/* Signal Attributes Metrics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center">
        <div className="p-2.5 rounded-xl bg-[#070913] border border-slate-800">
          <span className="text-[11px] text-slate-400 block font-medium">Signal Accuracy</span>
          <span className="text-base font-extrabold font-mono text-emerald-400">88.4%</span>
        </div>
        <div className="p-2.5 rounded-xl bg-[#070913] border border-slate-800">
          <span className="text-[11px] text-slate-400 block font-medium">Risk-to-Reward</span>
          <span className="text-base font-extrabold font-mono text-cyan-400">1 : 3.8</span>
        </div>
        <div className="p-2.5 rounded-xl bg-[#070913] border border-slate-800">
          <span className="text-[11px] text-slate-400 block font-medium">Repainting Rate</span>
          <span className="text-base font-extrabold font-mono text-white">0.00% (Strict)</span>
        </div>
        <div className="p-2.5 rounded-xl bg-[#070913] border border-slate-800">
          <span className="text-[11px] text-slate-400 block font-medium">Execution Engine</span>
          <span className="text-base font-extrabold font-mono text-purple-400">Pine Script v5</span>
        </div>
      </div>

    </div>
  );
}
