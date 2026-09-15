import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Sliders, Eye, EyeOff, Layers, BarChart2, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

export default function LiveChartSimulator({ onOpenCheckout }) {
  const [selectedPair, setSelectedPair] = useState('BTC/USDT');
  const [selectedTf, setSelectedTf] = useState('15M');
  const [sensitivity, setSensitivity] = useState(1.6);
  const [showTPSL, setShowTPSL] = useState(true);
  const [showHUD, setShowHUD] = useState(true);
  const [isReplaying, setIsReplaying] = useState(false);
  const [candleStep, setCandleStep] = useState(12);

  const pairs = [
    { name: 'BTC/USDT', price: 67420, digits: 2, trend: 'bull' },
    { name: 'ETH/USDT', price: 3540, digits: 2, trend: 'bull' },
    { name: 'EUR/USD', price: 1.0894, digits: 5, trend: 'range' },
    { name: 'NAS100', price: 19845, digits: 2, trend: 'bull' },
    { name: 'XAU/USD', price: 2412.8, digits: 2, trend: 'bull' },
    { name: 'NVDA', price: 129.8, digits: 2, trend: 'bull' },
  ];

  const timeframes = ['5M', '15M', '1H', '4H', '1D'];

  // Multi-timeframe HUD data based on selected pair
  const getHudData = () => {
    if (selectedPair === 'EUR/USD') {
      return { '5M': 'BEAR ▼', '15M': 'NEUT —', '1H': 'BEAR ▼', '4H': 'NEUT —', '1D': 'BULL ▲' };
    }
    return { '5M': 'BULL ▲', '15M': 'BULL ▲', '1H': 'BULL ▲', '4H': 'BULL ▲', '1D': 'NEUT —' };
  };

  const hudData = getHudData();

  // Automatic replay animation
  useEffect(() => {
    let interval = null;
    if (isReplaying) {
      interval = setInterval(() => {
        setCandleStep((prev) => (prev >= 16 ? 6 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isReplaying]);

  // Candle data generator for chart SVG
  const generateCandles = () => {
    // 16 candles simulating a realistic trend bounce setup
    const baseCandles = [
      { o: 40, c: 35, h: 44, l: 30, isGreen: false },
      { o: 35, c: 30, h: 38, l: 28, isGreen: false },
      { o: 30, c: 34, h: 36, l: 27, isGreen: true },
      { o: 34, c: 32, h: 37, l: 30, isGreen: false },
      { o: 32, c: 42, h: 44, l: 31, isGreen: true }, // Bullish momentum shift
      { o: 42, c: 48, h: 50, l: 40, isGreen: true },
      { o: 48, c: 58, h: 61, l: 46, isGreen: true, signal: 'buy' }, // Confirmed MBQ BUY!
      { o: 58, c: 64, h: 67, l: 56, isGreen: true, tp: 'tp1' }, // TP1 Hit
      { o: 64, c: 61, h: 68, l: 58, isGreen: false },
      { o: 61, c: 72, h: 75, l: 60, isGreen: true },
      { o: 72, c: 80, h: 82, l: 70, isGreen: true, tp: 'tp2' }, // TP2 Hit
      { o: 80, c: 77, h: 84, l: 74, isGreen: false },
      { o: 77, c: 88, h: 90, l: 75, isGreen: true },
      { o: 88, c: 96, h: 99, l: 86, isGreen: true, tp: 'tp3' }, // TP3 Hit
      { o: 96, c: 92, h: 100, l: 89, isGreen: false },
      { o: 92, c: 97, h: 102, l: 90, isGreen: true },
    ];

    return baseCandles.slice(0, candleStep);
  };

  const activeCandles = generateCandles();

  return (
    <section id="chart-simulator" className="py-20 md:py-28 relative bg-[#05070E] overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PINE SCRIPT V5 LIVE SIMULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-['Outfit'] font-black text-white tracking-tight">
            See the Indicator Execute In <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Real Time On Any Market.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            Interactive chart engine simulating the exact Pine Script code of <code className="text-cyan-400 font-mono">MBQ_ALGO_V5_Pro.pine</code>: fast/slow momentum ribbons, dynamic TP/SL projections, and the on-chart Multi-Timeframe Matrix.
          </p>
        </div>

        {/* Main Chart Terminal Container */}
        <div className="rounded-2xl bg-[#080C17] border border-white/10 shadow-2xl overflow-hidden">
          
          {/* Top Control Bar (TradingView Style) */}
          <div className="bg-[#0B1020] border-b border-white/10 p-4 flex flex-wrap items-center justify-between gap-4">
            
            {/* Pair & Timeframe Selectors */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex bg-[#05070E] p-1 rounded-lg border border-white/10">
                {pairs.map((p) => (
                  <button
                    key={p.name}
                    onClick={() => setSelectedPair(p.name)}
                    className={`px-3 py-1.5 rounded-md text-xs font-mono font-bold transition-all ${
                      selectedPair === p.name
                        ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>

              <div className="flex bg-[#05070E] p-1 rounded-lg border border-white/10">
                {timeframes.map((tf) => (
                  <button
                    key={tf}
                    onClick={() => setSelectedTf(tf)}
                    className={`px-2.5 py-1.5 rounded-md text-xs font-mono font-semibold transition-all ${
                      selectedTf === tf
                        ? 'bg-purple-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>

            {/* Pine Inputs & Replay Controls */}
            <div className="flex items-center gap-3">
              
              {/* Sensitivity Slider */}
              <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#05070E] border border-white/10 text-xs font-mono text-slate-300">
                <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                <span>Sens:</span>
                <input
                  type="range"
                  min="0.8"
                  max="3.0"
                  step="0.1"
                  value={sensitivity}
                  onChange={(e) => setSensitivity(parseFloat(e.target.value))}
                  className="w-16 accent-cyan-400 cursor-pointer"
                />
                <span className="text-cyan-400 font-bold w-6">{sensitivity}</span>
              </div>

              {/* Toggles */}
              <button
                onClick={() => setShowTPSL(!showTPSL)}
                className={`px-2.5 py-1.5 rounded-lg border text-xs font-mono flex items-center gap-1.5 transition-all ${
                  showTPSL
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                    : 'bg-white/5 border-white/10 text-slate-400'
                }`}
              >
                {showTPSL ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                <span>TP/SL</span>
              </button>

              <button
                onClick={() => setShowHUD(!showHUD)}
                className={`px-2.5 py-1.5 rounded-lg border text-xs font-mono flex items-center gap-1.5 transition-all ${
                  showHUD
                    ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300'
                    : 'bg-white/5 border-white/10 text-slate-400'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>HUD</span>
              </button>

              {/* Bar Replay Trigger */}
              <button
                onClick={() => setIsReplaying(!isReplaying)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                  isReplaying
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20 animate-pulse'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {isReplaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                <span>{isReplaying ? 'Pause' : 'Replay'}</span>
              </button>

              <button
                onClick={() => { setCandleStep(16); setIsReplaying(false); }}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10"
                title="Reset Chart"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

            </div>

          </div>

          {/* Interactive Chart Canvas Viewport */}
          <div className="relative h-[480px] w-full bg-[#070A14] overflow-hidden p-6 select-none">
            
            {/* Grid Lines */}
            <div className="absolute inset-0 bg-ambient-grid opacity-50 pointer-events-none"></div>

            {/* ON-CHART MULTI-TIMEFRAME TREND MATRIX HUD (From Pine Script lines 123-146) */}
            {showHUD && (
              <div className="absolute top-6 right-6 z-20 bg-[#0B0F1A]/90 border border-[#1F293D] rounded-xl p-3 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-[#1F293D] pb-1.5 mb-2">
                  <span className="text-[10px] font-mono font-bold text-cyan-400 tracking-wider">
                    MBQ ALGO HUD
                  </span>
                  <span className="text-[9px] font-mono text-slate-500">V5.0 PRO</span>
                </div>

                <div className="grid grid-cols-6 gap-1.5 text-center font-mono text-[10px]">
                  <div className="text-slate-500 font-bold">TF</div>
                  <div className="text-slate-400">5M</div>
                  <div className="text-slate-400">15M</div>
                  <div className="text-slate-400">1H</div>
                  <div className="text-slate-400">4H</div>
                  <div className="text-slate-400">1D</div>

                  <div className="text-slate-300 font-bold">BIAS</div>
                  {['5M', '15M', '1H', '4H', '1D'].map((tf) => {
                    const val = hudData[tf];
                    const isBull = val.includes('BULL');
                    const isBear = val.includes('BEAR');
                    return (
                      <div
                        key={tf}
                        className={`px-1 py-0.5 rounded font-bold ${
                          isBull
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                            : isBear
                            ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                            : 'bg-slate-800 text-slate-400 border border-slate-700'
                        }`}
                      >
                        {val}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Indicator Legend Overlay (Top Left) */}
            <div className="absolute top-6 left-6 z-10 font-mono text-xs space-y-1 bg-[#05070E]/75 p-3 rounded-lg border border-white/5 backdrop-blur-sm pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white tracking-wider">{selectedPair}</span>
                <span className="text-slate-400">({selectedTf})</span>
                <span className="text-emerald-400 font-bold">O: 64,210  H: 67,800  L: 63,900  C: 67,420</span>
              </div>
              <div className="flex items-center gap-3 text-[11px] pt-1">
                <span className="text-cyan-400 flex items-center gap-1">
                  <span className="w-2 h-0.5 bg-cyan-400 inline-block"></span> Fast EMA (9)
                </span>
                <span className="text-purple-400 flex items-center gap-1">
                  <span className="w-2 h-0.5 bg-purple-400 inline-block"></span> Slow EMA (21)
                </span>
                <span className="text-slate-300 flex items-center gap-1">
                  <span className="w-2 h-0.5 bg-white/70 inline-block"></span> Baseline EMA (200)
                </span>
              </div>
            </div>

            {/* SVG Interactive Candlesticks & Algorithm Overlay */}
            <svg className="w-full h-full overflow-visible" viewBox="0 0 800 350" preserveAspectRatio="none">
              
              {/* 200 EMA Baseline (Glowing White Curve) */}
              <path
                d="M 20 280 Q 250 260, 450 200 T 780 120"
                fill="none"
                stroke="rgba(255, 255, 255, 0.4)"
                strokeWidth="2"
                strokeDasharray="4 2"
              />

              {/* Fast 9 EMA & Slow 21 EMA Momentum Ribbon (Cyan to Purple) */}
              <path
                d="M 20 270 Q 250 250, 450 170 T 780 70"
                fill="none"
                stroke="#00F0FF"
                strokeWidth="2.5"
              />
              <path
                d="M 20 285 Q 250 270, 450 190 T 780 95"
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="2.5"
              />
              {/* Ribbon Gradient Fill Area */}
              <path
                d="M 20 270 Q 250 250, 450 170 T 780 70 L 780 95 Q 600 135, 450 190 T 20 285 Z"
                fill="url(#ribbonGradient)"
                opacity="0.25"
              />

              <defs>
                <linearGradient id="ribbonGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#00F0FF" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>

              {/* Candlestick plotting */}
              {activeCandles.map((c, i) => {
                const x = 50 + i * 45;
                const candleHeight = Math.abs(c.c - c.o) * 3 + 4;
                const candleY = 320 - Math.max(c.o, c.c) * 2.8;
                const wickTop = 320 - c.h * 2.8;
                const wickBottom = 320 - c.l * 2.8;

                return (
                  <g key={i} className="transition-all duration-300">
                    {/* Wick */}
                    <line
                      x1={x}
                      y1={wickTop}
                      x2={x}
                      y2={wickBottom}
                      stroke={c.isGreen ? '#10B981' : '#EF4444'}
                      strokeWidth="1.5"
                    />
                    {/* Body */}
                    <rect
                      x={x - 8}
                      y={candleY}
                      width="16"
                      height={candleHeight}
                      rx="1"
                      fill={c.isGreen ? '#10B981' : '#EF4444'}
                      opacity="0.9"
                    />

                    {/* Confirmed MBQ BUY Signal Label (Pine Script line 74) */}
                    {c.signal === 'buy' && (
                      <g>
                        {/* Up Arrow Marker */}
                        <polygon
                          points={`${x},${candleY + candleHeight + 12} ${x - 7},${candleY + candleHeight + 24} ${x + 7},${candleY + candleHeight + 24}`}
                          fill="#10B981"
                        />
                        {/* Label Badge */}
                        <rect
                          x={x - 42}
                          y={candleY + candleHeight + 26}
                          width="84"
                          height="22"
                          rx="4"
                          fill="#10B981"
                        />
                        <text
                          x={x}
                          y={candleY + candleHeight + 41}
                          textAnchor="middle"
                          fill="#000000"
                          fontSize="11"
                          fontFamily="JetBrains Mono, monospace"
                          fontWeight="bold"
                        >
                          MBQ BUY ▲
                        </text>

                        {/* Dynamic TP / SL Level Lines (Pine Script lines 81-87) */}
                        {showTPSL && (
                          <g opacity="0.95">
                            {/* Dotted Entry Line */}
                            <line
                              x1={x}
                              y1={candleY + candleHeight / 2}
                              x2={780}
                              y2={candleY + candleHeight / 2}
                              stroke="#00F0FF"
                              strokeWidth="1.5"
                              strokeDasharray="4 3"
                            />
                            <text x="710" y={candleY + candleHeight / 2 - 4} fill="#00F0FF" fontSize="9" fontFamily="monospace" fontWeight="bold">
                              ENTRY
                            </text>

                            {/* TP 1 Line (1.5x) */}
                            <line x1={x} y1={candleY - 30} x2={780} y2={candleY - 30} stroke="#10B981" strokeWidth="1.5" strokeDasharray="2 2" />
                            <text x="700" y={candleY - 34} fill="#10B981" fontSize="9" fontFamily="monospace" fontWeight="bold">
                              TP1 (1.5x) [HIT]
                            </text>

                            {/* TP 2 Line (2.8x) */}
                            <line x1={x} y1={candleY - 65} x2={780} y2={candleY - 65} stroke="#10B981" strokeWidth="1.5" />
                            <text x="700" y={candleY - 69} fill="#10B981" fontSize="9" fontFamily="monospace" fontWeight="bold">
                              TP2 (2.8x) [HIT]
                            </text>

                            {/* TP 3 Line (4.5x) */}
                            <line x1={x} y1={candleY - 110} x2={780} y2={candleY - 110} stroke="#10B981" strokeWidth="2" />
                            <text x="700" y={candleY - 114} fill="#10B981" fontSize="9" fontFamily="monospace" fontWeight="bold">
                              TP3 (4.5x) [HIT]
                            </text>

                            {/* Stop Loss Line (1.5x ATR) */}
                            <line x1={x} y1={candleY + 60} x2={780} y2={candleY + 60} stroke="#EF4444" strokeWidth="1.5" />
                            <text x="710" y={candleY + 56} fill="#EF4444" fontSize="9" fontFamily="monospace" fontWeight="bold">
                              STOP LOSS
                            </text>
                          </g>
                        )}
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Bottom Status Bar */}
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-slate-400 bg-[#05070E]/80 px-4 py-2 rounded-lg border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Barstate Confirmed (No Repaint)
                </span>
                <span className="hidden sm:inline text-slate-500">|</span>
                <span className="hidden sm:inline">ATR Volatility: 14 Period</span>
              </div>
              <div className="text-cyan-400 font-semibold">
                Setup R:R = 1:2.80 (Winner)
              </div>
            </div>

          </div>

          {/* Bottom Interactive Feature Badges */}
          <div className="bg-[#090D1A] p-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>Cyan/Purple Momentum Ribbon</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Automatic 3-Tier Take Profit</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                <span>Dynamic ATR Trailing Stop</span>
              </div>
            </div>

            <button
              onClick={() => onOpenCheckout('Pro')}
              className="px-5 py-2 text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 rounded-lg shadow-lg shadow-cyan-500/20 transition-all"
            >
              Unlock This Script on TradingView →
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
