import React, { useState } from 'react';
import { 
  HelpCircle, 
  Search, 
  Plus, 
  Minus, 
  ShieldCheck, 
  CreditCard, 
  Send, 
  Code2, 
  CheckCircle2 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIdx, setOpenIdx] = useState(null);

  const allFaqs = [
    {
      cat: 'general',
      q: "What is Thiru Payments and what makes it different from other payment gateways?",
      a: "Thiru Payments is an end-to-end fintech infrastructure suite providing 180+ payment modes, sub-5s native FlashUPI checkout, 24x7 instant payouts, automated eNACH/UPI AutoPay subscriptions, and AI developer toolkits with 99.99% multi-bank uptime."
    },
    {
      cat: 'pricing',
      q: "How does the zero payment gateway fee on ₹20 Lakhs GMV work?",
      a: "All new accounts onboarded on Thiru qualify for 0% MDR on their first ₹20,00,000 in domestic transaction volume. No hidden software fees or monthly minimums."
    },
    {
      cat: 'integration',
      q: "How fast can we integrate Thiru into our website or app?",
      a: "For Shopify and WooCommerce, you can install the 1-Click Thiru Plugin in under 2 minutes. For custom web/mobile apps, our clean REST APIs and SDKs (Node, Python, PHP, Go) allow developers to test in the sandbox and go live within a couple of hours."
    },
    {
      cat: 'security',
      q: "Is Thiru compliant with Reserve Bank of India (RBI) regulations?",
      a: "Yes. Thiru is certified PCI-DSS Level 1, ISO 27001, and fully complies with RBI Payment Aggregator regulations, card tokenization rules, and localized data storage mandates."
    },
    {
      cat: 'payouts',
      q: "Can we make payouts on bank holidays and weekends?",
      a: "Yes! Thiru Payouts operates 24/7/365 via direct IMPS and UPI banking rails. You can issue customer refunds, vendor splits, or payroll on holidays without bank queue delays."
    },
    {
      cat: 'international',
      q: "How do international payments work?",
      a: "Thiru accepts cards, Apple Pay, and PayPal across 140+ international currencies. Conversion to INR is handled automatically at competitive FX rates, with digital Foreign Inward Remittance Advice (FIRA) provided directly to your dashboard."
    }
  ];

  const filteredFaqs = allFaqs.filter(faq => {
    const matchesCat = activeCategory === 'all' || faq.cat === activeCategory;
    const matchesSearch = faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || faq.a.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-[#fafbfb] min-h-screen">
      
      {/* Header */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-brand-50/60 to-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-900 text-xs font-black uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" /> Support & FAQ Center
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-950 tracking-tight">
            How can we help you today?
          </h1>
          
          {/* Search Bar */}
          <div className="pt-4 max-w-xl mx-auto relative">
            <input 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search questions (e.g. settlements, UPI AutoPay, zero fee offer...)"
              className="w-full px-4 py-3.5 pl-11 rounded-2xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm font-medium"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-7" />
          </div>
        </div>
      </section>

      {/* Main FAQ List */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Categories */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
            {['all', 'general', 'pricing', 'integration', 'security', 'payouts', 'international'].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat ? 'bg-brand-500 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-gray-950 hover:text-brand-600 transition-colors"
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                      {isOpen ? <Minus className="w-4 h-4 text-brand-600" /> : <Plus className="w-4 h-4 text-gray-500" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
