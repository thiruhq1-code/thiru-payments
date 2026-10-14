import React from 'react';
import { Link } from 'react-router-dom';
import PricingCalculator from '../components/PricingCalculator';
import { 
  Check, 
  ArrowRight, 
  HelpCircle, 
  Zap, 
  ShieldCheck, 
  Calculator,
  Sparkles
} from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="bg-[#fafbfb] min-h-screen">
      
      {/* Header */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-brand-50/60 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-900 text-xs font-black uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" /> Transparent Pricing
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-950 tracking-tight">
            Simple, transparent pricing. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-600 to-blue-600">No hidden surprises.</span>
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Get started with 0% gateway fee on your first ₹20,00,000 in transaction volume. Pay only for what you process.
          </p>
        </div>
      </section>

      {/* Main Pricing & Calculator Component */}
      <PricingCalculator />

      {/* Feature Comparison Matrix */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-950">Detailed Fee Breakdown</h2>
          </div>

          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 border-b border-gray-200 text-xs font-bold text-gray-700 uppercase">
                <tr>
                  <th className="p-4">Payment Rail / Mode</th>
                  <th className="p-4">Growth Tier</th>
                  <th className="p-4">One Click Pro (D2C)</th>
                  <th className="p-4">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="p-4 font-bold text-gray-900">UPI (GPay, PhonePe, Paytm)</td>
                  <td className="p-4 text-blue-600 font-bold">0% (Up to ₹20L) / 1.85%</td>
                  <td className="p-4 text-blue-600 font-bold">1.65%</td>
                  <td className="p-4 text-gray-600">Custom Volume Rate</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">RuPay Debit Cards</td>
                  <td className="p-4 text-blue-600 font-bold">0% (RBI Mandate)</td>
                  <td className="p-4 text-blue-600 font-bold">0% (RBI Mandate)</td>
                  <td className="p-4 text-blue-600 font-bold">0% (RBI Mandate)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Domestic Visa / Mastercard</td>
                  <td className="p-4 text-gray-700">1.85% + GST</td>
                  <td className="p-4 text-gray-700">1.65% + GST</td>
                  <td className="p-4 text-gray-600">Custom Volume Rate</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Netbanking (50+ Banks)</td>
                  <td className="p-4 text-gray-700">1.85% + GST</td>
                  <td className="p-4 text-gray-700">1.65% + GST</td>
                  <td className="p-4 text-gray-600">Custom Volume Rate</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">International Cards / Apple Pay</td>
                  <td className="p-4 text-gray-700">2.95% + ₹3</td>
                  <td className="p-4 text-gray-700">2.75% + ₹3</td>
                  <td className="p-4 text-gray-600">Custom FX Rate</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Instant Settlements (T+15m)</td>
                  <td className="p-4 text-gray-700">0.15% per batch</td>
                  <td className="p-4 text-brand-600 font-bold">Included</td>
                  <td className="p-4 text-brand-600 font-bold">Included</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}
