import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Sparkles,
  Smartphone,
  CreditCard,
  Lock,
  Headphones
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-8 pb-20 lg:pt-14 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#f8faf9] via-white to-[#f4f8f6]">
      
      {/* Background Radial Glow Waves */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[750px] pointer-events-none opacity-60">
        <div className="w-full h-full rounded-full border-[1.5px] border-brand-200/50 absolute inset-0 scale-75 animate-pulse-slow"></div>
        <div className="w-full h-full rounded-full border-[1.5px] border-brand-300/40 absolute inset-0 scale-100"></div>
        <div className="w-full h-full rounded-full border-[1.5px] border-brand-100/60 absolute inset-0 scale-125"></div>
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-brand-lime/20 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-brand-200/30 filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Floating Visual Bento + Center Headline */}
        <div className="relative min-h-[560px] lg:min-h-[640px] flex items-center justify-center">
          
          {/* ==============================================================
              FLOATING BENTO CARDS (Exact replica of Cashfree visual layout)
              ============================================================== */}

          {/* 1. TOP-LEFT: Live Payment Transactions Chart Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:block absolute -top-2 left-4 lg:left-8 z-20"
          >
            <div className="bg-[#eff6ff] p-4 rounded-3xl shadow-xl border border-blue-200 w-64 hover:scale-105 transition-transform duration-300">
              <div className="bg-white rounded-2xl p-4 shadow-sm space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                      <p className="text-[11px] font-bold text-gray-600">Live Payment Transactions</p>
                    </div>
                    <p className="text-2xl font-black text-gray-950 mt-1">2,847</p>
                  </div>
                  <span className="text-[10px] font-black text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                    <TrendingUp className="w-3 h-3" /> 2.5% vs last week
                  </span>
                </div>
                {/* SVG Area Chart Graphic */}
                <div className="h-14 w-full pt-1">
                  <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0066f5" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#0066f5" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,35 Q15,10 30,22 T60,8 T85,18 T100,5 L100,40 L0,40 Z" fill="url(#chartGrad)" />
                    <path d="M0,35 Q15,10 30,22 T60,8 T85,18 T100,5" fill="none" stroke="#0066f5" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. TOP-RIGHT: Merchant Holding Smartphone with Floating Payment Badges */}
          <motion.div 
            initial={{ opacity: 0, x: 30, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block absolute -top-4 right-4 lg:right-8 z-20"
          >
            <div className="relative w-64 lg:w-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-blue-100 to-brand-50 group hover:scale-105 transition-transform duration-300">
              <img 
                src="/images/hero-merchant.jpg" 
                alt="Confident Indian woman business owner holding smartphone" 
                className="w-full h-56 lg:h-64 object-cover object-top"
              />
              
              {/* Floating Frosted Glass Payment Brands Overlay */}
              <div className="absolute inset-x-3 bottom-3 bg-white/85 backdrop-blur-md rounded-2xl p-2.5 border border-white/60 shadow-lg space-y-1.5">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[10px] font-black text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-200">PhonePe</span>
                  <span className="text-[10px] font-black text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">GPay</span>
                  <span className="text-[10px] font-black text-blue-900 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">UPI</span>
                  <span className="text-[10px] font-black text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200">Paytm</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[9px] font-black text-gray-800 bg-gray-100 px-1.5 py-0.5 rounded">VISA</span>
                  <span className="text-[9px] font-black text-orange-700 bg-orange-50 px-1.5 py-0.5 rounded">Mastercard</span>
                  <span className="text-[9px] font-black text-green-700 bg-green-50 px-1.5 py-0.5 rounded">RuPay</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. BOTTOM-LEFT: Dedicated Customer Support Specialist Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block absolute bottom-0 left-2 z-20"
          >
            <div className="relative w-56 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-brand-50 group hover:scale-105 transition-transform duration-300">
              <img 
                src="/images/hero-support.jpg" 
                alt="Thiru Customer Onboarding Specialist with Headset" 
                className="w-full h-52 object-cover object-center"
              />
              <div className="absolute inset-x-3 bottom-3 bg-black/75 backdrop-blur-md rounded-xl p-2 text-center text-white border border-white/20">
                <p className="text-[10px] text-brand-lime font-bold">Welcome onboard!</p>
                <div className="mt-1 py-1 px-2 rounded-lg bg-white/20 text-[10px] font-bold text-white flex items-center justify-center gap-1">
                  <Headphones className="w-3 h-3 text-brand-lime" />
                  <span>Start assisted setup &rarr;</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4. CENTER-BOTTOM: Forest Green Global Transfer Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden sm:block absolute -bottom-6 left-1/2 -translate-x-1/2 z-20"
          >
            <div className="bg-[#032616] text-white p-4 rounded-3xl shadow-2xl border border-brand-800 w-72 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-brand-lime text-brand-900 flex items-center justify-center font-black text-xs">
                    A
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Abhishek S.</p>
                    <p className="text-[10px] text-gray-400 font-mono">ID: 372145</p>
                  </div>
                </div>
                <p className="text-base font-black text-brand-lime">₹ 11,000.00</p>
              </div>

              {/* Currency Flags */}
              <div className="flex items-center justify-between pt-2.5 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="text-base">🇮🇳</span>
                  <span className="font-bold text-gray-300">INR</span>
                </div>
                <div className="flex items-center gap-2 text-base opacity-75">
                  <span>🇺🇸</span>
                  <span>🇬🇧</span>
                  <span>🇪🇺</span>
                  <span>🇦🇺</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 5. BOTTOM-RIGHT: Sky-Blue "No Hidden Charges" Trust Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hidden lg:block absolute bottom-0 right-2 z-20"
          >
            <div className="bg-gradient-to-br from-[#0284c7] to-[#0369a1] text-white p-5 rounded-3xl shadow-2xl border-4 border-white w-60 hover:scale-105 transition-transform duration-300 text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto text-white text-xl">
                <ShieldCheck className="w-7 h-7 text-brand-lime" />
              </div>
              <h4 className="text-xl font-black text-white leading-tight">Zero Hidden Costs</h4>
              <p className="text-xs text-sky-100">Transparent interchange pricing. No recurring maintenance. 100% digital setup.</p>
            </div>
          </motion.div>


          {/* ==============================================================
              CENTER HEADLINE & PRIMARY CTAS
              ============================================================== */}
          <div className="text-center max-w-2xl mx-auto py-12 px-4 relative z-30 space-y-6">
            
            {/* Pill Tag */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-200 shadow-md"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
              <span className="text-xs font-black uppercase tracking-wider text-brand-900">
                THIRU PAYMENTS 2026 ENGINE
              </span>
            </motion.div>

            {/* Giant Central Bold Headline - Original 3-line layout */}
            <motion.h1 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-gray-950 tracking-tight leading-[1.08]"
            >
              The complete <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-600 via-blue-600 to-sky-500">
                payments engine,
              </span> <br />
              built for scale.
            </motion.h1>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex items-center justify-center pt-2"
            >
              <Link 
                to="/signup" 
                className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-[#08214d] hover:bg-blue-600 text-white font-black text-base shadow-xl shadow-navy-900/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>Sign Up for Free*</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Mini Trust Line */}
            <p className="text-xs text-gray-400 font-semibold pt-2">
              *First ₹20 Lakhs transaction volume processed at 0% gateway fee. Test live APIs in sandbox today.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
