import React, { useState } from 'react';
import { ShieldCheck, Copy, Check, ExternalLink, RefreshCw, Key, User, Bell, HardDrive, Download, MessageSquare, AlertCircle, X } from 'lucide-react';

export default function CustomerDashboard({ isModal = false, onClose }) {
  const [copied, setCopied] = useState(false);
  const [tvUsername, setTvUsername] = useState('faheem_trader');
  const [syncStatus, setSyncStatus] = useState('synced'); // 'synced', 'syncing'
  const [licenseKey] = useState('MBQ-8492-7104-9921-PRO');

  const handleCopyKey = () => {
    navigator.clipboard.writeText(licenseKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSyncTV = () => {
    setSyncStatus('syncing');
    setTimeout(() => {
      setSyncStatus('synced');
    }, 1200);
  };

  const content = (
    <div className="space-y-6">
      
      {/* Top Welcome Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#0D1426] to-[#0A0E1A] border border-cyan-500/20">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 p-[1px]">
            <div className="w-full h-full bg-[#080C16] rounded-xl flex items-center justify-center font-['Outfit'] font-black text-cyan-400 text-lg">
              FT
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold font-['Outfit'] text-white">
                Welcome, Faheem
              </h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                PRO ACTIVE
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              Account ID: usr_mbq_90248 • Member since 2026
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-slate-400">
            Next Renewal: <strong className="text-white">June 20, 2026</strong>
          </span>
          <button className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-300 border border-white/10 transition-colors flex items-center gap-1.5">
            <span>Stripe Billing Portal</span>
            <ExternalLink className="w-3 h-3 text-cyan-400" />
          </button>
        </div>
      </div>

      {/* Grid: License Key + TradingView Username Sync */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1: Signed License Key (Pine Script Soft Gate) */}
        <div className="glass-panel p-6 rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                <Key className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold font-['Outfit'] text-white">
                MBQ License Key
              </h4>
            </div>
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
              PINE SCRIPT INPUT
            </span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Paste this signed key into your indicator settings in TradingView under <span className="text-slate-300 font-mono">"MBQ License Key"</span> to unlock MTF HUD and sensitivity levels.
          </p>

          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#060912] border border-white/10 font-mono text-xs">
            <span className="flex-1 text-cyan-300 font-bold tracking-wider select-all">
              {licenseKey}
            </span>
            <button
              onClick={handleCopyKey}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              title="Copy License Key"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
              <span className="text-[11px] font-sans">{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Card 2: TradingView Username Binding (Layer 1 Hard Gate) */}
        <div className="glass-panel p-6 rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                <User className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold font-['Outfit'] text-white">
                TradingView Script Access
              </h4>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              INVITE GRANTED
            </span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Your TradingView username is linked to our automated entitlement engine. If you change your handle, update it below to re-grant access.
          </p>

          <div className="flex items-center gap-2">
            <input
              type="text"
              value={tvUsername}
              onChange={(e) => setTvUsername(e.target.value)}
              className="flex-1 px-3 py-2 rounded-xl bg-[#060912] border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="Your TradingView Username"
            />
            <button
              onClick={handleSyncTV}
              disabled={syncStatus === 'syncing'}
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-colors flex items-center gap-1.5"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${syncStatus === 'syncing' ? 'animate-spin' : ''}`} />
              <span>{syncStatus === 'syncing' ? 'Syncing...' : 'Sync Access'}</span>
            </button>
          </div>
        </div>

      </div>

      {/* Grid: Plan Usage Quotas & Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Quota 1: Multi-Pair Limit */}
        <div className="glass-panel p-5 rounded-2xl space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400 font-medium flex items-center gap-1.5">
              <HardDrive className="w-3.5 h-3.5 text-cyan-400" />
              Active Pair Slots
            </span>
            <span className="font-mono font-bold text-white">3 / 5 Used</span>
          </div>
          <div className="w-full h-2 bg-[#060912] rounded-full overflow-hidden">
            <div className="w-3/5 h-full bg-cyan-400 rounded-full"></div>
          </div>
          <div className="text-[11px] font-mono text-slate-400">
            BTC/USDT, EUR/USD, NAS100
          </div>
        </div>

        {/* Quota 2: Signal Alerts this Month */}
        <div className="glass-panel p-5 rounded-2xl space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400 font-medium flex items-center gap-1.5">
              <Bell className="w-3.5 h-3.5 text-purple-400" />
              Webhook Alerts
            </span>
            <span className="font-mono font-bold text-white">1,248 Sent</span>
          </div>
          <div className="w-full h-2 bg-[#060912] rounded-full overflow-hidden">
            <div className="w-4/5 h-full bg-purple-500 rounded-full"></div>
          </div>
          <div className="text-[11px] font-mono text-slate-400">
            Push delay: &lt; 150ms average
          </div>
        </div>

        {/* VIP Discord & Setup Guide Links */}
        <div className="glass-panel p-5 rounded-2xl space-y-2.5">
          <div className="text-xs font-bold text-white font-['Outfit']">
            Member Downloads & Community
          </div>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-3 rounded-lg bg-[#5865F2]/20 hover:bg-[#5865F2]/30 text-[#8B96F8] font-semibold text-xs border border-[#5865F2]/30 transition-colors flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>VIP Discord Lounge</span>
            </span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <a
            href="/tradingview/TRADINGVIEW_SETUP_GUIDE.md"
            download
            className="w-full py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 font-medium text-xs border border-white/10 transition-colors flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>TradingView Setup Guide</span>
            </span>
            <span className="text-[10px] text-slate-500 font-mono">PDF/MD</span>
          </a>
        </div>

      </div>

    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
        <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#080C18] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold font-['Outfit'] text-white">
                  MBQ Algo X — Client Licensing Portal
                </h2>
                <p className="text-xs text-slate-400 font-mono">
                  Live account simulator preview (The SwiftAlgo-beating differentiator)
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-mono transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              <span>Close</span>
            </button>
          </div>

          {content}
        </div>
      </div>
    );
  }

  return (
    <section id="dashboard" className="py-20 md:py-28 relative bg-[#05070E] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>UNMATCHED SAAS CLIENT EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-['Outfit'] font-black text-white tracking-tight">
            Your Trading Account. <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
              Not Just A Whop Checkout Link.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            SwiftAlgo gives you no dashboard and no visibility into your license. MBQ Algo X provides an automated customer portal where your TradingView invite is granted automatically and your settings are always under your control.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {content}
        </div>

      </div>
    </section>
  );
}
