import Image from 'next/image';
import { serviceFeatureImage } from '@/data/service-feature-images';

// Service slugs whose feature image is non-landscape and should use object-contain
// with a complementary background fill so the whole image is visible without cropping.
const CONTAIN_FIT_SLUGS = new Set(['aluminum-wiring', 'generator-installation']);

const isExt = (src: string) => src.startsWith('http://') || src.startsWith('https://');

interface Props {
  slug: string;
  serviceName: string;
}

export default function ServiceFeatureImage({ slug, serviceName }: Props) {
  const src = serviceFeatureImage[slug];
  if (!src) return null;

  const isContain = CONTAIN_FIT_SLUGS.has(slug);
  const objectFitClass = isContain ? 'object-contain' : 'object-cover';
  const bgClass = isContain ? 'bg-gray-100' : 'bg-gray-200';

  return (
    <div className={`animate-on-scroll relative w-full aspect-square sm:aspect-[16/10] rounded-2xl overflow-hidden ${bgClass}`}>
      <Image
        src={src}
        alt={`${serviceName} by Top Choice Electrical — work across York Region`}
        fill
        sizes="(max-width: 768px) 100vw, 66vw"
        unoptimized={isExt(src)}
        className={objectFitClass}
      />
    </div>
  );
}
