import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Sparkles, 
  User, 
  Menu, 
  X, 
  ArrowRight, 
  LogOut, 
  Key,
  ShieldCheck 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar({ onOpenCheckout, onOpenDashboard, onOpenAuth }) {
  const { user, isAuthenticated, logout } = useAuth();
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
    { name: 'Terminal', href: '#chart-simulator' },
    { name: 'Features', href: '#features' },
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled 
        ? 'bg-[#07090E]/90 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-sm' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden">
            <img 
              src="/mbq_algo_icon_transparent.png" 
              alt="MBQ Algo" 
              className="w-7 h-7 object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/favicon-32x32.png';
              }}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-['Outfit'] font-black text-lg tracking-tight text-white group-hover:text-slate-300 transition-colors">
                MBQ ALGO<span className="text-slate-500">.X</span>
              </span>
              <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold bg-slate-800 text-slate-300 border border-slate-700 rounded">
                V5.0 PRO
              </span>
            </div>
            <span className="text-[9px] text-slate-500 font-mono tracking-wider uppercase">
              Trading Intelligence
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-900/80 border border-slate-800 rounded-full px-3.5 py-1 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-1 text-xs font-medium text-slate-400 hover:text-white transition-colors rounded-full hover:bg-slate-800/50"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Action Buttons */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* Live System Pulse */}
          <div className="hidden 2xl:flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>SYSTEM ACTIVE</span>
          </div>

          {/* Authenticated State vs Visitor State */}
          {isAuthenticated && user ? (
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenDashboard}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-700/80 text-xs font-mono text-white transition-all shadow-sm"
              >
                <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-[10px]">
                  {(user.tvUsername || 'U').substring(0, 2).toUpperCase()}
                </div>
                <span>@{user.tvUsername}</span>
                <span className="px-1.5 py-0.5 rounded text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {user.tierCode || 'PRO'}
                </span>
              </button>

              <button
                onClick={logout}
                title="Sign Out"
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              {/* Member Sign In Button */}
              <button
                onClick={onOpenAuth}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors font-mono"
              >
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span>Portal Login</span>
              </button>

              {/* Primary Get Access CTA */}
              <button
                onClick={() => onOpenCheckout('Pro')}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-black bg-white hover:bg-slate-200 rounded-lg shadow transition-colors font-mono"
              >
                <span>Get Access</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0A0D15] border-b border-slate-800 px-6 py-6 mt-3 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3 font-mono">
            {isAuthenticated && user ? (
              <>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDashboard();
                  }}
                  className="w-full py-2.5 flex items-center justify-between px-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs"
                >
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4 text-emerald-400" />
                    <span>Dashboard (@{user.tvUsername})</span>
                  </span>
                  <span className="text-[10px] text-emerald-400 font-bold">ACTIVE</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    logout();
                  }}
                  className="w-full py-2.5 flex items-center justify-center gap-2 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 text-xs"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth();
                  }}
                  className="w-full py-2.5 flex items-center justify-center gap-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 font-medium text-sm"
                >
                  <User className="w-4 h-4 text-slate-400" />
                  <span>Member Portal Sign In</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCheckout('Pro');
                  }}
                  className="w-full py-3 flex items-center justify-center gap-2 rounded-lg bg-white text-black font-bold text-sm shadow"
                >
                  <span>Get Instant Access</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
