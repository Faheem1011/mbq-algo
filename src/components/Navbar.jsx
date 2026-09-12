import React, { useState, useEffect } from 'react';
import { Shield, Sparkles, User, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ currency, setCurrency, onOpenDashboard, onOpenCheckout, onOpenGuide }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#05070E]/90 backdrop-blur-md border-b border-brand-border/60 py-3 shadow-2xl' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <img 
                src="/mbq_algo_logo_transparent.png" 
                alt="MBQ ALGO Logo" 
                className="w-10 h-10 object-contain drop-shadow-[0_0_12px_rgba(0,240,255,0.6)] group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wider text-white font-['Outfit'] flex items-center gap-1.5">
                MBQ <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">ALGO</span>
              </span>
              <span className="text-[10px] tracking-widest text-cyan-400 font-mono font-semibold uppercase -mt-1">
                TRADING INTELLIGENCE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
            <a href="#backtests" className="hover:text-cyan-400 transition-colors">Backtests</a>
            <a href="#comparison" className="hover:text-cyan-400 transition-colors">vs SwiftAlgo</a>
            <a href="#reviews" className="hover:text-cyan-400 transition-colors">Reviews</a>
            <a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a>
            <button 
              onClick={onOpenGuide}
              className="text-purple-400 hover:text-purple-300 flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 transition-all hover:bg-purple-500/20"
            >
              <Sparkles className="w-3.5 h-3.5" /> Setup Guide
            </button>
          </div>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Currency Selector (PKR / USD) */}
            <div className="flex items-center bg-[#0B0F1A] p-1 rounded-lg border border-slate-800 text-xs">
              <button
                onClick={() => setCurrency('PKR')}
                className={`px-2.5 py-1 rounded font-semibold transition-all ${
                  currency === 'PKR' 
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                PKR (₨)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-2.5 py-1 rounded font-semibold transition-all ${
                  currency === 'USD' 
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                USD ($)
              </button>
            </div>

            {/* Dashboard / Client Portal */}
            <button
              onClick={onOpenDashboard}
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-200 bg-[#0B0F1A] border border-slate-800 hover:border-slate-600 transition-all"
            >
              <User className="w-3.5 h-3.5 text-cyan-400" />
              <span>Portal</span>
            </button>

            {/* Main Get Access CTA */}
            <button
              onClick={() => onOpenCheckout({ name: 'Pro Plan', pricePKR: 24000, priceUSD: 89, period: 'Quarterly' })}
              className="relative group overflow-hidden rounded-lg px-5 py-2.5 text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center space-x-1.5"
            >
              <span>Get Access</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={() => setCurrency(currency === 'PKR' ? 'USD' : 'PKR')}
              className="text-xs px-2 py-1 bg-[#0B0F1A] border border-slate-800 rounded text-cyan-400 font-mono"
            >
              {currency}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-[#0B0F1A] border border-brand-border rounded-xl space-y-3 shadow-2xl">
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300 hover:text-cyan-400"
            >
              Features
            </a>
            <a 
              href="#backtests" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300 hover:text-cyan-400"
            >
              Backtests
            </a>
            <a 
              href="#comparison" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300 hover:text-cyan-400"
            >
              vs SwiftAlgo
            </a>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300 hover:text-cyan-400"
            >
              Reviews
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300 hover:text-cyan-400"
            >
              Pricing
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenGuide(); }}
              className="w-full text-left text-sm text-purple-400 py-1"
            >
              TradingView Setup Guide
            </button>
            <div className="pt-2 border-t border-slate-800 flex gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenDashboard(); }}
                className="flex-1 py-2 text-center text-xs font-semibold bg-[#121829] border border-slate-700 rounded-lg text-slate-200"
              >
                Client Portal
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenCheckout({ name: 'Pro Plan', pricePKR: 24000, priceUSD: 89, period: 'Quarterly' }); }}
                className="flex-1 py-2 text-center text-xs font-bold bg-cyan-400 text-black rounded-lg"
              >
                Get Access
              </button>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}
