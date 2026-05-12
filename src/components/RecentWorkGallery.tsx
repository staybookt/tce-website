import Image from 'next/image';

/**
 * Generic 4-photo "what our work looks like" gallery used outside service pages.
 * Curated mix of Top Choice's strongest real-work photos.
 */
const photos = [
  { src: '/images/work/IMG_5017.webp', alt: 'Clean residential panel install by Top Choice Electrical' },
  { src: '/images/work/IMG_3258.webp', alt: 'Panel upgrade in York Region by Top Choice Electrical' },
  { src: '/images/work/IMG_3038.webp', alt: 'EV charger installation in York Region by Top Choice Electrical' },
  { src: '/images/work/IMG_2638.webp', alt: 'Commercial electrical work in York Region by Top Choice Electrical' },
];

interface Props {
  headline?: string;
  eyebrow?: string;
}

export default function RecentWorkGallery({
  headline = 'A few recent jobs.',
  eyebrow = 'Recent Work',
}: Props) {
  return (
    <div className="animate-on-scroll">
      <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
        {headline}
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
    </div>
  );
}
