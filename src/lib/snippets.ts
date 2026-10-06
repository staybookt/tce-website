import { client } from '@/data/client';

/**
 * Search snippet builders.
 *
 * The problem these solve, from September's Search Console data: the
 * site was shown 3,990 times and clicked 27 times. The city terms that
 * generate most of those impressions — "electrician newmarket",
 * "electrician aurora", "electrician keswick" — produced zero clicks
 * despite ranking as high as position 4.5.
 *
 * Ranking was not the problem. The snippet was. "Licensed & Insured"
 * is what every competitor says, so it gives nobody a reason to pick
 * this one.
 *
 * What a homeowner with a tripping breaker actually decides on:
 *   1. Will a person actually answer     -> "Tim answers the phone"
 *   2. Will I get a surprise bill        -> "fixed price in writing"
 *   3. Has anyone else trusted them      -> the rating and count
 *
 * Every one of those is already true and already stated on the site.
 * Nothing here commits Tim to a discount or any new promise — if he
 * later wants one, it slots into these strings in one place.
 *
 * Lengths are tuned to Google's practical limits: roughly 60
 * characters for a title before truncation (the layout appends
 * " | Top Choice Electrical", which is allowed to truncate) and
 * roughly 155 for a description.
 */

const rating = (client.googleRating ?? 5).toFixed(1);
const reviews = client.reviewCount;

/** "Rated 5.0 from 19 reviews." Omitted entirely if there is nothing to claim. */
export const socialProof = reviews > 0 ? `Rated ${rating} from ${reviews} reviews.` : '';

/**
 * Area page title. Leads with the differentiator rather than the
 * category, because "Electrician in Newmarket" is what the other nine
 * results already say.
 */
export function areaTitle(areaName: string): string {
  return `Same-Day Electrician in ${areaName}`;
}

export function areaDescription(areaName: string): string {
  return [
    `Electrician in ${areaName} — Tim answers the phone and puts a fixed price in writing, same day.`,
    `ESA certified, $5M insured.`,
    socialProof,
  ]
    .filter(Boolean)
    .join(' ');
}

/** Shorter form for Open Graph, where there is less room and no SERP competition. */
export function areaSocialDescription(areaName: string): string {
  return `Same-day electrical quotes in ${areaName}. ESA certified, fully insured. Call ${client.phone}.`;
}

export const homeTitle = `Same-Day Electrician in Newmarket | ${client.name}`;

export const homeDescription = [
  'Tim answers the phone himself. Panel upgrades, EV chargers and emergency work across York Region.',
  'Fixed price in writing, same day.',
  socialProof,
]
  .filter(Boolean)
  .join(' ');
