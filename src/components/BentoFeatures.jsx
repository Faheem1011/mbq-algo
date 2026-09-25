import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  LayoutGrid, 
  BarChart3, 
  BellRing, 
  Smartphone, 
  BookOpen, 
  Headphones, 
  Zap, 
  ArrowUpRight, 
  Check 
} from 'lucide-react';

export default function BentoFeatures({ onOpenCheckout, onOpenDashboard }) {
  return (
    <section id="features" className="py-20 md:py-28 relative bg-[#07090E] border-t border-slate-800/60 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono mb-4">
            <Zap className="w-3.5 h-3.5 text-slate-400" />
            <span>ALGORITHMIC ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-['Outfit'] font-black text-white tracking-tight">
            Engineered For Mathematical Precision. <br />
            <span className="text-slate-400">
              Built to Eliminate Deceptive Repainting.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400">
            Unlike retail indicators that repaint, shift on losing candles, or offer zero customer infrastructure, MBQ Algo X pairs verified Pine Script V5 calculations with a real client licensing portal.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Strict Non-Repainting Engine (Large 2 Cols) */}
          <div className="md:col-span-2 lg:col-span-2 rounded-2xl p-8 bg-[#0B0F17] border border-slate-800/80 shadow-lg relative overflow-hidden group">
            <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 text-white">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>

            <div className="inline-block px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-slate-800 text-slate-300 border border-slate-700 mb-3">
              BARSTATE.ISCONFIRMED VERIFIED
            </div>

            <h3 className="text-2xl font-bold font-['Outfit'] text-white mb-3">
              Strict Non-Repainting Execution
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              What you observe in historical backtests is identical to live forward execution. Calculations are locked when the candle completes. No vanishing arrows or retrospective adjustments.
            </p>

            <div className="p-4 rounded-xl bg-[#080B11] border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
              <div className="flex items-center justify-between text-emerald-400">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Buy Condition: Confirmed Close &gt; Upper Band</span>
                </span>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">LOCKED</span>
              </div>
              <div className="text-slate-500 text-[11px]">
                // Pine Script V5: buy_condition and barstate.isconfirmed
              </div>
            </div>
          </div>

          {/* Card 2: Dynamic 3-Tier TP/SL (1 Col) */}
          <div className="rounded-2xl p-8 bg-[#0B0F17] border border-slate-800/80 shadow-lg relative overflow-hidden group">
            <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 text-white">
              <Target className="w-5 h-5 text-slate-300" />
            </div>

            <h3 className="text-xl font-bold font-['Outfit'] text-white mb-2">
              Dynamic 3-Tier TP / SL
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Automates exit targets using real volatility. Computes TP1 (1.5x), TP2 (2.8x), TP3 (4.5x), and ATR trailing stop loss levels on every signal.
            </p>

            <div className="space-y-1.5 font-mono text-[11px]">
              <div className="flex justify-between text-slate-300">
                <span>TP 1: 1.5x Risk</span>
                <span className="font-bold text-emerald-400">88.4% Hit Rate</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>TP 2: 2.8x Risk</span>
                <span className="font-bold text-emerald-400">74.2% Hit Rate</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>TP 3: 4.5x Risk</span>
                <span className="font-bold text-emerald-400">58.6% Hit Rate</span>
              </div>
            </div>
          </div>

          {/* Card 3: Multi-Timeframe Matrix HUD (1 Col) */}
          <div className="rounded-2xl p-8 bg-[#0B0F17] border border-slate-800/80 shadow-lg relative overflow-hidden group">
            <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 text-white">
              <LayoutGrid className="w-5 h-5 text-slate-300" />
            </div>

            <h3 className="text-xl font-bold font-['Outfit'] text-white mb-2">
              Multi-Timeframe HUD
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Evaluate multi-timeframe confluence directly on your chart without tab switching. Real-time bias computed across 5M, 15M, 1H, 4H, and 1D.
            </p>

            <div className="grid grid-cols-3 gap-1.5 font-mono text-[10px] text-center">
              <div className="bg-emerald-500/10 text-emerald-400 py-1 rounded border border-emerald-500/20">5M BULL</div>
              <div className="bg-emerald-500/10 text-emerald-400 py-1 rounded border border-emerald-500/20">15M BULL</div>
              <div className="bg-emerald-500/10 text-emerald-400 py-1 rounded border border-emerald-500/20">1H BULL</div>
            </div>
          </div>

          {/* Card 4: Customer SaaS Dashboard (Large 2 Cols) */}
          <div className="md:col-span-2 lg:col-span-2 rounded-2xl p-8 bg-[#0B0F17] border border-slate-800/80 shadow-lg relative overflow-hidden group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-white">
                <BarChart3 className="w-5 h-5 text-slate-300" />
              </div>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-slate-800 text-slate-300 border border-slate-700">
                PROPRIETARY INFRASTRUCTURE
              </span>
            </div>

            <h3 className="text-2xl font-bold font-['Outfit'] text-white mb-2">
              Self-Serve Client Licensing Portal
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Every customer receives an individual portal to manage their signed license key, bind or switch their TradingView username, monitor active pair quotas, and generate webhook payloads for automated trading.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenDashboard}
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-200 text-black font-bold text-xs transition-colors flex items-center gap-1.5 shadow"
              >
                <span>Open Client Portal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs text-slate-500 font-mono">
                Automated TradingView invite entitlement
              </span>
            </div>
          </div>

          {/* Card 5: Mobile & Webhook Alerts */}
          <div className="rounded-2xl p-8 bg-[#0B0F17] border border-slate-800/80 shadow-lg relative overflow-hidden group">
            <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 text-white">
              <BellRing className="w-5 h-5 text-slate-300" />
            </div>

            <h3 className="text-xl font-bold font-['Outfit'] text-white mb-2">
              Instant Push Alerts
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Receive alerts the exact moment a bar confirms. Native support for TradingView mobile app, Telegram webhooks, and Discord bot triggers.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-300">
              <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Sub-second Alert Delivery</span>
            </div>
          </div>

          {/* Card 6: Setup Guides & VIP Masterclass */}
          <div className="rounded-2xl p-8 bg-[#0B0F17] border border-slate-800/80 shadow-lg relative overflow-hidden group">
            <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 text-white">
              <BookOpen className="w-5 h-5 text-slate-300" />
            </div>

            <h3 className="text-xl font-bold font-['Outfit'] text-white mb-2">
              Step-by-Step Guides
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Comprehensive video walkthroughs and documentation get the indicator operational on your charts in under 3 minutes.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-300">
              <Headphones className="w-3.5 h-3.5 text-slate-400" />
              <span>Direct Developer Support</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
