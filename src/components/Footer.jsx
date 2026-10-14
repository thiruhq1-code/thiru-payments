import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Lock, Globe, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  return (
    <>
      {/* Pre-Footer High Impact CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-[#04132b] via-[#08214d] to-[#04132b] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-400 text-slate-950 text-xs font-black uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Ready to go live in 10 minutes
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Empower your business with next-generation payments.
          </h2>
          <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto font-normal">
            Join 250,000+ forward-thinking merchants scaling high-speed collections, instant payouts, and cross-border expansion with Thiru Payments.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/signup" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-sky-400 hover:bg-white text-slate-950 hover:text-navy-900 font-black text-base shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Create Free Account</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/developers" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 transition-colors flex items-center justify-center gap-2"
            >
              <Terminal className="w-4 h-4" />
              <span>Explore Developer Docs</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#020b18] text-gray-400 text-xs pt-16 pb-12 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-white/10">
            
            {/* Brand column */}
            <div className="col-span-2 space-y-4">
              <Link to="/" className="inline-block">
                <div className="bg-white px-3 py-1.5 rounded-xl inline-flex items-center shadow-md hover:opacity-95 transition-opacity">
                 <img src={`${import.meta.env.BASE_URL}images/thiru-logo.png`} alt="Thiru Logo" className="h-7 sm:h-8 w-auto object-contain" />
                </div>
              </Link>
              <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
                Thiru is an institutional-grade financial infrastructure platform empowering Indian businesses to collect online payments, automate round-the-clock payouts, and secure transactions with intelligent risk rules.
              </p>
              <div className="flex items-center gap-2 pt-1 text-xs text-sky-400">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                <span>System Status: All Multi-Bank Nodes Operational (99.99%)</span>
              </div>
            </div>

            {/* Col 2: Accept Payments */}
            <div className="space-y-3">
              <p className="font-bold text-white uppercase tracking-wider text-xs">Accept Payments</p>
              <ul className="space-y-2">
                <li><Link to="/products/payment-gateway" className="hover:text-sky-300 transition-colors">Payment Gateway</Link></li>
                <li><Link to="/products/flash-upi" className="hover:text-sky-300 transition-colors">FlashUPI Checkout</Link></li>
                <li><Link to="/solutions/d2c" className="hover:text-sky-300 transition-colors">One Click Checkout</Link></li>
                <li><Link to="/products/subscriptions" className="hover:text-sky-300 transition-colors">Subscriptions & eNACH</Link></li>
                <li><Link to="/products/global-collections" className="hover:text-sky-300 transition-colors">Cross-Border FX</Link></li>
              </ul>
            </div>

            {/* Col 3: Disburse & Verify */}
            <div className="space-y-3">
              <p className="font-bold text-white uppercase tracking-wider text-xs">Disburse & Verify</p>
              <ul className="space-y-2">
                <li><Link to="/products/payouts" className="hover:text-sky-300 transition-colors">Thiru Instant Payouts</Link></li>
                <li><Link to="/products/instant-settlements" className="hover:text-sky-300 transition-colors">Instant Settlements</Link></li>
                <li><Link to="/products/secure-id" className="hover:text-sky-300 transition-colors">Penny Drop Bank Verify</Link></li>
                <li><Link to="/products/secure-id" className="hover:text-sky-300 transition-colors">SecureID & TPV</Link></li>
                <li><Link to="/products/payment-gateway" className="hover:text-sky-300 transition-colors">Biometric Passkeys</Link></li>
              </ul>
            </div>

            {/* Col 4: Developers & Resources */}
            <div className="space-y-3">
              <p className="font-bold text-white uppercase tracking-wider text-xs">Developers & AI</p>
              <ul className="space-y-2">
                <li><Link to="/developers" className="hover:text-sky-300 transition-colors">REST API Reference</Link></li>
                <li><Link to="/developers" className="hover:text-sky-300 transition-colors">AI Agent Skills (MCP)</Link></li>
                <li><Link to="/pricing" className="hover:text-sky-300 transition-colors">Pricing & Fee Tiers</Link></li>
                <li><Link to="/faqs" className="hover:text-sky-300 transition-colors">FAQs & Support</Link></li>
                <li><Link to="/developers" className="hover:text-sky-300 transition-colors">Sandbox Simulator</Link></li>
              </ul>
            </div>

          </div>

          {/* Copyright & Badges */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-[11px]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              <span>© 2026 Thiru Payments Private Limited. All rights reserved. PCI-DSS Level 1 & ISO 27001 Certified.</span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/faqs" className="hover:text-gray-400">Privacy Policy</Link>
              <Link to="/faqs" className="hover:text-gray-400">Terms of Service</Link>
              <Link to="/faqs" className="hover:text-gray-400">RBI Compliance</Link>
              <Link to="/faqs" className="hover:text-gray-400">Grievance Redressal</Link>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
