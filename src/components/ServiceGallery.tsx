import Image from 'next/image';
import { serviceGallery } from '@/data/service-gallery';

interface Props {
  slug: string;
  serviceName: string;
}

/**
 * Renders a 4-photo gallery of real Top Choice work relevant to the service.
 * Sits between the Process and Common Issues sections on /services/[slug].
 */
export default function ServiceGallery({ slug, serviceName }: Props) {
  const photos = serviceGallery[slug];
  if (!photos || photos.length === 0) return null;

  return (
    <div className="animate-on-scroll">
      <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Recent Work</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
        What {serviceName.toLowerCase()}{' '}
        <span className="gradient-text">looks like.</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 group"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
      <p className="text-gray-400 text-sm mt-5 italic">
        Real jobs across York Region. ESA-permitted, inspected, passed first time.
      </p>
    </div>
  );
}
