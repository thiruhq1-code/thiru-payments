import React from 'react';
import { Bus, ShoppingCart, Sprout, GraduationCap, Plane, Sparkles } from 'lucide-react';

export default function TrustBar() {
  const brands = [
    { name: 'BharatRetail', icon: <ShoppingCart className="w-5 h-5 text-blue-600" /> },
    { name: 'SwiftTransit', icon: <Bus className="w-5 h-5 text-indigo-600" /> },
    { name: 'QuickDeliver', icon: <Sprout className="w-5 h-5 text-emerald-600" /> },
    { name: 'CampusSprint', icon: <GraduationCap className="w-5 h-5 text-sky-600" /> },
    { name: 'AuraLiving', icon: <Sparkles className="w-5 h-5 text-amber-500" /> },
    { name: 'SkyRoute', icon: <Plane className="w-5 h-5 text-purple-600" /> },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-extrabold uppercase tracking-widest text-gray-400 mb-8">
          Trusted by 250,000+ Fast-Growing Enterprises, Startups & Modern FinTechs
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80">
          {brands.map((brand, idx) => (
            <div key={idx} className="flex items-center gap-2 text-gray-800 font-black text-lg tracking-tight hover:opacity-100 transition-opacity">
              {brand.icon}
              <span>{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
