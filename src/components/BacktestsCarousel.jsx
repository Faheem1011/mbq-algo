import React, { useState } from 'react';
import { TrendingUp, BarChart2, CheckCircle2, ChevronRight, ChevronLeft, Play, ShieldAlert, Award, ArrowUpRight } from 'lucide-react';

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
      desc: 'Observed momentum ribbon catching morning session volume with minimal drawdown.'
    },
    {
      title: 'Bitcoin 15M Squeeze Liquidity Run',
      pair: 'BTC/USDT 15M',
      gain: '+5.2% Move',
      duration: '1:10 Replay',
      desc: 'Complete TP1, TP2, and TP3 execution without retrospective signal flicker.'
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
    <section id="backtests" className="py-20 md:py-28 relative bg-[#07090E] border-t border-slate-800/60">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono mb-4">
            <Award className="w-3.5 h-3.5 text-emerald-400" />
            <span>VERIFIED PERFORMANCE DATA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-['Outfit'] font-black text-white tracking-tight">
            Empirical Results. <br />
            <span className="text-slate-400">
              1,420+ Backtested Signals Analyzed.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400">
            Every setup evaluated using locked barstate confirmation. Explore real simulated data across Crypto, Forex, Indices, and Commodities.
          </p>
        </div>

        {/* Global Performance Summary Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-6 rounded-2xl text-center bg-[#0B0F17] border border-slate-800/80 shadow">
            <div className="text-3xl font-black font-mono text-emerald-400">78.4%</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Average Win Rate</div>
          </div>
          <div className="p-6 rounded-2xl text-center bg-[#0B0F17] border border-slate-800/80 shadow">
            <div className="text-3xl font-black font-mono text-white">3.42</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Profit Factor</div>
          </div>
          <div className="p-6 rounded-2xl text-center bg-[#0B0F17] border border-slate-800/80 shadow">
            <div className="text-3xl font-black font-mono text-white">1:2.85</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Avg Risk-to-Reward</div>
          </div>
          <div className="p-6 rounded-2xl text-center bg-[#0B0F17] border border-slate-800/80 shadow">
            <div className="text-3xl font-black font-mono text-slate-300">4.1%</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Max Historical Drawdown</div>
          </div>
        </div>

        {/* Interactive Backtest Setup Card */}
        <div className="rounded-2xl bg-[#0B0F17] border border-slate-800/80 overflow-hidden shadow-2xl mb-16">
          
          {/* Tabs for setups */}
          <div className="bg-[#0E131F] border-b border-slate-800/80 px-4 py-3 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {setups.map((s, idx) => (
                <button
                  key={s.pair}
                  onClick={() => setActiveSetupIndex(idx)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                    activeSetupIndex === idx
                      ? 'bg-white text-black font-bold shadow'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {s.pair} ({s.timeframe})
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span>Setup {activeSetupIndex + 1} of {setups.length}</span>
              <div className="flex gap-1">
                <button
                  onClick={() => setActiveSetupIndex((prev) => (prev > 0 ? prev - 1 : setups.length - 1))}
                  className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-white"
                  aria-label="Previous Setup"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveSetupIndex((prev) => (prev < setups.length - 1 ? prev + 1 : 0))}
                  className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-white"
                  aria-label="Next Setup"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Setup Main Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8">
            
            {/* Left: Setup Graphic / Snapshot */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative aspect-video rounded-xl bg-black border border-slate-800 overflow-hidden flex items-center justify-center">
                <img
                  src={currentSetup.image}
                  alt={`${currentSetup.pair} Setup`}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 border border-slate-700 backdrop-blur-md text-[11px] font-mono text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>{currentSetup.pair} • {currentSetup.timeframe}</span>
                </div>

                <div className="absolute bottom-3 right-3 px-3 py-1 rounded bg-emerald-500/90 text-black font-mono font-bold text-xs shadow-lg">
                  {currentSetup.tpStatus}
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                {currentSetup.summary}
              </p>
            </div>

            {/* Right: Detailed Metric Breakdown */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="grid grid-cols-2 gap-3 font-mono">
                <div className="p-3.5 rounded-xl bg-[#080B11] border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Win Rate</div>
                  <div className="text-xl font-bold text-emerald-400">{currentSetup.winRate}</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#080B11] border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Profit Factor</div>
                  <div className="text-xl font-bold text-white">{currentSetup.profitFactor}</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#080B11] border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Net Return</div>
                  <div className="text-xl font-bold text-emerald-400">{currentSetup.netReturn}</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#080B11] border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Risk-Reward</div>
                  <div className="text-xl font-bold text-white">{currentSetup.avgRR}</div>
                </div>
              </div>

              {/* Trade Price Details */}
              <div className="p-4 rounded-xl bg-[#080B11] border border-slate-800 text-xs font-mono space-y-1.5">
                <div className="flex justify-between text-slate-300">
                  <span>Entry: {currentSetup.entryPrice}</span>
                  <span>Exit: {currentSetup.exitPrice}</span>
                </div>
                <div className="flex justify-between font-bold text-emerald-400 pt-1.5 border-t border-slate-800">
                  <span>Realized Gain:</span>
                  <span>{currentSetup.pnl}</span>
                </div>
              </div>

              <button
                onClick={() => onOpenCheckout('Pro')}
                className="w-full py-3.5 rounded-xl bg-white hover:bg-slate-200 text-black font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow"
              >
                <span>Execute This Strategy on TradingView</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* 4 REPLAY VIDEO BREAKDOWNS */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold font-['Outfit'] text-white">
              Instant Session Replays
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Recorded forward executions across major market sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {replayVideos.map((clip, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-5 bg-[#0B0F17] border border-slate-800/80 shadow hover:border-slate-700 transition-all cursor-pointer"
                onClick={() => onOpenCheckout('Pro')}
              >
                <div className="relative aspect-video rounded-xl bg-black border border-slate-800 mb-4 overflow-hidden flex items-center justify-center">
                  <img
                    src="/algo_script_overview.png"
                    alt={clip.title}
                    className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-lg">
                    <Play className="w-3.5 h-3.5 ml-0.5 fill-black" />
                  </div>

                  <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 text-slate-300 border border-slate-700">
                    {clip.pair}
                  </span>
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500 text-black font-bold">
                    {clip.gain}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-white mb-1 hover:text-slate-200 transition-colors">
                  {clip.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {clip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Regulatory Disclosure Banner */}
        <div className="mt-12 p-4 rounded-xl bg-[#0B0F17] border border-slate-800 flex items-start gap-3 text-xs text-slate-400">
          <ShieldAlert className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-300">Hypothetical Performance Disclosure:</strong> The backtest results presented above were simulated using TradingView's Bar Replay tool and Pine Script v5 strategy calculations. Simulated or hypothetical performance results have certain inherent limitations and do not represent actual trading. Please review our full Risk Disclaimer in the footer before trading with live capital.
          </p>
        </div>

      </div>
    </section>
  );
}
