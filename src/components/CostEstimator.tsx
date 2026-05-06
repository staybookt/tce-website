'use client';

import { useState } from 'react';
import Link from 'next/link';

const services = [
  {
    id: 'panel-upgrade',
    name: 'Panel Upgrade',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    options: [
      { label: '100A to 200A', low: 2500, high: 4000, franchiseLow: 4000, franchiseHigh: 6500, included: ['ESA inspection & permit', 'Breaker labelling', 'Surge protector install', '2-year warranty on work'] },
      { label: '200A panel replacement', low: 2000, high: 3500, franchiseLow: 3500, franchiseHigh: 5500, included: ['ESA inspection & permit', 'Old panel disposal', 'All breakers transferred', '2-year warranty on work'] },
      { label: 'Sub-panel addition', low: 1500, high: 2500, franchiseLow: 2500, franchiseHigh: 4000, included: ['ESA inspection & permit', 'Up to 6 circuits', 'Panel labelling', '2-year warranty on work'] },
    ],
  },
  {
    id: 'ev-charger',
    name: 'EV Charger',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5z" />
      </svg>
    ),
    options: [
      { label: 'Level 2 (panel has capacity)', low: 1500, high: 2500, franchiseLow: 2500, franchiseHigh: 4000, included: ['40A dedicated circuit', 'NEMA 14-50 outlet', 'Permit & inspection', 'Up to 30ft cable run'] },
      { label: 'Level 2 + panel upgrade', low: 3500, high: 5500, franchiseLow: 5500, franchiseHigh: 8000, included: ['200A panel upgrade', '40A dedicated circuit', 'Permit & inspection', 'Complete in 1 day'] },
      { label: 'Tesla Wall Connector', low: 1800, high: 3000, franchiseLow: 3000, franchiseHigh: 4500, included: ['60A circuit', 'Wall mounting & routing', 'Permit & inspection', 'Wi-Fi setup assistance'] },
    ],
  },
  {
    id: 'pot-lights',
    name: 'Pot Lights',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    options: [
      { label: '4 pot lights (1 room)', low: 600, high: 1000, franchiseLow: 1000, franchiseHigh: 1600, included: ['LED fixtures included', 'Dimmer switch', 'Ceiling patching', 'Old fixture removal'] },
      { label: '8 pot lights (2 rooms)', low: 1100, high: 1800, franchiseLow: 1800, franchiseHigh: 3000, included: ['LED fixtures included', 'Dimmer switches', 'Ceiling patching', 'Light placement layout'] },
      { label: '12+ pot lights (main floor)', low: 1600, high: 2800, franchiseLow: 2800, franchiseHigh: 4500, included: ['LED fixtures included', 'Multiple dimmer zones', 'Ceiling patching', 'Custom layout design'] },
    ],
  },
  {
    id: 'knob-tube',
    name: 'Knob & Tube',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    options: [
      { label: 'Single circuit', low: 800, high: 1500, franchiseLow: 1500, franchiseHigh: 2500, included: ['ESA inspection', 'New circuit installed', 'Old wiring removed', 'Insurance letter'] },
      { label: 'Partial home (kitchen + bath)', low: 3000, high: 5000, franchiseLow: 5000, franchiseHigh: 8000, included: ['ESA inspection', 'All new circuits', 'Old wiring removed', 'Insurance documentation'] },
      { label: 'Whole house rewire', low: 8000, high: 15000, franchiseLow: 14000, franchiseHigh: 25000, included: ['Full ESA inspection', 'New panel if needed', 'Every circuit replaced', 'Insurance documentation'] },
    ],
  },
  {
    id: 'landscape-lighting',
    name: 'Landscape Lighting',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    options: [
      { label: 'Pathway (6-8 fixtures)', low: 1200, high: 2000, franchiseLow: 2000, franchiseHigh: 3500, included: ['LED fixtures included', 'Transformer', 'Timer/photocell', 'Burial & routing'] },
      { label: 'Full front yard package', low: 2500, high: 4500, franchiseLow: 4500, franchiseHigh: 7000, included: ['LED fixtures included', 'Custom layout design', 'Transformer & timer', 'Uplighting + path lights'] },
      { label: 'Complete property', low: 4000, high: 8000, franchiseLow: 7000, franchiseHigh: 12000, included: ['LED fixtures included', 'Multiple zones', 'Smart timer system', 'Full design consultation'] },
    ],
  },
  {
    id: 'generator',
    name: 'Generator',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
      </svg>
    ),
    options: [
      { label: 'Portable generator hookup', low: 1000, high: 1800, franchiseLow: 1800, franchiseHigh: 3000, included: ['Transfer switch install', 'Inlet box', 'Up to 6 circuits', 'Permit & inspection'] },
      { label: 'Whole-home (14-20kW)', low: 8000, high: 14000, franchiseLow: 13000, franchiseHigh: 20000, included: ['Automatic transfer switch', 'Concrete pad', 'Gas line coordination', '5-year warranty'] },
      { label: 'Whole-home (22kW+)', low: 12000, high: 20000, franchiseLow: 18000, franchiseHigh: 30000, included: ['Automatic transfer switch', 'Concrete pad', 'Gas line coordination', 'Load management'] },
    ],
  },
];

interface CostEstimatorProps {
  variant?: 'light' | 'dark';
}

export default function CostEstimator({ variant = 'light' }: CostEstimatorProps) {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const isDark = variant === 'dark';

  const activeService = services.find((s) => s.id === selectedService);
  const activeOption = activeService && selectedOption !== null ? activeService.options[selectedOption] : null;

  // Calculate bar widths for visual comparison
  const getBarData = () => {
    if (!activeOption) return null;
    const maxPrice = activeOption.franchiseHigh;
    const tceWidth = ((activeOption.low + activeOption.high) / 2 / maxPrice) * 100;
    const franchiseWidth = ((activeOption.franchiseLow + activeOption.franchiseHigh) / 2 / maxPrice) * 100;
    const savings = Math.round(((activeOption.franchiseLow + activeOption.franchiseHigh) / 2 - (activeOption.low + activeOption.high) / 2));
    return { tceWidth: Math.min(tceWidth, 95), franchiseWidth: Math.min(franchiseWidth, 95), savings };
  };

  const barData = getBarData();

  return (
    <div className="space-y-6">
      {/* Step 1: Service picker */}
      <div>
        <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
          Pick your service
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => {
                setSelectedService(service.id);
                setSelectedOption(null);
              }}
              className={`flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all duration-200 ${
                selectedService === service.id
                  ? isDark
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                    : 'bg-amber-50 border-amber-300 text-amber-700'
                  : isDark
                    ? 'bg-white/[0.04] border-white/[0.08] text-white/50 hover:bg-white/[0.06] hover:border-white/[0.12]'
                    : 'bg-slate-50 border-gray-200 text-gray-600 hover:bg-slate-100 hover:border-gray-300'
              }`}
            >
              <div className={`shrink-0 ${
                selectedService === service.id
                  ? isDark ? 'text-amber-400' : 'text-amber-600'
                  : isDark ? 'text-white/30' : 'text-gray-400'
              }`}>
                {service.icon}
              </div>
              <span className="text-sm font-medium">{service.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Scope picker */}
      {activeService && (
        <div>
          <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
            What&apos;s the scope?
          </p>
          <div className="space-y-2">
            {activeService.options.map((option, i) => (
              <button
                key={i}
                onClick={() => setSelectedOption(i)}
                className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-all duration-200 ${
                  selectedOption === i
                    ? isDark
                      ? 'bg-amber-500/10 border-amber-500/30'
                      : 'bg-amber-50 border-amber-300'
                    : isDark
                      ? 'bg-white/[0.04] border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.12]'
                      : 'bg-slate-50 border-gray-200 hover:bg-slate-100 hover:border-gray-300'
                }`}
              >
                <span className={`text-sm font-medium ${
                  selectedOption === i
                    ? isDark ? 'text-amber-300' : 'text-amber-700'
                    : isDark ? 'text-white/50' : 'text-gray-600'
                }`}>
                  {option.label}
                </span>
                <span className={`text-sm font-semibold tabular-nums ${
                  selectedOption === i
                    ? isDark ? 'text-amber-400' : 'text-amber-600'
                    : isDark ? 'text-white/30' : 'text-gray-400'
                }`}>
                  ${option.low.toLocaleString()} – ${option.high.toLocaleString()}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Results: Visual comparison */}
      {activeOption && barData && (
        <div className={`rounded-2xl p-6 sm:p-8 ${isDark ? 'bg-white/[0.04] border border-white/[0.08]' : 'bg-gray-50 border border-gray-200'}`}>

          {/* Price comparison bars */}
          <div className="space-y-5 mb-6">
            {/* TCE price */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Top Choice Electrical</span>
                </div>
                <span className={`text-sm font-bold tabular-nums ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                  ${activeOption.low.toLocaleString()} – ${activeOption.high.toLocaleString()}
                </span>
              </div>
              <div className={`h-3 rounded-full overflow-hidden ${isDark ? 'bg-white/[0.06]' : 'bg-gray-200'}`}>
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-700 ease-out"
                  style={{ width: `${barData.tceWidth}%` }}
                />
              </div>
            </div>

            {/* Franchise price */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-white/20' : 'bg-gray-300'}`} />
                  <span className={`text-sm font-medium ${isDark ? 'text-white/40' : 'text-gray-400'}`}>Franchise average</span>
                </div>
                <span className={`text-sm font-medium tabular-nums ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
                  ${activeOption.franchiseLow.toLocaleString()} – ${activeOption.franchiseHigh.toLocaleString()}
                </span>
              </div>
              <div className={`h-3 rounded-full overflow-hidden ${isDark ? 'bg-white/[0.06]' : 'bg-gray-200'}`}>
                <div
                  className={`h-full rounded-full transition-all duration-700 ease-out ${isDark ? 'bg-white/15' : 'bg-gray-300'}`}
                  style={{ width: `${barData.franchiseWidth}%` }}
                />
              </div>
            </div>
          </div>

          {/* Savings callout */}
          <div className={`flex items-center gap-3 p-4 rounded-xl mb-6 ${isDark ? 'bg-green-500/10 border border-green-500/20' : 'bg-green-50 border border-green-200'}`}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isDark ? 'bg-green-500/20' : 'bg-green-100'}`}>
              <svg viewBox="0 0 24 24" className={`w-4 h-4 ${isDark ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
            </div>
            <div>
              <p className={`text-sm font-bold ${isDark ? 'text-green-300' : 'text-green-800'}`}>
                Save ~${barData.savings.toLocaleString()} vs. franchise pricing
              </p>
              <p className={`text-xs mt-0.5 ${isDark ? 'text-green-400/60' : 'text-green-600'}`}>
                Same licence. Same inspection. Same result. Less overhead.
              </p>
            </div>
          </div>

          {/* What's included */}
          <div className="mb-6">
            <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
              Included in your quote
            </p>
            <div className="grid grid-cols-2 gap-2">
              {activeOption.included.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className={`w-4 h-4 shrink-0 ${isDark ? 'text-amber-400/60' : 'text-amber-500'}`} fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                  <span className={`text-xs ${isDark ? 'text-white/50' : 'text-gray-600'}`}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-8 py-3.5 rounded-xl text-sm transition-all duration-200 text-center shadow-lg shadow-amber-500/20"
            >
              Get Your Exact Quote
            </Link>
            <a
              href="tel:(905) 555-0123"
              className={`font-semibold px-8 py-3.5 rounded-xl text-sm transition-all duration-200 text-center border ${
                isDark
                  ? 'bg-white/[0.05] hover:bg-white/[0.1] text-white border-white/[0.1]'
                  : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200'
              }`}
            >
              Call for Same-Day Quote
            </a>
          </div>

          <p className={`text-[11px] mt-4 ${isDark ? 'text-white/20' : 'text-gray-400'}`}>
            Estimates based on typical York Region jobs. Franchise pricing sourced from HomeStars and public rate cards.
          </p>
        </div>
      )}
    </div>
  );
}
