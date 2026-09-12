import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldAlert, Zap, Lock, CreditCard } from 'lucide-react';
import InteractiveChart from './InteractiveChart';

export default function Hero({ onOpenCheckout, onOpenGuide }) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      
      {/* Dynamic Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-cyan-500/20 via-purple-500/15 to-pink-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#121829]/90 border border-cyan-500/30 text-xs font-semibold text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>MBQ ALGO X PRO — INVITE-ONLY ACCESS ON TRADINGVIEW</span>
            <span className="text-slate-500">|</span>
            <span className="text-purple-300 font-mono">NON-REPAINTING V5</span>
          </div>
        </div>

        {/* Main H1 Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            The Trading Indicator That Tells You What{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              SwiftAlgo Won't.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            100% verified non-repainting entries, automated Take-Profit & Stop-Loss calculations, and a dedicated customer dashboard to manage your license. Built for traders who are done guessing.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenCheckout({ name: 'Pro Plan', pricePKR: 24000, priceUSD: 89, period: 'Quarterly' })}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-300 hover:opacity-95 transition-all shadow-[0_0_25px_rgba(0,240,255,0.5)] flex items-center justify-center space-x-2 group text-base"
            >
              <span>Get Instant Access</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onOpenGuide}
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-slate-200 bg-[#0B0F1A] border border-slate-700 hover:border-cyan-400/50 hover:bg-[#121829] transition-all flex items-center justify-center space-x-2 text-base"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>How Invite-Only Works</span>
            </button>
          </div>

          {/* Key Bulletproof Guarantees */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <CheckCircle2 className="w-4 h-4" /> 0% Repainting on Confirmation
            </span>
            <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
              <CheckCircle2 className="w-4 h-4" /> Pakistani Gateways (Meezan / 1Link)
            </span>
            <span className="flex items-center gap-1.5 text-purple-400 font-medium">
              <CheckCircle2 className="w-4 h-4" /> Works on Free TradingView Accounts
            </span>
          </div>
        </div>

        {/* Live Interactive Candlestick Chart Mockup */}
        <div className="mt-10 sm:mt-14 max-w-5xl mx-auto">
          <InteractiveChart />
        </div>

        {/* Brand & Market Strip */}
        <div className="mt-12 text-center">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold block mb-4">
            COMPATIBLE WITH EVERY MAJOR ASSET CLASS & PLATFORM
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-300 text-sm font-semibold text-slate-400">
            <span className="hover:text-cyan-400 transition-colors">TRADINGVIEW (FREE & PRO)</span>
            <span>•</span>
            <span className="hover:text-cyan-400 transition-colors">FOREX CURRENCY PAIRS</span>
            <span>•</span>
            <span className="hover:text-cyan-400 transition-colors">CRYPTO & BITCOIN</span>
            <span>•</span>
            <span className="hover:text-cyan-400 transition-colors">INDICES (NAS100, US30)</span>
            <span>•</span>
            <span className="hover:text-cyan-400 transition-colors">GOLD & COMMODITIES</span>
          </div>
        </div>

      </div>
    </section>
  );
}
