import Image from 'next/image';
import { serviceFeatureImage } from '@/data/service-feature-images';

interface Props {
  slug: string;
  serviceName: string;
}

/**
 * A large feature image shown between the AEO summary and the intro
 * paragraph on /services/[slug] pages. Pulled from a curated stock map
 * (serviceFeatureImage). Returns null if no image is configured for the slug.
 */
export default function ServiceFeatureImage({ slug, serviceName }: Props) {
  const src = serviceFeatureImage[slug];
  if (!src) return null;

  return (
    <div className="animate-on-scroll">
      <div className="relative rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] shadow-lg">
        <Image
          src={src}
          alt={`${serviceName} — Top Choice Electrical, York Region`}
          fill
          sizes="(max-width: 1024px) 100vw, 75vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
      </div>
    </div>
  );
}
