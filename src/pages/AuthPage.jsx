import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, Lock, ArrowRight, Sparkles, Building, Mail, Phone, User } from 'lucide-react';

export default function AuthPage() {
  const location = useLocation();
  const isSignUp = location.pathname.includes('signup');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50/50 via-white to-[#fafbfb] py-16 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-gray-200 shadow-2xl space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2 mb-2">
            <div className="h-9 flex items-center">
              <img src="/images/thiru-logo.png" alt="Thiru Payments Logo" className="h-8 w-auto object-contain" />
            </div>
            <span className="text-[11px] uppercase font-extrabold px-1.5 py-0.5 rounded bg-navy-50 text-navy-600 border border-navy-200 tracking-widest">
              PAYMENTS
            </span>
          </Link>
          <h2 className="text-2xl font-black text-gray-950">
            {isSignUp ? 'Create your free account' : 'Sign in to Merchant Dashboard'}
          </h2>
          <p className="text-xs text-gray-500">
            {isSignUp ? 'Get ₹20 Lakhs GMV processed at 0% MDR' : 'Enter your registered credentials'}
          </p>
        </div>

        {submitted ? (
          <div className="p-6 bg-brand-50 rounded-2xl border border-brand-200 text-center space-y-3 animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-brand-500 text-white flex items-center justify-center mx-auto text-xl shadow-md">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-950 text-base">OTP Verification Sent</h3>
            <p className="text-xs text-gray-600">We have sent a verification code to your email & mobile number.</p>
            <Link to="/" className="inline-block mt-3 px-5 py-2 rounded-xl bg-gray-900 text-white text-xs font-bold">
              Return to Homepage
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Business Name</label>
                  <div className="relative">
                    <input required type="text" placeholder="e.g. Acme Tech Solutions" className="w-full px-3.5 py-2.5 pl-10 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:outline-none" />
                    <Building className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Your Full Name</label>
                  <div className="relative">
                    <input required type="text" placeholder="e.g. Thirunavukkarasu" className="w-full px-3.5 py-2.5 pl-10 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:outline-none" />
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Work Email</label>
              <div className="relative">
                <input required type="email" placeholder="name@company.com" className="w-full px-3.5 py-2.5 pl-10 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:outline-none" />
                <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Mobile Number</label>
              <div className="relative">
                <input required type="tel" placeholder="+91 98765 43210" className="w-full px-3.5 py-2.5 pl-10 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:outline-none font-mono" />
                <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
              </div>
            </div>

            <button type="submit" className="w-full py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-black text-sm shadow-lg shadow-brand-500/25 transition-all flex items-center justify-center gap-2">
              <span>{isSignUp ? 'Claim ₹20L Free Offer & Continue' : 'Sign In with OTP'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-center text-xs text-gray-500 pt-2">
              {isSignUp ? (
                <span>Already have an account? <Link to="/signin" className="text-brand-700 font-bold hover:underline">Sign In</Link></span>
              ) : (
                <span>New to Thiru? <Link to="/signup" className="text-brand-700 font-bold hover:underline">Create Account</Link></span>
              )}
            </div>
          </form>
        )}

        <div className="pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-[11px] text-gray-400 font-medium">
          <ShieldCheck className="w-4 h-4 text-blue-600" />
          <span>256-Bit SSL Encrypted • RBI Regulated PA</span>
        </div>

      </div>
    </div>
  );
}
