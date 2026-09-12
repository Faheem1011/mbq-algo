import React from 'react';
import { X, CheckCircle2, ShieldCheck, Sparkles, Terminal, Bell, Lock } from 'lucide-react';

export default function SetupGuideModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#0B0F1A] border border-brand-border p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#121829] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Complete TradingView Walkthrough
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            TradingView Invite-Only Setup Guide
          </h3>
          <p className="text-sm text-slate-300 mt-1">
            Follow these 4 simple steps to activate and configure MBQ ALGO on any TradingView chart.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6 text-sm text-slate-300">
          
          {/* Step 1 */}
          <div className="p-4 rounded-xl bg-[#070913] border border-slate-800">
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-7 h-7 rounded-full bg-cyan-500 text-black font-extrabold flex items-center justify-center text-xs">
                1
              </span>
              <h4 className="font-bold text-white text-base">
                Provide Your TradingView Username
              </h4>
            </div>
            <p className="text-xs text-slate-400 ml-10">
              When ordering on MBQ ALGO, input your exact TradingView username (without spaces). Our automated licensing server instantly authorizes your account to access our invite-only indicator library.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-4 rounded-xl bg-[#070913] border border-slate-800">
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-7 h-7 rounded-full bg-cyan-500 text-black font-extrabold flex items-center justify-center text-xs">
                2
              </span>
              <h4 className="font-bold text-white text-base">
                Open Any Chart & Access 'Invite-Only Scripts'
              </h4>
            </div>
            <div className="text-xs text-slate-400 ml-10 space-y-2">
              <p>• Go to <strong>TradingView.com</strong> and open any asset chart (e.g. Gold, Bitcoin, EUR/USD).</p>
              <p>• Click the <strong>"Indicators" (Fx)</strong> icon in the top toolbar.</p>
              <p>• In the left sidebar of the popup, click on <strong>"Invite-Only Scripts"</strong> (with the lock icon).</p>
              <p>• You will see <strong>"MBQ ALGO X Pro v5"</strong>. Click it once to attach it to your chart.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-4 rounded-xl bg-[#070913] border border-slate-800">
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-7 h-7 rounded-full bg-cyan-500 text-black font-extrabold flex items-center justify-center text-xs">
                3
              </span>
              <h4 className="font-bold text-white text-base">
                Paste Your Signed License Key
              </h4>
            </div>
            <div className="text-xs text-slate-400 ml-10 space-y-2">
              <p>• In your chart, hover over "MBQ ALGO X Pro" in the top left and click the <strong>Settings (Gear)</strong> icon.</p>
              <p>• Under the <strong>"Inputs"</strong> tab, find the <strong>"MBQ License Key"</strong> field.</p>
              <p>• Paste your key generated from your client dashboard (e.g. <code className="bg-[#121829] px-1.5 py-0.5 rounded text-cyan-300 font-mono">MBQ-PRO-XXXX-XXXX</code>).</p>
              <p>• This unlocks the Multi-Timeframe Trend Matrix HUD, Dynamic TP/SL, and VIP settings.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-4 rounded-xl bg-[#070913] border border-slate-800">
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-7 h-7 rounded-full bg-cyan-500 text-black font-extrabold flex items-center justify-center text-xs">
                4
              </span>
              <h4 className="font-bold text-white text-base">
                Configure Mobile Push & Webhook Alerts
              </h4>
            </div>
            <div className="text-xs text-slate-400 ml-10 space-y-2">
              <p>• Click the <strong>Alert (Alarm Clock)</strong> icon in TradingView.</p>
              <p>• In the <strong>Condition</strong> dropdown, select <strong>"MBQ ALGO X Pro"</strong>.</p>
              <p>• Select <strong>"Any Buy / Sell Alert Function Call"</strong>.</p>
              <p>• Check <strong>"Notify on App"</strong> and <strong>"Send email"</strong> to receive ping alerts on your phone the second a signal confirms!</p>
            </div>
          </div>

        </div>

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1 text-emerald-400">
            <ShieldCheck className="w-4 h-4" /> Works on TradingView Free, Essential, Plus, and Premium accounts!
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-cyan-400 text-black font-bold text-xs hover:bg-cyan-300 transition-all"
          >
            Got It, Close Guide
          </button>
        </div>

      </div>
    </div>
  );
}
