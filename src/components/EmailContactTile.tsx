'use client';

import { useState } from 'react';
import { client } from '@/data/client';

/**
 * Email tile for the contact page.
 *
 * This used to fire a `mailto:`. That only works if the visitor's
 * machine has a configured mail client, and on both machines we
 * tested it did not: Windows with no handler did nothing at all, and
 * a Mac running Apple Mail with no account opened an "Add Account"
 * dialog. Both read as a broken website.
 *
 * The quote form is immediately below on the same page, it delivers
 * through a path we control and have verified end to end, and it
 * captures job type and urgency that a raw email would not. So the
 * tile sends people there. Copying the address stays available for
 * anyone who actually wants to write an email.
 */
export default function EmailContactTile() {
  const [copied, setCopied] = useState(false);

  const goToForm = () => {
    const form = document.getElementById('quote-form');
    if (!form) return;
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Focus after the smooth scroll settles, and without yanking the
    // viewport back — preventScroll keeps the animation intact.
    window.setTimeout(() => {
      const firstField = document.getElementById('name');
      if (firstField instanceof HTMLInputElement) firstField.focus({ preventScroll: true });
    }, 700);
  };

  const copy = async (event: React.MouseEvent) => {
    event.stopPropagation();
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
    window.setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="group relative flex items-center gap-4 bg-white border border-gray-200 hover:border-amber-300 hover:shadow-md rounded-2xl p-5 md:p-6 transition-all">
      {/* The whole tile jumps to the form. This is the action that cannot fail. */}
      <button
        type="button"
        onClick={goToForm}
        aria-label="Go to the quote request form"
        className="absolute inset-0 rounded-2xl cursor-pointer"
      />
      <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-amber-600 text-xs font-bold uppercase tracking-wider mb-0.5">Email</p>
        <p className="text-gray-900 font-display font-bold text-base leading-tight truncate">{client.email}</p>
        {copied ? (
          <p className="text-green-600 text-xs mt-0.5 font-semibold">Address copied to clipboard</p>
        ) : (
          <p className="text-gray-500 text-xs mt-0.5">Use the form below &mdash; goes straight to Tim</p>
        )}
      </div>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? 'Email address copied' : 'Copy email address'}
        className={`relative z-10 shrink-0 min-h-[44px] px-3 rounded-lg border text-xs font-bold transition-colors ${
          copied
            ? 'border-green-200 bg-green-50 text-green-700'
            : 'border-gray-200 text-gray-500 hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700'
        }`}
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </div>
  );
}
