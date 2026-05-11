'use client';

import { client } from '@/data/client';

/**
 * Mobile-only sticky tap-to-call bar.
 * Full-width bottom bar showing the phone number, ESA badge, and "Call Tim" CTA.
 * Hidden on md+ viewports where the header CTA + section CTAs already cover desktop.
 *
 * Replaces the previous small floating phone icon, which made the searcher
 * tap a generic icon without seeing the number. The full bar shows the
 * number, signals trust (ESA), and is unmissable on every page scroll.
 */
export default function ClickToCall() {
  return (
    <>
      {/* Spacer to prevent the sticky bar from covering page-bottom content on mobile */}
      <div className="md:hidden h-20" aria-hidden="true" />

      <a
        href={`tel:${client.phone}`}
        className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-gray-900 shadow-2xl shadow-amber-500/40 transition-colors"
        aria-label={`Call ${client.ownerName} at ${client.name}`}
      >
        <div className="flex items-center justify-between px-5 py-4 max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-900/10 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div className="leading-tight">
              <p className="text-[10px] uppercase tracking-wider font-bold text-gray-900/70">Call Tim &middot; ESA Certified</p>
              <p className="font-bold text-lg">{client.phone}</p>
            </div>
          </div>
          <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </a>
    </>
  );
}
