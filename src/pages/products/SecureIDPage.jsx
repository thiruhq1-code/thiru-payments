import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Fingerprint, 
  FileCheck, 
  Search,
  UserCheck,
  Building2,
  Lock
} from 'lucide-react';

export default function SecureIDPage() {
  return (
    <div className="bg-[#fafbfb] min-h-screen">
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-brand-50/50 via-white to-[#fafbfb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-900 text-xs font-black uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" /> Instant KYC & Verification Suite
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-tight">
                Penny Drop & TPV. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-600 to-blue-600">Verify before money moves.</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Validate bank account holder names with instant penny-drop verification. Conduct real-time PAN, GSTIN, Aadhaar KYC, and Third-Party Verification (TPV) for mutual funds and lending compliance.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/signup" className="px-7 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-black text-sm shadow-xl shadow-brand-500/25 transition-all flex items-center gap-2">
                  <span>Start Free Verification Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/developers" className="px-6 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-bold text-sm border border-gray-200 transition-all">
                  Verification API Docs
                </Link>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-gray-500 font-semibold">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-600" /> Penny Drop & Reverse Penny Drop</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-600" /> SEBI & RBI TPV Compliant</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-brand-dark rounded-3xl p-6 sm:p-8 text-white border border-brand-800 shadow-2xl space-y-4 font-mono text-xs">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-xs font-bold text-brand-lime uppercase">Penny Drop Live Probe</span>
                  <span className="text-[10px] text-sky-400 bg-slate-900 px-2 py-0.5 rounded">API 200 OK</span>
                </div>

                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-2">
                  <div className="flex justify-between text-gray-400"><span>Target Bank IFSC</span><span className="text-white">HDFC0000128</span></div>
                  <div className="flex justify-between text-gray-400"><span>Target Account</span><span className="text-white">50100492819201</span></div>
                  <div className="flex justify-between text-gray-400"><span>Beneficiary Name</span><span className="text-brand-lime font-bold">THIRUNAVUKKARASU S</span></div>
                  <div className="flex justify-between text-gray-400"><span>Fuzzy Match Score</span><span className="text-brand-lime font-bold">99.4% [MATCH]</span></div>
                </div>

                <div className="p-3 bg-black/60 rounded-xl space-y-1 text-sky-400 text-[11px]">
                  <p>&gt; Penny Deposit (₹1.00): Dispatched</p>
                  <p>&gt; Bank Response Time: 0.72 Seconds</p>
                  <p>&gt; Verification Status: VALIDATED</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
