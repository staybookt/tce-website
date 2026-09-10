'use client';

import { useState } from 'react';
import { client } from '@/data/client';

/**
 * Email tile for the contact page.
 *
 * A plain `mailto:` link is silent on any machine with no mail client
 * registered — common on desktop, and indistinguishable from a broken
 * link to the visitor. The mailto stays (it is the right behaviour on
 * mobile and for anyone with a handler), but the tile also offers a
 * Copy control so the address is always obtainable.
 */
export default function EmailContactTile() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(client.email);
    } catch {
      // Older browsers and non-secure contexts have no clipboard API.
      const field = document.createElement('textarea');
      field.value = client.email;
      field.setAttribute('readonly', '');
      field.style.position = 'absolute';
      field.style.left = '-9999px';
      document.body.appendChild(field);
      field.select();
      try {
        document.execCommand('copy');
      } catch {
        // Nothing left to try — the address is still on screen to read.
      }
      document.body.removeChild(field);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative flex items-center gap-4 bg-white border border-gray-200 hover:border-amber-300 hover:shadow-md rounded-2xl p-5 md:p-6 transition-all">
      {/* Covers the tile so the whole card opens the visitor's mail client. */}
      <a
        href={`mailto:${client.email}`}
        className="absolute inset-0 rounded-2xl"
        aria-label={`Email ${client.email}`}
      />
      <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-amber-600 text-xs font-bold uppercase tracking-wider mb-0.5">Email</p>
        <p className="text-gray-900 font-display font-bold text-base leading-tight truncate">{client.email}</p>
        <p className="text-gray-500 text-xs mt-0.5">Same-day reply during hours</p>
      </div>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? 'Email address copied' : 'Copy email address'}
        className="relative z-10 shrink-0 min-h-[44px] px-3 rounded-lg border border-gray-200 hover:border-amber-300 hover:bg-amber-50 text-gray-600 hover:text-amber-700 text-xs font-bold transition-colors"
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </div>
  );
}
