import React, { useState } from 'react';
import { TrendingUp, BarChart2, CheckCircle2, ChevronRight, ChevronLeft, Play, ShieldAlert, Award } from 'lucide-react';

export default function BacktestsCarousel({ onOpenCheckout }) {
  const [activeSetupIndex, setActiveSetupIndex] = useState(0);

  const setups = [
    {
      pair: 'BTC/USDT',
      timeframe: '15M',
      market: 'Crypto',
      winRate: '79.2%',
      profitFactor: '3.42',
      netReturn: '+682.4%',
      trades: '348 Trades',
      maxDrawdown: '4.2%',
      avgRR: '1:2.85',
      summary: 'Trend continuation setup following 200 EMA breakout with confirmed buy arrow and TP3 reached in 18 bars.',
      image: '/algo_script_overview.png',
      entryPrice: '$64,150.00',
      exitPrice: '$67,320.00',
      pnl: '+$3,170.00 / BTC (+4.94%)',
      tpStatus: 'TP 3 Reached (4.5x)'
    },
    {
      pair: 'NAS100',
      timeframe: '5M',
      market: 'Indices',
      winRate: '81.4%',
      profitFactor: '4.10',
      netReturn: '+894.6%',
      trades: '412 Trades',
      maxDrawdown: '3.8%',
      avgRR: '1:3.10',
      summary: 'Opening bell breakout session. Fast 9 EMA crossed above 21 EMA with ATR volatility expansion triggering instant TP2.',
      image: '/algo_script_overview.png',
      entryPrice: '19,620.50',
      exitPrice: '19,890.00',
      pnl: '+269.50 Pts (+$5,390)',
      tpStatus: 'TP 2 Reached (2.8x)'
    },
    {
      pair: 'XAU/USD (Gold)',
      timeframe: '15M',
      market: 'Commodities',
      winRate: '76.5%',
      profitFactor: '3.15',
      netReturn: '+512.5%',
      trades: '286 Trades',
      maxDrawdown: '4.6%',
      avgRR: '1:2.60',
      summary: 'London Session high sweep rejection followed by confirmed MBQ Sell signal. Tight ATR stop loss prevented slippage.',
      image: '/algo_script_overview.png',
      entryPrice: '$2,428.50',
      exitPrice: '$2,398.00',
      pnl: '+$30.50 / oz (+305 Pips)',
      tpStatus: 'TP 3 Reached (4.5x)'
    },
    {
      pair: 'EUR/USD',
      timeframe: '1H',
      market: 'Forex',
      winRate: '77.8%',
      profitFactor: '2.95',
      netReturn: '+421.8%',
      trades: '240 Trades',
      maxDrawdown: '3.2%',
      avgRR: '1:2.45',
      summary: 'Clean 4H trend confluence alignment on MTF Matrix HUD leading to precision non-repainting buy signal at demand.',
      image: '/algo_script_overview.png',
      entryPrice: '1.08250',
      exitPrice: '1.09120',
      pnl: '+87 Pips (+1.8% Equity)',
      tpStatus: 'TP 2 Reached (2.8x)'
    }
  ];

  const currentSetup = setups[activeSetupIndex];

  const replayVideos = [
    {
      title: 'NAS100 Opening Bell Breakout',
      pair: 'NAS100 5M',
      gain: '+240 Pts',
      duration: '0:45 Replay',
      desc: 'Watch how the cyan/purple ribbon caught the morning surge with zero drawdown.'
    },
    {
      title: 'Bitcoin 15M Squeeze Liquidity Run',
      pair: 'BTC/USDT 15M',
      gain: '+5.2% Move',
      duration: '1:10 Replay',
      desc: 'Full TP1, TP2, and TP3 execution without a single repainting flicker.'
    },
    {
      title: 'Gold London Sweep & Reverse',
      pair: 'XAU/USD 15M',
      gain: '+220 Pips',
      duration: '0:55 Replay',
      desc: 'MTF HUD aligned across 15M and 1H for an institutional high-RR short.'
    },
    {
      title: 'EUR/USD New York Momentum Wave',
      pair: 'EUR/USD 1H',
      gain: '+85 Pips',
      duration: '1:05 Replay',
      desc: 'Clean trend continuation confirmed on bar close with dynamic trailing stop.'
    }
  ];

  return (
    <section id="backtests" className="py-20 md:py-28 relative bg-[#060913] border-t border-white/5">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED BACKTEST LOG</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-['Outfit'] font-black text-white tracking-tight">
            Data Doesn't Lie. <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              1,420+ Backtested Signals Analyzed.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            Every setup generated with strict barstate confirmation. Explore real trades across Crypto, Forex, Indices, and Commodities.
          </p>
        </div>

        {/* Global Performance Summary Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="glass-panel p-6 rounded-2xl text-center border-emerald-500/20">
            <div className="text-3xl font-black font-['Outfit'] text-emerald-400">78.4%</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Average Win Rate</div>
          </div>
          <div className="glass-panel p-6 rounded-2xl text-center border-cyan-500/20">
            <div className="text-3xl font-black font-['Outfit'] text-cyan-400">3.42</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Profit Factor</div>
          </div>
          <div className="glass-panel p-6 rounded-2xl text-center border-purple-500/20">
            <div className="text-3xl font-black font-['Outfit'] text-purple-400">1:2.85</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Avg Risk-to-Reward</div>
          </div>
          <div className="glass-panel p-6 rounded-2xl text-center border-amber-500/20">
            <div className="text-3xl font-black font-['Outfit'] text-amber-400">4.1%</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Max Historical Drawdown</div>
          </div>
        </div>

        {/* Interactive Backtest Setup Card */}
        <div className="rounded-2xl bg-[#080C17] border border-white/10 overflow-hidden shadow-2xl mb-16">
          
          {/* Tabs for setups */}
          <div className="bg-[#0B1020] border-b border-white/10 px-4 py-3 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {setups.map((s, idx) => (
                <button
                  key={s.pair}
                  onClick={() => setActiveSetupIndex(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                    activeSetupIndex === idx
                      ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                      : 'bg-[#05070E] text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  <span>{s.pair}</span>
                  <span className="text-[10px] opacity-75">({s.timeframe})</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveSetupIndex((prev) => (prev === 0 ? setups.length - 1 : prev - 1))}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
                aria-label="Previous Setup"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveSetupIndex((prev) => (prev === setups.length - 1 ? 0 : prev + 1))}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
                aria-label="Next Setup"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Setup Details Grid */}
          <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Chart Snapshot Display */}
            <div className="lg:col-span-7 relative rounded-xl bg-black/60 border border-white/10 overflow-hidden group">
              <img
                src={currentSetup.image}
                alt={`${currentSetup.pair} Backtest Chart`}
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/algo script over view.png';
                }}
              />
              
              {/* Overlay Badge */}
              <div className="absolute top-4 left-4 p-2.5 rounded-lg bg-[#05070E]/85 border border-cyan-500/30 backdrop-blur-md font-mono text-xs">
                <div className="text-slate-400 text-[10px]">VERIFIED TRADE LOG</div>
                <div className="text-cyan-400 font-bold">{currentSetup.pair} • {currentSetup.timeframe}</div>
              </div>

              <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-emerald-500/90 text-black font-mono font-bold text-xs shadow-lg">
                {currentSetup.tpStatus}
              </div>
            </div>

            {/* Metrics Breakdown Column */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">{currentSetup.market} Strategy</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs font-mono text-slate-400">{currentSetup.trades}</span>
                </div>
                <h3 className="text-2xl font-black font-['Outfit'] text-white">
                  {currentSetup.pair} ({currentSetup.timeframe}) Backtest
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentSetup.summary}
                </p>
              </div>

              {/* Stat Grid */}
              <div className="grid grid-cols-2 gap-3 font-mono">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] text-slate-400 uppercase">Win Rate</div>
                  <div className="text-xl font-bold text-emerald-400">{currentSetup.winRate}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] text-slate-400 uppercase">Profit Factor</div>
                  <div className="text-xl font-bold text-cyan-400">{currentSetup.profitFactor}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] text-slate-400 uppercase">Net Return</div>
                  <div className="text-xl font-bold text-white">{currentSetup.netReturn}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] text-slate-400 uppercase">Risk-Reward</div>
                  <div className="text-xl font-bold text-purple-400">{currentSetup.avgRR}</div>
                </div>
              </div>

              {/* Trade Price Details */}
              <div className="p-4 rounded-xl bg-[#090E1C] border border-cyan-500/20 text-xs font-mono space-y-1.5">
                <div className="flex justify-between text-slate-300">
                  <span>Entry: {currentSetup.entryPrice}</span>
                  <span>Exit: {currentSetup.exitPrice}</span>
                </div>
                <div className="flex justify-between font-bold text-emerald-400 pt-1 border-t border-white/5">
                  <span>Realized Gain:</span>
                  <span>{currentSetup.pnl}</span>
                </div>
              </div>

              <button
                onClick={() => onOpenCheckout('Pro')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-bold text-xs shadow-lg shadow-cyan-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                Trade This Exact Setup on TradingView →
              </button>
            </div>

          </div>

        </div>

        {/* 4 REPLAY VIDEO BREAKDOWNS (SwiftAlgo Feature Mirror - document.md §3) */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold font-['Outfit'] text-white">
              Instant Trade Replays
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Watch step-by-step executions across major market sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {replayVideos.map((clip, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-5 relative overflow-hidden group cursor-pointer"
                onClick={() => onOpenCheckout('Pro')}
              >
                <div className="relative aspect-video rounded-xl bg-[#05070E] border border-white/10 mb-4 overflow-hidden flex items-center justify-center">
                  <img
                    src="/algo_script_overview.png"
                    alt={clip.title}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Play Button Icon */}
                  <div className="absolute w-10 h-10 rounded-full bg-cyan-500 text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 ml-0.5 fill-black" />
                  </div>

                  <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 text-cyan-400 border border-white/10">
                    {clip.pair}
                  </span>
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/90 text-black font-bold">
                    {clip.gain}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  {clip.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {clip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Regulatory Disclosure Banner (document.md §8) */}
        <div className="mt-12 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3 text-xs text-slate-400">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-300">Hypothetical Performance Disclosure:</strong> The backtest results presented above were simulated using TradingView's Bar Replay tool and Pine Script v5 strategy calculations. Simulated or hypothetical performance results have certain inherent limitations and do not represent actual trading. Please review our full Risk Disclaimer in the footer before trading with live capital.
          </p>
        </div>

      </div>
    </section>
  );
}
