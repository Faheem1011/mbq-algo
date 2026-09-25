import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  CreditCard, 
  Sparkles, 
  Copy, 
  CheckCircle2, 
  RefreshCw, 
  Lock,
  User,
  Mail
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function CheckoutModal({ planName = 'Pro Quarterly', onClose, onOpenDashboard }) {
  const { checkoutAndActivate } = useAuth();
  const [step, setStep] = useState(1); // 1 = Form, 2 = Processing, 3 = Success
  const [email, setEmail] = useState('');
  const [tvUsername, setTvUsername] = useState('');
  const [password, setPassword] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [generatedKey, setGeneratedKey] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const planPricing = {
    'Starter': '$47 / month',
    'Pro Quarterly': '$127 / quarter',
    'Elite Annual': '$349 / year',
    'Lifetime Access': '$699 one-time'
  };

  const selectedPrice = planPricing[planName] || '$127 / quarter';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const cleanEmail = email.trim();
    const cleanTv = tvUsername.trim().replace(/^@/, '');

    if (!cleanEmail || !cleanTv) {
      setError('Please provide both your Email and TradingView username.');
      return;
    }

    setStep(2); // Start processing

    try {
      // Direct pipeline provisioning
      const activeUser = await checkoutAndActivate({
        email: cleanEmail,
        tvUsername: cleanTv,
        planName: planName,
        password: password || 'pass_' + Math.random().toString(36).substring(2, 8),
      });

      setTimeout(() => {
        setGeneratedKey(activeUser.licenseKey);
        setStep(3); // Success
      }, 1400);
    } catch (err) {
      setStep(1);
      setError(err.message || 'Activation failed. Please try again.');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#0A0D15] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
          aria-label="Close Checkout"
        >
          <X className="w-4 h-4" />
        </button>

        {/* STEP 1: Form Input */}
        {step === 1 && (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-mono mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>256-BIT ENCRYPTED CLIENT PROVISIONING</span>
              </div>
              <h3 className="text-2xl font-bold font-['Outfit'] text-white">
                Authorize MBQ License Access
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-1">
                Selected Plan: <span className="text-white font-bold">{planName}</span> ({selectedPrice})
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  Email Address (For Key Backup & Account) *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-500" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="trader@example.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#07090F] border border-slate-800 text-xs text-white focus:outline-none focus:border-slate-600 transition-colors font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  TradingView Username (For Automated Invite) *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-500" />
                  <input
                    type="text"
                    required
                    value={tvUsername}
                    onChange={(e) => setTvUsername(e.target.value)}
                    placeholder="e.g. tradingview_handle"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#07090F] border border-slate-800 text-xs text-white focus:outline-none focus:border-slate-600 transition-colors font-mono"
                  />
                </div>
                <span className="text-[10px] text-slate-500 font-mono mt-1 block">
                  Private indicator invite will be granted to this exact handle.
                </span>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  Set Account Password *
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-500" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a portal password"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#07090F] border border-slate-800 text-xs text-white focus:outline-none focus:border-slate-600 transition-colors font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-2">
                  Payment Gateway Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border text-xs font-mono font-medium flex flex-col items-center gap-1.5 transition-all ${
                      paymentMethod === 'card'
                        ? 'bg-slate-800 border-white text-white font-bold'
                        : 'bg-[#07090F] border-slate-800 text-slate-400 hover:text-slate-200'
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
                        ? 'bg-slate-800 border-white text-white font-bold'
                        : 'bg-[#07090F] border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Crypto USDT</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('local')}
                    className={`p-3 rounded-xl border text-xs font-mono font-medium flex flex-col items-center gap-1.5 transition-all ${
                      paymentMethod === 'local'
                        ? 'bg-slate-800 border-white text-white font-bold'
                        : 'bg-[#07090F] border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Bank Transfer</span>
                  </button>
                </div>
              </div>

              {/* Order Total Box */}
              <div className="p-4 rounded-xl bg-[#07090F] border border-slate-800 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-slate-400 block">Subscription Tier:</span>
                  <span className="text-white font-bold">{planName}</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-400 block">Total Due:</span>
                  <span className="text-base font-bold text-white">{selectedPrice}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-mono">
                ⚡ <strong>Instant Access Mode:</strong> Payment gateway integration is currently in beta pipeline mode. Your account and Pine Script v5 license will be immediately active upon submission.
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-white hover:bg-slate-200 text-black font-bold text-xs font-mono transition-all flex items-center justify-center gap-2 shadow"
              >
                <span>Authorize & Activate License</span>
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
            <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto text-white animate-spin">
              <RefreshCw className="w-8 h-8" />
            </div>

            <div className="space-y-2 font-mono">
              <h4 className="text-lg font-bold text-white">
                Synchronizing With TradingView...
              </h4>
              <p className="text-xs text-slate-400">
                Granting invite-only access to <span className="text-white font-bold">@{tvUsername}</span>
              </p>
              <p className="text-[11px] text-slate-500">
                Signing cryptographic license key & creating client account...
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
                Access Granted & Synchronized!
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-1">
                Your TradingView account has been authorized for MBQ Algo X v5.
              </p>
            </div>

            {/* Generated License Key Card */}
            <div className="p-4 rounded-xl bg-[#07090F] border border-slate-800 space-y-2">
              <div className="flex justify-between text-[11px] font-mono">
                <span className="text-slate-400">Your Signed License Key:</span>
                <span className="text-emerald-400 font-bold">ACTIVE & READY</span>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0D121D] border border-slate-800">
                <span className="flex-1 font-mono text-xs text-white font-bold select-all">
                  {generatedKey}
                </span>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-mono text-white flex items-center gap-1 transition-colors"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Next Steps Checklist */}
            <div className="space-y-2.5 font-mono text-xs text-slate-300 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>TradingView invite linked to <strong className="text-white">@{tvUsername}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Pine Script v5 cryptographic signature verified</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Client dashboard session active</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  onClose();
                  if (onOpenDashboard) onOpenDashboard();
                }}
                className="flex-1 py-3 rounded-xl bg-white hover:bg-slate-200 text-black font-bold text-xs font-mono transition-colors flex items-center justify-center gap-2 shadow"
              >
                <span>Launch Client Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onClose}
                className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-mono text-xs transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
