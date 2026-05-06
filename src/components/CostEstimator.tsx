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
      { label: '100A to 200A', low: 2500, high: 4000 },
      { label: '200A panel replacement', low: 2000, high: 3500 },
      { label: 'Sub-panel addition', low: 1500, high: 2500 },
    ],
  },
  {
    id: 'ev-charger',
    name: 'EV Charger',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
      </svg>
    ),
    options: [
      { label: 'Level 2 (panel has capacity)', low: 1500, high: 2500 },
      { label: 'Level 2 (panel upgrade needed)', low: 3500, high: 5500 },
      { label: 'Tesla Wall Connector', low: 1800, high: 3000 },
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
      { label: '4 pot lights (1 room)', low: 600, high: 1000 },
      { label: '8 pot lights (2 rooms)', low: 1100, high: 1800 },
      { label: '12+ pot lights (main floor)', low: 1600, high: 2800 },
    ],
  },
  {
    id: 'knob-tube',
    name: 'Knob & Tube Removal',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    options: [
      { label: 'Single circuit', low: 800, high: 1500 },
      { label: 'Partial home (kitchen + bath)', low: 3000, high: 5000 },
      { label: 'Whole house rewire', low: 8000, high: 15000 },
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
      { label: 'Pathway lighting (6-8 fixtures)', low: 1200, high: 2000 },
      { label: 'Full front yard package', low: 2500, high: 4500 },
      { label: 'Complete property (front + back)', low: 4000, high: 8000 },
    ],
  },
  {
    id: 'generator',
    name: 'Generator Install',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
      </svg>
    ),
    options: [
      { label: 'Portable generator hookup', low: 1000, high: 1800 },
      { label: 'Whole-home standby (14-20kW)', low: 8000, high: 14000 },
      { label: 'Whole-home standby (22kW+)', low: 12000, high: 20000 },
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

  return (
    <div className="space-y-8">
      <div>
        <p className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
          Step 1 — What do you need?
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => {
                setSelectedService(service.id);
                setSelectedOption(null);
              }}
              className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-200 ${
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

      {activeService && (
        <div>
          <p className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
            Step 2 — What&apos;s the scope?
          </p>
          <div className="space-y-3">
            {activeService.options.map((option, i) => (
              <button
                key={i}
                onClick={() => setSelectedOption(i)}
                className={`w-full flex items-center justify-between p-5 rounded-xl border text-left transition-all duration-200 ${
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

      {activeService && selectedOption !== null && (
        <div className={`rounded-2xl p-8 ${isDark ? 'bg-amber-500/10 border border-amber-500/20' : 'bg-amber-50 border border-amber-200'}`}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <p className={`text-xs uppercase tracking-wider font-semibold mb-1 ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                Estimated Range
              </p>
              <p className={`text-3xl sm:text-4xl font-bold tracking-tight font-display ${isDark ? 'text-white' : 'text-gray-900'}`}>
                ${activeService.options[selectedOption].low.toLocaleString()}
                <span className={isDark ? 'text-white/20 mx-2' : 'text-gray-300 mx-2'}>–</span>
                ${activeService.options[selectedOption].high.toLocaleString()}
              </p>
            </div>
            <p className={`text-xs leading-relaxed max-w-[200px] ${isDark ? 'text-white/30' : 'text-gray-500'}`}>
              Based on typical jobs in York Region. Your actual quote may vary.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-8 py-3.5 rounded-xl text-sm transition-all duration-200 text-center"
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
              Call Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
