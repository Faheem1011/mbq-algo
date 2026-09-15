import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export default function FAQSection({ onOpenCheckout }) {
  const [openIdx, setOpenIdx] = useState(0); // First one open by default

  const faqs = [
    {
      q: 'Does MBQ Algo X repaint or vanish after the candle closes?',
      a: 'Strictly NO. We engineer our Pine Script v5 indicator using strict barstate.isconfirmed execution logic. A signal arrow only plots when the candle closes and all ATR volatility and momentum confluence conditions are verified. What you see in historical backtests is 100% identical to live market execution.'
    },
    {
      q: 'Do I need a paid TradingView subscription to use this?',
      a: 'No! MBQ Algo X runs flawlessly on 100% free Basic TradingView accounts. You do not need to pay TradingView for Essential, Plus, or Premium to add our indicator, set alerts, or use the Multi-Timeframe Trend Matrix HUD.'
    },
    {
      q: 'How fast do I receive access after purchasing?',
      a: 'Access is automated and instant. Within 30 seconds of completing checkout, our server grants your TradingView username access to the script under "Invite-Only Scripts", generates your signed license key, and emails you your setup credentials and client portal link.'
    },
    {
      q: 'What markets and timeframes does it support?',
      a: 'MBQ Algo X is universal and works on all liquid markets supported by TradingView: Crypto (BTC, ETH, SOL, altcoins), Forex (EUR/USD, GBP/USD, etc.), Commodities (XAU/USD Gold, Silver, Oil), Indices (NAS100, US30, SPX500, DAX), and US Equities. It supports all timeframes from 1-minute scalping to 1-Day swing trading.'
    },
    {
      q: 'How does the Customer Client Portal work?',
      a: 'Unlike SwiftAlgo, which dumps buyers to an external Whop checkout with zero dashboard, MBQ Algo X gives you a dedicated client portal. You can view your signed license key, change your linked TradingView username, view pair usage quotas, download PDF manuals, and manage billing self-serve.'
    },
    {
      q: 'Can I receive alerts directly on my smartphone?',
      a: 'Yes. You can set native push notifications via the TradingView mobile app (iOS and Android), receive webhook pings on Discord, or forward signals to Telegram so you never miss an entry when away from your desk.'
    },
    {
      q: 'What is your 7-day refund guarantee policy?',
      a: 'We offer an unconditional 7-day money-back guarantee. If you test MBQ Algo X on your charts and do not feel it gives you an unfair edge in the markets, contact our support team within 7 days for a complete, prompt refund.'
    },
    {
      q: 'Do I need prior trading experience to use this?',
      a: 'No. The indicator was specifically built to eliminate emotional second-guessing. It gives you clear Green "MBQ BUY ▲" and Red "MBQ SELL ▼" markers alongside automated TP1, TP2, TP3, and Stop Loss exit lines. Our 3-minute video setup guide walks you through everything.'
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-28 relative bg-[#05070E] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-mono mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-['Outfit'] font-black text-white tracking-tight">
            Everything You Need <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
              To Know Before You Join.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            Got questions? We have clear answers. If you have custom questions, our team is live 24/7 on Discord.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#090E1C] border-cyan-500/30 shadow-lg shadow-cyan-950/20'
                    : 'glass-panel border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className={`text-base sm:text-lg font-bold font-['Outfit'] transition-colors ${
                    isOpen ? 'text-cyan-400' : 'text-white'
                  }`}>
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-lg border transition-transform duration-300 shrink-0 ${
                    isOpen
                      ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400 rotate-180'
                      : 'bg-white/5 border-white/10 text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 animate-in slide-in-from-top-2 duration-200">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#080C17] border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white font-['Outfit']">
              Still have a question?
            </h4>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              Chat directly with our algorithm engineers on Discord.
            </p>
          </div>
          <button
            onClick={() => onOpenCheckout('Pro')}
            className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/15 transition-all"
          >
            Ask On Discord →
          </button>
        </div>

      </div>
    </section>
  );
}
