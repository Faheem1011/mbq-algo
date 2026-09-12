import React from 'react';
import { ShieldAlert, Lock, Heart } from 'lucide-react';

export default function Footer({ onOpenGuide, onOpenDashboard }) {
  return (
    <footer className="bg-[#030509] border-t border-brand-border/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/mbq_algo_logo_transparent.png" 
                alt="MBQ ALGO" 
                className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]"
              />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white font-['Outfit'] tracking-wider">
                  MBQ <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">ALGO</span>
                </span>
                <span className="text-[10px] tracking-widest text-cyan-400 font-mono">
                  PRECISION TRADING PLATFORM
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Institutional-grade trading intelligence for modern retail traders. Delivering strictly non-repainting buy/sell signals, dynamic risk parameters, and integrated client licensing.
            </p>
            <div className="pt-2 text-slate-500 font-mono text-[11px]">
              Supported Gateways: Meezan Bank MPGS • Safepay • PayFast • 1Link
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">Platform</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">Core Features</a></li>
              <li><a href="#backtests" className="hover:text-cyan-400 transition-colors">Verified Backtests</a></li>
              <li><a href="#comparison" className="hover:text-cyan-400 transition-colors">vs SwiftAlgo</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing Plans</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">Resources</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onOpenGuide} className="hover:text-cyan-400 transition-colors text-left">
                  TradingView Setup Guide
                </button>
              </li>
              <li>
                <button onClick={onOpenDashboard} className="hover:text-cyan-400 transition-colors text-left">
                  Client Portal
                </button>
              </li>
              <li><a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">VIP Discord Community</a></li>
              <li><a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Alpha Telegram Channel</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">Legal & Policy</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#disclaimer" className="hover:text-cyan-400 transition-colors">Risk Disclosure</a></li>
              <li><a href="#terms" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
              <li><a href="#privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#refund" className="hover:text-cyan-400 transition-colors">Refund Policy (7 Days)</a></li>
            </ul>
          </div>

        </div>

        {/* Mandatory Financial Risk Disclaimer */}
        <div id="disclaimer" className="py-8 border-b border-slate-800/80 space-y-3 leading-relaxed text-[11px] text-slate-500">
          <div className="flex items-center space-x-2 text-amber-400 font-bold uppercase tracking-wider text-xs">
            <ShieldAlert className="w-4 h-4 flex-shrink-0" />
            <span>High Risk Investment & Hypothetical Performance Disclosure (CFTC & SECP Guidelines)</span>
          </div>
          <p>
            Trading foreign exchange (Forex), cryptocurrencies, stocks, indices, commodities, and futures on margin carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade or invest in financial instruments, you should carefully consider your investment objectives, level of experience, and risk tolerance. The possibility exists that you could sustain a loss of some or all of your initial capital and therefore you should not invest money that you cannot afford to lose.
          </p>
          <p>
            Hypothetical or simulated performance results have certain inherent limitations. Unlike an actual performance record, simulated results do not represent actual trading. Also, since the trades have not actually been executed, the results may have under- or over-compensated for the impact, if any, of certain market factors, such as lack of liquidity. Simulated trading programs in general are also subject to the fact that they are designed with the benefit of hindsight. No representation is being made that any account will or is likely to achieve profits or losses similar to those shown.
          </p>
          <p>
            MBQ ALGO is not a registered investment advisor, broker-dealer, or financial intermediary. All materials, indicators, signals, and content provided by MBQ ALGO are strictly for educational and analytical research purposes. Past performance of any algorithm is not an indicator of future results.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <span>
            © {new Date().getFullYear()} MBQ ALGO (Pvt.) Ltd. All rights reserved. Not affiliated with TradingView Inc.
          </span>
          <div className="flex items-center space-x-4">
            <span>Server Time: GMT+5 (Pakistan Standard Time)</span>
            <span>•</span>
            <span className="text-cyan-500">System Online</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
