import Link from 'next/link';
import { client } from '@/data/client';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-navy-dark" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span className="font-bold text-lg">{client.name}</span>
            </div>
            <p className="text-white/60 text-sm mb-4">{client.tagline}</p>
            <div className="space-y-2 text-sm text-white/70">
              <p>{client.address}</p>
              <p><a href={`tel:${client.phone}`} className="hover:text-gold transition-colors">{client.phone}</a></p>
              <p><a href={`mailto:${client.email}`} className="hover:text-gold transition-colors">{client.email}</a></p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {client.services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-white/70 hover:text-gold text-sm transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-gold text-sm hover:underline">View All Services</Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-gold text-sm uppercase tracking-wider mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {client.areas.slice(0, 6).map((area) => (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}`} className="text-white/70 hover:text-gold text-sm transition-colors">
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas" className="text-gold text-sm hover:underline">View All Areas</Link>
              </li>
            </ul>
          </div>

          {/* Hours & Trust */}
          <div>
            <h3 className="font-semibold text-gold text-sm uppercase tracking-wider mb-4">Hours</h3>
            <p className="text-white/70 text-sm mb-1">{client.hours.regular}</p>
            <p className="text-gold text-sm font-medium mb-6">{client.hours.emergency}</p>

            <h3 className="font-semibold text-gold text-sm uppercase tracking-wider mb-4">Credentials</h3>
            <div className="space-y-2 text-sm text-white/70">
              <p>ESA Licensed: {client.licenseNumber}</p>
              {client.insured && <p>Fully Insured</p>}
              {client.bonded && <p>Bonded</p>}
              <p>{client.yearsInBusiness}+ Years in Business</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} {client.name}. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-white/40">
            <Link href="/contact" className="hover:text-white/60">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white/60">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
