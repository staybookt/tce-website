import Link from 'next/link';

interface ServiceCardProps {
  slug: string;
  name: string;
  shortDescription: string;
}

export default function ServiceCard({ slug, name, shortDescription }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group block bg-white border border-gray-200 rounded-lg p-6 hover:border-gold hover:shadow-lg transition-all"
    >
      <div className="w-12 h-12 rounded-lg bg-navy/10 group-hover:bg-gold/20 flex items-center justify-center mb-4 transition-colors">
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-navy group-hover:text-gold transition-colors" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-navy transition-colors">{name}</h3>
      <p className="text-gray-600 text-sm mb-4">{shortDescription}</p>
      <span className="text-gold font-medium text-sm group-hover:underline">
        Learn More &rarr;
      </span>
    </Link>
  );
}
