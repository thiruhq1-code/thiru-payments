import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  CreditCard, 
  Zap, 
  Send, 
  RefreshCw, 
  Globe, 
  ShieldCheck, 
  Fingerprint, 
  ArrowRight, 
  ChevronDown, 
  Menu, 
  X, 
  Code2, 
  ShoppingBag, 
  Building2, 
  GraduationCap, 
  Rocket, 
  Server,
  Layers,
  Sparkles,
  Lock
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3' 
        : 'bg-white/90 backdrop-blur-sm border-b border-gray-100 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-10">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="h-12 flex items-center">
                <img 
                  src="/images/thiru-logo.png" 
                  alt="Thiru Payments Logo" 
                  className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-200" 
                />
              </div>
              <span className="text-[11px] uppercase font-black px-2 py-0.5 rounded-md bg-blue-50 text-blue-900 border border-blue-200 tracking-wider hidden sm:inline-block">
                PAYMENTS
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              
              {/* Products Mega Menu Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-gray-700 hover:text-brand-600 rounded-lg transition-colors">
                  <span>Products</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180 text-brand-600' : 'text-gray-400'}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'products' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 w-[860px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50 -ml-12 mt-1"
                    >
                      <div className="grid grid-cols-3 gap-6">
                        
                        {/* Col 1: Accept Payments */}
                        <div className="space-y-3">
                          <p className="text-[11px] font-extrabold uppercase tracking-wider text-brand-700 px-2 flex items-center gap-1.5">
                            <CreditCard className="w-3.5 h-3.5" /> Accept Payments
                          </p>
                          <div className="space-y-1">
                            <Link to="/products/payment-gateway" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-brand-50/70 transition-colors group">
                              <div className="w-8 h-8 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                                <CreditCard className="w-4 h-4" />
                              </div>
                              <div>
                                <p className="text-sm font-bold text-gray-900 group-hover:text-brand-700">Payment Gateway</p>
                                <p className="text-xs text-gray-500">180+ modes on web & app</p>
                              </div>
                            </Link>

                            <Link to="/products/flash-upi" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-brand-50/70 transition-colors group">
                              <div className="w-8 h-8 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                                <Zap className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="flex items-center gap-1.5">
                                  <p className="text-sm font-bold text-gray-900 group-hover:text-brand-700">FlashUPI</p>
                                  <span className="text-[9px] font-extrabold bg-brand-lime text-brand-900 px-1 rounded">&lt;5s</span>
                                </div>
                                <p className="text-xs text-gray-500">Native in-app UPI, zero redirect</p>
                              </div>
                            </Link>

                            <Link to="/products/subscriptions" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-brand-50/70 transition-colors group">
                              <div className="w-8 h-8 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                                <RefreshCw className="w-4 h-4" />
                              </div>
                              <div>
                                <p className="text-sm font-bold text-gray-900 group-hover:text-brand-700">Subscriptions & eNACH</p>
                                <p className="text-xs text-gray-500">UPI AutoPay & recurring mandates</p>
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* Col 2: Disburse & Settle */}
                        <div className="space-y-3">
                          <p className="text-[11px] font-extrabold uppercase tracking-wider text-brand-700 px-2 flex items-center gap-1.5">
                            <Send className="w-3.5 h-3.5" /> Disburse & Settle
                          </p>
                          <div className="space-y-1">
                            <Link to="/products/payouts" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-brand-50/70 transition-colors group">
                              <div className="w-8 h-8 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                                <Send className="w-4 h-4" />
                              </div>
                              <div>
                                <p className="text-sm font-bold text-gray-900 group-hover:text-brand-700">Thiru Payouts</p>
                                <p className="text-xs text-gray-500">24x7 instant vendor disbursals</p>
                              </div>
                            </Link>

                            <Link to="/products/global-collections" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-brand-50/70 transition-colors group">
                              <div className="w-8 h-8 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                                <Globe className="w-4 h-4" />
                              </div>
                              <div>
                                <p className="text-sm font-bold text-gray-900 group-hover:text-brand-700">Global Collections</p>
                                <p className="text-xs text-gray-500">140+ currencies with INR settlement</p>
                              </div>
                            </Link>

                            <Link to="/products/instant-settlements" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-brand-50/70 transition-colors group">
                              <div className="w-8 h-8 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                                <Zap className="w-4 h-4" />
                              </div>
                              <div>
                                <p className="text-sm font-bold text-gray-900 group-hover:text-brand-700">Instant Settlements</p>
                                <p className="text-xs text-gray-500">T+15 minutes bank settlements</p>
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* Col 3: Verification & Security */}
                        <div className="bg-brand-50/40 p-4 rounded-xl border border-brand-100 space-y-3">
                          <p className="text-[11px] font-extrabold uppercase tracking-wider text-brand-800 flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5" /> Verification & Security
                          </p>
                          <div className="space-y-2.5">
                            <Link to="/products/secure-id" className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-brand-100/50 transition-colors">
                              <ShieldCheck className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                              <div>
                                <p className="text-xs font-bold text-gray-900">SecureID & TPV</p>
                                <p className="text-[11px] text-gray-500">Instant Bank & PAN validation</p>
                              </div>
                            </Link>
                            <Link to="/products/payment-gateway" className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-brand-100/50 transition-colors">
                              <Fingerprint className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                              <div>
                                <p className="text-xs font-bold text-gray-900">Biometric Passkeys</p>
                                <p className="text-[11px] text-gray-500">Face ID card authorization</p>
                              </div>
                            </Link>
                            <div className="pt-2 border-t border-brand-200">
                              <Link to="/developers" className="inline-flex items-center gap-1 text-xs font-bold text-brand-700 hover:text-brand-800">
                                <span>Explore AI MCP & Agent Skills</span>
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Solutions Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-gray-700 hover:text-brand-600 rounded-lg transition-colors">
                  <span>Solutions</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180 text-brand-600' : 'text-gray-400'}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'solutions' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 w-[600px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 z-50 -ml-12 mt-1"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <Link to="/solutions/d2c" className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-50 transition-colors group">
                          <div className="w-9 h-9 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                            <ShoppingBag className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-950 group-hover:text-brand-700">E-Commerce & D2C</p>
                            <p className="text-xs text-gray-500">1-Click checkout & RTO Guard</p>
                          </div>
                        </Link>

                        <Link to="/solutions/bfsi" className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-50 transition-colors group">
                          <div className="w-9 h-9 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                            <Building2 className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-950 group-hover:text-brand-700">BFSI & Lending</p>
                            <p className="text-xs text-gray-500">Sub-second loan disbursals</p>
                          </div>
                        </Link>

                        <Link to="/solutions/edtech" className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-50 transition-colors group">
                          <div className="w-9 h-9 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                            <GraduationCap className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-950 group-hover:text-brand-700">Education & EdTech</p>
                            <p className="text-xs text-gray-500">Fee collection & automated splits</p>
                          </div>
                        </Link>

                        <Link to="/solutions/enterprise" className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-50 transition-colors group">
                          <div className="w-9 h-9 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                            <Server className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-950 group-hover:text-brand-700">Enterprise Platform</p>
                            <p className="text-xs text-gray-500">100k+ txns/min switch</p>
                          </div>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Developers Link */}
              <Link to="/developers" className="px-3.5 py-2 text-sm font-semibold text-gray-700 hover:text-brand-600 rounded-lg transition-colors flex items-center gap-1.5">
                <span>Developers</span>
                <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 bg-brand-lime text-brand-900 rounded-full">
                  AI READY
                </span>
              </Link>

              {/* FAQs Link */}
              <Link to="/faqs" className="px-3.5 py-2 text-sm font-semibold text-gray-700 hover:text-brand-600 rounded-lg transition-colors">
                FAQs
              </Link>

            </nav>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link to="/signin" className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-brand-600 transition-colors">
              Sign In
            </Link>
            <Link 
              to="/signup" 
              className="relative group overflow-hidden rounded-xl bg-[#08214d] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-navy-900/25 hover:bg-blue-600 hover:shadow-blue-600/30 transition-all duration-300 flex items-center gap-2"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-brand-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl overflow-hidden"
          >
            <div className="font-bold text-xs uppercase text-gray-400 px-2 pt-2">Products</div>
            <Link to="/products/payment-gateway" className="block py-1.5 px-2 text-sm font-semibold text-gray-800 hover:text-brand-600">
              Payment Gateway
            </Link>
            <Link to="/products/flash-upi" className="block py-1.5 px-2 text-sm font-semibold text-gray-800 hover:text-brand-600">
              FlashUPI (Native UPI)
            </Link>
            <Link to="/products/payouts" className="block py-1.5 px-2 text-sm font-semibold text-gray-800 hover:text-brand-600">
              Thiru Payouts (Instant Disbursals)
            </Link>
            <Link to="/products/subscriptions" className="block py-1.5 px-2 text-sm font-semibold text-gray-800 hover:text-brand-600">
              Subscriptions & eNACH
            </Link>
            <Link to="/products/global-collections" className="block py-1.5 px-2 text-sm font-semibold text-gray-800 hover:text-brand-600">
              Global Collections (140+ FX)
            </Link>
            <Link to="/products/instant-settlements" className="block py-1.5 px-2 text-sm font-semibold text-gray-800 hover:text-brand-600">
              Instant Settlements
            </Link>
            <Link to="/products/secure-id" className="block py-1.5 px-2 text-sm font-semibold text-gray-800 hover:text-brand-600">
              SecureID & TPV
            </Link>

            <div className="font-bold text-xs uppercase text-gray-400 px-2 pt-2 border-t border-gray-100">Solutions</div>
            <Link to="/solutions/d2c" className="block py-1.5 px-2 text-sm font-semibold text-gray-800 hover:text-brand-600">
              E-Commerce & D2C
            </Link>
            <Link to="/solutions/bfsi" className="block py-1.5 px-2 text-sm font-semibold text-gray-800 hover:text-brand-600">
              BFSI & Lending
            </Link>
            <Link to="/solutions/edtech" className="block py-1.5 px-2 text-sm font-semibold text-gray-800 hover:text-brand-600">
              Education & EdTech
            </Link>
            <Link to="/solutions/enterprise" className="block py-1.5 px-2 text-sm font-semibold text-gray-800 hover:text-brand-600">
              Enterprise Platform
            </Link>

            <div className="pt-2 border-t border-gray-100 space-y-1">
              <Link to="/developers" className="block py-2 px-2 text-sm font-bold text-gray-800 hover:text-brand-600">
                Developer Portal & AI MCP
              </Link>
              <Link to="/faqs" className="block py-2 px-2 text-sm font-bold text-gray-800 hover:text-brand-600">
                Frequently Asked Questions
              </Link>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
              <Link to="/signin" className="w-full text-center py-2.5 rounded-xl border border-gray-200 text-sm font-bold text-gray-700">
                Sign In
              </Link>
              <Link to="/signup" className="w-full text-center py-2.5 rounded-xl bg-brand-500 text-sm font-bold text-white shadow-md">
                Create Free Account
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
