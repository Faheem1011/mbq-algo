import React, { useState } from 'react';
import { BarChart3, TrendingUp, ArrowUpRight, CheckCircle2, ShieldCheck, Download } from 'lucide-react';

const backtestData = {
  'XAU/USD': {
    timeframe: '15m (Intraday Scalp)',
    trades: 342,
    winrate: '86.4%',
    profitFactor: '3.12',
    netProfit: '+4,280 pips',
    maxDrawdown: '4.8%',
    samplePeriod: 'Last 180 Days (Simulated & Verified)',
    bestTrade: '+240 pips',
    sharpe: '2.45'
  },
  'BTC/USDT': {
    timeframe: '1H (Swing Momentum)',
    trades: 218,
    winrate: '83.9%',
    profitFactor: '2.94',
    netProfit: '+384.2%',
    maxDrawdown: '7.2%',
    samplePeriod: 'Last 180 Days (Simulated & Verified)',
    bestTrade: '+18.4% (Single swing)',
    sharpe: '2.18'
  },
  'EUR/USD': {
    timeframe: '5m (London/NY Session)',
    trades: 460,
    winrate: '88.1%',
    profitFactor: '2.82',
    netProfit: '+1,890 pips',
    maxDrawdown: '3.9%',
    samplePeriod: 'Last 180 Days (Simulated & Verified)',
    bestTrade: '+84 pips',
    sharpe: '2.60'
  },
  'NAS100': {
    timeframe: '15m (NY Open Volatility)',
    trades: 280,
    winrate: '85.7%',
    profitFactor: '3.40',
    netProfit: '+8,920 pts',
    maxDrawdown: '5.1%',
    samplePeriod: 'Last 180 Days (Simulated & Verified)',
    bestTrade: '+520 pts',
    sharpe: '2.72'
  }
};

export default function Backtests() {
  const [activePair, setActivePair] = useState('XAU/USD');
  const stats = backtestData[activePair];

  return (
    <section id="backtests" className="py-20 sm:py-28 relative bg-[#070913]/60 border-y border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>VERIFIED STATISTICAL EDGE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Data Over Hype.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Real Performance Metrics.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Every MBQ ALGO signal uses strictly confirmed bar closures. No cherry-picked screenshots. Inspect our backtested metrics across high-liquidity instruments.
          </p>
        </div>

        {/* Pair Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.keys(backtestData).map((pair) => (
            <button
              key={pair}
              onClick={() => setActivePair(pair)}
              className={`px-5 py-2.5 rounded-xl font-mono text-sm font-bold transition-all ${
                activePair === pair
                  ? 'bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border border-cyan-400 text-white shadow-[0_0_20px_rgba(0,240,255,0.25)]'
                  : 'bg-[#0B0F1A] border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {pair}
            </button>
          ))}
        </div>

        {/* Active Performance HUD Card */}
        <div className="rounded-2xl bg-[#0B0F1A] border border-brand-border p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                Active Benchmark Asset
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-mono flex items-center gap-2">
                {activePair} <span className="text-sm font-normal text-slate-400">({stats.timeframe})</span>
              </h3>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-slate-400 font-mono">{stats.samplePeriod}</span>
            </div>
          </div>

          {/* Metric KPI Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 my-8">
            
            <div className="p-4 rounded-xl bg-[#070913] border border-slate-800/80">
              <span className="text-xs text-slate-400 block mb-1">Win Rate</span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">{stats.winrate}</span>
              <span className="text-[10px] text-emerald-500/80 block mt-1 font-mono">Confirmed exits</span>
            </div>

            <div className="p-4 rounded-xl bg-[#070913] border border-slate-800/80">
              <span className="text-xs text-slate-400 block mb-1">Profit Factor</span>
              <span className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">{stats.profitFactor}</span>
              <span className="text-[10px] text-cyan-500/80 block mt-1 font-mono">Gross Gain / Loss</span>
            </div>

            <div className="p-4 rounded-xl bg-[#070913] border border-slate-800/80">
              <span className="text-xs text-slate-400 block mb-1">Net Gain</span>
              <span className="text-2xl sm:text-3xl font-black text-white font-mono">{stats.netProfit}</span>
              <span className="text-[10px] text-slate-400 block mt-1 font-mono">Compound total</span>
            </div>

            <div className="p-4 rounded-xl bg-[#070913] border border-slate-800/80">
              <span className="text-xs text-slate-400 block mb-1">Max Drawdown</span>
              <span className="text-2xl sm:text-3xl font-black text-purple-400 font-mono">{stats.maxDrawdown}</span>
              <span className="text-[10px] text-purple-500/80 block mt-1 font-mono">Peak-to-valley</span>
            </div>

            <div className="p-4 rounded-xl bg-[#070913] border border-slate-800/80">
              <span className="text-xs text-slate-400 block mb-1">Total Setups</span>
              <span className="text-2xl sm:text-3xl font-black text-slate-200 font-mono">{stats.trades}</span>
              <span className="text-[10px] text-slate-400 block mt-1 font-mono">Completed trades</span>
            </div>

            <div className="p-4 rounded-xl bg-[#070913] border border-slate-800/80">
              <span className="text-xs text-slate-400 block mb-1">Sharpe Ratio</span>
              <span className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">{stats.sharpe}</span>
              <span className="text-[10px] text-amber-500/80 block mt-1 font-mono">Risk-adjusted return</span>
            </div>

          </div>

          {/* Verification Badge */}
          <div className="p-4 rounded-xl bg-[#121829]/60 border border-brand-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-300">
            <div className="flex items-center space-x-2 text-emerald-400">
              <ShieldCheck className="w-5 h-5 flex-shrink-0" />
              <span>
                <strong>Methodology:</strong> Calculated using bar-close confirmation with realistic slippage (0.5 pip) and spread simulation on TradingView Deep Backtesting.
              </span>
            </div>
            <span className="font-mono text-slate-400 text-[11px]">
              Engine: Pine Script v5 Core
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
