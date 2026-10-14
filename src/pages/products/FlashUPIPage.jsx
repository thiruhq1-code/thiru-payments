import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Smartphone, 
  ShieldCheck, 
  TrendingUp, 
  Timer,
  RefreshCw,
  Sparkles
} from 'lucide-react';

export default function FlashUPIPage() {
  return (
    <div className="bg-[#fafbfb] min-h-screen">
      
      {/* Hero */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-brand-50/50 via-white to-[#fafbfb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-lime text-brand-900 text-xs font-black uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" /> Sub-5 Second UPI Checkout
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-tight">
                Native In-App UPI. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-600 to-blue-600">Zero App Switches.</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                FlashUPI embeds direct UPI payment flows into your app. Customers enter their MPIN and complete payment in under 5 seconds without redirecting to GPay or PhonePe.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/signup" className="px-7 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-black text-sm shadow-xl shadow-brand-500/25 transition-all flex items-center gap-2">
                  <span>Enable FlashUPI</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/developers" className="px-6 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-bold text-sm border border-gray-200 transition-all">
                  Read Mobile SDK Docs
                </Link>
              </div>

              <div className="pt-4 grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-white rounded-2xl border border-gray-200 shadow-sm">
                  <p className="text-2xl font-black text-brand-700">&lt; 5 sec</p>
                  <p className="text-[11px] font-semibold text-gray-500">Checkout Time</p>
                </div>
                <div className="p-3 bg-white rounded-2xl border border-gray-200 shadow-sm">
                  <p className="text-2xl font-black text-brand-700">+14%</p>
                  <p className="text-[11px] font-semibold text-gray-500">Success Rate Lift</p>
                </div>
                <div className="p-3 bg-white rounded-2xl border border-gray-200 shadow-sm">
                  <p className="text-2xl font-black text-brand-700">0</p>
                  <p className="text-[11px] font-semibold text-gray-500">App Redirects</p>
                </div>
              </div>
            </div>

            {/* Mobile Mockup Card */}
            <div className="lg:col-span-5">
              <div className="bg-brand-dark rounded-3xl p-6 sm:p-8 text-white border border-brand-800 shadow-2xl space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-xs font-bold text-brand-lime uppercase">FlashUPI Native Sheet</span>
                  <span className="text-[10px] text-brand-lime bg-brand-900 px-2 py-0.5 rounded">IN-APP MODAL</span>
                </div>

                <div className="bg-white rounded-2xl p-5 text-gray-900 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">Paying Merchant</span>
                    <span className="font-bold text-gray-900">₹ 1,499.00</span>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-brand-500 text-white flex items-center justify-center font-bold text-[10px]">T</div>
                      <span className="text-xs font-bold text-gray-800">HDFC Bank ••4821</span>
                    </div>
                    <span className="text-[10px] font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded">RuPay UPI</span>
                  </div>
                  <button className="w-full py-2.5 rounded-xl bg-brand-500 text-white text-xs font-bold shadow-md">
                    Enter UPI PIN on Device
                  </button>
                </div>

                <p className="text-[11px] text-gray-400 font-mono text-center">
                  Zero browser tabs. Zero intent drop-offs.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-950">
              Why FlashUPI outperforms traditional UPI Intent
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50/50 p-8 rounded-3xl border border-red-100 space-y-4">
              <h3 className="text-xl font-bold text-red-900">Traditional UPI Intent</h3>
              <ul className="space-y-2.5 text-sm text-red-700">
                <li>❌ Switches customer away to external UPI app</li>
                <li>❌ Average completion time takes 25-45 seconds</li>
                <li>❌ 18-22% drop-off rate when apps fail to open</li>
                <li>❌ Unreliable background callback notifications</li>
              </ul>
            </div>

            <div className="bg-brand-50 p-8 rounded-3xl border border-brand-200 space-y-4">
              <h3 className="text-xl font-bold text-brand-950">Thiru FlashUPI</h3>
              <ul className="space-y-2.5 text-sm text-brand-900 font-medium">
                <li>✅ 100% native in-app payment sheet</li>
                <li>✅ Lightning fast sub-5 second authorization</li>
                <li>✅ Drop-off reduced by over 60%</li>
                <li>✅ Instant real-time webhook confirmation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
