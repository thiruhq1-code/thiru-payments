import React from 'react';
import { Star, Quote, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Switching to Thiru's native FlashUPI checkout increased our mobile conversion rate by 13.8%. The sub-second transaction routing and bank failover intelligence are leagues ahead of legacy gateways.",
      author: "Rajesh Varma",
      role: "VP of Product Engineering",
      company: "SwiftMobility",
      metric: "+13.8% Mobile Conversion"
    },
    {
      quote: "Disbursing vendor payouts and customer refunds used to stall on bank holidays. With Thiru Payouts, direct IMPS transfers hit recipient bank accounts in under 2 seconds around the clock.",
      author: "Ananya Deshmukh",
      role: "Head of Treasury & FinOps",
      company: "FinEdge Capital",
      metric: "1.8s Realtime Disbursal"
    },
    {
      quote: "We integrated Thiru's REST APIs and went live in our staging environment within 48 hours. Zero downtime during our festival flash sale while processing over 4.2 million transactions.",
      author: "Vikramaditya Rao",
      role: "Chief Technology Officer",
      company: "BharatRetail",
      metric: "4.2M+ Orders at 99.99% Uptime"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 text-brand-800 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-200">
            <Award className="w-3.5 h-3.5" /> Proven Impact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
            Performance that speaks for itself.
          </h2>
          <p className="mt-4 text-base text-gray-600">
            Discover how leading digital brands engineer higher checkout velocity and lower financial operating costs with Thiru.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#fafbfb] rounded-3xl p-8 border border-gray-100 flex flex-col justify-between space-y-6 hover:shadow-xl transition-all duration-300 relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-brand-100 text-brand-900">
                    {t.metric}
                  </span>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-200/80">
                <div className="w-10 h-10 rounded-full bg-brand-500 text-brand-lime flex items-center justify-center font-black text-xs shadow-md">
                  {t.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-950">{t.author}</p>
                  <p className="text-xs text-gray-500">{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
