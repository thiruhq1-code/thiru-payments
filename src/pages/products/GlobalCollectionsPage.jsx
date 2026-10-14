import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe2, 
  ArrowRight, 
  CheckCircle2, 
  DollarSign, 
  ShieldCheck, 
  FileText,
  CreditCard
} from 'lucide-react';

export default function GlobalCollectionsPage() {
  return (
    <div className="bg-[#fafbfb] min-h-screen">
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-brand-50/50 via-white to-[#fafbfb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-900 text-xs font-black uppercase tracking-wider">
                <Globe2 className="w-3.5 h-3.5" /> Sell in 140+ Currencies
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-tight">
                Accept global payments. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-600 to-blue-600">Settle in INR with auto-FIRA.</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Expand your e-commerce or SaaS to international markets. Accept global cards, Apple Pay, PayPal, and get automated Foreign Inward Remittance Advice (FIRA) directly to your bank account.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/signup" className="px-7 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-black text-sm shadow-xl shadow-brand-500/25 transition-all flex items-center gap-2">
                  <span>Enable International FX</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/developers" className="px-6 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-bold text-sm border border-gray-200 transition-all">
                  FX API Documentation
                </Link>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-gray-500 font-semibold">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-600" /> Apple Pay & PayPal Ready</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-600" /> Automated Monthly FIRA Generation</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-brand-dark rounded-3xl p-6 sm:p-8 text-white border border-brand-800 shadow-2xl space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-xs font-bold text-brand-lime uppercase">Global Currency FX Bridge</span>
                  <span className="text-[10px] text-brand-lime bg-brand-900 px-2 py-0.5 rounded">REALTIME FX</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex justify-between">
                    <span>USD / INR</span>
                    <span className="text-brand-lime font-bold">1 USD = ₹ 86.40</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex justify-between">
                    <span>EUR / INR</span>
                    <span className="text-brand-lime font-bold">1 EUR = ₹ 92.15</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex justify-between">
                    <span>GBP / INR</span>
                    <span className="text-brand-lime font-bold">1 GBP = ₹ 108.60</span>
                  </div>
                </div>

                <div className="p-3 bg-black/60 rounded-xl text-xs space-y-1 text-sky-400 font-mono">
                  <p>&gt; Customer pays in: $ 59.99 USD</p>
                  <p>&gt; INR Settled to Merchant: ₹ 5,183.13</p>
                  <p>&gt; Digital FIRA Dispatched via Email</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
