import Link from 'next/link';
import ServiceIcon from './ServiceIcon';

interface ServiceCardProps {
  slug: string;
  name: string;
  shortDescription: string;
  icon?: string;
  featured?: boolean;
}

export default function ServiceCard({ slug, name, shortDescription, icon = 'Zap', featured = false }: ServiceCardProps) {
  if (featured) {
    return (
      <Link
        href={`/services/${slug}`}
        className="group block relative rounded-3xl overflow-hidden bg-navy-dark min-h-[320px] md:min-h-[400px] md:col-span-2 md:row-span-2"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy-dark/95 group-hover:from-navy-light group-hover:via-navy group-hover:to-navy-dark transition-all duration-700" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/[0.06] rounded-full blur-[80px] group-hover:bg-gold/[0.12] transition-all duration-700" />
        <div className="relative h-full flex flex-col justify-end p-10 md:p-12">
          <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-8 group-hover:bg-gold/20 transition-all duration-500">
            <ServiceIcon icon={icon} className="w-8 h-8 text-gold" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">{name}</h3>
          <p className="text-white/50 text-base leading-relaxed mb-8 max-w-sm">{shortDescription}</p>
          <div className="flex items-center gap-3 text-gold font-semibold text-sm">
            <span>Learn More</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-3 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/services/${slug}`}
      className="group block bg-gray-50 hover:bg-white rounded-2xl p-7 transition-all duration-500 hover:shadow-xl hover:shadow-navy/[0.06] hover:-translate-y-1"
    >
      <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-gold/10 border border-gray-100 group-hover:border-gold/20 flex items-center justify-center mb-5 transition-all duration-500">
        <ServiceIcon icon={icon} className="w-6 h-6 text-navy/60 group-hover:text-gold transition-colors duration-500" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-navy transition-colors duration-300 tracking-tight">{name}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-5">{shortDescription}</p>
      <div className="flex items-center gap-2 text-gold/70 group-hover:text-gold font-semibold text-sm transition-colors">
        <span>Learn More</span>
        <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </Link>
  );
}
