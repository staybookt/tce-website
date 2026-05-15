'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { client } from '@/data/client';

/**
 * Service search — "Know what you're looking for?" Lets a visitor type
 * a free-form description of their issue and matches against our 18
 * electrical services (and the 12 service areas as a fallback).
 *
 * Cuts navigation cost on the homepage: someone with a specific need
 * (FPE panel replacement, EV charger, hot tub wiring) lands on the
 * right service page in one keystroke-and-click rather than scrolling
 * the service grid.
 *
 * Matches on service name + keywords + shortDescription. Light fuzzy
 * matching — splits the query into tokens and ranks by how many tokens
 * a service hits.
 */

interface Match {
  type: 'service' | 'area';
  slug: string;
  name: string;
  context: string;
  score: number;
}

export default function ServiceSearch() {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setFocused(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const matches: Match[] = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const tokens = q.split(/\s+/).filter((t) => t.length >= 2);
    if (tokens.length === 0) return [];

    const scored: Match[] = [];

    for (const s of client.services) {
      const hay = (
        s.name +
        ' ' +
        s.shortDescription +
        ' ' +
        (s.keywords || []).join(' ')
      ).toLowerCase();

      let score = 0;
      for (const t of tokens) {
        if (hay.includes(t)) {
          score += s.name.toLowerCase().includes(t) ? 3 : 1;
        }
      }
      if (score > 0) {
        scored.push({
          type: 'service',
          slug: s.slug,
          name: s.name,
          context: s.shortDescription,
          score,
        });
      }
    }

    for (const a of client.areas) {
      const hay = (a.name + ' ' + a.region).toLowerCase();
      let score = 0;
      for (const t of tokens) {
        if (hay.includes(t)) score += 2;
      }
      if (score > 0) {
        scored.push({
          type: 'area',
          slug: a.slug,
          name: a.name,
          context: `Electrician in ${a.name}, ${a.region}`,
          score,
        });
      }
    }

    return scored.sort((a, b) => b.score - a.score).slice(0, 6);
  }, [query]);

  const showResults = focused && query.trim().length > 0;

  return (
    <section className="bg-gradient-to-b from-white to-amber-50/20 py-12 md:py-16 border-b border-gray-100">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <p className="text-amber-600 font-semibold text-xs uppercase tracking-[0.25em] mb-3">
            Quick start
          </p>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
            Know what you&apos;re looking for?
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-3 max-w-xl mx-auto">
            Type your issue — panel upgrade, EV charger, flickering lights, hot tub — and we&apos;ll point you to the right page.
          </p>
        </div>

        <div ref={wrapRef} className="relative">
          <div className="relative">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
            >
              <circle cx="11" cy="11" r="8" />
              <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              placeholder="e.g. 200 amp panel, FPE, EV charger, knob and tube..."
              className="w-full pl-14 pr-5 py-4 md:py-5 bg-white border-2 border-gray-200 hover:border-amber-300 focus:border-amber-500 rounded-2xl text-base md:text-lg text-gray-900 placeholder:text-gray-400 outline-none transition-colors shadow-sm focus:shadow-md"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {showResults && (
            <div className="absolute top-full left-0 right-0 mt-3 bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden z-30 max-h-[28rem] overflow-y-auto">
              {matches.length === 0 ? (
                <div className="px-6 py-8 text-center">
                  <p className="text-gray-700 font-semibold mb-1">
                    Nothing matched that exactly.
                  </p>
                  <p className="text-gray-500 text-sm">
                    Try a simpler keyword (panel, EV, lighting, rewire) or call{' '}
                    <a href={`tel:${client.phone}`} className="text-amber-600 hover:underline font-semibold">
                      {client.phone}
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <ul className="divide-y divide-gray-100">
                  {matches.map((m) => (
                    <li key={`${m.type}-${m.slug}`}>
                      <Link
                        href={
                          m.type === 'service'
                            ? `/services/${m.slug}`
                            : `/areas/${m.slug}`
                        }
                        className="flex items-start gap-4 px-5 py-4 hover:bg-amber-50/60 transition-colors group"
                        onClick={() => setFocused(false)}
                      >
                        <div className={`w-10 h-10 rounded-lg shrink-0 flex items-center justify-center ${m.type === 'service' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-600'}`}>
                          {m.type === 'service' ? (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          ) : (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-900 font-bold group-hover:text-amber-700 transition-colors">
                            {m.name}
                          </p>
                          <p className="text-gray-500 text-sm line-clamp-1">
                            {m.context}
                          </p>
                        </div>
                        <span className="text-amber-500 self-center opacity-60 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
