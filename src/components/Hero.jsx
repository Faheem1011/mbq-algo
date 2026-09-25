import React, { useRef, useState } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  CheckCircle2,
  Activity,
  ArrowUpRight
} from 'lucide-react';

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
    if (videoRef.current && videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="live-demo" className="relative min-h-[100dvh] pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#07090E] bg-minimal-grid ambient-vignette flex flex-col justify-center">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Eyebrow badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-sm backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-semibold tracking-wide text-slate-200 uppercase">
              MBQ Algo X Pro V5.0
            </span>
            <span className="text-xs text-slate-600 font-mono">|</span>
            <span className="text-xs font-mono text-slate-400">
              Strict Non-Repainting Engine
            </span>
          </div>
        </div>

        {/* Main Headline - High-End Minimalist Monochromatic */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-['Outfit'] font-black tracking-tight text-white leading-[1.08]">
            Precision Trading Intelligence <br className="hidden sm:inline" />
            <span className="text-slate-400">For TradingView.</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Strict non-repainting buy and sell signals, automated 3-tier dynamic take profit levels, and self-serve client licensing. Engineered for traders who require mathematical precision over hype.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
          <button
            onClick={() => onOpenCheckout('Pro')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-black bg-white hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/5 active:scale-[0.98]"
          >
            <span>Get Instant Access</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#chart-simulator"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-850 border border-slate-800 transition-all flex items-center justify-center gap-2"
          >
            <Activity className="w-4 h-4 text-emerald-400" />
            <span>Open Live Terminal</span>
          </a>

          <button
            onClick={onOpenDashboard}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-400 hover:text-white bg-slate-900/40 hover:bg-slate-850 border border-slate-800 transition-all flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-slate-400" />
            <span>Client Portal</span>
          </button>
        </div>

        {/* Trust Stats Bar */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs font-mono text-slate-400 mb-14">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>100% Non-Repainting Bar Close</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Instant TradingView Script Access</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Dynamic ATR-Weighted Risk Levels</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>7-Day Money-Back Guarantee</span>
          </div>
        </div>

        {/* FEATURED VIDEO / SCREENSHOT SHOWCASE CONTAINER */}
        <div className="max-w-5xl mx-auto relative">
          
          <div className="relative rounded-2xl bg-[#0B0F17] border border-slate-800/90 overflow-hidden shadow-2xl">
            
            {/* Top Device Window Bar */}
            <div className="bg-[#0E131F] border-b border-slate-800/80 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block"></span>
                <span className="ml-3 font-mono text-xs text-slate-400 flex items-center gap-2">
                  <span className="text-white font-bold">SCRIPT OVERVIEW:</span> MBQ_ALGO_V5_PRO.PINE // 15M CONFLUENCE
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  LOCKED BARSTATE
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

              {/* Floating Signal HUD Overlay */}
              <div className="absolute top-4 left-4 p-3 rounded-xl bg-slate-950/90 border border-slate-800 backdrop-blur-md shadow-xl pointer-events-none hidden sm:block font-mono">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-1.5 py-0.5 text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded">
                    MBQ BUY ▲
                  </span>
                  <span className="text-[11px] text-slate-300">CONFIRMED SIGNAL</span>
                </div>
                <div className="space-y-0.5 text-[10px] text-slate-400">
                  <div>ENTRY: <span className="text-white font-semibold">$64,280.00</span></div>
                  <div>TP1 (1.5x): <span className="text-emerald-400 font-semibold">$65,120.00 [HIT]</span></div>
                  <div>TP2 (2.8x): <span className="text-emerald-400 font-semibold">$66,480.00 [HIT]</span></div>
                  <div>STOP LOSS: <span className="text-rose-400 font-semibold">$63,600.00</span></div>
                </div>
              </div>

              {/* Multi-Timeframe HUD Overlay */}
              <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-slate-950/90 border border-slate-800 backdrop-blur-md shadow-xl pointer-events-none hidden md:block font-mono">
                <div className="text-[9px] text-slate-400 mb-1">MTF TREND MATRIX</div>
                <div className="grid grid-cols-5 gap-1 text-[9px] font-bold text-center">
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
                  <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl hover:scale-105 transition-transform">
                    <Play className="w-7 h-7 ml-1 fill-black" />
                  </div>
                </div>
              )}

              {/* Bottom Video Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <div className="w-full h-1 bg-white/20 rounded-full mb-3 overflow-hidden cursor-pointer">
                  <div 
                    className="h-full bg-white transition-all duration-100"
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
                      {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-white" />}
                    </button>

                    <span className="font-mono text-[11px] text-slate-400">
                      MBQ ALGO X DEMO // 4K 60FPS
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
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
            <div className="bg-[#0E131F] px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800/80 text-center font-mono">
              <div>
                <div className="text-xl font-bold text-white">78.4%</div>
                <div className="text-[11px] text-slate-400 font-sans mt-0.5">Verified Win Rate</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">1:2.85</div>
                <div className="text-[11px] text-slate-400 font-sans mt-0.5">Average Risk-to-Reward</div>
              </div>
              <div>
                <div className="text-xl font-bold text-emerald-400">0.0%</div>
                <div className="text-[11px] text-slate-400 font-sans mt-0.5">Repaint Guaranteed</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">&lt; 30s</div>
                <div className="text-[11px] text-slate-400 font-sans mt-0.5">Automated Script Access</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
