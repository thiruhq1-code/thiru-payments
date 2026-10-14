import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What is Thiru Payments and how do I get started?",
      a: "Thiru Payments is an end-to-end payment and disbursal infrastructure platform. You can create a free account, complete digital paperless KYC in under 10 minutes, and start accepting payments via Payment Links, Shopify 1-Click app, or clean REST APIs immediately."
    },
    {
      q: "How does the 0% fee on the first ₹20 Lakhs GMV work?",
      a: "All new business accounts automatically qualify for 0% payment gateway processing charges on their first ₹20,00,000 in domestic transactions. There are no hidden fees, minimum monthly balances, or lock-in periods."
    },
    {
      q: "What payment rails and methods are supported?",
      a: "Thiru supports 180+ payment methods including FlashUPI, Google Pay, PhonePe, Paytm, CRED, all major Visa, Mastercard, RuPay & Amex cards, 50+ Netbanking banks, PayLater (Simpl, LazyPay), cardless EMI, and 140+ international currencies via Apple Pay and PayPal."
    },
    {
      q: "How fast are settlements processed into our bank account?",
      a: "Standard settlements are processed on T+1 (next business day). With Thiru Instant Settlements enabled, funds can be deposited automatically within 15 minutes, 24x7x365 including bank holidays and weekends."
    },
    {
      q: "Is Thiru compliant with RBI and PCI-DSS regulations?",
      a: "Yes. Thiru is certified PCI-DSS Level 1 compliant, ISO 27001 certified, and strictly adheres to Reserve Bank of India (RBI) payment aggregator regulations, card tokenization mandates, and local data residency standards."
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#fafbfb] border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">
            Got questions? We have answers.
          </h2>
        </div>

        {/* Accordion Group */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-gray-200/90 overflow-hidden shadow-sm transition-shadow"
              >
                <button
                  onClick={() => toggleFaq(idx)}
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
                      transition={{ duration: 0.2 }}
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
  );
}
