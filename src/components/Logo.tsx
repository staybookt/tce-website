import Link from 'next/link';
import { client } from '@/data/client';

/**
 * Logo — the Top Choice Electrical brand mark + wordmark.
 *
 * Design notes
 * ------------
 *  - Mark: a rounded-square plate (the panel) housing an angular two-tone
 *    lightning bolt. The two facets (lighter top, darker base) give the
 *    bolt depth without needing a photo or external SVG file. Reads as
 *    "electrical" at any size and is distinctive vs the generic bolt-in-
 *    a-circle every other electrician site uses.
 *  - Wordmark: "Top Choice" stacked on "Electrical" — Space Grotesk display
 *    font, tight tracking on the headline, looser tracking + amber accent
 *    on the second line. Pairs cleanly with the rest of the site's H1/H2
 *    treatment.
 *  - Variants: 'dark' (white wordmark on dark header) and 'light' (gray
 *    wordmark on light footer / printable surfaces). The mark stays the
 *    same in both.
 *  - Sizes: 'sm' (compact mobile header), 'md' (default), 'lg' (footer /
 *    landing hero use). Heights set so the mark and wordmark stay in
 *    optical balance regardless of size.
 *
 * Wired into Header.tsx and Footer.tsx — replaces the previous bolt-in-a-
 * gradient-circle treatment. This is the on-site replacement for Tim's
 * existing wordmark logo until we get a final designer pass.
 */

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
  href?: string;
  className?: string;
}

const SIZES = {
  sm: { mark: 'w-9 h-9', headline: 'text-base', sub: 'text-[9px]' },
  md: { mark: 'w-11 h-11', headline: 'text-lg', sub: 'text-[10px]' },
  lg: { mark: 'w-14 h-14', headline: 'text-2xl', sub: 'text-xs' },
} as const;

export default function Logo({
  variant = 'dark',
  size = 'md',
  showWordmark = true,
  href = '/',
  className = '',
}: LogoProps) {
  const s = SIZES[size];
  const headlineColor = variant === 'dark' ? 'text-white' : 'text-gray-900';
  const subColor = variant === 'dark' ? 'text-amber-400' : 'text-amber-600';

  const mark = (
    <div className={`relative ${s.mark} shrink-0`} aria-hidden="true">
      {/* Plate — rounded amber gradient with a darker inner border for definition */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 shadow-md shadow-amber-900/20" />
      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-amber-700/30" />

      {/* Two-tone lightning bolt — top facet (light), bottom facet (dark)
          inside the plate. Stroke gives the bolt a crisp edge on hover. */}
      <svg
        viewBox="0 0 32 32"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        {/* Top facet */}
        <path
          d="M18 4 L8 18 L14 18 L13 28 L24 14 L18 14 Z"
          fill="rgba(255, 255, 255, 0.95)"
        />
        {/* Bottom facet — slightly offset darker tone for depth */}
        <path
          d="M14 18 L13 28 L24 14 L18 14 Z"
          fill="rgba(180, 83, 9, 0.55)"
        />
        {/* Outline for crispness */}
        <path
          d="M18 4 L8 18 L14 18 L13 28 L24 14 L18 14 Z"
          fill="none"
          stroke="rgba(120, 53, 15, 0.85)"
          strokeWidth="0.9"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );

  const wordmark = showWordmark ? (
    <div className="flex flex-col leading-none">
      <span
        className={`font-display font-bold tracking-tight ${s.headline} ${headlineColor}`}
      >
        Top Choice
      </span>
      <span
        className={`font-display font-semibold uppercase tracking-[0.2em] ${s.sub} ${subColor} mt-1`}
      >
        Electrical
      </span>
    </div>
  ) : null;

  const inner = (
    <span className={`inline-flex items-center gap-3 group ${className}`}>
      {mark}
      {wordmark}
      <span className="sr-only">{client.name}</span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} aria-label={client.name} className="inline-flex">
        {inner}
      </Link>
    );
  }
  return inner;
}
