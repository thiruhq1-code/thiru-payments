import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Server, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Headphones, 
  Sliders,
  Cpu
} from 'lucide-react';

export default function EnterprisePage() {
  return (
    <div className="bg-[#fafbfb] min-h-screen">
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-brand-50/50 via-white to-[#fafbfb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-900 text-xs font-black uppercase tracking-wider">
                <Server className="w-3.5 h-3.5" /> 100,000+ Transactions Per Minute
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-tight">
                The high-throughput engine <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-600 to-blue-600">under India's largest brands.</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Direct in-house banking switches, automated zero-downtime failover, custom reconciliation data pipelines, dedicated technical account managers, and custom 99.99% SLAs.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/signup" className="px-7 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-black text-sm shadow-xl shadow-brand-500/25 transition-all flex items-center gap-2">
                  <span>Contact Enterprise Architects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/developers" className="px-6 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-bold text-sm border border-gray-200 transition-all">
                  Enterprise Specs
                </Link>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-gray-500 font-semibold">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-600" /> Dedicated Technical Account Director</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-600" /> 99.99% Contractual SLA Guarantee</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-brand-dark rounded-3xl p-6 sm:p-8 text-white border border-brand-800 shadow-2xl space-y-4 font-mono text-xs">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-xs font-bold text-brand-lime uppercase">Enterprise Switch Topology</span>
                  <span className="text-[10px] text-sky-400 bg-slate-900 px-2 py-0.5 rounded">12 CORE NODES</span>
                </div>

                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-2">
                  <div className="flex justify-between text-gray-400"><span>Switch Peak Capacity</span><span className="text-brand-lime font-bold">120,000 TPS</span></div>
                  <div className="flex justify-between text-gray-400"><span>Average Latency</span><span className="text-brand-lime font-bold">38 ms</span></div>
                  <div className="flex justify-between text-gray-400"><span>Redundant Availability Zones</span><span className="text-white">3 (Multi-Region)</span></div>
                  <div className="flex justify-between text-gray-400"><span>Custom Encryption Key (BYOK)</span><span className="text-brand-lime font-bold">Supported</span></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
