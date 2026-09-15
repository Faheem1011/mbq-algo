import React from 'react';
import { ShieldCheck, Target, LayoutGrid, BarChart3, BellRing, Smartphone, BookOpen, Headphones, Zap, ArrowUpRight, Check } from 'lucide-react';

export default function BentoFeatures({ onOpenCheckout, onOpenDashboard }) {
  return (
    <section id="features" className="py-20 md:py-28 relative bg-[#05070E] overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-purple-600/10 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-mono mb-4">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>INSTITUTIONAL TOOLKIT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-['Outfit'] font-black text-white tracking-tight">
            Engineered For Precision. <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
              Built to Beat Repainting Scams.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            Unlike retail indicators that repaint, vanish on losing candles, or dump you into an unmanaged checkout link, MBQ Algo X gives you verified signals and a real customer portal.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Strict Non-Repainting Engine (Large 2 Cols) */}
          <div className="md:col-span-2 lg:col-span-2 glass-panel glass-panel-hover rounded-2xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500"></div>
            
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <div className="inline-block px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/25 mb-3">
              BARSTATE.ISCONFIRMED VERIFIED
            </div>

            <h3 className="text-2xl font-bold font-['Outfit'] text-white mb-3">
              Strict Non-Repainting Algorithm
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              What you see in backtests is 100% what prints live on your chart. Our engine locks signal calculations only when the bar confirms. No vanishing arrows, no moving targets, no deceptive recalculations.
            </p>

            <div className="p-4 rounded-xl bg-[#060912] border border-white/10 font-mono text-xs text-slate-300 space-y-2">
              <div className="flex items-center justify-between text-emerald-400">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Buy Condition: Confirmed Close &gt; Upper Band</span>
                </span>
                <span className="text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded">LOCKED</span>
              </div>
              <div className="text-slate-500 text-[11px]">
                // Pine V5 Code: buy_condition and barstate.isconfirmed
              </div>
            </div>
          </div>

          {/* Card 2: Dynamic 3-Tier TP/SL (1 Col) */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-8 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold font-['Outfit'] text-white mb-2">
              Dynamic 3-Tier TP/SL
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed mb-4">
              Never guess when to take profit or cut losses. Automatically draws TP1 (1.5x), TP2 (2.8x), TP3 (4.5x), and ATR trailing stop loss levels right on your chart.
            </p>

            <div className="space-y-1.5 font-mono text-[11px]">
              <div className="flex justify-between text-emerald-400">
                <span>TP 1: 1.5x Risk</span>
                <span className="font-bold">Hit 88%</span>
              </div>
              <div className="flex justify-between text-emerald-400">
                <span>TP 2: 2.8x Risk</span>
                <span className="font-bold">Hit 74%</span>
              </div>
              <div className="flex justify-between text-emerald-400">
                <span>TP 3: 4.5x Risk</span>
                <span className="font-bold">Hit 56%</span>
              </div>
            </div>
          </div>

          {/* Card 3: Multi-Timeframe Matrix HUD (1 Col) */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-8 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
              <LayoutGrid className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold font-['Outfit'] text-white mb-2">
              Live MTF Trend HUD
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed mb-4">
              Scan higher and lower timeframe momentum without flipping tabs. The built-in matrix calculates bias across 5M, 15M, 1H, 4H, and 1D in real time.
            </p>

            <div className="grid grid-cols-3 gap-1.5 font-mono text-[10px] text-center">
              <div className="bg-emerald-500/20 text-emerald-400 py-1 rounded border border-emerald-500/30">5M BULL</div>
              <div className="bg-emerald-500/20 text-emerald-400 py-1 rounded border border-emerald-500/30">15M BULL</div>
              <div className="bg-emerald-500/20 text-emerald-400 py-1 rounded border border-emerald-500/30">1H BULL</div>
            </div>
          </div>

          {/* Card 4: Customer SaaS Dashboard (Large 2 Cols - The SwiftAlgo Differentiator) */}
          <div className="md:col-span-2 lg:col-span-2 glass-panel glass-panel-hover rounded-2xl p-8 relative overflow-hidden group border-cyan-500/30 shadow-lg shadow-cyan-950/20">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-[#090D18] rounded-xl flex items-center justify-center text-cyan-400">
                  <BarChart3 className="w-6 h-6" />
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                EXCLUSIVE ADVANTAGE
              </span>
            </div>

            <h3 className="text-2xl font-bold font-['Outfit'] text-white mb-2">
              Dedicated Customer Client Portal
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              SwiftAlgo leaves buyers with zero dashboard after purchase. MBQ Algo X gives you a full customer dashboard: monitor your signed license key, bind your TradingView username, view active pair quotas, and manage billing in one click.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenDashboard}
                className="px-4 py-2 rounded-lg bg-cyan-500 text-black font-bold text-xs hover:bg-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <span>Preview Client Portal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs text-slate-400 font-mono">
                Instant auto-grant on TradingView
              </span>
            </div>
          </div>

          {/* Card 5: Mobile & Discord Push Alerts */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-8 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-6 text-amber-400 group-hover:scale-110 transition-transform">
              <BellRing className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold font-['Outfit'] text-white mb-2">
              Mobile Push Alerts
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed mb-4">
              Get instant push notifications the second a confirmed signal forms. Supports TradingView mobile app, Telegram webhooks, and private Discord channels.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
              <Smartphone className="w-3.5 h-3.5" />
              <span>&lt; 200ms Latency Alerts</span>
            </div>
          </div>

          {/* Card 6: Step-by-Step Setup & VIP Masterclass */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-8 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold font-['Outfit'] text-white mb-2">
              Setup Guides & Discord
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed mb-4">
              Step-by-step video tutorials and written setup manuals get you set up in under 3 minutes, plus access to our private trader community.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-400">
              <Headphones className="w-3.5 h-3.5" />
              <span>24/7 Priority Support SLA</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
