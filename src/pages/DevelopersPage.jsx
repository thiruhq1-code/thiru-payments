import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Terminal, 
  Code2, 
  Sparkles, 
  Copy, 
  Check, 
  ArrowRight, 
  Cpu, 
  CheckCircle2, 
  BookOpen, 
  Layers, 
  Send,
  Zap,
  Globe
} from 'lucide-react';
import DeveloperHub from '../components/DeveloperHub';

export default function DevelopersPage() {
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="bg-[#fafbfb] min-h-screen">
      
      {/* Header */}
      <section className="pt-12 pb-16 bg-[#030f24] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-lime text-xs font-bold uppercase border border-brand-500/30">
              <Code2 className="w-3.5 h-3.5" /> Thiru Developer Network
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
              Built by developers, for developers & AI agents.
            </h1>
            <p className="text-base text-gray-300 leading-relaxed">
              Explore clean REST APIs, official SDKs in 7+ languages, Model Context Protocol (MCP) skills, and webhooks with 99.99% multi-bank uptime.
            </p>
          </div>
        </div>
      </section>

      {/* Developer Hub Component */}
      <DeveloperHub />

      {/* SDKs & Community */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-gray-950">Official SDKs & Libraries</h2>
            <p className="mt-2 text-sm text-gray-600">Integrate Thiru with your favorite language or framework in minutes.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#fafbfb] border border-gray-200 hover:shadow-md transition-shadow text-center space-y-2">
              <span className="text-2xl font-black text-brand-700 font-mono">npm</span>
              <h3 className="font-bold text-sm text-gray-950">Node.js / TypeScript</h3>
              <code className="text-[11px] text-gray-500 bg-white px-2 py-1 rounded border border-gray-200 block font-mono">npm i @thiru/sdk</code>
            </div>

            <div className="p-6 rounded-2xl bg-[#fafbfb] border border-gray-200 hover:shadow-md transition-shadow text-center space-y-2">
              <span className="text-2xl font-black text-brand-700 font-mono">PyPI</span>
              <h3 className="font-bold text-sm text-gray-950">Python 3.8+</h3>
              <code className="text-[11px] text-gray-500 bg-white px-2 py-1 rounded border border-gray-200 block font-mono">pip install thiru-payments</code>
            </div>

            <div className="p-6 rounded-2xl bg-[#fafbfb] border border-gray-200 hover:shadow-md transition-shadow text-center space-y-2">
              <span className="text-2xl font-black text-brand-700 font-mono">Go</span>
              <h3 className="font-bold text-sm text-gray-950">Go Module</h3>
              <code className="text-[11px] text-gray-500 bg-white px-2 py-1 rounded border border-gray-200 block font-mono">go get github.com/thiru/go-sdk</code>
            </div>

            <div className="p-6 rounded-2xl bg-[#fafbfb] border border-gray-200 hover:shadow-md transition-shadow text-center space-y-2">
              <span className="text-2xl font-black text-brand-700 font-mono">PHP</span>
              <h3 className="font-bold text-sm text-gray-950">PHP / Laravel</h3>
              <code className="text-[11px] text-gray-500 bg-white px-2 py-1 rounded border border-gray-200 block font-mono">composer require thiru/sdk</code>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
