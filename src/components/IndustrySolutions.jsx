import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  Building2, 
  GraduationCap, 
  Rocket, 
  Server,
  ArrowRight, 
  Zap, 
  Send, 
  Copy, 
  Check, 
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IndustrySolutions() {
  const [activeIndustry, setActiveIndustry] = useState('d2c');
  const [copied, setCopied] = useState(false);

  const industries = [
    { id: 'd2c', label: 'E-Commerce & D2C' },
    { id: 'bfsi', label: 'BFSI' },
    { id: 'edtech', label: 'Education & EdTech' },
    { id: 'smb', label: 'SMB & Startups' },
    { id: 'enterprise', label: 'Enterprise' },
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-[#fafbfb] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Pill Switcher (Exact Cashfree rounded pill style) */}
        <div className="flex items-center justify-center mb-10">
          <div className="bg-white/95 backdrop-blur-md p-1.5 rounded-full border border-gray-200 shadow-xl flex items-center gap-1 flex-wrap justify-center">
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveIndustry(ind.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeIndustry === ind.id 
                    ? 'bg-brand-600 text-white shadow-md font-black shadow-brand-600/30' 
                    : 'text-gray-700 hover:text-gray-950 hover:bg-gray-100'
                }`}
              >
                {ind.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Showcase Area */}
        <AnimatePresence mode="wait">
          
          {/* ==============================================================
              1. E-COMMERCE & D2C (Exact Cashfree design & visual layout)
              ============================================================== */}
          {activeIndustry === 'd2c' && (
            <motion.div
              key="d2c"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.25 }}
              className="space-y-10"
            >
              {/* Photo & Floating UI Hero Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-900 h-[460px] sm:h-[500px] lg:h-[540px]">
                
                {/* Real High-Resolution Photo Loaded Directly from Local Assets */}
                <img 
                  src={${import.meta.env.BASE_URL}images/d2c.jpg} 
                  alt="Customer holding credit card and smartphone during online shopping checkout" 
                  className="w-full h-full object-cover object-center"
                />

                {/* Soft Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/50"></div>

                {/* FLOATING UI OVERLAYS (Exact Cashfree replica) */}
                <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between pointer-events-none">
                  
                  {/* Top Right: RTO Risk Rule Toggle */}
                  <div className="flex justify-end pointer-events-auto">
                    <div className="bg-[#fef3c7]/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-amber-300 shadow-2xl flex items-center gap-3">
                      <span className="text-xs sm:text-sm font-black text-gray-950">RTO Risk Rule</span>
                      <div className="w-11 h-6 bg-brand-500 rounded-full p-0.5 flex items-center justify-end shadow-inner cursor-pointer">
                        <div className="w-5 h-5 bg-white rounded-full shadow-md"></div>
                      </div>
                    </div>
                  </div>

                  {/* Right Middle & Bottom: RTO Intelligence + Partial COD */}
                  <div className="flex flex-col items-end space-y-3 pointer-events-auto">
                    
                    {/* RTO intelligence Card */}
                    <div className="bg-gray-950/95 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-2xl space-y-3 w-64 sm:w-80">
                      <div className="flex items-center gap-2 text-xs font-black text-gray-200">
                        <Zap className="w-3.5 h-3.5 text-brand-lime" />
                        <span>RTO intelligence</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs font-bold text-center">
                        <div className="py-1.5 rounded-lg bg-white/10 text-gray-400">Low risk</div>
                        <div className="py-1.5 rounded-lg bg-brand-lime text-brand-900 shadow-md font-black">Medium risk</div>
                        <div className="py-1.5 rounded-lg bg-white/10 text-gray-400">High risk</div>
                      </div>
                    </div>

                    {/* Connecting dotted indicator */}
                    <div className="w-0.5 h-4 border-r-2 border-dashed border-white/80 mr-12"></div>

                    {/* Partial COD Card */}
                    <div className="bg-[#eff6ff]/95 backdrop-blur-md p-4 rounded-2xl border border-blue-300 shadow-2xl space-y-2.5 w-64 sm:w-80">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-black text-gray-950 flex items-center gap-1.5">
                          <ShoppingBag className="w-3.5 h-3.5 text-brand-600" /> Partial COD
                        </span>
                        <span className="text-[10px] font-black text-blue-900 bg-blue-100 px-2 py-0.5 rounded-full">
                          Unlocked
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-600 font-medium">Order total: <span className="font-bold text-gray-950">₹2,120</span></p>
                      
                      <div className="flex gap-2">
                        <button className="flex-1 py-2 rounded-xl bg-brand-700 text-white text-xs font-black shadow-md">
                          Pay ₹100 now
                        </button>
                        <div className="px-2.5 py-2 rounded-xl bg-white text-gray-700 text-[11px] font-bold border border-gray-200 flex items-center">
                          ₹2020 on delivery
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              {/* Text Description & Tag Pills */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight leading-tight">
                    Thiru Express Checkout & ShieldIQ: Built for fast-growing D2C brands.
                  </h3>
                  
                  {/* Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-extrabold border border-brand-200">
                      1-Tap Checkout
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-extrabold border border-brand-200">
                      ShieldIQ RTO Guard
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-extrabold border border-brand-200">
                      Partial COD
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-extrabold border border-brand-200">
                      Instant Refunds
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 text-gray-600 text-sm sm:text-base leading-relaxed">
                  Convert first-time visitors into prepaid customers in under 8 seconds. Our ShieldIQ intelligence flags high-risk delivery addresses, unlocks automated COD-to-prepaid incentives, and slashes RTO return losses by up to 34%.
                </div>
              </div>
            </motion.div>
          )}

          {/* ==============================================================
              2. BFSI & LENDING (Claims Disbursed & Stacked Cards)
              ============================================================== */}
          {activeIndustry === 'bfsi' && (
            <motion.div
              key="bfsi"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.25 }}
              className="space-y-10"
            >
              {/* Photo & Floating UI Hero Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-900 h-[460px] sm:h-[500px] lg:h-[540px]">
                
                {/* Real High-Resolution Photo Loaded Directly from Local Assets */}
                <img 
                  src={${import.meta.env.BASE_URL}images/bfsi.jpg} 
                  alt="Financial executives and consultants in a modern boardroom" 
                  className="w-full h-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/60"></div>

                {/* FLOATING UI OVERLAYS */}
                <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end items-end pointer-events-none">
                  
                  <div className="flex flex-col sm:flex-row gap-4 items-end pointer-events-auto">
                    
                    {/* Claims Disbursed Summary Card */}
                    <div className="bg-[#03152e]/95 backdrop-blur-md text-white p-5 rounded-3xl border border-blue-800 shadow-2xl space-y-3 w-64 sm:w-72">
                      <div className="flex items-center gap-2 text-xs font-bold text-sky-400">
                        <Send className="w-3.5 h-3.5" />
                        <span>Claims disbursed</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <p className="text-3xl font-black text-white">8,412</p>
                        <p className="text-xs text-gray-400">of 8,460 today</p>
                      </div>
                      
                      {/* Green Progress Bar */}
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-lime rounded-full" style={{ width: '92%' }}></div>
                      </div>

                      <div className="flex justify-between items-center text-[10px] text-gray-400 pt-1">
                        <span>Scheduled start:</span>
                        <span className="text-white font-mono">09:12 IST, 12 March</span>
                      </div>

                      <div className="flex gap-2 pt-1 text-[10px] font-bold">
                        <span className="bg-white/10 px-2 py-0.5 rounded text-white">In progress</span>
                        <span className="bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded border border-amber-400/40">48 in review</span>
                      </div>
                    </div>

                    {/* Stacked Claim Cards */}
                    <div className="space-y-2 w-56 sm:w-64">
                      <div className="bg-white/95 backdrop-blur-md p-2.5 rounded-2xl shadow-lg border border-gray-100 flex justify-between items-center text-xs">
                        <div>
                          <p className="text-[10px] text-gray-500 font-bold">Health Claim</p>
                          <p className="font-black text-gray-900">₹ 9,500</p>
                        </div>
                        <span className="text-[9px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                          In Review
                        </span>
                      </div>

                      <div className="bg-white/95 backdrop-blur-md p-2.5 rounded-2xl shadow-lg border border-gray-100 flex justify-between items-center text-xs">
                        <div>
                          <p className="text-[10px] text-gray-500 font-bold">Home Insurance</p>
                          <p className="font-black text-gray-900">₹ 42,800</p>
                        </div>
                        <span className="text-[9px] font-bold text-blue-900 bg-blue-100 px-2 py-0.5 rounded-full">
                          Paid
                        </span>
                      </div>

                      <div className="bg-white/95 backdrop-blur-md p-2.5 rounded-2xl shadow-lg border border-gray-100 flex justify-between items-center text-xs">
                        <div>
                          <p className="text-[10px] text-gray-500 font-bold">Travel claim</p>
                          <p className="font-black text-gray-900">₹ 6,500</p>
                        </div>
                        <span className="text-[9px] font-bold text-blue-900 bg-blue-100 px-2 py-0.5 rounded-full">
                          Paid
                        </span>
                      </div>

                      <div className="bg-white/95 backdrop-blur-md p-2.5 rounded-2xl shadow-lg border border-gray-100 flex justify-between items-center text-xs">
                        <div>
                          <p className="text-[10px] text-gray-500 font-bold">Policy refund</p>
                          <p className="font-black text-gray-900">₹ 12,500</p>
                        </div>
                        <span className="text-[9px] font-bold text-blue-900 bg-blue-100 px-2 py-0.5 rounded-full">
                          Paid
                        </span>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              {/* Text Description & Tag Pills */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight leading-tight">
                    High-Velocity Disbursals. Reliable Mandates. 100% Compliant.
                  </h3>
                  
                  {/* Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-extrabold border border-brand-200">
                      Institutional Gateway
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-extrabold border border-brand-200">
                      UPI AutoPay
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-extrabold border border-brand-200">
                      eNACH Mandates
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-extrabold border border-brand-200">
                      Realtime Payouts
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-extrabold border border-brand-200">
                      Regulatory TPV
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 text-gray-600 text-sm sm:text-base leading-relaxed">
                  BFSI demands zero transaction drops, sub-second disbursals, and airtight compliance. Disburse claims in 1.8 seconds, collect recurring EMIs on automated UPI AutoPay, and verify beneficiary legitimacy with TPV before moving capital.
                </div>
              </div>
            </motion.div>
          )}

          {/* ==============================================================
              3. EDUCATION & EDTECH (Shared Link & Fee Sheet)
              ============================================================== */}
          {activeIndustry === 'edtech' && (
            <motion.div
              key="edtech"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.25 }}
              className="space-y-10"
            >
              {/* Photo & Floating UI Hero Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-900 h-[460px] sm:h-[500px] lg:h-[540px]">
                
                {/* Real High-Resolution Photo Loaded Directly from Local Assets */}
                <img 
                  src={${import.meta.env.BASE_URL}images/edtech.jpg} 
                  alt="Father helping daughter with school homework and fee management" 
                  className="w-full h-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20"></div>

                {/* FLOATING UI OVERLAYS */}
                <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between pointer-events-none">
                  
                  {/* Top-Left: Shared Link Pill */}
                  <div className="pointer-events-auto">
                    <div className="bg-gray-950/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 shadow-2xl space-y-1.5 w-64 sm:w-72">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400">
                        <GraduationCap className="w-3.5 h-3.5 text-brand-lime" />
                        <span>Shared link</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white/10 text-white font-mono text-xs flex justify-between items-center">
                        <span className="truncate text-brand-lime">pay.niyamschool.com/fees</span>
                        <button onClick={() => handleCopy('pay.niyamschool.com/fees')}>
                          {copied ? <Check className="w-3.5 h-3.5 text-sky-400" /> : <Copy className="w-3.5 h-3.5 text-gray-400 hover:text-white" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Bottom-Left: Fee Payment Sheet */}
                  <div className="pointer-events-auto">
                    <div className="bg-white/95 backdrop-blur-md p-5 rounded-3xl border border-gray-200 shadow-2xl space-y-3 w-72 sm:w-80">
                      <div>
                        <label className="text-[10px] font-bold text-gray-500 block">Enrollment number</label>
                        <input type="text" value="2026YKP7838T" readOnly className="w-full p-2 rounded-xl bg-gray-50 border border-gray-200 text-xs font-mono font-bold" />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-gray-500 block">Fee amount</label>
                        <input type="text" value="₹ 55,500" readOnly className="w-full p-2 rounded-xl bg-gray-50 border border-gray-200 text-sm font-black text-brand-700" />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-gray-500 block">Phone number</label>
                        <input type="text" value="+91 9876 5432 10" readOnly className="w-full p-2 rounded-xl bg-gray-50 border border-gray-200 text-xs font-mono" />
                      </div>

                      <button className="w-full py-2.5 rounded-xl bg-brand-700 text-white text-xs font-black shadow-md flex items-center justify-center gap-1.5">
                        <span>Proceed to Pay</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>

              </div>

              {/* Text Description & Tag Pills */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight leading-tight">
                    From quarterly tuition to modular EMIs: modern financial rails for education.
                  </h3>
                  
                  {/* Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-extrabold border border-brand-200">
                      Tuition Gateway
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-extrabold border border-brand-200">
                      Smart Fee Forms
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-extrabold border border-brand-200">
                      Recurring Subscriptions
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-extrabold border border-brand-200">
                      Campus Split
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-extrabold border border-brand-200">
                      No-Cost EMI
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 text-gray-600 text-sm sm:text-base leading-relaxed">
                  Streamline fee reconciliation for schools, universities, and coaching institutes. Deliver WhatsApp fee notifications, provide parents zero-cost EMI plans at checkout, and automatically split collections across academic departments.
                </div>
              </div>
            </motion.div>
          )}

          {/* ==============================================================
              4. SMB & STARTUPS
              ============================================================== */}
          {activeIndustry === 'smb' && (
            <motion.div
              key="smb"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.25 }}
              className="space-y-10"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-900 h-[460px] sm:h-[500px] lg:h-[540px]">
                <img 
                  src={${import.meta.env.BASE_URL}images/smb.jpg} 
                  alt="Dynamic startup founders collaborating in modern office" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/40"></div>

                <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end items-end pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-md p-6 rounded-3xl border border-gray-200 shadow-2xl space-y-3 w-72 sm:w-80 pointer-events-auto">
                    <p className="text-xs font-black uppercase text-brand-700">Startup Zero MDR Launch</p>
                    <p className="text-3xl font-black text-gray-950">₹ 20,00,000</p>
                    <p className="text-xs text-gray-600 font-medium">Free transaction volume with zero payment gateway processing charges.</p>
                    <div className="pt-2 border-t border-gray-100 flex justify-between text-xs font-bold text-blue-700">
                      <span>✓ 10-Min Onboarding</span>
                      <span>✓ 15-Min Settlements</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight leading-tight">
                    Start taking payments in minutes. Scale into an enterprise stack as you grow.
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-extrabold border border-brand-200">
                      Instant PayLinks
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-extrabold border border-brand-200">
                      SmartForms
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-extrabold border border-brand-200">
                      15-Min Settlements
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-extrabold border border-brand-200">
                      Zero Setup Cost
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 text-gray-600 text-sm sm:text-base leading-relaxed">
                  Launch fast with paperless digital onboarding, collect online with zero developer dependencies, and access working capital on-demand with automated 15-minute bank deposits.
                </div>
              </div>
            </motion.div>
          )}

          {/* ==============================================================
              5. ENTERPRISE
              ============================================================== */}
          {activeIndustry === 'enterprise' && (
            <motion.div
              key="enterprise"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.25 }}
              className="space-y-10"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-900 h-[460px] sm:h-[500px] lg:h-[540px]">
                <img 
                  src={${import.meta.env.BASE_URL}images/enterprise.jpg} 
                  alt="Modern corporate skyscraper headquarters" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>

                <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end items-end pointer-events-none">
                  <div className="bg-[#03152e]/95 backdrop-blur-md p-6 rounded-3xl border border-blue-900 shadow-2xl space-y-3 w-72 sm:w-80 text-white font-mono text-xs pointer-events-auto">
                    <p className="text-xs font-bold text-sky-400 uppercase">High-Throughput Node Status</p>
                    <div className="space-y-1.5 text-gray-300">
                      <div className="flex justify-between"><span>Throughput Capacity</span><span className="text-sky-400 font-bold">120k TPS</span></div>
                      <div className="flex justify-between"><span>Realtime Latency</span><span className="text-sky-400 font-bold">38 ms</span></div>
                      <div className="flex justify-between"><span>Switch Uptime</span><span className="text-sky-400 font-bold">99.99%</span></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight leading-tight">
                    The mission-critical backbone powering India's high-volume enterprises.
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-extrabold border border-brand-200">
                      Dual-Active Data Centers
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-extrabold border border-brand-200">
                      Multi-Bank Auto Switch
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-extrabold border border-brand-200">
                      Dedicated Account Manager
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-extrabold border border-brand-200">
                      Custom Volume SLAs
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 text-gray-600 text-sm sm:text-base leading-relaxed">
                  Engineered for peak sales with 120,000 TPS capacity, automated bank failover routing, dual-active data centers, and ISO 27001 & PCI-DSS Level 1 certified data residency.
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
}
