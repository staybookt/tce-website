import Link from 'next/link';
import Image from 'next/image';
import ServiceIcon from './ServiceIcon';

interface ServiceCardProps {
  slug: string;
  name: string;
  shortDescription: string;
  icon?: string;
  image?: string;
  featured?: boolean;
}

const isExt = (src: string) => src.startsWith('http://') || src.startsWith('https://');

export default function ServiceCard({ slug, name, shortDescription, icon = 'Zap', image, featured = false }: ServiceCardProps) {
  if (featured) {
    return (
      <Link
        href={`/services/${slug}`}
        className="group block relative rounded-2xl overflow-hidden min-h-[180px] md:min-h-[200px] md:col-span-2 bg-gray-900"
      >
        <div className="absolute inset-0">
          {image && (
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              unoptimized={isExt(image)}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-transparent" />
        </div>

        <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 flex items-center justify-center mb-3 group-hover:bg-amber-500/30 transition-all duration-500">
            <ServiceIcon icon={icon} className="w-5 h-5 text-amber-400" />
          </div>
          <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-1.5 tracking-tight">{name}</h3>
          <p className="text-white/60 text-sm leading-relaxed mb-3 max-w-xl">{shortDescription}</p>
          <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
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
      className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-amber-200 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            unoptimized={isExt(image)}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-100" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm border border-white/50 flex items-center justify-center shadow-sm">
          <ServiceIcon icon={icon} className="w-5 h-5 text-gray-700" />
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-base font-bold text-gray-900 mb-1.5 group-hover:text-amber-600 transition-colors duration-300 tracking-tight">{name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{shortDescription}</p>
        <div className="flex items-center gap-2 text-amber-500 group-hover:text-amber-600 font-semibold text-xs uppercase tracking-wider transition-colors">
          <span>View Service</span>
          <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
