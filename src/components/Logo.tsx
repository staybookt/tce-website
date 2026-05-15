import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/data/client';

/**
 * Logo — Tim's actual brand mark, recolored to the site palette.
 *
 * Tim's existing logo is a circular badge: amber ring with white text
 * "TOP CHOICE / ELECTRICAL" arcing top + bottom, a faceted lightning
 * bolt on a white center, orbital ring, and two plug icons flanking the
 * bolt. Original logo was royal blue + black; this version preserves
 * the entire mark structure and only swaps the colors to amber-500
 * (#F59E0B) + navy-dark (#08080A) to match the rest of the site.
 *
 * The mark IS the logo — wordmark is built into the badge. We do not
 * pair it with a separate typeset wordmark; the badge already reads
 * "TOP CHOICE ELECTRICAL" on its own.
 *
 * Variants:
 *   - 'dark' (default): full-color mark on dark header
 *   - 'light': full-color mark on light footer / printed surfaces (same image)
 *
 * Sizes:
 *   - 'sm': header when scrolled (36px)
 *   - 'md': header at rest / footer (44px)
 *   - 'lg': hero / landing surfaces (64px)
 */

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
}

const SIZES = {
  sm: { dim: 36, label: 'text-sm', sub: 'text-[9px]' },
  md: { dim: 44, label: 'text-base', sub: 'text-[10px]' },
  lg: { dim: 64, label: 'text-lg', sub: 'text-xs' },
} as const;

export default function Logo({
  variant = 'dark',
  size = 'md',
  href = '/',
  className = '',
}: LogoProps) {
  const s = SIZES[size];

  const labelColor = variant === 'dark' ? 'text-white' : 'text-gray-900';

  // The badge is self-contained — it carries the wordmark inside the
  // mark itself. We still set a screenreader-only label and an optional
  // visible name on lg size for the hero treatment, but for sm/md the
  // mark stands alone.
  const inner = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/logo/tce-logo.png"
        alt={client.name}
        width={s.dim}
        height={s.dim}
        priority
        className="shrink-0"
      />
      {size === 'lg' && (
        <span className={`font-display font-bold tracking-tight ${s.label} ${labelColor} hidden sm:inline`}>
          {client.name}
        </span>
      )}
      <span className="sr-only">{client.name}</span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} aria-label={client.name} className="inline-flex items-center">
        {inner}
      </Link>
    );
  }
  return inner;
}
