'use client';

import { useEffect } from 'react';

/**
 * CallTracker — fires a GA4 `click_to_call` event whenever a visitor taps
 * any tel: link anywhere on the site.
 *
 * Uses a single delegated listener on document rather than an onClick on each
 * link, because tel: links are scattered across Header, ClickToCall (the
 * sticky mobile bar), InlineCallStrip, SectionCTA, CallbackForm and the
 * footer. Delegation means new call CTAs are tracked automatically with no
 * extra wiring.
 *
 * What this can and cannot tell you:
 *  - CAN: how many people tapped call, from which page, from which CTA, on
 *    which device. Enough to attribute call volume to area/service pages.
 *  - CANNOT: who called. A tel: link just hands off to the dialer; the
 *    browser never learns whether the call connected, and there is no
 *    identity attached. Caller identity only exists on the phone itself.
 *    Getting identity would require a call-tracking number.
 */
export default function CallTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target || typeof target.closest !== 'function') return;

      const link = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (!link) return;

      if (typeof window.gtag !== 'function') return;

      // Label the CTA so we can tell the sticky bar apart from the header
      // button apart from an inline text link.
      const label =
        link.getAttribute('aria-label') ||
        link.textContent?.trim().slice(0, 60) ||
        'unlabelled';

      window.gtag('event', 'click_to_call', {
        page_path: window.location.pathname,
        cta_label: label,
        phone: link.getAttribute('href')?.replace('tel:', '') || '',
        device: window.matchMedia('(max-width: 767px)').matches ? 'mobile' : 'desktop',
      });
    };

    // Capture phase: the event is recorded even though the click immediately
    // hands the browser off to the dialer.
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
