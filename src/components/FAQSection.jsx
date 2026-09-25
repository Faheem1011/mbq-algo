import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';

export default function FAQSection({ onOpenCheckout }) {
  const [openIdx, setOpenIdx] = useState(0); // First one open by default

  const faqs = [
    {
      q: 'Does MBQ Algo X repaint or vanish after the candle closes?',
      a: 'Strictly NO. We engineer our Pine Script v5 indicator using strict barstate.isconfirmed execution logic. A signal arrow only plots when the candle closes and all ATR volatility and momentum confluence conditions are verified. What you see in historical backtests is 100% identical to live market execution.'
    },
    {
      q: 'Do I need a paid TradingView subscription to use this?',
      a: 'No. MBQ Algo X runs flawlessly on 100% free Basic TradingView accounts. You do not need to pay TradingView for Essential, Plus, or Premium to add our indicator, set alerts, or use the Multi-Timeframe Trend Matrix HUD.'
    },
    {
      q: 'How fast do I receive access after purchasing?',
      a: 'Access is automated and instant. Within 30 seconds of completing checkout, our server grants your TradingView username access to the script under "Invite-Only Scripts", generates your signed license key, and saves your client portal access.'
    },
    {
      q: 'What markets and timeframes does it support?',
      a: 'MBQ Algo X is universal and works on all liquid markets supported by TradingView: Crypto (BTC, ETH, SOL, altcoins), Forex (EUR/USD, GBP/USD, etc.), Commodities (XAU/USD Gold, Silver, Oil), Indices (NAS100, US30, SPX500, DAX), and US Equities. It supports all timeframes from 1-minute scalping to 1-Day swing trading.'
    },
    {
      q: 'How does the Customer Client Portal work?',
      a: 'Every customer gets their own self-serve client portal. You can view your signed license key, change your linked TradingView username, view pair usage quotas, download PDF setup manuals, and configure real-time alert webhooks.'
    },
    {
      q: 'Can I receive alerts directly on my smartphone?',
      a: 'Yes. You can set native push notifications via the TradingView mobile app (iOS and Android), receive webhook pings on Discord, or forward signals to Telegram so you never miss an entry when away from your desk.'
    },
    {
      q: 'What is your 7-day refund guarantee policy?',
      a: 'We offer an unconditional 7-day money-back guarantee. If you test MBQ Algo X on your charts and do not feel it provides an institutional edge in the markets, contact our support team within 7 days for a complete, prompt refund.'
    },
    {
      q: 'Do I need prior trading experience to use this?',
      a: 'No. The indicator was specifically built to eliminate emotional second-guessing. It gives you clear Green "MBQ BUY" and Red "MBQ SELL" markers alongside automated TP1, TP2, TP3, and Stop Loss exit lines. Our 3-minute video setup guide walks you through everything.'
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-28 relative bg-[#07090E] border-t border-slate-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-['Outfit'] font-black text-white tracking-tight">
            Everything You Need <br />
            <span className="text-slate-400">
              To Know Before You Start.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400">
            Clear technical answers to common questions about indicator logic, compatibility, and licensing.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0E1320] border-slate-700 shadow-md'
                    : 'bg-[#0B0F17] border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-['Outfit'] font-bold text-base sm:text-lg text-white"
                >
                  <span>{faq.q}</span>
                  <div className={`p-1.5 rounded-lg bg-slate-800 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-white' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-slate-400 text-xs sm:text-sm font-sans leading-relaxed border-t border-slate-800/60 mt-1 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact / Discord Bar */}
        <div className="mt-14 p-6 rounded-2xl bg-[#0B0F17] border border-slate-800/80 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold font-['Outfit'] text-white">
              Still have questions?
            </h4>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              Our developer and algorithmic support team is active 24/7.
            </p>
          </div>

          <button
            onClick={() => onOpenCheckout('Pro')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-slate-200 text-black font-bold text-xs font-mono transition-colors flex items-center justify-center gap-2 shadow"
          >
            <span>Get Started Today</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
