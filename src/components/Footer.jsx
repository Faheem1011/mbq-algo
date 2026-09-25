import React, { useState } from 'react';
import { ShieldAlert, ArrowUp, MessageSquare, Send, ExternalLink, X } from 'lucide-react';

export default function Footer({ onOpenCheckout, onOpenDashboard, onOpenAuth }) {
  const [showLegalModal, setShowLegalModal] = useState(null); // 'terms', 'privacy', 'refund', 'risk'

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030408] border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-[#070B16] rounded-xl flex items-center justify-center">
                  <img
                    src="/mbq_algo_icon_transparent.png"
                    alt="MBQ Algo"
                    className="w-7 h-7 object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/favicon-32x32.png';
                    }}
                  />
                </div>
              </div>
              <span className="font-['Outfit'] font-black text-xl text-white tracking-tight">
                MBQ ALGO<span className="text-cyan-400">.X</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The proprietary institutional trading indicator platform engineered with strict non-repainting execution, dynamic 3-tier profit projections, and an automated customer licensing engine.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-400 border border-white/10 flex items-center justify-center transition-colors"
                aria-label="Discord Community"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-400 border border-white/10 flex items-center justify-center transition-colors"
                aria-label="Telegram Signals"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-400 border border-white/10 flex items-center justify-center transition-colors"
                aria-label="Twitter X"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-400 border border-white/10 flex items-center justify-center transition-colors"
                aria-label="YouTube Tutorials"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 3: Product Navigation */}
          <div className="space-y-3">
            <h4 className="font-mono font-bold text-white uppercase tracking-wider text-xs">
              Product
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#live-demo" className="hover:text-cyan-400 transition-colors">Video Showcase</a></li>
              <li><a href="#chart-simulator" className="hover:text-cyan-400 transition-colors">Live Pine Simulator</a></li>
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">Bento Features</a></li>
              <li><a href="#backtests" className="hover:text-cyan-400 transition-colors">Verified Backtests</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing & Plans</a></li>
            </ul>
          </div>

          {/* Col 4: Client Portal & Differentiators */}
          <div className="space-y-3">
            <h4 className="font-mono font-bold text-white uppercase tracking-wider text-xs">
              Client Portal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onOpenDashboard} className="hover:text-cyan-400 transition-colors text-left">
                  Customer Dashboard
                </button>
              </li>
              <li>
                <button onClick={onOpenAuth} className="hover:text-cyan-400 transition-colors text-left">
                  Member Portal Sign In
                </button>
              </li>
              <li><a href="#compare" className="hover:text-cyan-400 transition-colors">SwiftAlgo vs MBQ</a></li>
              <li><a href="#reviews" className="hover:text-cyan-400 transition-colors">Verified Trader Reviews</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ & Guides</a></li>
              <li><button onClick={() => onOpenCheckout('Pro')} className="hover:text-cyan-400 transition-colors text-left">Instant Access</button></li>
            </ul>
          </div>

          {/* Col 5: Security & Platform */}
          <div className="space-y-3">
            <h4 className="font-mono font-bold text-white uppercase tracking-wider text-xs">
              Compliance
            </h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => setShowLegalModal('terms')} className="hover:text-cyan-400 transition-colors text-left">Terms of Service</button></li>
              <li><button onClick={() => setShowLegalModal('privacy')} className="hover:text-cyan-400 transition-colors text-left">Privacy Policy</button></li>
              <li><button onClick={() => setShowLegalModal('refund')} className="hover:text-cyan-400 transition-colors text-left">7-Day Refund Policy</button></li>
              <li><button onClick={() => setShowLegalModal('risk')} className="hover:text-cyan-400 transition-colors text-left">CFTC Risk Disclosure</button></li>
            </ul>
          </div>

        </div>

        {/* REGULATORY RISK DISCLOSURE (CFTC Rule 4.41 & FTC Compliance - document.md §8) */}
        <div className="pt-8 pb-6 border-b border-white/5 space-y-3 text-[11px] leading-relaxed text-slate-500">
          <div className="flex items-center gap-2 text-amber-400 font-mono font-bold text-xs uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>High Risk Trading & Hypothetical Performance Disclaimer</span>
          </div>
          
          <p>
            <strong>CFTC RULE 4.41:</strong> HYPOTHETICAL OR SIMULATED PERFORMANCE RESULTS HAVE CERTAIN LIMITATIONS. UNLIKE AN ACTUAL PERFORMANCE RECORD, SIMULATED RESULTS DO NOT REPRESENT ACTUAL TRADING. ALSO, SINCE THE TRADES HAVE NOT BEEN EXECUTED, THE RESULTS MAY HAVE UNDER-OR-OVER COMPENSATED FOR THE IMPACT, IF ANY, OF CERTAIN MARKET FACTORS, SUCH AS LACK OF LIQUIDITY. SIMULATED TRADING PROGRAMS IN GENERAL ARE ALSO SUBJECT TO THE FACT THAT THEY ARE DESIGNED WITH THE BENEFIT OF HINDSIGHT. NO REPRESENTATION IS BEING MADE THAT ANY ACCOUNT WILL OR IS LIKELY TO ACHIEVE PROFIT OR LOSSES SIMILAR TO THOSE SHOWN.
          </p>

          <p>
            <strong>GENERAL RISK WARNING:</strong> Trading cryptocurrencies, foreign exchange (Forex), contracts for difference (CFDs), futures, and equities carries a high level of risk to your capital and may not be suitable for all investors. You should not invest money that you cannot afford to lose. MBQ Algo X provides analytical software and educational tools for the TradingView platform and does not offer individualized financial, legal, tax, or investment advice. Any trade decisions you make are solely your own responsibility.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500">
          <div>
            © 2026 MBQ ALGO X. All rights reserved. Proprietary Pine Script V5 Engine.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Legal Modal Popup */}
      {showLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#080C18] border border-white/15 rounded-2xl p-6 sm:p-8 max-h-[80vh] overflow-y-auto font-sans text-slate-300">
            <button
              onClick={() => setShowLegalModal(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-xl font-bold font-['Outfit'] text-white mb-4 uppercase">
              {showLegalModal === 'terms' && 'Terms of Service'}
              {showLegalModal === 'privacy' && 'Privacy Policy'}
              {showLegalModal === 'refund' && '7-Day Money-Back Policy'}
              {showLegalModal === 'risk' && 'Full Risk Disclosure Statement'}
            </h3>

            <div className="space-y-3 text-xs leading-relaxed">
              <p>
                MBQ Algo X is a specialized algorithmic indicator and educational analysis tool designed exclusively for the TradingView platform. By accessing our services, you acknowledge that you are licensed to use our proprietary Pine Script intellectual property for personal trading research.
              </p>
              <p>
                <strong>License Restrictions:</strong> Sharing, redistributing, decompiling, or reselling the MBQ Algo X indicator, license keys, or TradingView invite access is strictly prohibited and results in immediate automated revocation of access without refund.
              </p>
              <p>
                <strong>Refund Policy:</strong> We offer a 7-day money-back guarantee from the initial timestamp of your purchase. To request a refund, submit your transaction ID and TradingView username to our support email within 7 calendar days.
              </p>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}
