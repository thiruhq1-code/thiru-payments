import React, { useState } from 'react';
import { 
  Terminal, 
  Copy, 
  Check, 
  Sparkles, 
  Code2, 
  Cpu, 
  ArrowRight,
  Send,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function DeveloperHub() {
  const [activeLang, setActiveLang] = useState('node');
  const [copied, setCopied] = useState(false);

  const snippets = {
    node: `import { ThiruPayments } from '@thiru/payments-sdk';

// Initialize Thiru API Client
const thiru = new ThiruPayments({
  appId: process.env.THIRU_APP_ID,
  secretKey: process.env.THIRU_SECRET_KEY,
  apiVersion: '2026-09-30'
});

// Create Instant Checkout Session with FlashUPI
const order = await thiru.orders.create({
  order_id: \`ORD_\${Date.now()}\`,
  order_amount: 4999.00,
  order_currency: 'INR',
  customer_details: {
    customer_id: 'CUST_8829',
    customer_email: 'buyer@example.com',
    customer_phone: '+919876543210'
  },
  order_meta: {
    return_url: 'https://yourapp.com/checkout/return?order_id={order_id}',
    notify_url: 'https://yourapp.com/api/webhooks/thiru'
  }
});

console.log('Session ID:', order.payment_session_id);`,

    python: `from thiru_payments import ThiruClient
import os

# Initialize Thiru Python SDK
client = ThiruClient(
    app_id=os.getenv("THIRU_APP_ID"),
    secret_key=os.getenv("THIRU_SECRET_KEY"),
    environment="production"
)

# Create Order Session
order = client.orders.create({
    "order_id": "PY_ORD_99182",
    "order_amount": 4999.00,
    "order_currency": "INR",
    "customer_details": {
        "customer_id": "CUST_7719",
        "customer_phone": "9876543210",
        "customer_email": "buyer@example.com"
    }
})

print("Payment Link:", order["payment_link"])`,

    curl: `curl -X POST https://api.thirupayments.com/pg/orders \\
  -H "x-client-id: your_thiru_app_id" \\
  -H "x-client-secret: your_thiru_secret_key" \\
  -H "x-api-version: 2026-09-30" \\
  -H "Content-Type: application/json" \\
  -d '{
    "order_id": "CURL_ORD_1001",
    "order_amount": 4999.00,
    "order_currency": "INR",
    "customer_details": {
      "customer_id": "USER_123",
      "customer_phone": "9876543210"
    }
  }'`,

    ai: `# 1. Install Thiru Agent Skills into your AI tool (Cursor / Claude / Copilot):
npx @thiru/agent-skills init

# 2. Prompt your AI Agent:
"Integrate Thiru FlashUPI and instant refund webhook handler into my Next.js store with idempotency key headers."

# 3. AI generates the exact route handlers, verified webhook signature verifiers, and tests automatically.`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="developer" className="py-20 lg:py-28 bg-[#030f24] text-white relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 text-sky-400 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
              <Cpu className="w-3.5 h-3.5 animate-pulse" /> Developer-First & AI Native
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Developer-first architecture. Ready for AI agents.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Idempotent REST endpoints, sub-50ms webhook delivery, enterprise SDKs across 7 languages, and first-party Model Context Protocol (MCP) server support for Cursor and Claude Code.
            </p>
          </div>
        </div>

        {/* Code Showcase Terminal Card */}
        <div className="bg-black/85 rounded-3xl border border-white/15 overflow-hidden shadow-2xl">
          
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between px-6 py-4 bg-white/5 border-b border-white/10 gap-3">
            
            {/* Terminal Window Dots + Language Switch Tabs */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 pr-2 border-r border-white/10">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block"></span>
              </div>
              
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={() => setActiveLang('node')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeLang === 'node' ? 'bg-brand-500 text-white shadow-sm' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Node.js
                </button>
                <button
                  onClick={() => setActiveLang('python')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeLang === 'python' ? 'bg-brand-500 text-white shadow-sm' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Python
                </button>
                <button
                  onClick={() => setActiveLang('curl')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeLang === 'curl' ? 'bg-brand-500 text-white shadow-sm' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  cURL
                </button>
                <button
                  onClick={() => setActiveLang('ai')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeLang === 'ai' ? 'bg-brand-lime text-brand-900 shadow-md font-black' : 'text-brand-lime hover:bg-brand-500/20'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI Agent MCP</span>
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-gray-400 font-mono hidden sm:inline">POST /v1/orders</span>
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-gray-300 flex items-center gap-1.5 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-sky-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy Code'}</span>
              </button>
            </div>

          </div>

          {/* Code Body */}
          <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm overflow-x-auto text-sky-300 leading-relaxed bg-black/60">
            <pre>
              <code>{snippets[activeLang]}</code>
            </pre>
          </div>

          {/* Quick Integration Footer */}
          <div className="px-6 py-4 bg-white/5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 text-brand-lime"><CheckCircle2 className="w-3.5 h-3.5" /> 99.99% Uptime</span>
              <span className="flex items-center gap-1 text-brand-lime"><CheckCircle2 className="w-3.5 h-3.5" /> Idempotent Requests</span>
              <span className="flex items-center gap-1 text-brand-lime"><CheckCircle2 className="w-3.5 h-3.5" /> Sandbox Mock Data</span>
            </div>
            <a href="#sandbox" className="text-brand-lime font-bold hover:underline flex items-center gap-1">
              <span>View Full API Reference</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
