import React, { useState, useEffect } from 'react';
import { Shield, Sparkles, User, Menu, X, ArrowRight, ExternalLink } from 'lucide-react';

export default function Navbar({ onOpenCheckout, onOpenDashboard }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Live Demo', href: '#live-demo' },
    { name: 'Features', href: '#features' },
    { name: 'Chart Simulator', href: '#chart-simulator' },
    { name: 'Backtests', href: '#backtests' },
    { name: 'Client Portal', href: '#dashboard' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Compare', href: '#compare' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#05070E]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-cyan-950/20' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/25">
            <div className="w-full h-full bg-[#070B16] rounded-xl flex items-center justify-center overflow-hidden">
              <img 
                src="/mbq_algo_icon_transparent.png" 
                alt="MBQ Algo" 
                className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/favicon-32x32.png';
                }}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-['Outfit'] font-black text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                MBQ ALGO<span className="text-cyan-400">.X</span>
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-md">
                V5.0 PRO
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">
              Trading Intelligence
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-[#0B0F19]/80 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-1 text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors rounded-full hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Live System Pulse */}
          <div className="hidden 2xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>SIGNALS LIVE</span>
          </div>

          {/* Client Dashboard Button */}
          <button
            onClick={onOpenDashboard}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
          >
            <User className="w-3.5 h-3.5 text-cyan-400" />
            <span>Dashboard</span>
          </button>

          {/* Primary Get Access CTA */}
          <button
            onClick={() => onOpenCheckout('Pro')}
            className="group relative inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all overflow-hidden"
          >
            <span className="relative z-10">Get Instant Access</span>
            <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#070A14] border-b border-white/10 px-6 py-6 mt-3 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm text-slate-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDashboard();
              }}
              className="w-full py-2.5 flex items-center justify-center gap-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 font-medium text-sm"
            >
              <User className="w-4 h-4 text-cyan-400" />
              <span>Customer License Portal</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCheckout('Pro');
              }}
              className="w-full py-3 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-bold text-sm shadow-lg shadow-cyan-500/25"
            >
              <span>Get Instant Access</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
