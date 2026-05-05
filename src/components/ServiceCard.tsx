import Link from 'next/link';
import ServiceIcon from './ServiceIcon';

interface ServiceCardProps {
  slug: string;
  name: string;
  shortDescription: string;
  icon?: string;
}

export default function ServiceCard({ slug, name, shortDescription, icon = 'Zap' }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group block bg-white rounded-2xl p-8 premium-card"
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy/10 to-navy/5 group-hover:from-gold/20 group-hover:to-gold/10 flex items-center justify-center mb-6 transition-all duration-500">
        <ServiceIcon icon={icon} className="w-7 h-7 text-navy group-hover:text-gold transition-colors duration-500" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-navy transition-colors duration-300">{name}</h3>
      <p className="text-gray-500 text-[15px] leading-relaxed mb-6">{shortDescription}</p>
      <div className="flex items-center gap-2 text-gold font-semibold text-sm">
        <span>Learn More</span>
        <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </Link>
  );
}
