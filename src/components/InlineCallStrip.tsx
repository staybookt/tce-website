import { client } from '@/data/client';

interface Props {
  /** Variant determines colour scheme so the strip fits the section behind it. */
  variant?: 'light' | 'amber' | 'dark';
  /** Optional override copy. Defaults to a same-day quote line. */
  headline?: string;
  /** Optional sub-line / tagline shown to the right of phone on desktop. */
  tagline?: string;
}

/**
 * Inline tap-to-call strip — placed between major sections to maintain
 * tap-to-call density (one of the biggest conversion deltas vs PE-backed
 * competitors like Right Time, who run 15–18 tel: links per page).
 *
 * Renders as a full-width horizontal bar. The entire row is a tel: link
 * so any tap (mobile or desktop) initiates a phone call.
 *
 * Three variants:
 *  - 'light'  (cream/amber on white sections — default)
 *  - 'amber'  (saturated amber accent — high-attention placement)
 *  - 'dark'   (gold-on-navy — fits between dark sections)
 */
export default function InlineCallStrip({
  variant = 'light',
  headline,
  tagline,
}: Props) {
  const base = 'block group transition-colors';
  const bg =
    variant === 'amber'
      ? 'bg-amber-500 hover:bg-amber-600 text-gray-900'
      : variant === 'dark'
      ? 'bg-gray-900 hover:bg-gray-800 text-white border-y border-amber-500/20'
      : 'bg-amber-50 hover:bg-amber-100 text-gray-900 border-y border-amber-200/60';

  const phoneColor =
    variant === 'dark'
      ? 'text-amber-400'
      : variant === 'amber'
      ? 'text-gray-900'
      : 'text-amber-600';

  const subColor =
    variant === 'dark'
      ? 'text-white/60'
      : variant === 'amber'
      ? 'text-gray-900/80'
      : 'text-gray-600';

  const defaultHeadline = headline ?? 'Need it done today?';
  const defaultTagline = tagline ?? 'Same-day quotes · 24/7 emergency';

  return (
    <a
      href={`tel:${client.phone}`}
      className={`${base} ${bg}`}
      aria-label={`Call ${client.ownerName} at ${client.phone}`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-5 flex items-center justify-between gap-4 md:gap-6">
        {/* Left: headline + tagline */}
        <div className="flex items-center gap-3 md:gap-5 min-w-0">
          <div
            className={`shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center ${
              variant === 'amber'
                ? 'bg-gray-900/10'
                : variant === 'dark'
                ? 'bg-amber-500/15 border border-amber-500/30'
                : 'bg-amber-500/15 border border-amber-500/30'
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              className={`w-4 h-4 md:w-5 md:h-5 ${
                variant === 'amber' ? 'text-gray-900' : 'text-amber-500'
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </div>
          <div className="min-w-0">
            <span className="font-bold text-sm md:text-base block leading-tight">
              {defaultHeadline}{' '}
              <span className={`${phoneColor} group-hover:underline`}>
                {client.phone}
              </span>
            </span>
            <span className={`hidden sm:inline text-xs ${subColor} leading-tight`}>
              {defaultTagline}
            </span>
          </div>
        </div>

        {/* Right: forward arrow / call CTA chip on desktop */}
        <div
          className={`hidden md:inline-flex items-center gap-2 shrink-0 text-sm font-semibold ${
            variant === 'amber'
              ? 'text-gray-900'
              : variant === 'dark'
              ? 'text-amber-300'
              : 'text-amber-700'
          }`}
        >
          <span>Tap to call</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.4}
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </a>
  );
}
