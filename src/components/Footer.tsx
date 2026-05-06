import Link from 'next/link';
import { client } from '@/data/client';

export default function Footer() {
  return (
    <footer className="relative bg-navy-dark text-white overflow-hidden">
      {/* Top border gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center ring-2 ring-amber-400/20">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div>
                <span className="font-bold text-xl tracking-tight block font-display">{client.name}</span>
                <span className="text-white/30 text-xs tracking-[0.12em] uppercase">{client.tagline}</span>
              </div>
            </div>
            <p className="text-white/30 text-sm leading-relaxed mb-8 max-w-xs">
              Licensed, insured, and trusted by homeowners across York Region. {client.yearsExperience}+ years of electrical experience.
            </p>
            <div className="space-y-3 text-sm">
              <a href={`tel:${client.phone}`} className="flex items-center gap-3 text-white/40 hover:text-amber-400 transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500/40" />
                {client.phone}
              </a>
              <a href={`mailto:${client.email}`} className="flex items-center gap-3 text-white/40 hover:text-amber-400 transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500/40" />
                {client.email}
              </a>
              <div className="flex items-center gap-3 text-white/40">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500/40" />
                {client.address}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h3 className="text-white/50 text-xs uppercase tracking-[0.2em] font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {client.services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-white/30 hover:text-white text-sm transition-colors duration-300">
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-amber-400/60 hover:text-amber-400 text-sm font-medium transition-colors">
                  View All &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="md:col-span-2">
            <h3 className="text-white/50 text-xs uppercase tracking-[0.2em] font-semibold mb-6">Areas</h3>
            <ul className="space-y-3">
              {client.areas.slice(0, 6).map((area) => (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}`} className="text-white/30 hover:text-white text-sm transition-colors duration-300">
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas" className="text-amber-400/60 hover:text-amber-400 text-sm font-medium transition-colors">
                  View All &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours & Credentials */}
          <div className="md:col-span-3">
            <h3 className="text-white/50 text-xs uppercase tracking-[0.2em] font-semibold mb-6">Hours</h3>
            <p className="text-white/40 text-sm mb-1">{client.hours.regular}</p>
            <p className="text-amber-400/60 text-sm font-medium mb-10">{client.hours.emergency}</p>

            <h3 className="text-white/50 text-xs uppercase tracking-[0.2em] font-semibold mb-6">Credentials</h3>
            <div className="space-y-3 text-sm text-white/40">
              <p>ESA Licensed: {client.licenseNumber}</p>
              {client.insured && <p>Fully Insured & Bonded</p>}
              <p>{client.yearsExperience}+ Years Experience</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} {client.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/20">
            <Link href="/contact" className="hover:text-white/40 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white/40 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
