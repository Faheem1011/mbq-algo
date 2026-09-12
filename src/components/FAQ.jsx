import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'What happens immediately after I make a purchase?',
    a: 'Your access is automated. Once your payment clears through Meezan Bank, Safepay, or PayFast, our licensing engine generates your unique signed license key and queues your TradingView username for invite access. You can view your key immediately in the Client Portal and will receive an email receipt with setup instructions within minutes.'
  },
  {
    q: 'Does MBQ ALGO repaint or alter historical signals?',
    a: 'Absolutely not. 100% strictly non-repainting. Our Pine Script v5 algorithm calculates signals on the close of each candle (barmerge.lookahead_off). Once a candle closes and prints a signal arrow with TP/SL levels, it remains locked permanently on the chart.'
  },
  {
    q: 'How does the Pakistani payment gateway work?',
    a: 'We accept payments through Pakistani bank rails: direct Meezan Bank MPGS (Mastercard Payment Gateway Services), Safepay, and PayFast. You can pay using any Pakistani Visa/Mastercard debit card, 1Link PayPak card, or mobile wallets (JazzCash & EasyPaisa). All payments are processed in PKR without foreign transaction fees.'
  },
  {
    q: 'Do I need a paid TradingView plan to use MBQ ALGO?',
    a: 'No! MBQ ALGO works perfectly on 100% FREE TradingView accounts, as well as Essential, Plus, and Premium tiers. You do not need to pay TradingView extra to run our indicator.'
  },
  {
    q: 'What markets and timeframes are supported?',
    a: 'MBQ ALGO is asset-agnostic. It works seamlessly on Forex (EUR/USD, GBP/USD, USD/JPY), Crypto (BTC, ETH, SOL), Indices (NAS100, US30, SPX), and Commodities (XAU/USD Gold, Crude Oil). Recommended timeframes range from 1M and 5M for scalpers, 15M for day traders, to 1H and 4H for swing traders.'
  },
  {
    q: 'What is an "Invite-Only Script" on TradingView?',
    a: 'TradingView\'s Invite-Only system protects proprietary algorithmic code. Instead of copying script files, the indicator is authorized directly to your TradingView username by our server. It appears under your TradingView "Invite-Only Scripts" tab automatically with one click.'
  },
  {
    q: 'Is there a refund policy or money-back guarantee?',
    a: 'Yes, we offer a 7-day money-back guarantee. If you are not satisfied with the performance or tools within your first 7 days, simply contact our support team on WhatsApp or Discord for a prompt refund.'
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>CLARITY & TRANSPARENCY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Questions.
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Everything you need to know about the algorithm, licensing, and access delivery.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-brand-border bg-[#0B0F1A] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-white hover:text-cyan-300 transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
