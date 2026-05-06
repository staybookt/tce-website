'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { client } from '@/data/client';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-navy-dark/95 backdrop-blur-xl shadow-2xl shadow-black/20'
        : 'bg-transparent'
    }`}>
      {/* Top bar — slides up on scroll */}
      <div className={`bg-navy text-white/80 text-xs overflow-hidden transition-all duration-500 ${
        scrolled ? 'max-h-0 py-0' : 'max-h-10 py-1.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="tracking-wide">{client.hours.regular}</span>
          <span className="text-amber-400 font-medium tracking-wide">{client.hours.emergency}</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-amber-500 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-500/30">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <div>
              <span className="text-white font-bold text-lg leading-none block tracking-tight font-display">{client.name}</span>
              <span className="text-amber-400/70 text-[10px] tracking-[0.15em] uppercase">{client.tagline}</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { href: '/services', label: 'Services' },
              { href: '/areas', label: 'Service Areas' },
              { href: '/about', label: 'About' },
              { href: '/reviews', label: 'Reviews' },
              { href: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-white/80 hover:text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${client.phone}`}
              className="text-white text-sm font-bold tracking-tight hover:text-amber-400 transition-colors duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {client.phone}
            </a>
            <Link
              href="/contact"
              className="btn-premium bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold text-sm px-6 py-2.5 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu — glass panel */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
        mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-navy-dark/98 backdrop-blur-xl border-t border-white/5">
          <div className="px-4 py-6 space-y-1">
            {[
              { href: '/services', label: 'Services' },
              { href: '/areas', label: 'Service Areas' },
              { href: '/about', label: 'About' },
              { href: '/reviews', label: 'Reviews' },
              { href: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-white/90 text-base py-3 px-4 rounded-lg hover:bg-white/5 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href={`tel:${client.phone}`}
                className="block btn-premium bg-amber-500 text-gray-900 font-bold text-center py-3.5 rounded-xl shadow-lg shadow-amber-500/20"
              >
                Call {client.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
