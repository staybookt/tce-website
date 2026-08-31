'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { client } from '@/data/client';
import Logo from './Logo';

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
      {/* Emergency top strip — clickable tel: link, slides up on scroll */}
      <a
        href={`tel:${client.phone}`}
        className={`block bg-gradient-to-r from-red-700 via-red-600 to-red-700 hover:from-red-600 hover:via-red-500 hover:to-red-600 text-white transition-all duration-500 overflow-hidden ${
          scrolled ? 'max-h-0 py-0' : 'max-h-12 py-2'
        }`}
        aria-label="24/7 emergency electrician — tap to call"
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3 min-w-0">
            <span className="relative flex w-2 h-2 shrink-0">
              <span className="absolute inset-0 rounded-full bg-amber-300 opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-amber-300" />
            </span>
            <span className="font-bold uppercase tracking-wider">
              24/7 emergency electrician
            </span>
            <span className="hidden md:inline text-white/70">
              · Power out, breaker tripping, burnt smell? Tim answers nights and weekends.
            </span>
          </div>
          <span className="bg-white/15 hover:bg-white/25 px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            {client.phone}
          </span>
        </div>
      </a>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <Logo variant="dark" size={scrolled ? 'md' : 'lg'} />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { href: '/services', label: 'Services' },
              { href: '/areas', label: 'Service Areas' },
              { href: '/why-esa-licensed', label: 'Why ESA?' },
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
              className="btn-premium bg-amber-500 hover:bg-amber-400 ring-1 ring-amber-700/50 text-gray-900 font-bold text-sm px-6 py-2.5 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40"
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
        mobileOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-navy-dark/98 backdrop-blur-xl border-t border-white/5">
          <div className="px-4 py-6 space-y-1">
            {[
              { href: '/services', label: 'Services' },
              { href: '/areas', label: 'Service Areas' },
              { href: '/why-esa-licensed', label: 'Why ESA?' },
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
