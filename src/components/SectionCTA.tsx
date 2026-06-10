import Image from 'next/image';
import Link from 'next/link';

interface CTAButton {
  label: string;
  href: string;
}

interface Props {
  eyebrow?: string;
  headline: string;
  body?: string;
  image: string;
  imageAlt: string;
  primaryCTA?: CTAButton;
  secondaryCTA?: CTAButton;
  tone?: 'dark' | 'emergency';
}

const isExternal = (src: string) => src.startsWith('http://') || src.startsWith('https://');

export default function SectionCTA({
  eyebrow,
  headline,
  body,
  image,
  imageAlt,
  primaryCTA,
  secondaryCTA,
  tone = 'dark',
}: Props) {
  const gradient =
    tone === 'emergency'
      ? 'bg-gradient-to-r from-red-950/95 via-red-950/80 to-red-950/30'
      : 'bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-navy-dark/30';

  return (
    <section className="relative min-h-[48vh] md:min-h-[55vh] py-20 md:py-28 overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
          unoptimized={isExternal(image)}
        />
        <div className={`absolute inset-0 ${gradient}`} />
        <div className="absolute inset-0 grain" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-5">
            {headline}
          </h2>
          {body && (
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl mb-8">
              {body}
            </p>
          )}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {primaryCTA && (
                <a
                  href={primaryCTA.href}
                  className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-8 py-4 rounded-xl text-base transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:scale-[1.02] text-center"
                >
                  {primaryCTA.label}
                </a>
              )}
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="bg-white/10 hover:bg-white/15 text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-300 border border-white/15 hover:border-white/25 backdrop-blur-sm text-center"
                >
                  {secondaryCTA.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
