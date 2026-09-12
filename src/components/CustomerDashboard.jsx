import React, { useState } from 'react';
import { 
  X, 
  Key, 
  Copy, 
  Check, 
  User, 
  ShieldCheck, 
  RefreshCw, 
  FileText, 
  BookOpen, 
  ExternalLink,
  CreditCard,
  MessageSquare
} from 'lucide-react';

export default function CustomerDashboard({ isOpen, onClose, userOrder, onOpenGuide }) {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);
  const [tvUsername, setTvUsername] = useState(userOrder?.tvUsername || 'alitrader_pk');
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncSuccess, setSyncSuccess] = useState(false);

  const licenseKey = userOrder?.licenseKey || 'MBQ-PRO-89F2-K9A1-V5';
  const planName = userOrder?.planName || 'Pro Quarterly (Most Popular)';
  const status = userOrder?.status || 'Active (Invite-Only Verified)';

  const handleCopy = () => {
    navigator.clipboard.writeText(licenseKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSyncTv = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setSyncSuccess(true);
      setTimeout(() => setSyncSuccess(false), 3000);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#0B0F1A] border border-brand-border p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#121829] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dashboard Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center">
            <img 
              src="/mbq_algo_icon_transparent.png" 
              alt="MBQ" 
              className="w-8 h-8 object-contain"
            />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              MBQ ALGO Client Portal
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              Account ID: USR-{Math.floor(10000 + Math.random() * 90000)} • System v5.2
            </span>
          </div>
        </div>

        {/* Plan Status Banner */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-[#121829] to-purple-950/40 border border-cyan-500/30 flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block">
              Active Subscription
            </span>
            <span className="text-lg font-bold text-white">{planName}</span>
          </div>
          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
            <ShieldCheck className="w-4 h-4" />
            <span>{status}</span>
          </div>
        </div>

        {/* License & TV Username Management */}
        <div className="space-y-4 mb-6">
          
          {/* License Key Box */}
          <div className="p-4 rounded-xl bg-[#070913] border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Key className="w-3.5 h-3.5 text-cyan-400" /> Signed Pine Script License Key
              </span>
              <span className="text-[10px] text-emerald-400 font-mono">HMAC-SHA256 Encrypted</span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-sm sm:text-base font-bold text-cyan-300 select-all truncate">
                {licenseKey}
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#121829] border border-slate-700 hover:border-cyan-400 text-xs text-slate-200 hover:text-white transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* TradingView Username Sync */}
          <div className="p-4 rounded-xl bg-[#070913] border border-slate-800">
            <span className="text-xs font-mono text-slate-400 block mb-2">
              TradingView Access Management
            </span>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 text-xs font-mono">
                  @
                </div>
                <input
                  type="text"
                  value={tvUsername}
                  onChange={(e) => setTvUsername(e.target.value)}
                  placeholder="TradingView username"
                  className="w-full pl-7 pr-3 py-2 rounded-lg bg-[#121829] border border-slate-700 text-white text-sm font-mono focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <button
                onClick={handleSyncTv}
                disabled={isSyncing}
                className="px-4 py-2 rounded-lg bg-cyan-500/20 border border-cyan-500/40 hover:bg-cyan-500/30 text-cyan-300 text-xs font-bold transition-all flex items-center justify-center space-x-1.5"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
                <span>{isSyncing ? 'Syncing...' : 'Re-Sync TV Access'}</span>
              </button>
            </div>
            {syncSuccess && (
              <span className="text-[11px] text-emerald-400 block mt-2 font-mono">
                ✓ TradingView invite permission synced successfully!
              </span>
            )}
          </div>

        </div>

        {/* Quick Actions & Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <button
            onClick={() => { onClose(); onOpenGuide(); }}
            className="p-3.5 rounded-xl bg-[#121829] border border-slate-800 hover:border-slate-700 flex items-center space-x-2 text-xs text-slate-300 hover:text-white transition-all text-left"
          >
            <BookOpen className="w-4 h-4 text-purple-400 flex-shrink-0" />
            <div>
              <span className="font-bold block">Setup Guide</span>
              <span className="text-[10px] text-slate-500">Video & manual</span>
            </div>
          </button>

          <a
            href="https://discord.gg"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl bg-[#121829] border border-slate-800 hover:border-slate-700 flex items-center space-x-2 text-xs text-slate-300 hover:text-white transition-all text-left"
          >
            <MessageSquare className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <div>
              <span className="font-bold block">VIP Discord</span>
              <span className="text-[10px] text-slate-500">Alpha community</span>
            </div>
          </a>

          <div className="p-3.5 rounded-xl bg-[#121829] border border-slate-800 flex items-center space-x-2 text-xs text-slate-300 text-left">
            <CreditCard className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <div>
              <span className="font-bold block">Billing Status</span>
              <span className="text-[10px] text-slate-500">Meezan Gateway</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Need help? WhatsApp: +92 300 MBQALGO</span>
          <button onClick={onClose} className="hover:text-white">Close Portal</button>
        </div>

      </div>
    </div>
  );
}
