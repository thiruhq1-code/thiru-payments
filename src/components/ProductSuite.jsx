import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  Zap, 
  Send, 
  RefreshCw, 
  Globe2, 
  ShieldCheck, 
  ArrowRight, 
  ArrowUpRight, 
  Smartphone, 
  Lock, 
  CheckCircle2, 
  Copy, 
  Sparkles,
  TrendingUp,
  MessageCircle,
  FileText,
  DollarSign,
  Clock,
  ChevronRight,
  Building2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductSuite() {
  const [activeCategory, setActiveCategory] = useState('collect');

  const categories = [
    { id: 'collect', label: 'Collect' },
    { id: 'global', label: 'Go Global' },
    { id: 'identity', label: 'Identity & Risk' },
    { id: 'ai', label: 'Built for AI' },
    { id: 'disburse', label: 'Disburse' },
  ];

  return (
    <section id="products" className="py-20 lg:py-28 bg-[#fafbfb] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-tight">
            Engineered to capture every transaction. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-600 via-blue-600 to-sky-500">
              Web, Mobile, In-Store & Chat.
            </span>
          </h2>
        </div>

        {/* Floating Category Pill Switcher (Exact Cashfree design) */}
        <div className="flex items-center justify-center mb-14">
          <div className="bg-white/90 backdrop-blur-md p-1.5 rounded-full border border-gray-200 shadow-xl flex items-center gap-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-brand-500 text-white shadow-md shadow-brand-500/30' 
                    : 'text-gray-700 hover:text-gray-950 hover:bg-gray-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ==============================================================
            BENTO SHOWCASE CONTAINER (Switchable by Category)
            ============================================================== */}
        <AnimatePresence mode="wait">
          
          {/* 1. COLLECT TAB */}
          {activeCategory === 'collect' && (
            <motion.div 
              key="collect"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              {/* Row 1: Thiru Checkout & Payment Gateway */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Card 1: Thiru Checkout (Soft Blue) */}
                <div className="lg:col-span-6 bg-[#e0f2fe] rounded-3xl p-8 sm:p-10 border border-sky-200 flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="space-y-3 z-10">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl sm:text-3xl font-black text-gray-950">Thiru SwiftCheckout</h3>
                      <Link to="/products/payment-gateway" className="w-9 h-9 rounded-full bg-white text-gray-800 flex items-center justify-center shadow-md group-hover:bg-brand-500 group-hover:text-white transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed max-w-md">
                      Sub-120ms load latency, automatic device card tokenization, and 1-tap FlashUPI completion that drives payment success rates over 94%.
                    </p>
                  </div>

                  {/* Phone Mockup */}
                  <div className="mt-8 pt-4 flex items-center justify-center relative">
                    <div className="w-64 sm:w-72 bg-white rounded-3xl p-4 shadow-2xl border-4 border-gray-900 space-y-3 relative transform group-hover:scale-105 transition-transform duration-300">
                      
                      {/* Phone Dynamic Island */}
                      <div className="w-16 h-3 bg-gray-900 rounded-full mx-auto"></div>

                      <div className="flex justify-between items-center text-xs pb-2 border-b border-gray-100">
                        <span className="font-bold text-gray-800">UrbanCraft Studio</span>
                        <span className="font-black text-gray-950">₹ 1,530</span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-brand-50 border border-brand-200 flex justify-between items-center">
                        <span className="text-[11px] font-bold text-brand-800">15% OFF Applied</span>
                        <span className="text-[10px] font-black text-white bg-brand-600 px-1.5 py-0.5 rounded">SAVED</span>
                      </div>

                      {/* Product items */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-1.5 rounded-lg bg-gray-50 text-center text-[10px] text-gray-600 font-bold">Plate Set<br/><span className="text-gray-900">₹230</span></div>
                        <div className="p-1.5 rounded-lg bg-gray-50 text-center text-[10px] text-gray-600 font-bold">Coaster Set<br/><span className="text-gray-900">₹450</span></div>
                        <div className="p-1.5 rounded-lg bg-gray-50 text-center text-[10px] text-gray-600 font-bold">Ceramic Mug<br/><span className="text-gray-900">₹850</span></div>
                      </div>

                      {/* Floating pill badge */}
                      <div className="absolute -left-4 bottom-6 bg-brand-900 text-white px-3 py-1 rounded-full text-[10px] font-black shadow-lg flex items-center gap-1 border border-brand-lime">
                        <Zap className="w-3 h-3 text-brand-lime" /> Faster Checkout
                      </div>

                      <div className="absolute -right-4 top-12 bg-black/85 text-white px-2.5 py-1 rounded-xl text-[10px] font-mono shadow-lg border border-white/20">
                        Conversion: <span className="text-brand-lime font-bold">68.4%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Payment Gateway (Soft Mint Green) */}
                <div className="lg:col-span-6 bg-[#f0f6ff] rounded-3xl p-8 sm:p-10 border border-blue-200 flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="space-y-3 z-10">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl sm:text-3xl font-black text-gray-950">Thiru Unified Gateway</h3>
                      <Link to="/products/payment-gateway" className="w-9 h-9 rounded-full bg-white text-gray-800 flex items-center justify-center shadow-md group-hover:bg-brand-500 group-hover:text-white transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed max-w-md">
                      Seamless collections across 180+ payment rails: FlashUPI, Cards, NetBanking, and PayLater. Proprietary multi-bank redundancy ensures industry-leading authorization rates.
                    </p>
                  </div>

                  {/* Payment Badges Grid */}
                  <div className="mt-8 pt-4 grid grid-cols-3 gap-3">
                    <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 flex items-center justify-center text-center font-black text-blue-800 text-base">
                      VISA
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 flex items-center justify-center text-center font-black text-blue-700 text-sm gap-1.5">
                      <CreditCard className="w-4 h-4" /> Cards
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 flex items-center justify-center text-center font-black text-sky-600 text-sm">
                      Paytm
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 flex items-center justify-center text-center font-black text-green-700 text-sm">
                      RuPay
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 flex items-center justify-center text-center font-black text-brand-900 text-xs gap-1">
                      <Building2 className="w-3.5 h-3.5" /> Net Banking
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 flex items-center justify-center text-center font-black text-orange-600 text-sm">
                      Mastercard
                    </div>
                  </div>
                </div>

              </div>

              {/* Row 2: Subscriptions & Payment Links */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Card 3: Subscriptions (Soft Pink) */}
                <div className="lg:col-span-5 bg-[#fce7f3] rounded-3xl p-8 border border-pink-200 flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-black text-gray-950">Thiru AutoDebit</h3>
                      <Link to="/products/subscriptions" className="w-8 h-8 rounded-full bg-white text-gray-800 flex items-center justify-center shadow-sm group-hover:bg-brand-500 group-hover:text-white transition-colors">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      Set up recurring billing in minutes. Customers approve once via UPI AutoPay, cards or eNACH, while our intelligent retry engine recovers soft declines automatically.
                    </p>
                  </div>

                  {/* Recurring Card Mockup */}
                  <div className="mt-6 bg-white rounded-2xl p-4 shadow-lg border border-pink-100 space-y-3">
                    <div className="flex justify-between items-center text-xs font-bold text-gray-700">
                      <span>Recurring Mandate</span>
                      <span className="text-[10px] text-gray-500 font-mono flex items-center gap-1"><RefreshCw className="w-3 h-3" /> Monthly</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-brand-900 text-white flex items-center justify-between text-xs font-bold">
                      <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-brand-lime" /> Google Pay</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-between text-xs font-bold text-gray-800">
                      <span>PhonePe</span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="flex justify-between text-[11px] text-gray-500 pt-1">
                      <span>Next billing: Oct 15, 2026</span>
                      <span className="font-bold text-gray-900">₹ 2,499.00</span>
                    </div>
                  </div>
                </div>

                {/* Card 4: Payment Links (no-code, Soft Blue) */}
                <div className="lg:col-span-7 bg-[#eff6ff] rounded-3xl p-8 border border-blue-200 flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-black text-gray-950">Thiru Instant PayLinks</h3>
                      <Link to="/products/payment-gateway" className="w-8 h-8 rounded-full bg-white text-gray-800 flex items-center justify-center shadow-sm group-hover:bg-brand-500 group-hover:text-white transition-colors">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      Collect payments across WhatsApp, SMS, or digital invoices with a single link. No coding, no website required.
                    </p>
                  </div>

                  {/* WhatsApp Chat Message Mockup */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    
                    {/* Share Link Card */}
                    <div className="bg-white rounded-2xl p-4 shadow-md border border-blue-100 space-y-2">
                      <p className="text-[11px] font-bold text-gray-500">Secure link generated</p>
                      <div className="p-2 rounded-xl bg-gray-900 text-white font-mono text-xs flex justify-between items-center">
                        <span className="truncate text-sky-400">pay.thirupayments.com/inv-8921</span>
                        <Copy className="w-3.5 h-3.5 text-gray-400" />
                      </div>
                    </div>

                    {/* WhatsApp Bubble */}
                    <div className="bg-[#e0f2fe] p-3.5 rounded-2xl shadow-md text-xs text-gray-800 space-y-2 border border-blue-200">
                      <p className="font-bold text-gray-900">Thiru Collections</p>
                      <p className="text-[11px] leading-relaxed">
                        Hi Kunal, your order #TH-8921 is ready for dispatch. Complete your payment in 1-tap using the secure link below:
                      </p>
                      <span className="text-[11px] font-bold text-blue-700 underline block">pay.thirupayments.com/inv-8921</span>
                    </div>

                  </div>
                </div>

              </div>

              {/* Row 3: Payment Forms & Instant Settlements */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Card 5: Payment Forms */}
                <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-gray-200 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-black text-gray-950">Thiru SmartForms</h3>
                      <Link to="/products/payment-gateway" className="w-8 h-8 rounded-full bg-gray-100 text-gray-800 flex items-center justify-center shadow-sm hover:bg-brand-500 hover:text-white transition-colors">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Custom branded forms to collect customer orders, donations, and event registrations with automated invoicing built in. Zero code required.
                    </p>
                  </div>

                  {/* Form Mockup */}
                  <div className="mt-6 bg-[#f8fafc] rounded-2xl p-4 border border-gray-200 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center">T</div>
                      <span className="text-xs font-bold text-gray-900">Heritage Foundation</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <label className="text-[10px] text-gray-500 font-bold block">Phone Number</label>
                        <input type="text" value="+91 9876 5432 10" readOnly className="w-full p-2 rounded-lg bg-white border border-gray-200 text-xs font-mono" />
                      </div>
                      <div>
                        <label className="text-[10px] text-gray-500 font-bold block">Contributor Name</label>
                        <input type="text" value="Samar Ahuja" readOnly className="w-full p-2 rounded-lg bg-white border border-gray-200 text-xs" />
                      </div>
                    </div>
                    <button className="w-full py-2.5 rounded-xl bg-[#08214d] hover:bg-blue-600 text-white text-xs font-bold shadow-md transition-colors">
                      Proceed to Pay ₹ 1,500 &rarr;
                    </button>
                  </div>
                </div>

                {/* Card 6: Instant Settlements */}
                <div className="lg:col-span-6 bg-[#03152e] text-white rounded-3xl p-8 border border-blue-900/50 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-black text-white">Thiru Instant Liquidity</h3>
                      <Link to="/products/instant-settlements" className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center shadow-sm hover:bg-brand-500 transition-colors">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      Receive sales proceeds in your bank account in 15 minutes, 24x7x365. Never wait for bank working days or T+2 settlement queues.
                    </p>
                  </div>

                  {/* Settlement Badges */}
                  <div className="mt-6 space-y-2">
                    <div className="p-3 bg-white/10 rounded-2xl border border-white/10 flex justify-between items-center text-xs">
                      <div>
                        <p className="font-bold text-white">₹ 2,450.00</p>
                        <p className="text-[10px] text-gray-400 font-mono">priya@okhdfcbank</p>
                      </div>
                      <span className="text-[10px] font-black text-sky-400 bg-slate-900 px-2 py-1 rounded-full border border-blue-700">
                        Settled in 3 mins
                      </span>
                    </div>

                    <div className="p-3 bg-white/10 rounded-2xl border border-white/10 flex justify-between items-center text-xs">
                      <div>
                        <p className="font-bold text-white">$ 1,800.00</p>
                        <p className="text-[10px] text-gray-400 font-mono">Cross-border FX</p>
                      </div>
                      <span className="text-[10px] font-black text-brand-lime bg-slate-900 px-2 py-1 rounded-full border border-blue-700">
                        Settled in 22 mins
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </motion.div>
          )}

          {/* 2. GO GLOBAL TAB */}
          {activeCategory === 'global' && (
            <motion.div 
              key="global"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
                <h3 className="text-3xl font-black text-gray-950">Thiru GlobalTrade: Borderless Collections</h3>
                <p className="text-sm text-gray-600">Accept 140+ international currencies from global buyers with automated digital FIRA generation and competitive FX settlement in INR.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Device: International Payment Gateway */}
                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-bold text-gray-950">Global Multi-Currency Gateway</h4>
                      <p className="text-xs text-gray-500">Collect cards & Apple Pay worldwide</p>
                    </div>
                    <span className="text-xs font-black text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">140+ Currencies</span>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 space-y-3 font-mono text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Amount Due</span>
                      <span className="text-lg font-black text-gray-950">$ 1,680.00 USD</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-gray-200 space-y-2">
                      <p className="font-bold text-gray-800">Card Information (Amex, Visa, Master)</p>
                      <input type="text" value="3782 •••••• 0005" readOnly className="w-full p-2 bg-gray-50 rounded border text-xs" />
                    </div>
                    <button className="w-full py-3 rounded-xl bg-black text-white font-bold flex items-center justify-center gap-2">
                      <span>Pay with Apple Pay</span>
                    </button>
                  </div>
                </div>

                {/* Right Device: Sell into India */}
                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-bold text-gray-950">Global Merchants Inbound India</h4>
                      <p className="text-xs text-gray-500">Cross-border travel, hospitality & SaaS</p>
                    </div>
                    <span className="text-xs font-black text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">UPI Ready</span>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 space-y-3 text-xs">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold text-gray-900">The Grand Horizon Resort</p>
                        <p className="text-[10px] text-gray-500">Santorini, Greece • Oct 12 - Oct 16</p>
                      </div>
                      <span className="text-lg font-black text-blue-700">₹ 32,800.00</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      <div className="p-2 bg-white rounded-lg border text-center font-bold">UPI</div>
                      <div className="p-2 bg-white rounded-lg border text-center font-bold">Net Banking</div>
                      <div className="p-2 bg-white rounded-lg border text-center font-bold">Cards</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* 3. IDENTITY & RISK TAB */}
          {activeCategory === 'identity' && (
            <motion.div 
              key="identity"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-950">Account Penny Drop</h3>
                <p className="text-xs text-gray-600 leading-relaxed">Automated micro-deposit probe verifying recipient bank account validity and legal account name matching with 99.8% precision.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
                <Lock className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-950">Third Party Verification (TPV)</h3>
                <p className="text-xs text-gray-600 leading-relaxed">RBI & SEBI compliant mandate matching verifying mutual fund, insurance, and lending transactions originate from verified investor accounts.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
                <Zap className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-950">Thiru RiskShield AI</h3>
                <p className="text-xs text-gray-600 leading-relaxed">Real-time fraud scoring, anomaly detection, and automated RTO return prediction before goods are packed and dispatched.</p>
              </div>
            </motion.div>
          )}

          {/* 4. BUILT FOR AI TAB */}
          {activeCategory === 'ai' && (
            <motion.div 
              key="ai"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.25 }}
              className="bg-[#030f24] text-white p-8 sm:p-12 rounded-3xl border border-brand-800 shadow-2xl space-y-6"
            >
              <div className="max-w-2xl space-y-3">
                <span className="text-xs font-black uppercase text-brand-lime bg-white/10 px-3 py-1 rounded-full">
                  AI Agent MCP Toolkit
                </span>
                <h3 className="text-3xl font-black text-white">Wire up payments directly from your AI Assistant</h3>
                <p className="text-sm text-gray-300">
                  Thiru provides official skills and tools for Cursor, Claude Code, GitHub Copilot, LangChain, and OpenAI.
                </p>
              </div>

              <div className="p-4 bg-black/80 rounded-2xl font-mono text-xs text-brand-lime border border-white/15">
                <code>npx @thiru/agent-skills init</code>
              </div>
            </motion.div>
          )}

          {/* 5. DISBURSE TAB */}
          {activeCategory === 'disburse' && (
            <motion.div 
              key="disburse"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-xl space-y-6"
            >
              <div className="max-w-2xl space-y-3">
                <span className="text-xs font-black uppercase text-brand-700 bg-brand-50 px-3 py-1 rounded-full">
                  24x7x365 Instant Payouts
                </span>
                <h3 className="text-3xl font-black text-gray-950">Disburse 10,000+ transfers in seconds</h3>
                <p className="text-sm text-gray-600">
                  Automate bulk disbursements for vendor payments, refunds, employee salaries, and gaming winnings via IMPS and UPI rails.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-brand-50 border border-brand-200 text-center">
                  <p className="text-2xl font-black text-brand-700">1.2 sec</p>
                  <p className="text-xs text-gray-600 font-bold">Average Disbursal Latency</p>
                </div>
                <div className="p-4 rounded-2xl bg-brand-50 border border-brand-200 text-center">
                  <p className="text-2xl font-black text-brand-700">99.98%</p>
                  <p className="text-xs text-gray-600 font-bold">IMPS & UPI Success Rate</p>
                </div>
                <div className="p-4 rounded-2xl bg-brand-50 border border-brand-200 text-center">
                  <p className="text-2xl font-black text-brand-700">24 / 7 / 365</p>
                  <p className="text-xs text-gray-600 font-bold">Bank Holiday Operations</p>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
}
