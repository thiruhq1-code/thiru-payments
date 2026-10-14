import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Send, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Building,
  RefreshCw,
  Sliders,
  DollarSign
} from 'lucide-react';

export default function PayoutsPage() {
  return (
    <div className="bg-[#fafbfb] min-h-screen">
      
      {/* Hero */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-brand-50/50 via-white to-[#fafbfb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-900 text-xs font-black uppercase tracking-wider">
                <Send className="w-3.5 h-3.5" /> 24/7/365 Automated Disbursals
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-tight">
                Disburse instantly. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-600 to-blue-600">Bank accounts, UPI & cards.</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Automate vendor bill payments, employee salaries, gaming prize withdrawals, marketplace seller splits, and instant refund processing via simple REST APIs.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/signup" className="px-7 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-black text-sm shadow-xl shadow-brand-500/25 transition-all flex items-center gap-2">
                  <span>Start Sending Payouts</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/developers" className="px-6 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-bold text-sm border border-gray-200 transition-all">
                  Payouts API Docs
                </Link>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-gray-500 font-semibold">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-600" /> Instant IMPS, NEFT, RTGS & UPI</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-600" /> Smart Penny Drop Verification</span>
              </div>
            </div>

            {/* Payout Telemetry Card */}
            <div className="lg:col-span-5">
              <div className="bg-brand-dark rounded-3xl p-6 sm:p-8 text-white border border-brand-800 shadow-2xl space-y-4 font-mono text-xs">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-xs font-bold text-brand-lime uppercase">Batch Payout Dispatcher</span>
                  <span className="text-[10px] text-sky-400 bg-slate-900 px-2 py-0.5 rounded">ONLINE</span>
                </div>

                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-2">
                  <div className="flex justify-between text-gray-400"><span>Batch ID</span><span className="text-white">BATCH_2026_994</span></div>
                  <div className="flex justify-between text-gray-400"><span>Total Transfers</span><span className="text-brand-lime font-bold">1,250 Beneficiaries</span></div>
                  <div className="flex justify-between text-gray-400"><span>Total Value</span><span className="text-brand-lime font-bold">₹ 42,50,000.00</span></div>
                  <div className="flex justify-between text-gray-400"><span>Dispatch Time</span><span className="text-white">1.2 Seconds</span></div>
                </div>

                <div className="p-3 bg-black/60 rounded-xl space-y-1 text-[11px] text-sky-400">
                  <p>&gt; Pre-Flight Penny Drop: 100% Validated</p>
                  <p>&gt; Multi-Bank Router: Auto-balanced across Axis & ICICI nodes</p>
                  <p>&gt; Status: 1,250 / 1,250 PROCESSED (100% Success)</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950">
              Built for every money movement scenario
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#fafbfb] border border-gray-200 space-y-3">
              <Zap className="w-8 h-8 text-brand-600" />
              <h3 className="text-xl font-bold text-gray-950">Instant E-Commerce Refunds</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Delight customers by issuing instant source refunds or UPI refunds in seconds, boosting repeat purchase retention.</p>
            </div>

            <div className="p-8 rounded-3xl bg-[#fafbfb] border border-gray-200 space-y-3">
              <Building className="w-8 h-8 text-brand-600" />
              <h3 className="text-xl font-bold text-gray-950">Vendor & Marketplace Payouts</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Split commissions and disburse to thousands of vendors with automated TDS deduction and maker-checker approval workflows.</p>
            </div>

            <div className="p-8 rounded-3xl bg-[#fafbfb] border border-gray-200 space-y-3">
              <Clock className="w-8 h-8 text-brand-600" />
              <h3 className="text-xl font-bold text-gray-950">Salary & Partner Incentives</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Pay full-time employees, gig workers, and affiliate creators 24x7 without manual bank upload delays.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
