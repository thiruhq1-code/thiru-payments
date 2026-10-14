import React from 'react';
import { Link } from 'react-router-dom';
import { 
  RefreshCw, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Calendar, 
  CreditCard,
  ShieldCheck,
  Smartphone
} from 'lucide-react';

export default function SubscriptionsPage() {
  return (
    <div className="bg-[#fafbfb] min-h-screen">
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-brand-50/50 via-white to-[#fafbfb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-900 text-xs font-black uppercase tracking-wider">
                <RefreshCw className="w-3.5 h-3.5" /> Recurring Auto-Debit Engine
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-tight">
                Automated recurring payments with <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-600 to-blue-600">UPI AutoPay & eNACH.</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Set up recurring auto-debit plans for SaaS subscriptions, SIP investments, gym memberships, and insurance premiums with automated dunning and retries.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/signup" className="px-7 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-black text-sm shadow-xl shadow-brand-500/25 transition-all flex items-center gap-2">
                  <span>Start Subscription Suite</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/developers" className="px-6 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-bold text-sm border border-gray-200 transition-all">
                  Mandate API Docs
                </Link>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-gray-500 font-semibold">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-600" /> UPI AutoPay Up to ₹1,00,000</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-600" /> eNACH Netbanking & Debit Card</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-brand-dark rounded-3xl p-6 sm:p-8 text-white border border-brand-800 shadow-2xl space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-xs font-bold text-brand-lime uppercase">Recurring Mandate Simulation</span>
                  <span className="text-[10px] text-brand-lime bg-brand-900 px-2 py-0.5 rounded">ACTIVE PLAN</span>
                </div>

                <div className="bg-white rounded-2xl p-5 text-gray-900 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">Plan: Thiru Cloud Enterprise</span>
                    <span className="font-bold text-gray-900">₹ 2,999 / month</span>
                  </div>
                  <div className="p-3 bg-brand-50 rounded-xl border border-brand-200 text-xs text-brand-900 space-y-1">
                    <p className="font-bold">Next Billing: 1st of Next Month</p>
                    <p className="text-[11px] text-gray-600">Auto-debit mandate registered via UPI AutoPay</p>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-gray-500">
                    <span>Pre-Debit SMS Trigger: 24h Before</span>
                    <span className="text-brand-700 font-bold">RBI Compliant</span>
                  </div>
                </div>

                <p className="text-[11px] text-gray-400 font-mono text-center">
                  Smart Dunning Logic: Auto-retries failed charges on paydays.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
