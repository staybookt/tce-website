'use client';

import Image from 'next/image';
import { useState } from 'react';
import { beforeAfterPairs, type BeforeAfterPair } from '@/data/before-after';

interface Props {
  slug: string;
  headline?: string;
  eyebrow?: string;
}

export default function BeforeAfterSlider({ slug, headline, eyebrow = 'See the Difference' }: Props) {
  const pair: BeforeAfterPair | undefined = beforeAfterPairs[slug];
  const [position, setPosition] = useState(50);
  if (!pair) return null;

  return (
    <div className="animate-on-scroll">
      <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-4">{eyebrow}</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
        {headline || 'Before, then after.'}
      </h2>

      <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-lg select-none bg-gray-900">
        {/* Before image */}
        <Image
          src={pair.beforeSrc}
          alt={pair.beforeCaption}
          fill
          sizes="(max-width: 1024px) 100vw, 75vw"
          className="object-cover pointer-events-none"
        />

        {/* After image, clipped horizontally */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ clipPath: 'inset(0 0 0 ' + position + '%)' }}
        >
          <Image
            src={pair.afterSrc}
            alt={pair.afterCaption}
            fill
            sizes="(max-width: 1024px) 100vw, 75vw"
            className="object-cover"
          />
        </div>

        {/* Vertical divider line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_rgba(0,0,0,0.5)] pointer-events-none"
          style={{ left: position + '%', transform: 'translateX(-50%)' }}
        />

        {/* Drag handle */}
        <div
          className="absolute top-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center pointer-events-none"
          style={{ left: position + '%', transform: 'translate(-50%, -50%)' }}
        >
          <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l-4 5 4 5M16 7l4 5-4 5" />
          </svg>
        </div>

        {/* Corner labels */}
        <div className="absolute top-4 left-4 bg-black/70 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-md backdrop-blur-sm pointer-events-none">
          {pair.beforeLabel}
        </div>
        <div className="absolute top-4 right-4 bg-amber-500 text-gray-900 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md pointer-events-none">
          {pair.afterLabel}
        </div>

        {/* Range input — invisible, drives the slider */}
        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label="Drag to compare before and after"
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        />
      </div>

      {/* Captions below */}
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-400 font-semibold text-xs uppercase tracking-wider mb-1">{pair.beforeLabel}</p>
          <p className="text-gray-600">{pair.beforeCaption}</p>
        </div>
        <div className="text-right">
          <p className="text-amber-600 font-semibold text-xs uppercase tracking-wider mb-1">{pair.afterLabel}</p>
          <p className="text-gray-600">{pair.afterCaption}</p>
        </div>
      </div>
    </div>
  );
}
