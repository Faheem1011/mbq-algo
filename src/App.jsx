import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarketTicker from './components/MarketTicker';
import BentoFeatures from './components/BentoFeatures';
import Backtests from './components/Backtests';
import ComparisonTable from './components/ComparisonTable';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CheckoutModal from './components/CheckoutModal';
import CustomerDashboard from './components/CustomerDashboard';
import SetupGuideModal from './components/SetupGuideModal';

export default function App() {
  const [currency, setCurrency] = useState('PKR');
  const [checkoutPlan, setCheckoutPlan] = useState(null);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);
  const [userOrder, setUserOrder] = useState({
    licenseKey: 'MBQ-PRO-89F2-K9A1-V5',
    tvUsername: 'mbq_trader_pk',
    planName: 'Pro Quarterly (Most Popular)',
    status: 'Active (Invite-Only Verified)'
  });

  const handleOpenCheckout = (plan) => {
    setCheckoutPlan(plan);
  };

  const handleCheckoutSuccess = (orderData) => {
    setUserOrder({
      licenseKey: orderData.licenseKey,
      tvUsername: orderData.tvUsername,
      planName: orderData.planName,
      status: orderData.status
    });
  };

  return (
    <div className="min-h-screen bg-[#05070E] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      
      {/* Sticky Navigation */}
      <Navbar
        currency={currency}
        setCurrency={setCurrency}
        onOpenDashboard={() => setDashboardOpen(true)}
        onOpenCheckout={handleOpenCheckout}
        onOpenGuide={() => setGuideOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-grow">
        <Hero
          onOpenCheckout={handleOpenCheckout}
          onOpenGuide={() => setGuideOpen(true)}
        />

        <MarketTicker />

        <BentoFeatures />

        <Backtests />

        <ComparisonTable />

        <Reviews />

        <Pricing
          currency={currency}
          onOpenCheckout={handleOpenCheckout}
        />

        <FAQ />
      </main>

      {/* Footer */}
      <Footer
        onOpenGuide={() => setGuideOpen(true)}
        onOpenDashboard={() => setDashboardOpen(true)}
      />

      {/* Interactive Modals */}
      <CheckoutModal
        isOpen={!!checkoutPlan}
        onClose={() => setCheckoutPlan(null)}
        selectedPlan={checkoutPlan}
        currency={currency}
        onSuccess={handleCheckoutSuccess}
      />

      <CustomerDashboard
        isOpen={dashboardOpen}
        onClose={() => setDashboardOpen(false)}
        userOrder={userOrder}
        onOpenGuide={() => {
          setDashboardOpen(false);
          setGuideOpen(true);
        }}
      />

      <SetupGuideModal
        isOpen={guideOpen}
        onClose={() => setGuideOpen(false)}
      />

    </div>
  );
}
