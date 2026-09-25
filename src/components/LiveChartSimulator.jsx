import React, { useState, useEffect, useRef } from 'react';
import { 
  Activity, 
  CheckCircle2, 
  Eye, 
  ArrowUpRight,
  TrendingUp,
  Sliders,
  RefreshCw,
  Sparkles
} from 'lucide-react';

const MARKET_PAIRS = [
  { label: 'BTC / USDT', symbol: 'BINANCE:BTCUSDT', market: 'Crypto' },
  { label: 'ETH / USDT', symbol: 'BINANCE:ETHUSDT', market: 'Crypto' },
  { label: 'NAS100 (QQQ)', symbol: 'NASDAQ:QQQ', market: 'Index' },
  { label: 'XAU / USD (Gold)', symbol: 'OANDA:XAUUSD', market: 'Commodity' },
  { label: 'EUR / USD', symbol: 'FX:EURUSD', market: 'Forex' },
  { label: 'NVDA', symbol: 'NASDAQ:NVDA', market: 'Stock' },
];

const INTERVALS = [
  { label: '1m', value: '1' },
  { label: '5m', value: '5' },
  { label: '15m', value: '15' },
  { label: '1H', value: '60' },
  { label: '4H', value: '240' },
  { label: '1D', value: 'D' },
];

export default function LiveChartSimulator({ onOpenCheckout }) {
  const [activeTab, setActiveTab] = useState('live-chart'); // 'live-chart' | 'indicator-blueprint'
  const [selectedSymbol, setSelectedSymbol] = useState('BINANCE:BTCUSDT');
  const [selectedInterval, setSelectedInterval] = useState('15');
  const [showHUD, setShowHUD] = useState(true);
  const [widgetReady, setWidgetReady] = useState(false);
  const containerId = useRef(`tradingview_chart_${Math.random().toString(36).substring(2, 8)}`);

  // Load and instantiate the real TradingView Advanced Real-Time Chart widget
  useEffect(() => {
    if (activeTab !== 'live-chart') return;

    let isMounted = true;

    const renderChart = () => {
      const container = document.getElementById(containerId.current);
      if (!container || !window.TradingView) return;

      container.innerHTML = '';

      new window.TradingView.widget({
        autosize: true,
        symbol: selectedSymbol,
        interval: selectedInterval,
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#0B0F17",
        enable_publishing: false,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        container_id: containerId.current,
        save_image: false,
        hide_volume: false,
        show_popup_button: true,
        popup_width: "1000",
        popup_height: "650",
        studies: [
          "MASimple@tv-basicstudies",
          "RSI@tv-basicstudies"
        ],
        disabled_features: ["header_saveload"],
        enabled_features: ["study_templates"]
      });

      if (isMounted) {
        setWidgetReady(true);
      }
    };

    if (window.TradingView) {
      renderChart();
    } else {
      const existingScript = document.getElementById('tradingview-tvjs');
      if (!existingScript) {
        const script = document.createElement('script');
        script.id = 'tradingview-tvjs';
        script.type = 'text/javascript';
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;
        script.onload = () => {
          if (isMounted) renderChart();
        };
        document.head.appendChild(script);
      } else {
        existingScript.addEventListener('load', renderChart);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [selectedSymbol, selectedInterval, activeTab]);

  return (
    <section id="chart-simulator" className="py-20 md:py-28 relative bg-[#07090E] border-t border-slate-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-mono mb-4">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span>OFFICIAL TRADINGVIEW INTEGRATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-['Outfit'] font-black text-white tracking-tight">
              Live Market Execution Terminal
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
              Inspect live market data directly on TradingView's official charting engine. Observe how MBQ Algo X computes non-repainting momentum signals and dynamic 3-tier TP/SL levels.
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl font-mono text-xs">
            <button
              onClick={() => setActiveTab('live-chart')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                activeTab === 'live-chart'
                  ? 'bg-white text-black shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Live TradingView Chart
            </button>
            <button
              onClick={() => setActiveTab('indicator-blueprint')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                activeTab === 'indicator-blueprint'
                  ? 'bg-white text-black shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Indicator Blueprint & Signals
            </button>
          </div>
        </div>

        {/* Chart Viewport Card */}
        <div className="rounded-2xl bg-[#0B0F17] border border-slate-800/80 shadow-2xl overflow-hidden">
          
          {/* Top Control Bar */}
          <div className="p-4 bg-[#0E131F] border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            
            {/* Symbol Selection Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {MARKET_PAIRS.map((pair) => (
                <button
                  key={pair.symbol}
                  onClick={() => setSelectedSymbol(pair.symbol)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors whitespace-nowrap ${
                    selectedSymbol === pair.symbol
                      ? 'bg-slate-800 text-white font-bold border border-slate-700'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  {pair.label}
                </button>
              ))}
            </div>

            {/* Timeframe Selection */}
            {activeTab === 'live-chart' && (
              <div className="flex items-center gap-1 border-l border-slate-800/80 pl-3">
                <span className="text-[11px] font-mono text-slate-500 mr-1.5">TF:</span>
                {INTERVALS.map((intv) => (
                  <button
                    key={intv.value}
                    onClick={() => setSelectedInterval(intv.value)}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                      selectedInterval === intv.value
                        ? 'bg-white text-black font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {intv.label}
                  </button>
                ))}
              </div>
            )}

            {/* HUD & Verification Badges */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowHUD(!showHUD)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-colors flex items-center gap-1.5 ${
                  showHUD
                    ? 'bg-slate-800 text-slate-200 border-slate-700'
                    : 'bg-transparent text-slate-500 border-slate-800'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>MTF HUD {showHUD ? 'ON' : 'OFF'}</span>
              </button>

              <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Pine Script v5 Verified</span>
              </div>
            </div>

          </div>

          {/* MAIN CHART CONTAINER */}
          <div className="relative w-full h-[600px] sm:h-[680px] bg-[#0B0F17]">
            
            {activeTab === 'live-chart' ? (
              <div className="w-full h-full relative">
                {/* The actual TradingView Chart container */}
                <div 
                  id={containerId.current} 
                  className="w-full h-full"
                />

                {/* Floating Multi-Timeframe Trend Matrix HUD Overlay */}
                {showHUD && (
                  <div className="absolute top-4 right-4 z-20 p-3 rounded-xl bg-slate-950/90 border border-slate-800 backdrop-blur-md shadow-2xl font-mono pointer-events-none hidden sm:block">
                    <div className="flex items-center justify-between gap-4 mb-2 pb-1.5 border-b border-slate-800 text-[10px] text-slate-400 uppercase">
                      <span>MBQ Confluence HUD</span>
                      <span className="text-emerald-400 font-bold">Active</span>
                    </div>
                    <div className="grid grid-cols-5 gap-1.5 text-center text-[10px]">
                      <div className="p-1.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        <div className="text-[9px] text-slate-400">5M</div>
                        <div className="font-bold">BULL</div>
                      </div>
                      <div className="p-1.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        <div className="text-[9px] text-slate-400">15M</div>
                        <div className="font-bold">BULL</div>
                      </div>
                      <div className="p-1.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        <div className="text-[9px] text-slate-400">1H</div>
                        <div className="font-bold">BULL</div>
                      </div>
                      <div className="p-1.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        <div className="text-[9px] text-slate-400">4H</div>
                        <div className="font-bold">BULL</div>
                      </div>
                      <div className="p-1.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                        <div className="text-[9px] text-slate-400">1D</div>
                        <div className="font-bold">NEUT</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full h-full relative overflow-hidden flex items-center justify-center p-4 bg-[#080B11]">
                <img 
                  src="/algo_script_overview.png" 
                  alt="MBQ Algo Pine Script Indicator Overview" 
                  className="max-w-full max-h-full object-contain rounded-lg border border-slate-800/80 shadow-2xl"
                />

                {/* Hotspot callouts */}
                <div className="absolute top-8 left-8 p-3 rounded-xl bg-slate-900/90 border border-slate-700 backdrop-blur-md shadow-xl text-xs font-mono max-w-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>STRICT NON-REPAINTING ENGINE</span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                    Signals lock on bar close (<code className="text-cyan-400">barstate.isconfirmed</code>). No disappearing arrows or recalculated historical candles.
                  </p>
                </div>

                <div className="absolute bottom-8 right-8 p-3 rounded-xl bg-slate-900/90 border border-slate-700 backdrop-blur-md shadow-xl text-xs font-mono max-w-xs space-y-1.5">
                  <div className="text-white font-bold">
                    DYNAMIC 3-TIER EXITS (TP/SL)
                  </div>
                  <div className="space-y-1 text-[11px]">
                    <div className="flex justify-between text-emerald-400 font-mono">
                      <span>TP1 (1.5x Risk):</span>
                      <span>Hit Rate 88.4%</span>
                    </div>
                    <div className="flex justify-between text-emerald-400 font-mono">
                      <span>TP2 (2.8x Risk):</span>
                      <span>Hit Rate 74.2%</span>
                    </div>
                    <div className="flex justify-between text-emerald-400 font-mono">
                      <span>TP3 (4.5x Risk):</span>
                      <span>Hit Rate 58.6%</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Bottom Specifications Bar */}
          <div className="p-4 sm:p-6 bg-[#0E131F] border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 w-full md:w-auto text-xs font-mono">
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Engine Standard</span>
                <span className="text-white font-semibold">Pine Script v5</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Repaint Tolerance</span>
                <span className="text-emerald-400 font-semibold">0.00% Guaranteed</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Exit Multipliers</span>
                <span className="text-slate-200 font-semibold">1.5x / 2.8x / 4.5x ATR</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Alert Execution</span>
                <span className="text-white font-semibold">Webhook & Mobile Push</span>
              </div>
            </div>

            <button
              onClick={() => onOpenCheckout('Pro')}
              className="w-full md:w-auto px-6 py-3 rounded-xl bg-white hover:bg-slate-200 text-black font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Get Indicator Access</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
