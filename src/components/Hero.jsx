import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, ArrowRight, ShieldCheck, Zap, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenCheckout, onOpenDashboard }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration || 1;
      setProgress((current / total) * 100);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section id="live-demo" className="relative min-h-[100dvh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-ambient-grid flex flex-col justify-center">
      
      {/* Background radial glow blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl animate-pulse-glow"></div>
        <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 shadow-lg shadow-cyan-500/10 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-mono font-semibold tracking-wide text-cyan-300 uppercase">
              MBQ Algo X Pro V5.0 — Now Deployed
            </span>
            <span className="hidden sm:inline text-xs text-slate-500 font-mono">|</span>
            <span className="hidden sm:inline text-xs font-mono text-slate-400">
              Strict Non-Repainting
            </span>
          </div>
        </div>

        {/* Main H1 Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-['Outfit'] font-black tracking-tight text-white leading-[1.08]">
            The Trading Indicator That Tells You <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
              What Others Won't.
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Strict non-repainting buy & sell entries, automated 3-tier dynamic TP/SL levels, and a real SaaS client portal to manage your TradingView license. Engineered for traders who are done guessing.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() => onOpenCheckout('Pro')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 group"
          >
            <span>Get Instant Access</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#chart-simulator"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-cyan-500/40 backdrop-blur-md transition-all flex items-center justify-center gap-2.5 group"
          >
            <Zap className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span>Try Live Simulator</span>
          </a>

          <button
            onClick={onOpenDashboard}
            className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 transition-all flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            <span>Open Client Dashboard</span>
          </button>
        </div>

        {/* Micro Trust Stats */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs font-medium text-slate-400 mb-14">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>100% Non-Repainting Verified</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>Automated TradingView Access</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-purple-400" />
            <span>Trusted by 14,280+ Active Traders</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>7-Day Money-Back Guarantee</span>
          </div>
        </div>

        {/* FEATURED HERO VIDEO CARD (Custom High-Tech Container) */}
        <div className="max-w-5xl mx-auto relative group">
          
          {/* Outer glow gradient border */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-teal-500/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>

          <div className="relative rounded-2xl bg-[#090D18] border border-white/15 overflow-hidden shadow-2xl">
            
            {/* Top Device Window Bar */}
            <div className="bg-[#0D1322] border-b border-white/10 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="ml-3 font-mono text-xs text-slate-400 flex items-center gap-2">
                  <span className="text-cyan-400">LIVE FEED:</span> MBQ_ALGO_V5_PRO.PINE // BTCUSDT.P 15M
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono bg-red-500/10 text-red-400 border border-red-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                  REC
                </span>
                <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400">
                  CONFIRMED CANDLES
                </span>
              </div>
            </div>

            {/* Video Canvas Container */}
            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              <video
                ref={videoRef}
                src="/mbq_algo_demo.mp4"
                poster="/algo_script_overview.png"
                className="w-full h-full object-cover cursor-pointer"
                autoPlay
                muted
                loop
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onClick={togglePlay}
              />

              {/* Floating Signal HUD Overlay (Top-Left) */}
              <div className="absolute top-4 left-4 p-3 rounded-xl bg-[#05070E]/85 border border-cyan-500/30 backdrop-blur-md shadow-lg pointer-events-none hidden sm:block">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded">
                    MBQ BUY ▲
                  </span>
                  <span className="text-[11px] font-mono text-slate-300">CONFIRMED ENTRY</span>
                </div>
                <div className="space-y-0.5 text-[10px] font-mono text-slate-400">
                  <div>ENTRY: <span className="text-cyan-300 font-semibold">$64,280.00</span></div>
                  <div>TP1 (1.5x): <span className="text-emerald-400 font-semibold">$65,120.00 [HIT]</span></div>
                  <div>TP2 (2.8x): <span className="text-emerald-400 font-semibold">$66,480.00 [HIT]</span></div>
                  <div>STOP LOSS: <span className="text-rose-400 font-semibold">$63,600.00</span></div>
                </div>
              </div>

              {/* Floating Multi-Timeframe Matrix (Top-Right) */}
              <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-[#05070E]/85 border border-white/10 backdrop-blur-md shadow-lg pointer-events-none hidden md:block">
                <div className="text-[9px] font-mono text-slate-400 mb-1">MTF TREND HUD</div>
                <div className="grid grid-cols-5 gap-1 text-[9px] font-mono font-bold text-center">
                  <div className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">5M ▲</div>
                  <div className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">15M ▲</div>
                  <div className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">1H ▲</div>
                  <div className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">4H ▲</div>
                  <div className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">1D —</div>
                </div>
              </div>

              {/* Big Play Button Overlay when Paused */}
              {!isPlaying && (
                <div 
                  onClick={togglePlay}
                  className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center cursor-pointer transition-opacity"
                >
                  <div className="w-20 h-20 rounded-full bg-cyan-500/90 text-black flex items-center justify-center shadow-2xl shadow-cyan-500/50 hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 ml-1 fill-black" />
                  </div>
                </div>
              )}

              {/* Bottom Video Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                
                {/* Scrubbing Bar */}
                <div className="w-full h-1.5 bg-white/20 rounded-full mb-3 overflow-hidden cursor-pointer">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>

                <div className="flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={togglePlay}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      aria-label={isPlaying ? "Pause Video" : "Play Video"}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                    </button>

                    <button 
                      onClick={toggleMute}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      aria-label={isMuted ? "Unmute Video" : "Mute Video"}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
                    </button>

                    <span className="font-mono text-[11px] text-slate-300">
                      MBQ ALGO X DEMO // 4K 60FPS
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="hidden sm:inline font-mono text-[11px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
                      AUDIO ON HOVER
                    </span>
                    <button 
                      onClick={handleFullscreen}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      aria-label="Fullscreen Video"
                    >
                      <Maximize className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Proof Metrics Bar */}
            <div className="bg-[#0A0E1A] px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 text-center">
              <div>
                <div className="text-xl font-['Outfit'] font-extrabold text-cyan-400">78.4%</div>
                <div className="text-[11px] text-slate-400 font-medium">Verified Win Rate</div>
              </div>
              <div>
                <div className="text-xl font-['Outfit'] font-extrabold text-white">1:2.85</div>
                <div className="text-[11px] text-slate-400 font-medium">Average Risk-to-Reward</div>
              </div>
              <div>
                <div className="text-xl font-['Outfit'] font-extrabold text-purple-400">0.0%</div>
                <div className="text-[11px] text-slate-400 font-medium">Repaint Guaranteed</div>
              </div>
              <div>
                <div className="text-xl font-['Outfit'] font-extrabold text-emerald-400">&lt; 30s</div>
                <div className="text-[11px] text-slate-400 font-medium">Automated Script Access</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
