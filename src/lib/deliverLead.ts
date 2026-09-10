/**
 * Lead delivery.
 *
 * Every lead goes down two independent paths at once:
 *
 *   1. Formspree — the existing endpoint. Keeps working exactly as it
 *      always has, and remains a searchable archive of submissions.
 *   2. /api/lead — our own route, which texts and emails Tim directly.
 *
 * They are sent in parallel and the lead counts as delivered if either
 * one succeeds. The point is that no single service can silently
 * swallow a lead again: Formspree's notification email failing no
 * longer means Tim hears nothing.
 *
 * The caller gets back which channels actually worked, so a partial
 * failure shows up in analytics instead of going unnoticed.
 */

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpwdqkbj';

export interface DeliveryResult {
  /** True if at least one path accepted the lead. */
  delivered: boolean;
  /** Which paths accepted it — e.g. ['formspree', 'sms', 'email']. */
  channels: string[];
}

async function postJson(url: string, payload: Record<string, unknown>): Promise<Response | null> {
  try {
    return await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    return null;
  }
}

export async function deliverLead(payload: Record<string, unknown>): Promise<DeliveryResult> {
  const [formspreeRes, directRes] = await Promise.all([
    postJson(FORMSPREE_ENDPOINT, payload),
    postJson('/api/lead', payload),
  ]);

  const channels: string[] = [];

  if (formspreeRes?.ok) channels.push('formspree');

  if (directRes?.ok) {
    try {
      const body = (await directRes.json()) as { delivered?: string[] };
      if (Array.isArray(body.delivered)) channels.push(...body.delivered);
    } catch {
      channels.push('direct');
    }
  }

  return { delivered: channels.length > 0, channels };
}
