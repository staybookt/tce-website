'use client';

import Image, { type ImageLoaderProps, type ImageProps } from 'next/image';

/**
 * next/image for a src that may be a remote URL.
 *
 * Remote images bypass Vercel's /_next/image proxy (it rejected Pexels URLs,
 * see 45317df). Before this, they were passed through `unoptimized`, which
 * also drops the srcset, so a 180px-wide card downloaded the 1600px original.
 * Pexels resizes on its own CDN from the `w` parameter, so for Pexels we hand
 * next/image a loader and it builds a normal srcset that still goes straight
 * to Pexels. Other remote hosts stay unoptimized; local files are unchanged.
 *
 * A client component because a loader is a function, and functions cannot be
 * passed as props from a server component.
 */

const isRemote = (src: string) => src.startsWith('http://') || src.startsWith('https://');
const isPexels = (src: string) => src.startsWith('https://images.pexels.com/');

function pexelsLoader({ src, width }: ImageLoaderProps) {
  const url = new URL(src);
  url.searchParams.set('w', String(width));
  return url.toString();
}

export default function RemoteImage({ src, alt, ...props }: ImageProps & { src: string }) {
  if (isPexels(src)) return <Image src={src} alt={alt} loader={pexelsLoader} {...props} />;
  return <Image src={src} alt={alt} unoptimized={isRemote(src)} {...props} />;
}
