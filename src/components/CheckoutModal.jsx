import React, { useState } from 'react';
import { X, ShieldCheck, Check, ArrowRight, CreditCard, Sparkles, Copy, CheckCircle2, RefreshCw, Lock } from 'lucide-react';

export default function CheckoutModal({ planName = 'Pro Quarterly', onClose, onOpenDashboard }) {
  const [step, setStep] = useState(1); // 1 = Form, 2 = Processing, 3 = Success
  const [email, setEmail] = useState('');
  const [tvUsername, setTvUsername] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [generatedKey, setGeneratedKey] = useState('');
  const [copied, setCopied] = useState(false);

  const planPricing = {
    'Starter': '$47 / month',
    'Pro Quarterly': '$127 / quarter',
    'Elite Annual': '$349 / year',
    'Lifetime Access': '$699 one-time'
  };

  const selectedPrice = planPricing[planName] || '$127 / quarter';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !tvUsername) return;

    setStep(2); // Start processing simulation

    // Simulate backend Stripe webhook + TV entitlement step
    setTimeout(() => {
      const randHex = Math.random().toString(36).substring(2, 6).toUpperCase();
      const randHex2 = Math.random().toString(36).substring(2, 6).toUpperCase();
      const randHex3 = Math.random().toString(36).substring(2, 6).toUpperCase();
      setGeneratedKey(`MBQ-${randHex}-${randHex2}-${randHex3}-PRO`);
      setStep(3); // Success
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#080C18] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
          aria-label="Close Checkout"
        >
          <X className="w-4 h-4" />
        </button>

        {/* STEP 1: Form Input */}
        {step === 1 && (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>256-BIT ENCRYPTED CHECKOUT</span>
              </div>
              <h3 className="text-2xl font-bold font-['Outfit'] text-white">
                Complete Your Order
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-1">
                Selected Plan: <span className="text-cyan-400 font-bold">{planName}</span> ({selectedPrice})
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  Email Address (For License & Invoices) *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="trader@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#05070E] border border-white/10 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  TradingView Username (For Instant Script Access) *
                </label>
                <input
                  type="text"
                  required
                  value={tvUsername}
                  onChange={(e) => setTvUsername(e.target.value)}
                  placeholder="Your TradingView handle (e.g. Satoshi_99)"
                  className="w-full px-4 py-3 rounded-xl bg-[#05070E] border border-white/10 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors font-mono"
                />
                <span className="text-[11px] text-slate-500 font-mono mt-1 block">
                  Access is automatically granted to this username upon payment.
                </span>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-2">
                  Select Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border text-xs font-mono font-medium flex flex-col items-center gap-1.5 transition-all ${
                      paymentMethod === 'card'
                        ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300'
                        : 'bg-[#05070E] border-white/10 text-slate-400'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Card / Stripe</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('crypto')}
                    className={`p-3 rounded-xl border text-xs font-mono font-medium flex flex-col items-center gap-1.5 transition-all ${
                      paymentMethod === 'crypto'
                        ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300'
                        : 'bg-[#05070E] border-white/10 text-slate-400'
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Crypto (USDT)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('local')}
                    className={`p-3 rounded-xl border text-xs font-mono font-medium flex flex-col items-center gap-1.5 transition-all ${
                      paymentMethod === 'local'
                        ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300'
                        : 'bg-[#05070E] border-white/10 text-slate-400'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Bank / Easypaisa</span>
                  </button>
                </div>
              </div>

              {/* Order Total Box */}
              <div className="p-4 rounded-xl bg-[#060912] border border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Total Due Today:</span>
                <span className="text-lg font-bold text-white">{selectedPrice}</span>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 text-black font-bold text-sm shadow-xl shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>Authorize & Activate Script</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-mono">
                <Lock className="w-3 h-3 text-slate-500" />
                <span>Guaranteed 7-Day Money Back Policy • Cancel Anytime</span>
              </div>
            </form>
          </div>
        )}

        {/* STEP 2: Processing Simulation */}
        {step === 2 && (
          <div className="py-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400 animate-spin">
              <RefreshCw className="w-8 h-8" />
            </div>

            <div className="space-y-2 font-mono">
              <h4 className="text-lg font-bold text-white">
                Synchronizing With TradingView...
              </h4>
              <p className="text-xs text-slate-400">
                Granting invite-only access to <span className="text-cyan-400 font-bold">{tvUsername}</span>
              </p>
              <p className="text-[11px] text-slate-500">
                Signing cryptographic license key & creating customer account...
              </p>
            </div>
          </div>
        )}

        {/* STEP 3: Success Screen */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-['Outfit'] text-white">
                Payment Confirmed!
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-1">
                Your TradingView account has been granted full access to MBQ Algo X v5.
              </p>
            </div>

            {/* Generated License Key Card */}
            <div className="p-4 rounded-xl bg-[#05070E] border border-cyan-500/30 space-y-2">
              <div className="flex justify-between text-[11px] font-mono">
                <span className="text-slate-400">Your Signed License Key:</span>
                <span className="text-cyan-400 font-bold">PRO UNLOCKED</span>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-lg bg-[#0A0F1E] border border-white/10">
                <span className="flex-1 font-mono text-xs text-cyan-300 font-bold select-all">
                  {generatedKey}
                </span>
                <button
                  onClick={handleCopy}
                  className="px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-xs font-mono text-white flex items-center gap-1"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-cyan-400" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Next Steps Checklist */}
            <div className="space-y-2.5 font-mono text-xs text-slate-300 bg-white/[0.02] p-4 rounded-xl border border-white/5">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>TradingView invite sent to <strong className="text-white">@{tvUsername}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Login credentials dispatched to <strong className="text-white">{email}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-cyan-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Open TradingView &gt; Indicators &gt; "Invite-Only Scripts"</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenDashboard();
                }}
                className="flex-1 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>Go to Client Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onClose}
                className="py-3 px-6 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-mono text-xs border border-white/10"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
