import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Copy, 
  Check, 
  ExternalLink, 
  RefreshCw, 
  Key, 
  User, 
  Bell, 
  Download, 
  X, 
  LogOut, 
  ArrowRight, 
  Radio, 
  Sliders,
  Sparkles,
  HelpCircle,
  MessageSquare,
  Lock,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function CustomerDashboard({ 
  isModal = false, 
  onClose, 
  onOpenCheckout,
  onOpenAuth 
}) {
  const { user, isAuthenticated, logout, updateTvUsername, loginDemoTrader } = useAuth();

  // Active dashboard state
  const [copiedKey, setCopiedKey] = useState(false);
  const [copiedWebhook, setCopiedWebhook] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncSuccess, setSyncSuccess] = useState(false);
  const [editTvMode, setEditTvMode] = useState(false);
  const [tvInput, setTvInput] = useState('');

  // Handle Copy License Key
  const handleCopyKey = () => {
    if (!user?.licenseKey) return;
    navigator.clipboard.writeText(user.licenseKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  // Handle Copy Webhook Payload
  const handleCopyWebhook = () => {
    const payload = JSON.stringify({
      ticker: "{{ticker}}",
      action: "{{strategy.order.action}}",
      price: "{{close}}",
      license: user?.licenseKey || "MBQ-LICENSE-KEY",
      time: "{{time}}"
    }, null, 2);
    navigator.clipboard.writeText(payload);
    setCopiedWebhook(true);
    setTimeout(() => setCopiedWebhook(false), 2000);
  };

  // Handle Syncing TradingView Username
  const handleStartEditTv = () => {
    setTvInput(user?.tvUsername || '');
    setEditTvMode(true);
  };

  const handleSaveTvSync = async () => {
    if (!tvInput.trim()) return;
    setIsSyncing(true);
    setSyncSuccess(false);

    try {
      await updateTvUsername(tvInput.trim());
      setTimeout(() => {
        setIsSyncing(false);
        setEditTvMode(false);
        setSyncSuccess(true);
        setTimeout(() => setSyncSuccess(false), 3000);
      }, 700);
    } catch (err) {
      setIsSyncing(false);
    }
  };

  // ----------------------------------------------------------------------
  // VIEW A: LOGGED IN MEMBER DASHBOARD (MATCHING THE SCREENSHOT EXACTLY)
  // ----------------------------------------------------------------------
  const renderAuthenticatedDashboard = () => {
    const userInitials = (user.tvUsername || 'MB').substring(0, 2).toUpperCase();

    return (
      <div className="space-y-6 animate-in fade-in duration-200">
        
        {/* Top Header Card (Welcome Bar) */}
        <div className="p-6 rounded-2xl bg-[#0D121D] border border-slate-800 shadow-xl flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center font-mono font-black text-white text-lg shadow-inner">
              {userInitials}
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-white">
                  Welcome, {user.tvUsername}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  {user.plan || 'PRO'} ACTIVE
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-1">
                Account ID: <span className="text-slate-200">{user.id}</span> • Member since {user.memberSince || '2026'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="text-right hidden sm:block">
              <span className="text-slate-500 block text-[10px] uppercase">Next Renewal</span>
              <span className="text-white font-semibold">{user.nextRenewal || 'Nov 24, 2026'}</span>
            </div>

            <button
              onClick={logout}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* 2-Column Core License & TradingView Access Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: MBQ License Key */}
          <div className="p-6 rounded-2xl bg-[#0D121D] border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-slate-800 text-slate-300">
                  <Key className="w-4 h-4 text-cyan-400" />
                </div>
                <h4 className="text-base font-bold font-['Outfit'] text-white">
                  MBQ License Key
                </h4>
              </div>
              <span className="text-[10px] font-mono text-slate-300 bg-slate-800 px-2 py-0.5 rounded border border-slate-700 uppercase">
                Pine Script Input
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Paste this signed key into your indicator settings in TradingView under <strong className="text-slate-200 font-mono">"MBQ License Key"</strong> to unlock MTF HUD and sensitivity levels.
            </p>

            <div className="flex items-center gap-2 p-3 rounded-xl bg-[#07090F] border border-slate-800 font-mono text-xs">
              <span className="flex-1 text-white font-bold tracking-wider select-all">
                {user.licenseKey}
              </span>
              <button
                onClick={handleCopyKey}
                className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-xs"
              >
                {copiedKey ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Card 2: TradingView Script Access */}
          <div className="p-6 rounded-2xl bg-[#0D121D] border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-slate-800 text-slate-300">
                  <User className="w-4 h-4 text-purple-400" />
                </div>
                <h4 className="text-base font-bold font-['Outfit'] text-white">
                  TradingView Script Access
                </h4>
              </div>
              <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Invite Granted
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Your TradingView username is linked to our automated entitlement engine. If you change your handle, update it below to re-grant access.
            </p>

            {editTvMode ? (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={tvInput}
                  onChange={(e) => setTvInput(e.target.value)}
                  placeholder="Enter TradingView username"
                  className="flex-1 bg-[#07090F] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-slate-500"
                />
                <button
                  onClick={handleSaveTvSync}
                  disabled={isSyncing}
                  className="px-4 py-2.5 rounded-xl bg-white text-black font-bold text-xs font-mono hover:bg-slate-200 transition-colors flex items-center gap-1.5"
                >
                  {isSyncing ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : 'Save & Sync'}
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#07090F] border border-slate-800 font-mono text-xs">
                <span className="text-white font-bold tracking-wide">
                  @{user.tvUsername}
                </span>
                <button
                  onClick={handleStartEditTv}
                  className="px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Sync Access</span>
                </button>
              </div>
            )}

            {syncSuccess && (
              <p className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                <span>TradingView username synchronized! Invite access refreshed.</span>
              </p>
            )}
          </div>

        </div>

        {/* 3-Column Bottom Status & Tools Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Active Pair Slots */}
          <div className="p-5 rounded-2xl bg-[#0D121D] border border-slate-800 shadow-xl space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Active Pair Slots</span>
              </span>
              <span className="font-bold text-white">
                {user.usedSlots || 2} / {user.allowedSlots || 5} Used
              </span>
            </div>

            <div className="w-full h-2 bg-[#07090F] rounded-full overflow-hidden">
              <div 
                className="h-full bg-cyan-400 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, ((user.usedSlots || 2) / (user.allowedSlots || 5)) * 100)}%` }}
              ></div>
            </div>

            <p className="text-[11px] font-mono text-slate-400">
              Active: {user.activePairs?.join(', ') || 'BTC/USDT, EUR/USD, NAS100'}
            </p>
          </div>

          {/* Webhook Alerts Dispatcher */}
          <div className="p-5 rounded-2xl bg-[#0D121D] border border-slate-800 shadow-xl space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Radio className="w-4 h-4 text-purple-400" />
                <span>Webhook Alerts</span>
              </span>
              <span className="font-bold text-white">
                {user.webhookCount || '1,248'} Sent
              </span>
            </div>

            <div className="w-full h-2 bg-[#07090F] rounded-full overflow-hidden">
              <div className="w-4/5 h-full bg-purple-500 rounded-full"></div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Push delay: &lt; 150ms average</span>
              <button 
                onClick={handleCopyWebhook}
                className="text-purple-400 hover:text-purple-300 underline"
              >
                {copiedWebhook ? 'Copied' : 'JSON Payload'}
              </button>
            </div>
          </div>

          {/* Member Downloads & Community */}
          <div className="p-5 rounded-2xl bg-[#0D121D] border border-slate-800 shadow-xl space-y-2.5">
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
  };

  // ----------------------------------------------------------------------
  // VIEW B: VISITOR / UNLOGGED-IN CLIENT PORTAL SHOWCASE (NO FAKE DATA)
  // ----------------------------------------------------------------------
  const renderVisitorShowcase = () => {
    return (
      <div className="space-y-8 animate-in fade-in duration-200">
        
        {/* Showcase Interactive Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0D121D] border border-slate-800 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-mono mb-2">
                <Lock className="w-3.5 h-3.5 text-cyan-400" />
                <span>AUTHENTICATED CLIENT INFRASTRUCTURE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-white">
                Member License & Automation Hub
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                Every customer account is bound to our automated entitlement engine. Sign in to your member portal to retrieve your signed Pine Script key, link your TradingView handle, or dispatch webhooks.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenAuth}
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-200 text-black font-bold text-xs font-mono transition-colors flex items-center gap-2 shadow"
              >
                <User className="w-4 h-4" />
                <span>Member Sign In</span>
              </button>

              <button
                onClick={() => onOpenCheckout ? onOpenCheckout('Pro') : onOpenAuth()}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs font-mono border border-slate-700 transition-colors flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Activate License</span>
              </button>
            </div>
          </div>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            
            <div className="p-4 rounded-xl bg-[#090C14] border border-slate-800/80 space-y-2">
              <div className="p-2 rounded-lg bg-slate-800 text-cyan-400 w-fit">
                <Key className="w-4 h-4" />
              </div>
              <h5 className="text-xs font-bold font-mono text-white">Cryptographic License</h5>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Unique signed Pine Script key unlocks multi-timeframe dashboard and custom sensitivity filters.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#090C14] border border-slate-800/80 space-y-2">
              <div className="p-2 rounded-lg bg-slate-800 text-purple-400 w-fit">
                <RefreshCw className="w-4 h-4" />
              </div>
              <h5 className="text-xs font-bold font-mono text-white">Automated TV Sync</h5>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Change or link your TradingView handle anytime. Invite-only access is re-synchronized in real-time.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#090C14] border border-slate-800/80 space-y-2">
              <div className="p-2 rounded-lg bg-slate-800 text-emerald-400 w-fit">
                <Radio className="w-4 h-4" />
              </div>
              <h5 className="text-xs font-bold font-mono text-white">Webhook Dispatcher</h5>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Pre-formatted alert payloads forward buy/sell triggers directly to Discord, Telegram, or custom bots.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#090C14] border border-slate-800/80 space-y-2">
              <div className="p-2 rounded-lg bg-slate-800 text-slate-300 w-fit">
                <Layers className="w-4 h-4" />
              </div>
              <h5 className="text-xs font-bold font-mono text-white">Multi-Device Slots</h5>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Manage simultaneous chart instances and allocated server slots across all your devices.
              </p>
            </div>

          </div>

          {/* Test Drive Button for Prospective Clients */}
          <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-slate-400">
              Want to inspect the live customer portal interface before subscribing?
            </span>
            <button
              onClick={() => loginDemoTrader()}
              className="px-4 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 text-xs font-mono transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Launch Live Portal Test-Drive</span>
            </button>
          </div>

        </div>

      </div>
    );
  };

  // ----------------------------------------------------------------------
  // MODAL WRAPPER
  // ----------------------------------------------------------------------
  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
        <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0A0D15] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
          
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-slate-800 text-white border border-slate-700">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold font-['Outfit'] text-white">
                  MBQ Algo X — Client License Portal
                </h2>
                <p className="text-xs text-slate-400 font-mono">
                  {isAuthenticated ? 'Manage personal TradingView entitlements & keys' : 'Subscriber licensing & automation infrastructure'}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-mono transition-colors"
            >
              <X className="w-4 h-4" />
              <span>Close</span>
            </button>
          </div>

          {isAuthenticated ? renderAuthenticatedDashboard() : renderVisitorShowcase()}

        </div>
      </div>
    );
  }

  // ----------------------------------------------------------------------
  // STANDALONE HOMEPAGE SECTION (#dashboard)
  // ----------------------------------------------------------------------
  return (
    <section id="dashboard" className="py-20 md:py-28 relative bg-[#07090E] border-t border-slate-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headline matching original copy */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-mono mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
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
          {isAuthenticated ? renderAuthenticatedDashboard() : renderVisitorShowcase()}
        </div>

      </div>
    </section>
  );
}
