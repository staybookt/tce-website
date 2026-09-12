'use client';

import { useState } from 'react';
import { client } from '@/data/client';

/**
 * Email tile for the contact page.
 *
 * `mailto:` only works if the visitor's machine has a configured mail
 * client. Tested on two real machines: Windows with no handler did
 * nothing at all, and a Mac with Apple Mail but no account opened an
 * "Add Account" dialog. Both read as a broken website, and neither
 * leaves the visitor holding the address.
 *
 * So the tile copies by default — that works everywhere and confirms
 * itself on screen. The mailto survives as a labelled secondary link
 * for people whose mail app is set up.
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
    window.setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="group relative flex items-center gap-4 bg-white border border-gray-200 hover:border-amber-300 hover:shadow-md rounded-2xl p-5 md:p-6 transition-all">
      {/* The whole tile copies. This is the action that cannot fail. */}
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy email address ${client.email}`}
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
          <p className="text-green-600 text-xs mt-0.5 font-semibold">Copied to clipboard</p>
        ) : (
          <p className="text-gray-500 text-xs mt-0.5">
            Tap to copy &middot;{' '}
            <a
              href={`mailto:${client.email}`}
              className="relative z-10 underline decoration-gray-300 underline-offset-2 hover:text-amber-700 hover:decoration-amber-400"
            >
              open mail app
            </a>
          </p>
        )}
      </div>
      <span
        aria-hidden="true"
        className={`shrink-0 text-xs font-bold px-3 py-2 rounded-lg border transition-colors ${
          copied
            ? 'border-green-200 bg-green-50 text-green-700'
            : 'border-gray-200 text-gray-500 group-hover:border-amber-300 group-hover:text-amber-700'
        }`}
      >
        {copied ? 'Copied' : 'Copy'}
      </span>
      <span aria-live="polite" className="sr-only">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </div>
  );
}
