import Image from 'next/image';

interface Props {
  image: string;
  alt: string;
  /** Aspect ratio — defaults to wide cinematic 21:9 */
  aspect?: '21/9' | '16/9' | '3/1';
}

/**
 * Full-bleed photo strip used between text sections on service pages.
 * No overlay text — pure visual rest. Photo carries the meaning.
 */
export default function PhotoBreak({ image, alt, aspect = '21/9' }: Props) {
  const aspectClass = aspect === '21/9' ? 'aspect-[21/9]' : aspect === '16/9' ? 'aspect-[16/9]' : 'aspect-[3/1]';

  return (
    <div className={`relative -mx-4 lg:-mx-12 ${aspectClass} overflow-hidden rounded-none lg:rounded-2xl`}>
      <Image
        src={image}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}
