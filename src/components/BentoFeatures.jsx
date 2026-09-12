import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Layers, 
  Bell, 
  LayoutDashboard, 
  Lock, 
  CreditCard, 
  LineChart,
  Zap,
  Bot
} from 'lucide-react';

const features = [
  {
    title: '100% Non-Repainting Execution',
    desc: 'Never worry about vanishing arrows. Once a candle closes and prints a signal, it remains locked permanently. Backtests match live execution bar-for-bar.',
    icon: ShieldCheck,
    tag: 'INTEGRITY GUARANTEE',
    colSpan: 'md:col-span-2',
    accent: 'from-emerald-500/20 to-transparent border-emerald-500/30 text-emerald-400'
  },
  {
    title: 'Smart Dynamic TP / SL Engine',
    desc: 'Every setup prints 3 dynamic Take-Profit targets and an ATR-adjusted Trailing Stop-Loss right on your chart. Eliminates emotional exits.',
    icon: Target,
    tag: 'RISK MANAGEMENT',
    colSpan: 'md:col-span-1',
    accent: 'from-cyan-500/20 to-transparent border-cyan-500/30 text-cyan-400'
  },
  {
    title: 'Live Multi-Timeframe Trend Matrix',
    desc: 'An on-chart HUD displaying directional momentum across 5M, 15M, 1H, 4H, and Daily timeframes. Always trade with higher-timeframe confluence.',
    icon: Layers,
    tag: 'CONFLUENCE HUD',
    colSpan: 'md:col-span-1',
    accent: 'from-purple-500/20 to-transparent border-purple-500/30 text-purple-400'
  },
  {
    title: 'Dedicated Customer License Portal',
    desc: 'Unlike SwiftAlgo where access is a black hole, MBQ ALGO gives you a real dashboard to manage your license key, change TradingView usernames, and view invoices.',
    icon: LayoutDashboard,
    tag: 'NEW DIFFERENTIATOR',
    colSpan: 'md:col-span-2',
    accent: 'from-blue-500/20 to-transparent border-blue-500/30 text-blue-400'
  },
  {
    title: 'Pakistani Merchant & Local Gateway Support',
    desc: 'Pay directly using your Pakistani bank account or debit card: Meezan Bank, Habib Bank, Bank Alfalah, 1Link PayPak, JazzCash, or Easypaisa.',
    icon: CreditCard,
    tag: 'PAKISTAN TAILORED',
    colSpan: 'md:col-span-1',
    accent: 'from-amber-500/20 to-transparent border-amber-500/30 text-amber-400'
  },
  {
    title: 'TradingView Invite-Only Protected Access',
    desc: 'Your indicator is delivered directly to your TradingView "Invite-Only Scripts" tab. No messy files to compile; fully protected Pine Script v5 code.',
    icon: Lock,
    tag: 'SEAMLESS ACCESS',
    colSpan: 'md:col-span-1',
    accent: 'from-pink-500/20 to-transparent border-pink-500/30 text-pink-400'
  },
  {
    title: 'Instant Mobile Push & Webhook Alerts',
    desc: 'Set up audio and push alerts directly in TradingView, or connect webhooks to Discord, Telegram, or automated trade-execution bots (PineConnector).',
    icon: Bell,
    tag: 'AUTOMATION READY',
    colSpan: 'md:col-span-1',
    accent: 'from-cyan-500/20 to-transparent border-cyan-500/30 text-cyan-400'
  }
];

export default function BentoFeatures() {
  return (
    <section id="features" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>ENGINEERED FOR SUPREME ACCURACY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need To Trade Like An{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Algorithmic Desk.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            MBQ ALGO combines multi-timeframe volume flow, dynamic volatility boundaries, and automated risk parameters into one clean visual overlay.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`relative group rounded-2xl p-6 sm:p-8 bg-[#0B0F1A]/80 border border-brand-border/80 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 overflow-hidden shadow-xl backdrop-blur-md ${item.colSpan}`}
              >
                {/* Ambient Card Glow on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-b ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#121829] border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <span className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#121829] border border-slate-800 text-slate-400">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center text-xs text-slate-400 font-mono">
                    <span className="text-cyan-400 mr-1.5">●</span> Production Verified
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
