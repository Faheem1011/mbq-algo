import React, { useState } from 'react';
import { ChevronRight, Calendar, Info, Play, BarChart2, Zap } from 'lucide-react';

const backtestReports = {
  'XAUUSD': {
    asset: 'XAUUSD (Gold)',
    dateRange: 'Jul 27, 2025 — Feb 11, 2026',
    totalPnl: '+306,007.29 USD',
    totalPnlPercent: '+303.14%',
    maxDrawdown: '31,191.90 USD',
    maxDrawdownPercent: '19.39%',
    totalTrades: 143,
    profitableTrades: '65.03% (93/143)',
    profitFactor: '1.885',
    svgPath: 'M 0 160 Q 60 140, 120 125 T 240 100 T 360 70 T 480 50 T 600 25 T 720 15'
  },
  'BTCUSD': {
    asset: 'BTCUSD (Bitcoin)',
    dateRange: 'Aug 10, 2025 — Feb 15, 2026',
    totalPnl: '+412,850.00 USD',
    totalPnlPercent: '+384.20%',
    maxDrawdown: '24,600.00 USD',
    maxDrawdownPercent: '14.20%',
    totalTrades: 168,
    profitableTrades: '68.45% (115/168)',
    profitFactor: '2.140',
    svgPath: 'M 0 165 Q 70 145, 140 110 T 260 85 T 380 60 T 500 40 T 620 20 T 720 10'
  },
  'EURUSD': {
    asset: 'EURUSD (Forex)',
    dateRange: 'Jun 15, 2025 — Feb 01, 2026',
    totalPnl: '+184,210.50 USD',
    totalPnlPercent: '+192.40%',
    maxDrawdown: '18,400.00 USD',
    maxDrawdownPercent: '11.80%',
    totalTrades: 195,
    profitableTrades: '71.28% (139/195)',
    profitFactor: '2.050',
    svgPath: 'M 0 150 Q 80 130, 160 115 T 300 90 T 420 65 T 540 45 T 640 30 T 720 18'
  }
};

export default function Backtests() {
  const [activeAsset, setActiveAsset] = useState('XAUUSD');
  const [activeTab, setActiveTab] = useState('metrics');
  const report = backtestReports[activeAsset];

  const assetsList = ['XAUUSD', 'BTCUSD', 'EURUSD'];

  const cycleAsset = () => {
    const currentIndex = assetsList.indexOf(activeAsset);
    const nextIndex = (currentIndex + 1) % assetsList.length;
    setActiveAsset(assetsList[nextIndex]);
  };

  return (
    <section id="backtests" className="py-24 relative bg-[#070514] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A153A] border border-[#3B346E] text-[11px] font-bold tracking-widest text-[#A5B4FC] uppercase mb-4">
          <span className="w-2 h-2 rounded-full bg-[#818CF8]"></span>
          <span>BACKTESTS</span>
        </div>

        {/* H2 Title */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          How MBQ Algo Performs
        </h2>

        {/* Subtext */}
        <p className="text-sm sm:text-base text-[#9490A8] max-w-2xl mx-auto mb-14">
          Check the examples below to see how our Indicator performs in multiple live markets.
        </p>

        {/* Strategy Report Card (SwiftAlgo Screenshot 4 exact recreation) */}
        <div className="relative max-w-4xl mx-auto rounded-3xl p-4 sm:p-6 bg-[#0E0B1E] border border-white/10 shadow-[0_0_50px_rgba(99,102,241,0.2)] text-left backdrop-blur-xl">
          
          {/* Strategy Report Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1.5 text-xs font-bold text-white">
                <BarChart2 className="w-4 h-4 text-[#818CF8]" />
                <span>Strategy Report</span>
              </div>
              <span className="text-xs text-[#9490A8] font-mono">MBQ Algo X</span>
            </div>

            {/* Middle Asset Badge with switcher */}
            <button
              onClick={cycleAsset}
              className="px-4 py-1.5 rounded-full bg-[#5551FF] text-white text-xs font-bold font-mono tracking-wider shadow-[0_0_15px_rgba(99,102,241,0.6)] flex items-center gap-1.5 hover:bg-[#4641FF] transition-all"
            >
              <Zap className="w-3.5 h-3.5 fill-white" />
              <span>{activeAsset}</span>
              <span className="text-[10px] opacity-80">(Switch)</span>
            </button>

            {/* Date Range */}
            <div className="flex items-center space-x-1.5 text-xs text-[#9490A8] font-mono">
              <Calendar className="w-3.5 h-3.5" />
              <span>{report.dateRange}</span>
            </div>
          </div>

          {/* Metrics / List of trades Toggle */}
          <div className="flex items-center space-x-2 my-4">
            <button
              onClick={() => setActiveTab('metrics')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'metrics' ? 'bg-white/10 text-white' : 'text-[#9490A8] hover:text-white'
              }`}
            >
              Metrics
            </button>
            <button
              onClick={() => setActiveTab('trades')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'trades' ? 'bg-white/10 text-white' : 'text-[#9490A8] hover:text-white'
              }`}
            >
              List of trades
            </button>
          </div>

          {/* Five Metrics Columns Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 p-4 rounded-2xl bg-[#070512] border border-white/[0.06] mb-6 font-mono">
            <div>
              <span className="text-[10px] text-[#716C8A] block uppercase mb-1">Total P&L</span>
              <span className="text-sm sm:text-base font-black text-emerald-400 block">{report.totalPnl}</span>
              <span className="text-[10px] text-emerald-500 font-bold">{report.totalPnlPercent}</span>
            </div>

            <div>
              <span className="text-[10px] text-[#716C8A] block uppercase mb-1">Max Drawdown</span>
              <span className="text-sm sm:text-base font-bold text-white block">{report.maxDrawdown}</span>
              <span className="text-[10px] text-[#9490A8]">{report.maxDrawdownPercent}</span>
            </div>

            <div>
              <span className="text-[10px] text-[#716C8A] block uppercase mb-1">Total trades</span>
              <span className="text-sm sm:text-base font-bold text-white block">{report.totalTrades}</span>
            </div>

            <div>
              <span className="text-[10px] text-[#716C8A] block uppercase mb-1">Profitable trades</span>
              <span className="text-xs sm:text-sm font-bold text-white block">{report.profitableTrades}</span>
            </div>

            <div>
              <span className="text-[10px] text-[#716C8A] block uppercase mb-1">Profit factor</span>
              <span className="text-sm sm:text-base font-extrabold text-[#A5B4FC] block">{report.profitFactor}</span>
            </div>
          </div>

          {/* Equity Chart SVG Visualization */}
          <div className="relative h-60 w-full rounded-2xl bg-[#070512] border border-white/[0.06] p-4 overflow-hidden flex flex-col justify-between">
            <span className="text-xs font-mono text-[#716C8A] uppercase">Equity chart</span>

            <svg viewBox="0 0 720 180" className="w-full h-40 overflow-visible">
              <defs>
                <linearGradient id="equityGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              
              {/* Green equity line */}
              <path
                d={report.svgPath}
                fill="none"
                stroke="#10B981"
                strokeWidth="2.5"
                className="drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]"
              />

              {/* Drawdown histogram bars at bottom */}
              {[40, 20, 35, 15, 50, 25, 45, 10, 30, 60, 20, 40, 15, 30, 10].map((h, i) => (
                <rect
                  key={i}
                  x={i * 48 + 15}
                  y={170 - h * 0.4}
                  width="4"
                  height={h * 0.4}
                  fill="#EF4444"
                  opacity="0.6"
                />
              ))}
            </svg>

            {/* Cycle asset next button (purple circle with arrow) */}
            <button
              onClick={cycleAsset}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#5551FF] hover:bg-[#4641FF] text-white flex items-center justify-center shadow-xl transition-transform hover:scale-105"
              title="Next Asset"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Replay Examples Badge Section */}
        <div className="mt-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A153A] border border-[#3B346E] text-[11px] font-bold tracking-widest text-[#A5B4FC] uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-[#818CF8]"></span>
            <span>REPLAY EXAMPLES</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {['Gold Scalp 1m (TP2 +110p)', 'Bitcoin 15m (Swing +18%)', 'EUR/USD 5m (NY Open)', 'US30 Breakout (+450pts)'].map((label, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-[#0D0A1E] border border-white/10 hover:border-[#6366F1] transition-all cursor-pointer group text-left"
              >
                <div className="aspect-video w-full rounded-xl bg-black/50 mb-3 flex items-center justify-center border border-white/5 relative overflow-hidden">
                  <img src="/algo_script_overview.png" alt="" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform" />
                  <div className="absolute w-8 h-8 rounded-full bg-[#5551FF] text-white flex items-center justify-center shadow-lg">
                    <Play className="w-3.5 h-3.5 fill-white" />
                  </div>
                </div>
                <span className="text-xs font-bold text-white block group-hover:text-[#A5B4FC] transition-colors">{label}</span>
                <span className="text-[10px] text-[#716C8A] font-mono">100% Non-Repainting</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
