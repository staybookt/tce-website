import Link from 'next/link';
import { client } from '@/data/client';

export default function Footer() {
  return (
    <footer className="relative bg-navy-dark text-white overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-light/10 rounded-full blur-[100px]" />

      {/* Top border gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand — wider column */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-navy-dark" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div>
                <span className="font-bold text-xl tracking-tight block">{client.name}</span>
                <span className="text-gold/60 text-xs tracking-[0.15em] uppercase">{client.tagline}</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Licensed, insured, and trusted by homeowners across York Region for {client.yearsInBusiness}+ years. Every job done right.
            </p>
            <div className="space-y-3 text-sm">
              <a href={`tel:${client.phone}`} className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-gold/10 flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                {client.phone}
              </a>
              <a href={`mailto:${client.email}`} className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-gold/10 flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                {client.email}
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                {client.address}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h3 className="text-gold text-xs uppercase tracking-[0.2em] font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {client.services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-white/50 hover:text-white text-sm transition-colors duration-300">
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-gold/80 hover:text-gold text-sm font-medium transition-colors">
                  View All &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="md:col-span-2">
            <h3 className="text-gold text-xs uppercase tracking-[0.2em] font-semibold mb-6">Areas</h3>
            <ul className="space-y-3">
              {client.areas.slice(0, 6).map((area) => (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}`} className="text-white/50 hover:text-white text-sm transition-colors duration-300">
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas" className="text-gold/80 hover:text-gold text-sm font-medium transition-colors">
                  View All &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours & Credentials */}
          <div className="md:col-span-3">
            <h3 className="text-gold text-xs uppercase tracking-[0.2em] font-semibold mb-6">Hours</h3>
            <p className="text-white/50 text-sm mb-1">{client.hours.regular}</p>
            <p className="text-gold text-sm font-medium mb-8">{client.hours.emergency}</p>

            <h3 className="text-gold text-xs uppercase tracking-[0.2em] font-semibold mb-6">Credentials</h3>
            <div className="space-y-3 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                ESA Licensed: {client.licenseNumber}
              </div>
              {client.insured && (
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Fully Insured & Bonded
                </div>
              )}
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {client.yearsInBusiness}+ Years in Business
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee */}
        <div className="border-t border-white/5 mt-16 pt-8 mb-8">
          <div className="flex items-center justify-center gap-3 text-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold/60 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <p className="text-white/30 text-sm">Every job backed by our satisfaction guarantee. Written quote before work starts. ESA inspected.</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} {client.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/25">
            <Link href="/contact" className="hover:text-white/50 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white/50 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
