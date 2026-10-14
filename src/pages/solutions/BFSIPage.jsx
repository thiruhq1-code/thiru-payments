import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Send, 
  RefreshCw, 
  Lock,
  Zap
} from 'lucide-react';

export default function BFSIPage() {
  return (
    <div className="bg-[#fafbfb] min-h-screen">
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-brand-50/50 via-white to-[#fafbfb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-900 text-xs font-black uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" /> BFSI & Fintech Infrastructure
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-tight">
                Disburse in seconds. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-600 to-blue-600">Collect EMIs on schedule.</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Empower NBFCs, digital lenders, mutual fund platforms, and wealthtech apps with sub-second loan disbursements, eNACH/UPI AutoPay EMI collection, and SEBI/RBI compliant TPV.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/signup" className="px-7 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-black text-sm shadow-xl shadow-brand-500/25 transition-all flex items-center gap-2">
                  <span>Connect with BFSI Specialist</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/developers" className="px-6 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-bold text-sm border border-gray-200 transition-all">
                  Read Compliance Specs
                </Link>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-gray-500 font-semibold">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-600" /> TPV Multi-Bank Name Matching</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-600" /> 24/7/365 IMPS Disbursal Engine</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-brand-dark rounded-3xl p-6 sm:p-8 text-white border border-brand-800 shadow-2xl space-y-4 font-mono text-xs">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-xs font-bold text-brand-lime uppercase">Loan Disbursal & EMI Flow</span>
                  <span className="text-[10px] text-sky-400 bg-slate-900 px-2 py-0.5 rounded">COMPLIANT</span>
                </div>

                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-2">
                  <div className="flex justify-between text-gray-400"><span>1. Account Validation</span><span className="text-brand-lime">Penny Drop Confirmed</span></div>
                  <div className="flex justify-between text-gray-400"><span>2. TPV Name Matching</span><span className="text-brand-lime">99.8% Match</span></div>
                  <div className="flex justify-between text-gray-400"><span>3. Loan Disbursal</span><span className="text-white">₹ 1,50,000 in 1.4s</span></div>
                  <div className="flex justify-between text-gray-400"><span>4. EMI Mandate Setup</span><span className="text-brand-lime">UPI AutoPay Active</span></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
