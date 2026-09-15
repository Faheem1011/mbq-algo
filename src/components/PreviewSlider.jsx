import React, { useState, useRef } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

export default function PreviewSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1) { // dragging
      handleMove(e.clientX);
    }
  };

  return (
    <section id="preview" className="py-24 relative bg-[#070514] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A153A] border border-[#3B346E] text-[11px] font-bold tracking-widest text-[#A5B4FC] uppercase mb-4">
          <span className="w-2 h-2 rounded-full bg-[#818CF8]"></span>
          <span>PREVIEW</span>
        </div>

        {/* H2 Title */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Get powerful insights for all markets.
        </h2>

        {/* Subtext */}
        <p className="text-sm sm:text-base text-[#9490A8] max-w-2xl mx-auto mb-12">
          MBQ Algo is designed to support your trading goals by delivering clear alerts across all markets available on TradingView.
        </p>

        {/* Interactive Before & After Slider Card */}
        <div className="relative max-w-4xl mx-auto rounded-3xl p-3 bg-[#110D2C]/60 border border-white/10 shadow-[0_0_50px_rgba(99,102,241,0.2)] backdrop-blur-xl">
          <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onClick={(e) => handleMove(e.clientX)}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden cursor-ew-resize select-none bg-black"
          >
            
            {/* "After" Image (Right / Bare Market Action) */}
            <div className="absolute inset-0 w-full h-full">
              <img 
                src="/algo_script_overview.png" 
                alt="Bare Chart" 
                className="w-full h-full object-cover grayscale brightness-75 contrast-125"
              />
              <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-semibold text-white">
                Without Indicator
              </div>
            </div>

            {/* "Before" Image (Left / With MBQ Algo X Script) */}
            <div 
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src="/algo_script_overview.png" 
                alt="With MBQ Algo" 
                className="absolute top-0 left-0 max-w-none h-full object-cover"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
              />
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#5551FF]/80 backdrop-blur-md border border-white/20 text-xs font-bold text-white shadow-md">
                With MBQ Algo
              </div>
            </div>

            {/* Slider Dividing Line & Drag Handle */}
            <div 
              className="absolute top-0 bottom-0 w-[2px] bg-white z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-2xl pointer-events-auto">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
