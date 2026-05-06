'use client';

import { useState } from 'react';
import Link from 'next/link';

const services = [
  {
    id: 'panel-upgrade',
    name: 'Panel Upgrade',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    options: [
      { label: 'More power (most homes)', low: 2500, high: 4000, franchiseLow: 4000, franchiseHigh: 6500, included: ['All permits & inspection', 'Surge protection included', 'Everything labelled', '2-year warranty'] },
      { label: 'Replace old panel', low: 2000, high: 3500, franchiseLow: 3500, franchiseHigh: 5500, included: ['All permits & inspection', 'Old panel taken away', 'Everything transferred', '2-year warranty'] },
      { label: 'Add a second panel', low: 1500, high: 2500, franchiseLow: 2500, franchiseHigh: 4000, included: ['All permits & inspection', 'Room for 6 new circuits', 'Everything labelled', '2-year warranty'] },
    ],
  },
  {
    id: 'ev-charger',
    name: 'EV Charger',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5z" />
      </svg>
    ),
    options: [
      { label: 'Charger + outlet', low: 1500, high: 2500, franchiseLow: 2500, franchiseHigh: 4000, included: ['Dedicated power line', 'Heavy-duty outlet', 'All permits & inspection', 'Up to 30ft of wiring'] },
      { label: 'Charger + panel upgrade', low: 3500, high: 5500, franchiseLow: 5500, franchiseHigh: 8000, included: ['Panel upgraded too', 'Dedicated power line', 'All permits & inspection', 'Done in 1 day'] },
      { label: 'Tesla Wall Connector', low: 1800, high: 3000, franchiseLow: 3000, franchiseHigh: 4500, included: ['High-speed charging', 'Mounted & wired clean', 'All permits & inspection', 'Wi-Fi connected'] },
    ],
  },
  {
    id: 'pot-lights',
    name: 'Pot Lights',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    options: [
      { label: '1 room', low: 600, high: 1000, franchiseLow: 1000, franchiseHigh: 1600, included: ['4 LED lights', 'Dimmer switch', 'Ceiling patched clean', 'Old lights removed'] },
      { label: '2 rooms', low: 1100, high: 1800, franchiseLow: 1800, franchiseHigh: 3000, included: ['8 LED lights', 'Dimmer switches', 'Ceiling patched clean', 'We plan the layout'] },
      { label: 'Entire floor', low: 1600, high: 2800, franchiseLow: 2800, franchiseHigh: 4500, included: ['12+ LED lights', 'Multiple dimmer zones', 'Ceiling patched clean', 'Custom layout design'] },
    ],
  },
  {
    id: 'knob-tube',
    name: 'Old Wiring',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    options: [
      { label: 'One area', low: 800, high: 1500, franchiseLow: 1500, franchiseHigh: 2500, included: ['Safety inspection', 'New safe wiring', 'Old wiring removed', 'Insurance letter'] },
      { label: 'Kitchen + bathroom', low: 3000, high: 5000, franchiseLow: 5000, franchiseHigh: 8000, included: ['Safety inspection', 'All new wiring', 'Old wiring removed', 'Insurance paperwork'] },
      { label: 'Whole house', low: 8000, high: 15000, franchiseLow: 14000, franchiseHigh: 25000, included: ['Full safety inspection', 'New panel if needed', 'Every wire replaced', 'Insurance paperwork'] },
    ],
  },
  {
    id: 'landscape',
    name: 'Outdoor Lighting',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    options: [
      { label: 'Walkway / path', low: 1200, high: 2000, franchiseLow: 2000, franchiseHigh: 3500, included: ['6-8 LED lights', 'Auto on/off at sunset', 'All wiring buried', 'Power supply included'] },
      { label: 'Front yard', low: 2500, high: 4500, franchiseLow: 4500, franchiseHigh: 7000, included: ['Path + accent lights', 'Custom design layout', 'Auto on/off at sunset', 'Trees & features lit'] },
      { label: 'Full property', low: 4000, high: 8000, franchiseLow: 7000, franchiseHigh: 12000, included: ['Front + back yard', 'Multiple light zones', 'Smart controls', 'Free design consult'] },
    ],
  },
  {
    id: 'generator',
    name: 'Generator',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
      </svg>
    ),
    options: [
      { label: 'Portable setup', low: 1000, high: 1800, franchiseLow: 1800, franchiseHigh: 3000, included: ['Safe power transfer', 'Outdoor plug-in point', 'Powers key rooms', 'All permits included'] },
      { label: 'Whole home (mid)', low: 8000, high: 14000, franchiseLow: 13000, franchiseHigh: 20000, included: ['Turns on automatically', 'Concrete pad poured', 'Gas line coordinated', '5-year warranty'] },
      { label: 'Whole home (large)', low: 12000, high: 20000, franchiseLow: 18000, franchiseHigh: 30000, included: ['Turns on automatically', 'Concrete pad poured', 'Gas line coordinated', 'Powers everything'] },
    ],
  },
];

interface CostEstimatorProps {
  variant?: 'light' | 'dark';
}

export default function CostEstimator({ variant = 'light' }: CostEstimatorProps) {
  const [selectedService, setSelectedService] = useState<string | null>('panel-upgrade');
  const [selectedOption, setSelectedOption] = useState<number | null>(0);
  const isDark = variant === 'dark';

  const activeService = services.find((s) => s.id === selectedService);
  const activeOption = activeService && selectedOption !== null ? activeService.options[selectedOption] : null;

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
    <div className="space-y-5">
      {/* Service tabs - compact pill row */}
      <div className="flex flex-wrap gap-1.5">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => { setSelectedService(service.id); setSelectedOption(0); }}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              selectedService === service.id
                ? isDark
                  ? 'bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/30'
                  : 'bg-amber-50 text-amber-700 ring-1 ring-amber-300'
                : isDark
                  ? 'text-white/40 hover:text-white/60 hover:bg-white/[0.04]'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
          >
            <span className={selectedService === service.id ? (isDark ? 'text-amber-400' : 'text-amber-600') : (isDark ? 'text-white/25' : 'text-gray-400')}>
              {service.icon}
            </span>
            {service.name}
          </button>
        ))}
      </div>

      {/* Scope selector - horizontal segmented control */}
      {activeService && (
        <div className={`flex rounded-xl overflow-hidden ${isDark ? 'bg-white/[0.03] ring-1 ring-white/[0.06]' : 'bg-gray-100 ring-1 ring-gray-200'}`}>
          {activeService.options.map((option, i) => (
            <button
              key={i}
              onClick={() => setSelectedOption(i)}
              className={`flex-1 py-2.5 px-2 text-center transition-all duration-200 ${
                selectedOption === i
                  ? isDark
                    ? 'bg-amber-500/15 text-amber-300'
                    : 'bg-white text-amber-700 shadow-sm'
                  : isDark
                    ? 'text-white/35 hover:text-white/50'
                    : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="text-xs font-medium block">{option.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Comparison result - clean, no extra container */}
      {activeOption && barData && (
        <div className="space-y-4">
          {/* Price bars */}
          <div className="space-y-3">
            <div>
              <div className="flex items-baseline justify-between mb-1.5">
                <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Top Choice Electrical</span>
                <span className={`text-lg font-bold tabular-nums tracking-tight ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                  ${activeOption.low.toLocaleString()}–${activeOption.high.toLocaleString()}
                </span>
              </div>
              <div className={`h-2.5 rounded-full overflow-hidden ${isDark ? 'bg-white/[0.06]' : 'bg-gray-200'}`}>
                <div className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-700 ease-out" style={{ width: `${barData.tceWidth}%` }} />
              </div>
            </div>
            <div>
              <div className="flex items-baseline justify-between mb-1.5">
                <span className={`text-xs ${isDark ? 'text-white/30' : 'text-gray-400'}`}>Franchise average</span>
                <span className={`text-sm tabular-nums ${isDark ? 'text-white/25' : 'text-gray-400'}`}>
                  ${activeOption.franchiseLow.toLocaleString()}–${activeOption.franchiseHigh.toLocaleString()}
                </span>
              </div>
              <div className={`h-2.5 rounded-full overflow-hidden ${isDark ? 'bg-white/[0.06]' : 'bg-gray-200'}`}>
                <div className={`h-full rounded-full transition-all duration-700 ease-out ${isDark ? 'bg-white/10' : 'bg-gray-300'}`} style={{ width: `${barData.franchiseWidth}%` }} />
              </div>
            </div>
          </div>

          {/* Savings + included - single compact row */}
          <div className={`flex items-start gap-4 p-4 rounded-xl ${isDark ? 'bg-white/[0.03]' : 'bg-gray-50'}`}>
            <div className="shrink-0">
              <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${isDark ? 'text-green-400/80' : 'text-green-700'}`}>
                You save ~${barData.savings.toLocaleString()}
              </p>
              <p className={`text-[11px] ${isDark ? 'text-white/25' : 'text-gray-400'}`}>
                Same licence, same ESA inspection
              </p>
            </div>
            <div className={`w-px self-stretch ${isDark ? 'bg-white/[0.06]' : 'bg-gray-200'}`} />
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 flex-1">
              {activeOption.included.map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" className={`w-3 h-3 shrink-0 ${isDark ? 'text-amber-400/50' : 'text-amber-500/70'}`} fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className={`text-[11px] ${isDark ? 'text-white/40' : 'text-gray-500'}`}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA - single prominent button */}
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="flex-1 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold py-3.5 rounded-xl text-sm transition-all duration-200 text-center shadow-lg shadow-amber-500/20"
            >
              Get Your Exact Quote
            </Link>
            <a
              href="tel:(905) 555-0123"
              className={`px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 text-center ${
                isDark
                  ? 'text-white/50 hover:text-white/70 ring-1 ring-white/[0.08] hover:ring-white/[0.15]'
                  : 'text-gray-500 hover:text-gray-700 ring-1 ring-gray-200 hover:ring-gray-300'
              }`}
            >
              Call Now
            </a>
          </div>

          <p className={`text-[10px] text-center ${isDark ? 'text-white/15' : 'text-gray-300'}`}>
            Franchise estimates from HomeStars &amp; public rate cards
          </p>
        </div>
      )}
    </div>
  );
}
