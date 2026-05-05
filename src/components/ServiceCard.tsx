import Link from 'next/link';
import ServiceIcon from './ServiceIcon';

interface ServiceCardProps {
  slug: string;
  name: string;
  shortDescription: string;
  icon?: string;
  image?: string;
  featured?: boolean;
}

export default function ServiceCard({ slug, name, shortDescription, icon = 'Zap', image, featured = false }: ServiceCardProps) {
  if (featured) {
    return (
      <Link
        href={`/services/${slug}`}
        className="group block relative rounded-2xl overflow-hidden min-h-[320px] md:min-h-[400px] md:col-span-2"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          {image && (
            <img
              src={image.replace('w=600', 'w=1200')}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-navy-dark/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-8 md:p-10">
          <div className="w-12 h-12 rounded-xl bg-gold/15 backdrop-blur-sm border border-gold/25 flex items-center justify-center mb-5 group-hover:bg-gold/25 transition-all duration-500">
            <ServiceIcon icon={icon} className="w-6 h-6 text-gold" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">{name}</h3>
          <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-md">{shortDescription}</p>
          <div className="flex items-center gap-2 text-gold font-semibold text-sm">
            <span>Learn More</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gold/20 transition-all duration-500 hover:shadow-xl hover:shadow-navy/[0.06] hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-100" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {/* Icon badge */}
        <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm border border-white/50 flex items-center justify-center shadow-sm">
          <ServiceIcon icon={icon} className="w-5 h-5 text-navy" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-base font-bold text-gray-900 mb-1.5 group-hover:text-navy transition-colors duration-300 tracking-tight">{name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{shortDescription}</p>
        <div className="flex items-center gap-2 text-gold/70 group-hover:text-gold font-semibold text-xs uppercase tracking-wider transition-colors">
          <span>View Service</span>
          <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
