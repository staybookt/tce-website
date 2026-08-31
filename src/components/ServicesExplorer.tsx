'use client';

import { useState } from 'react';
import ServiceCard from '@/components/ServiceCard';
import { client } from '@/data/client';
import { serviceCategories } from '@/data/service-categories';
import { serviceAudience, type Audience } from '@/data/service-tags';

type AudienceFilter = 'all' | 'residential' | 'commercial';

const matchesAudience = (slug: string, filter: AudienceFilter): boolean => {
  if (filter === 'all') return true;
  const a: Audience | undefined = serviceAudience[slug];
  if (!a) return true;
  if (a === 'both') return true;
  return a === filter;
};

export default function ServicesExplorer() {
  const [audience, setAudience] = useState<AudienceFilter>('all');
  const [query, setQuery] = useState('');

  const findService = (slug: string) => client.services.find((s) => s.slug === slug);

  const q = query.trim().toLowerCase();
  const matchesQuery = (s: (typeof client.services)[number]): boolean => {
    if (!q) return true;
    const hay = (
      s.name + ' ' + s.shortDescription + ' ' + (s.keywords || []).join(' ')
    ).toLowerCase();
    return hay.includes(q);
  };

  // Compute which categories actually have services for the current filters
  const renderedCategories = serviceCategories
    .map((cat) => {
      const services = cat.services
        .filter((slug) => matchesAudience(slug, audience))
        .map(findService)
        .filter(Boolean)
        .filter((s) => matchesQuery(s as (typeof client.services)[number])) as typeof client.services;
      return { ...cat, resolvedServices: services };
    })
    .filter((cat) => cat.resolvedServices.length > 0);

  const resultCount = renderedCategories.reduce((n, c) => n + c.resolvedServices.length, 0);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Audience tabs + in-section search */}
        <div className="mb-10 md:mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-4">Filter by audience</p>
          <div className="inline-flex bg-gray-100 rounded-xl p-1.5 gap-1" role="tablist" aria-label="Filter services by audience">
            {(['all', 'residential', 'commercial'] as const).map((opt) => (
              <button
                key={opt}
                type="button"
                role="tab"
                aria-selected={audience === opt}
                onClick={() => setAudience(opt)}
                className={`px-5 md:px-7 py-2.5 rounded-lg font-semibold text-sm md:text-base transition-all ${
                  audience === opt
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {opt === 'all' ? 'All services' : opt === 'residential' ? 'Residential' : 'Commercial'}
              </button>
            ))}
          </div>
          </div>

          {/* Search within the service list */}
          <div className="relative w-full lg:w-80 shrink-0">
            <label htmlFor="service-list-search" className="sr-only">
              Search services
            </label>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
            >
              <circle cx="11" cy="11" r="8" />
              <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
            </svg>
            <input
              id="service-list-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-300 hover:border-amber-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-colors"
            />
          </div>
        </div>

        {q && (
          <p className="-mt-6 mb-8 text-sm text-gray-500" aria-live="polite">
            {resultCount === 0
              ? 'No services match that search.'
              : `${resultCount} service${resultCount === 1 ? '' : 's'} match "${query.trim()}".`}
          </p>
        )}

        {/* Mobile/tablet category chips */}
        <div className="lg:hidden mb-8 -mx-4 px-4 overflow-x-auto">
          <div className="flex gap-2 pb-2">
            {renderedCategories.map((cat) => (
              <a
                key={cat.slug}
                href={`#cat-${cat.slug}`}
                className="flex-shrink-0 text-xs font-semibold text-gray-700 hover:text-amber-600 bg-gray-50 hover:bg-amber-50 border border-gray-200 hover:border-amber-300 px-3 py-2 rounded-lg whitespace-nowrap transition-colors"
              >
                {cat.title} <span className="text-gray-400">·{cat.resolvedServices.length}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Desktop 2-column: sticky sidebar + service sections */}
        <div className="grid lg:grid-cols-[260px_1fr] gap-10">
          {/* Sidebar — sticky on desktop only */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-gray-400 font-semibold text-xs uppercase tracking-[0.2em] mb-4">Jump to</p>
              <nav className="flex flex-col gap-1" aria-label="Service categories">
                {renderedCategories.map((cat) => (
                  <a
                    key={cat.slug}
                    href={`#cat-${cat.slug}`}
                    className="flex items-center justify-between text-sm font-semibold text-gray-700 hover:text-amber-600 hover:bg-amber-50 px-4 py-2.5 rounded-lg transition-colors group"
                  >
                    <span>{cat.title}</span>
                    <span className="text-gray-400 text-xs font-medium group-hover:text-amber-600">
                      {cat.resolvedServices.length}
                    </span>
                  </a>
                ))}
              </nav>

              {/* Sidebar contact card */}
              <div className="mt-8 p-5 bg-gray-50 rounded-2xl border border-gray-200">
                <p className="text-amber-600 font-semibold text-xs uppercase tracking-[0.2em] mb-2">Can&apos;t decide?</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Call and describe the job &mdash; same-day quote, no pressure.
                </p>
                <a
                  href={`tel:${client.phone}`}
                  className="block w-full text-center bg-amber-500 hover:bg-amber-400 ring-1 ring-amber-700/50 text-gray-900 font-bold text-sm px-4 py-3 rounded-lg transition-colors"
                >
                  {client.phone}
                </a>
              </div>
            </div>
          </aside>

          {/* Service sections grouped by category */}
          <div className="min-w-0">
            {renderedCategories.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-gray-500 text-lg mb-4">No services match those filters.</p>
                <button
                  onClick={() => {
                    setAudience('all');
                    setQuery('');
                  }}
                  className="text-amber-600 font-semibold hover:underline"
                >
                  Show all services
                </button>
              </div>
            ) : (
              renderedCategories.map((cat, idx) => (
                <div key={cat.slug} id={`cat-${cat.slug}`} className={`scroll-mt-28 ${idx > 0 ? 'mt-14 md:mt-16 pt-14 md:pt-16 border-t border-gray-100' : ''}`}>
                  <div className="mb-8">
                    <p className="text-amber-600 font-semibold text-xs uppercase tracking-[0.2em] mb-2">{cat.eyebrow}</p>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-3">
                      {cat.title}
                    </h2>
                    <p className="text-gray-600 text-base leading-relaxed max-w-3xl">
                      {cat.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-5">
                    {cat.resolvedServices.map((service) => (
                      <ServiceCard key={service.slug} {...service} />
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
