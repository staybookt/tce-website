'use client';

import { useState } from 'react';
import Link from 'next/link';
import { client } from '@/data/client';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy-dark shadow-lg">
      {/* Top bar */}
      <div className="bg-navy text-white/80 text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span>{client.hours.regular}</span>
          <span className="text-gold font-medium">{client.hours.emergency}</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-navy-dark" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <div>
              <span className="text-white font-bold text-lg leading-none block">{client.name}</span>
              <span className="text-gold text-[10px] tracking-wider uppercase">{client.tagline}</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/services" className="text-white/90 hover:text-gold text-sm font-medium transition-colors">Services</Link>
            <Link href="/areas" className="text-white/90 hover:text-gold text-sm font-medium transition-colors">Service Areas</Link>
            <Link href="/about" className="text-white/90 hover:text-gold text-sm font-medium transition-colors">About</Link>
            <Link href="/reviews" className="text-white/90 hover:text-gold text-sm font-medium transition-colors">Reviews</Link>
            <Link href="/contact" className="text-white/90 hover:text-gold text-sm font-medium transition-colors">Contact</Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href={`tel:${client.phone}`} className="text-white text-sm font-bold">
              {client.phone}
            </a>
            <Link href="/contact" className="bg-gold hover:bg-gold-dark text-navy-dark font-bold text-sm px-5 py-2.5 rounded transition-colors">
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-dark border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            <Link href="/services" onClick={() => setMobileOpen(false)} className="block text-white text-sm py-2">Services</Link>
            <Link href="/areas" onClick={() => setMobileOpen(false)} className="block text-white text-sm py-2">Service Areas</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-white text-sm py-2">About</Link>
            <Link href="/reviews" onClick={() => setMobileOpen(false)} className="block text-white text-sm py-2">Reviews</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-white text-sm py-2">Contact</Link>
            <a href={`tel:${client.phone}`} className="block bg-gold text-navy-dark font-bold text-center py-3 rounded mt-4">
              Call {client.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
