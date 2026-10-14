import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  Calendar,
  Building
} from 'lucide-react';

export default function InstantSettlementsPage() {
  return (
    <div className="bg-[#fafbfb] min-h-screen">
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-brand-50/50 via-white to-[#fafbfb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-lime text-brand-900 text-xs font-black uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" /> 15-Minute Working Capital
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-tight">
                Never wait for T+2. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-600 to-blue-600">Get settlements in 15 minutes.</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Unlock instant working capital. Receive settlements in under 15 minutes or on-demand, 24x7x365 including bank holidays and Sundays.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/signup" className="px-7 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-black text-sm shadow-xl shadow-brand-500/25 transition-all flex items-center gap-2">
                  <span>Activate Instant Settlements</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/pricing" className="px-6 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-bold text-sm border border-gray-200 transition-all">
                  Compare Settlement Cycles
                </Link>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-gray-500 font-semibold">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-600" /> T+15 Min Direct Bank Deposit</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-600" /> On-Demand Instant Withdrawal Button</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-brand-dark rounded-3xl p-6 sm:p-8 text-white border border-brand-800 shadow-2xl space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-xs font-bold text-brand-lime uppercase">Settlement Telemetry</span>
                  <span className="text-[10px] text-sky-400 bg-slate-900 px-2 py-0.5 rounded">T+15 MIN CYCLE</span>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-3 font-mono text-xs">
                  <div className="flex justify-between text-gray-400"><span>Unsettled Balance</span><span className="text-brand-lime font-bold">₹ 1,84,500.00</span></div>
                  <div className="flex justify-between text-gray-400"><span>Next Auto-Deposit</span><span className="text-white">14:15 IST (In 8 mins)</span></div>
                  <div className="flex justify-between text-gray-400"><span>Target Bank Account</span><span className="text-white">HDFC Bank ••4821</span></div>
                </div>

                <div className="p-3 bg-brand-500 rounded-xl text-center font-bold text-xs shadow-md">
                  Withdraw On-Demand to Bank Account
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
