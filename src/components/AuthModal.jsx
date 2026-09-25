import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Key, 
  User, 
  Lock, 
  Mail, 
  ArrowRight, 
  Sparkles, 
  RefreshCw,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function AuthModal({ isOpen, onClose, initialTab = 'login', onAuthenticated }) {
  const { login, signup, loginDemoTrader } = useAuth();
  const [activeTab, setActiveTab] = useState(initialTab); // 'login' | 'signup'
  
  // Login form state
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  // Signup form state
  const [tvUsername, setTvUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('Pro Quarterly');

  // Status state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');
    setLoading(true);

    try {
      await login({ identifier: loginIdentifier, password: loginPassword });
      setSuccessMsg('Signed in successfully!');
      setTimeout(() => {
        setLoading(false);
        if (onAuthenticated) onAuthenticated();
        onClose();
      }, 500);
    } catch (err) {
      setLoading(false);
      setError(err.message || 'Login failed.');
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');
    setLoading(true);

    try {
      await signup({
        tvUsername,
        email,
        password,
        plan: selectedPlan,
      });
      setSuccessMsg('Account created & Pine Script license provisioned!');
      setTimeout(() => {
        setLoading(false);
        if (onAuthenticated) onAuthenticated();
        onClose();
      }, 600);
    } catch (err) {
      setLoading(false);
      setError(err.message || 'Signup failed.');
    }
  };

  const handleDemoTestDrive = () => {
    setLoading(true);
    setTimeout(() => {
      loginDemoTrader();
      setLoading(false);
      if (onAuthenticated) onAuthenticated();
      onClose();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#0A0D15] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto mb-3 text-slate-200">
            <Key className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold font-['Outfit'] text-white">
            Client Licensing Portal
          </h3>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Access your signed Pine Script license key & TradingView invite
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex p-1 bg-slate-900/90 border border-slate-800 rounded-xl mb-6 font-mono text-xs">
          <button
            type="button"
            onClick={() => { setActiveTab('login'); setError(''); }}
            className={`flex-1 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'login'
                ? 'bg-white text-black shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Member Sign In
          </button>
          <button
            type="button"
            onClick={() => { setActiveTab('signup'); setError(''); }}
            className={`flex-1 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'signup'
                ? 'bg-white text-black shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Activate License
          </button>
        </div>

        {/* Feedback Alerts */}
        {error && (
          <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}
        {successMsg && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* TAB 1: Member Sign In Form */}
        {activeTab === 'login' && (
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">
                TradingView Username or Email
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-500" />
                <input
                  type="text"
                  required
                  value={loginIdentifier}
                  onChange={(e) => setLoginIdentifier(e.target.value)}
                  placeholder="e.g. john_trader or email"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#07090F] border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-slate-600 font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-500" />
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Your account password"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#07090F] border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-slate-600 font-mono"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-white hover:bg-slate-200 text-black font-bold text-xs font-mono transition-colors flex items-center justify-center gap-2 shadow"
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <span>Sign In to Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        {/* TAB 2: Activate New License / Sign Up */}
        {activeTab === 'signup' && (
          <form onSubmit={handleSignupSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">
                TradingView Handle (For Script Invite) *
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-3 text-slate-500" />
                <input
                  type="text"
                  required
                  value={tvUsername}
                  onChange={(e) => setTvUsername(e.target.value)}
                  placeholder="e.g. tradingview_handle"
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#07090F] border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-slate-600 font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">
                Email Address (For Invoices & Key Backup) *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-3 text-slate-500" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="trader@domain.com"
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#07090F] border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-slate-600 font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">
                Account Password *
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-3 text-slate-500" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Set account password"
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#07090F] border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-slate-600 font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">
                Select License Plan
              </label>
              <select
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#07090F] border border-slate-800 text-xs text-white font-mono focus:outline-none"
              >
                <option value="Pro Quarterly">Pro Quarterly ($127 / Qtr) — Recommended</option>
                <option value="Starter">Starter Monthly ($47 / Mo)</option>
                <option value="Elite Annual">Elite Annual ($349 / Yr)</option>
                <option value="Lifetime Access">Lifetime VIP Access ($699 One-Time)</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-white hover:bg-slate-200 text-black font-bold text-xs font-mono transition-colors flex items-center justify-center gap-2 shadow mt-2"
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <span>Create Account & Provision License</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        {/* Instant Test Drive Portal (For Evaluation) */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 text-center">
          <p className="text-[11px] text-slate-500 font-mono mb-2">
            Evaluating MBQ Algo X client infrastructure?
          </p>
          <button
            type="button"
            onClick={handleDemoTestDrive}
            className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono transition-colors flex items-center justify-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Test-Drive Client Portal (Live Trial Session)</span>
          </button>
        </div>

      </div>
    </div>
  );
}
