import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  TrendingUp, 
  ShieldAlert, 
  Sparkles,
  RefreshCw
} from 'lucide-react';

export default function D2CPage() {
  return (
    <div className="bg-[#fafbfb] min-h-screen">
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-brand-50/50 via-white to-[#fafbfb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-lime text-brand-900 text-xs font-black uppercase tracking-wider">
                <ShoppingBag className="w-3.5 h-3.5" /> Built for Direct-to-Consumer Brands
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-tight">
                One Click Checkout for Shopify. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-600 to-blue-600">Cut RTO & lift conversion 28%.</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Unlock instant address pre-fill for 100M+ shoppers in India. Convert high-risk COD orders to prepaid with dynamic discount nudges, and detect fraudulent buyers before shipping.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/signup" className="px-7 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-black text-sm shadow-xl shadow-brand-500/25 transition-all flex items-center gap-2">
                  <span>Install Shopify App Free</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/pricing" className="px-6 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-bold text-sm border border-gray-200 transition-all">
                  View D2C Plans
                </Link>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-gray-500 font-semibold">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-600" /> 1-Minute Shopify Plugin Setup</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-600" /> 42% Reduction in Cart Abandonment</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-brand-dark rounded-3xl p-6 sm:p-8 text-white border border-brand-800 shadow-2xl space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-xs font-bold text-brand-lime uppercase">D2C Performance Lift</span>
                  <span className="text-[10px] text-brand-lime bg-brand-900 px-2 py-0.5 rounded">+28% PREPAID SHARE</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex justify-between">
                    <span>1-Click Address Pre-Fill</span>
                    <span className="text-brand-lime font-bold">100M+ Shoppers Network</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex justify-between">
                    <span>Dynamic COD to Prepaid</span>
                    <span className="text-brand-lime font-bold">Instant ₹50 Discount Pop</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex justify-between">
                    <span>RTO Intelligence</span>
                    <span className="text-brand-lime font-bold">Risk Score: Low (Ship)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
