import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Lock, 
  Smartphone, 
  Sparkles,
  Server,
  RefreshCw,
  Globe2,
  Sliders
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function PaymentGatewayPage() {
  const [activeTab, setActiveTab] = useState('upi');

  const modes = [
    { title: "UPI 2.0 & AutoPay", desc: "Collect via GPay, PhonePe, Paytm, CRED with intent and mandate support.", icon: <Zap className="w-5 h-5 text-brand-600" /> },
    { title: "Credit & Debit Cards", desc: "Visa, Mastercard, RuPay, Diners, Amex with RBI tokenization compliance.", icon: <CreditCard className="w-5 h-5 text-brand-600" /> },
    { title: "50+ Netbanking Banks", desc: "Direct integration with SBI, HDFC, ICICI, Axis, Kotak, and national banks.", icon: <Server className="w-5 h-5 text-brand-600" /> },
    { title: "Cardless & Debit Card EMI", desc: "Affordability suites via ZestMoney, EarlySalary, and bank card EMIs.", icon: <Sliders className="w-5 h-5 text-brand-600" /> },
    { title: "Buy Now Pay Later", desc: "Integrated checkout with Simpl, LazyPay, and Amazon Pay Later.", icon: <Sparkles className="w-5 h-5 text-brand-600" /> },
    { title: "Wallets & Prepaid Cards", desc: "Major wallets supported including Paytm, Mobikwik, and Amazon Pay.", icon: <Smartphone className="w-5 h-5 text-brand-600" /> },
  ];

  return (
    <div className="bg-[#fafbfb] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-brand-50/40 via-white to-[#fafbfb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-900 text-xs font-extrabold uppercase tracking-wider">
                <CreditCard className="w-3.5 h-3.5" /> India's Most Robust Payment Gateway
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-tight">
                High-converting payments with <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-600 to-blue-600">180+ payment rails.</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Empower your customers to pay using UPI, Cards, Netbanking, PayLater, and EMIs. Maximize checkout success with dynamic multi-bank routing and instant retry logic.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/signup" className="px-7 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-black text-sm shadow-xl shadow-brand-500/25 transition-all flex items-center gap-2">
                  <span>Start Transacting Free</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/developers" className="px-6 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-bold text-sm border border-gray-200 transition-all">
                  View API Docs
                </Link>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-gray-500 font-semibold">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-600" /> 99.99% Switch Uptime</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-600" /> Zero Gateway Fee on ₹20L</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-600" /> RBI PA Regulated</span>
              </div>
            </div>

            {/* Visual Architecture Card */}
            <div className="lg:col-span-5">
              <div className="bg-brand-dark rounded-3xl p-6 sm:p-8 text-white border border-brand-800 shadow-2xl space-y-5 relative">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-xs font-extrabold text-brand-lime uppercase tracking-wider">Dynamic Routing Engine</span>
                  <span className="text-[10px] text-sky-400 bg-slate-900/80 px-2 py-0.5 rounded border border-emerald-800">ACTIVE SWITCH</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex justify-between items-center">
                    <span>HDFC Direct Node</span>
                    <span className="text-brand-lime font-bold">99.92% (42ms)</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex justify-between items-center">
                    <span>ICICI Core Gateway</span>
                    <span className="text-brand-lime font-bold">99.88% (46ms)</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex justify-between items-center">
                    <span>SBI High-Traffic Node</span>
                    <span className="text-brand-lime font-bold">99.79% (58ms)</span>
                  </div>
                </div>

                <div className="p-3 bg-black/50 rounded-xl font-mono text-[11px] text-gray-400">
                  <p className="text-brand-lime">&gt; Auto-Failover: Zero Customer Drop-off</p>
                  <p>&gt; In-Flight Retry Switch: Enabled</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Payment Modes Grid */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950">
              India's widest range of payment modes
            </h2>
            <p className="mt-3 text-base text-gray-600">
              Give your customers the flexibility to pay the way they prefer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modes.map((mode, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#fafbfb] border border-gray-100 hover:shadow-lg transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
                  {mode.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-950">{mode.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{mode.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-[#fafbfb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 space-y-4">
              <Zap className="w-8 h-8 text-brand-600" />
              <h3 className="text-xl font-bold text-gray-950">Sub-second Latency</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Direct server-to-server connections with India's leading banking nodes minimize network hops.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 space-y-4">
              <Lock className="w-8 h-8 text-brand-600" />
              <h3 className="text-xl font-bold text-gray-950">RBI Card Tokenization</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Full compliance with RBI card-on-file tokenization guidelines for seamless 1-click repeat checkouts.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 space-y-4">
              <RefreshCw className="w-8 h-8 text-brand-600" />
              <h3 className="text-xl font-bold text-gray-950">Automated Smart Retries</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Intelligently prompts alternate payment modes or secondary bank switches if an OTP fails.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
