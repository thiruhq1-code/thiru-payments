import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import PaymentGatewayPage from './pages/products/PaymentGatewayPage';
import FlashUPIPage from './pages/products/FlashUPIPage';
import PayoutsPage from './pages/products/PayoutsPage';
import SubscriptionsPage from './pages/products/SubscriptionsPage';
import GlobalCollectionsPage from './pages/products/GlobalCollectionsPage';
import InstantSettlementsPage from './pages/products/InstantSettlementsPage';
import SecureIDPage from './pages/products/SecureIDPage';

import D2CPage from './pages/solutions/D2CPage';
import BFSIPage from './pages/solutions/BFSIPage';
import EdTechPage from './pages/solutions/EdTechPage';
import EnterprisePage from './pages/solutions/EnterprisePage';

import DevelopersPage from './pages/DevelopersPage';
import PricingPage from './pages/PricingPage';
import FAQsPage from './pages/FAQsPage';
import AuthPage from './pages/AuthPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#fafbfb] text-gray-900 font-sans selection:bg-brand-500 selection:text-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* Product Routes */}
            <Route path="/products/payment-gateway" element={<PaymentGatewayPage />} />
            <Route path="/products/flash-upi" element={<FlashUPIPage />} />
            <Route path="/products/payouts" element={<PayoutsPage />} />
            <Route path="/products/subscriptions" element={<SubscriptionsPage />} />
            <Route path="/products/global-collections" element={<GlobalCollectionsPage />} />
            <Route path="/products/instant-settlements" element={<InstantSettlementsPage />} />
            <Route path="/products/secure-id" element={<SecureIDPage />} />

            {/* Solution Routes */}
            <Route path="/solutions/d2c" element={<D2CPage />} />
            <Route path="/solutions/bfsi" element={<BFSIPage />} />
            <Route path="/solutions/edtech" element={<EdTechPage />} />
            <Route path="/solutions/enterprise" element={<EnterprisePage />} />

            {/* Core Pages */}
            <Route path="/developers" element={<DevelopersPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/signin" element={<AuthPage />} />
            <Route path="/signup" element={<AuthPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
