import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Calculator, 
  Sparkles, 
  ShieldCheck, 
  Zap,
  Building
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function PricingCalculator() {
  const [gmv, setGmv] = useState(2500000);

  // Savings calculation:
  // Base 0% fee on first ₹20L = ~ ₹37,000 one-time
  // Conversion boost ~ 1.5% of GMV annually
  const baseLaunchSaving = 37000;
  const conversionLiftSaving = Math.round(gmv * 0.015);
  const totalAnnualSavings = baseLaunchSaving + (conversionLiftSaving * 12);

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#fafbfb] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" /> Simple, Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
            Zero setup fees. Zero maintenance. Pay as you grow.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Enjoy 0% payment gateway fees on your first ₹20 Lakhs in sales volume.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Plan 1: Growth */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-700 bg-brand-50 px-2.5 py-1 rounded-md">
                Startups & SMBs
              </span>
              <h3 className="text-2xl font-bold text-gray-950 mt-4">Growth Plan</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-black text-gray-950">1.85%</span>
                <span className="text-xs text-gray-500 font-bold">/ transaction</span>
              </div>
              <p className="text-xs text-blue-600 font-extrabold mt-1">First ₹20L Volume at 0% Fee</p>

              <div className="mt-8 space-y-3 text-sm text-gray-600 font-medium">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-500" /><span>180+ Payment Modes</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-500" /><span>FlashUPI Native Checkout</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-500" /><span>Next-Day (T+1) Settlement</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-500" /><span>Standard Email & Chat Support</span></div>
              </div>
            </div>

            <a 
              href="#sandbox" 
              className="mt-8 w-full py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold text-sm text-center transition-colors block"
            >
              Get Started Free
            </a>
          </div>

          {/* Plan 2: One Click Pro (Featured) */}
          <div className="bg-[#08214d] text-white rounded-3xl p-8 border-2 border-sky-400 shadow-2xl relative flex flex-col justify-between">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-sky-400 text-slate-950 text-xs font-black uppercase px-3.5 py-1 rounded-full shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Most Popular for D2C
            </div>
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-sky-300 bg-white/10 px-2.5 py-1 rounded-md">
                D2C & Scaleups
              </span>
              <h3 className="text-2xl font-bold text-white mt-4">One Click Pro</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-black text-sky-300">1.65%</span>
                <span className="text-xs text-gray-300 font-bold">/ transaction</span>
              </div>
              <p className="text-xs text-sky-300 font-bold mt-1">Includes Shopify 1-Click App</p>

              <div className="mt-8 space-y-3 text-sm text-gray-200 font-medium">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-sky-400" /><span>Everything in Growth</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-sky-400" /><span>One Click Checkout + RTO Guard</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-sky-400" /><span>Instant T+15 Min Settlements</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-sky-400" /><span>Priority 24/7 WhatsApp Support</span></div>
              </div>
            </div>

            <a 
              href="#sandbox" 
              className="mt-8 w-full py-3.5 rounded-xl bg-sky-400 hover:bg-white text-slate-950 hover:text-navy-900 font-black text-sm text-center shadow-lg transition-all block"
            >
              Claim Launch Offer &rarr;
            </a>
          </div>

          {/* Plan 3: Enterprise */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-700 bg-brand-50 px-2.5 py-1 rounded-md">
                High Volume & Unicorns
              </span>
              <h3 className="text-2xl font-bold text-gray-950 mt-4">Custom Enterprise</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-black text-gray-950">Custom</span>
                <span className="text-xs text-gray-500 font-bold">Volume Pricing</span>
              </div>
              <p className="text-xs text-gray-500 font-bold mt-1">Direct Bank Switch Integrations</p>

              <div className="mt-8 space-y-3 text-sm text-gray-600 font-medium">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-500" /><span>100,000+ Transactions/Minute</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-500" /><span>Direct Multi-Bank Core Switches</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-500" /><span>Dedicated Solution Architect & SLA</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-500" /><span>Custom Reconciliation Reports</span></div>
              </div>
            </div>

            <a 
              href="#sandbox" 
              className="mt-8 w-full py-3 rounded-xl bg-gray-950 hover:bg-gray-800 text-white font-bold text-sm text-center transition-colors block"
            >
              Talk to Enterprise Team
            </a>
          </div>

        </div>

        {/* Interactive Savings Estimator */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl font-black text-gray-950">Estimate Your Annual Savings with Thiru</h3>
              <p className="text-sm text-gray-600">
                Adjust your monthly transaction volume to calculate total savings from 0% introductory fees and higher checkout conversion.
              </p>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-gray-700">Monthly Sales Volume:</span>
                  <span className="text-lg font-black text-brand-700">₹ {gmv.toLocaleString('en-IN')}</span>
                </div>
                <input 
                  type="range" 
                  min="200000" 
                  max="10000000" 
                  step="100000" 
                  value={gmv} 
                  onChange={(e) => setGmv(Number(e.target.value))}
                  className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
                <div className="flex justify-between text-[11px] text-gray-400 mt-1 font-semibold">
                  <span>₹ 2 Lakhs</span>
                  <span>₹ 50 Lakhs</span>
                  <span>₹ 1 Crore</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-brand-50 rounded-2xl p-6 sm:p-8 border border-brand-200 text-center space-y-2">
              <p className="text-xs font-black uppercase tracking-wider text-brand-800">Your Estimated Yearly Savings</p>
              <p className="text-4xl sm:text-5xl font-black text-brand-700">₹ {totalAnnualSavings.toLocaleString('en-IN')}+</p>
              <p className="text-xs text-gray-600 leading-relaxed pt-1">
                Based on ₹20L free GMV processing + 14% drop-off reduction through FlashUPI.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
