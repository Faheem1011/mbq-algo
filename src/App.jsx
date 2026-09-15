import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarketTicker from './components/MarketTicker';
import LiveChartSimulator from './components/LiveChartSimulator';
import BentoFeatures from './components/BentoFeatures';
import BacktestsCarousel from './components/BacktestsCarousel';
import CustomerDashboard from './components/CustomerDashboard';
import ReviewsWall from './components/ReviewsWall';
import ComparisonMatrix from './components/ComparisonMatrix';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import CheckoutModal from './components/CheckoutModal';

export default function App() {
  const [checkoutModal, setCheckoutModal] = useState({ open: false, plan: 'Pro Quarterly' });
  const [dashboardModalOpen, setDashboardModalOpen] = useState(false);

  const handleOpenCheckout = (planName = 'Pro Quarterly') => {
    setCheckoutModal({ open: true, plan: planName });
  };

  const handleCloseCheckout = () => {
    setCheckoutModal({ open: false, plan: 'Pro Quarterly' });
  };

  const handleOpenDashboard = () => {
    setDashboardModalOpen(true);
  };

  const handleCloseDashboard = () => {
    setDashboardModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#05070E] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      
      {/* Sticky Top Navigation */}
      <Navbar
        onOpenCheckout={handleOpenCheckout}
        onOpenDashboard={handleOpenDashboard}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero with Real Video Demo */}
        <Hero
          onOpenCheckout={handleOpenCheckout}
          onOpenDashboard={handleOpenDashboard}
        />

        {/* 2. Auto-scrolling Market Ticker */}
        <MarketTicker />

        {/* 3. Interactive Pine Script V5 Live Chart Simulator */}
        <LiveChartSimulator
          onOpenCheckout={handleOpenCheckout}
        />

        {/* 4. Asymmetric Bento Features Grid */}
        <BentoFeatures
          onOpenCheckout={handleOpenCheckout}
          onOpenDashboard={handleOpenDashboard}
        />

        {/* 5. Verified Backtests & Replays */}
        <BacktestsCarousel
          onOpenCheckout={handleOpenCheckout}
        />

        {/* 6. Customer Licensing Dashboard (The Core SwiftAlgo-Beating Differentiator) */}
        <CustomerDashboard
          onOpenCheckout={handleOpenCheckout}
        />

        {/* 7. Verified Reviews Wall */}
        <ReviewsWall
          onOpenCheckout={handleOpenCheckout}
        />

        {/* 8. SwiftAlgo vs MBQ Algo X Comparison Matrix */}
        <ComparisonMatrix
          onOpenCheckout={handleOpenCheckout}
        />

        {/* 9. 4-Tier Pricing Ladder with 7-Day Guarantee */}
        <PricingSection
          onOpenCheckout={handleOpenCheckout}
        />

        {/* 10. High-Intent FAQ Accordion */}
        <FAQSection
          onOpenCheckout={handleOpenCheckout}
        />
      </main>

      {/* Institutional Footer with Risk Disclaimers */}
      <Footer
        onOpenCheckout={handleOpenCheckout}
        onOpenDashboard={handleOpenDashboard}
      />

      {/* Interactive Checkout Modal */}
      {checkoutModal.open && (
        <CheckoutModal
          planName={checkoutModal.plan}
          onClose={handleCloseCheckout}
          onOpenDashboard={handleOpenDashboard}
        />
      )}

      {/* Standalone Dashboard Modal Preview */}
      {dashboardModalOpen && (
        <CustomerDashboard
          isModal={true}
          onClose={handleCloseDashboard}
        />
      )}

    </div>
  );
}
