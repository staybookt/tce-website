import { NextResponse } from 'next/server';
import { client } from '@/data/client';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Direct lead delivery.
 *
 * Until now every lead reached Tim only if Formspree's notification
 * email landed in his inbox — an account setting nobody on our side
 * can see, on a plan that discards submissions after 30 days. That
 * failed silently and the leads are unrecoverable.
 *
 * This route removes the dependency. It emails Tim directly, and can
 * also text him. Both channels are optional and independent. The
 * response always states which channels actually delivered, so a
 * future failure is visible in the browser console and in GA4 rather
 * than invisible for months.
 *
 * The forms still post to Formspree in parallel, so this changes
 * nothing about existing behaviour — it only adds paths.
 *
 * Email needs exactly one environment variable, RESEND_API_KEY, which
 * the Vercel Resend integration sets automatically. Everything else
 * has a sensible default.
 *
 * Environment variables (all optional):
 *   RESEND_API_KEY                Set by the Vercel Resend integration
 *   LEAD_EMAIL_FROM               Override sender (default below)
 *   LEAD_EMAIL_TO                 Override recipient (default: Tim)
 *   TWILIO_ACCOUNT_SID            Twilio account SID (AC...)
 *   TWILIO_AUTH_TOKEN             Twilio auth token
 *   TWILIO_FROM_NUMBER            Sending number, E.164 (+1...)
 *   TWILIO_MESSAGING_SERVICE_SID  Preferred over FROM_NUMBER if set
 *   LEAD_SMS_TO                   Override recipient, E.164
 */

const MAX_FIELD = 2000;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const SPACE_CODE = 32;
const DELETE_CODE = 127;

// The address the domain is authenticated for in Resend. Kept in code
// rather than an environment variable so that installing the Resend
// integration is the whole of the setup.
const DEFAULT_EMAIL_FROM = 'Top Choice Electrical <leads@topchoiceelectrical.com>';

// Per-instance throttle. Serverless gives each instance its own map, so
// this is a speed bump rather than a wall — enough to stop a script
// hammering the endpoint, which is what actually matters here.
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 500) hits.clear();
  return recent.length > RATE_LIMIT_MAX;
}

/**
 * Trim, cap length, and replace control characters with a space.
 * Done by codepoint rather than a regex character class so the source
 * file stays plain ASCII. Ordinary punctuation and accents are kept.
 */
function clean(value: unknown): string {
  if (typeof value !== 'string') return '';
  let out = '';
  for (const ch of value) {
    const code = ch.codePointAt(0) ?? 0;
    out += code < SPACE_CODE || code === DELETE_CODE ? ' ' : ch;
  }
  return out.trim().slice(0, MAX_FIELD);
}

function toE164(raw: string): string {
  const digits = raw.replace(/[^0-9]/g, '');
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  return raw.startsWith('+') ? raw : `+${digits}`;
}

function smsConfigured(): boolean {
  return Boolean(
    process.env.TWILIO_ACCOUNT_SID &&
      process.env.TWILIO_AUTH_TOKEN &&
      (process.env.TWILIO_FROM_NUMBER || process.env.TWILIO_MESSAGING_SERVICE_SID),
  );
}

function emailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}

type Channel = { sent: boolean; error?: string };

async function sendSms(body: string): Promise<Channel> {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM_NUMBER;
  const service = process.env.TWILIO_MESSAGING_SERVICE_SID;
  const to = toE164(process.env.LEAD_SMS_TO || client.leadDelivery.smsNumber);

  if (!smsConfigured() || !sid || !token) {
    return { sent: false, error: 'sms_not_configured' };
  }

  const params = new URLSearchParams({ To: to, Body: body.slice(0, 1500) });
  if (service) params.set('MessagingServiceSid', service);
  else if (from) params.set('From', toE164(from));

  try {
    const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${sid}:${token}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });
    if (res.ok) return { sent: true };
    const detail = await res.text();
    return { sent: false, error: `twilio_${res.status}: ${detail.slice(0, 300)}` };
  } catch (err) {
    return { sent: false, error: `twilio_network: ${String(err).slice(0, 200)}` };
  }
}

async function sendEmail(subject: string, text: string, replyTo: string): Promise<Channel> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_EMAIL_FROM || DEFAULT_EMAIL_FROM;
  const to = process.env.LEAD_EMAIL_TO || client.leadDelivery.email;

  if (!key) return { sent: false, error: 'email_not_configured' };

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        text,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    });
    if (res.ok) return { sent: true };
    const detail = await res.text();
    return { sent: false, error: `resend_${res.status}: ${detail.slice(0, 300)}` };
  } catch (err) {
    return { sent: false, error: `resend_network: ${String(err).slice(0, 200)}` };
  }
}

/**
 * Config check. Booleans only — never the values — so this is safe to
 * open in a browser. Answers "is lead delivery switched on?" without
 * messaging anyone.
 */
export async function GET() {
  const sms = smsConfigured();
  const email = emailConfigured();
  return NextResponse.json({
    ok: true,
    delivery: {
      sms_configured: sms,
      email_configured: email,
      any_configured: sms || email,
    },
    note:
      sms || email
        ? 'Direct delivery is on. Submit a test lead to confirm it arrives.'
        : 'Direct delivery is OFF. Leads reach Formspree only. Install the Vercel Resend integration and redeploy.',
  });
}

export async function POST(req: Request) {
  // Same-origin only. This endpoint messages a real person; it should
  // not be callable from anywhere else.
  const origin = req.headers.get('origin') ?? '';
  const host = req.headers.get('host') ?? '';
  if (origin && host && !origin.includes(host)) {
    return NextResponse.json({ ok: false, error: 'bad_origin' }, { status: 403 });
  }

  const forwarded = req.headers.get('x-forwarded-for');
  const ip = forwarded?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || 'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 });
  }

  let raw: Record<string, unknown>;
  try {
    raw = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: 'bad_json' }, { status: 400 });
  }

  // Honeypot — real visitors never fill this.
  if (clean(raw._gotcha)) {
    return NextResponse.json({ ok: true, delivered: [], note: 'discarded' });
  }

  const name = clean(raw.name);
  const phone = clean(raw.phone);
  const email = clean(raw.email);
  const service = clean(raw.service);
  const urgency = clean(raw.urgency) || clean(raw.timeWindow);
  const message = clean(raw.message);
  const pagePath = clean(raw.page_path);
  const utmSource = clean(raw.utm_source);
  const formType = clean(raw.form_type) || 'quote_request';

  if (!name || !phone) {
    return NextResponse.json({ ok: false, error: 'missing_required' }, { status: 400 });
  }

  const label = formType === 'callback_request' ? 'CALLBACK' : 'QUOTE';

  const smsLines: string[] = [`${label} - ${name}`, phone];
  if (service) smsLines.push(`Job: ${service}`);
  if (urgency) smsLines.push(`When: ${urgency}`);
  if (message) smsLines.push(`"${message.slice(0, 300)}"`);
  if (email) smsLines.push(email);

  const mailLines: string[] = [
    `New ${formType.replace(/_/g, ' ')} from the website.`,
    '',
    `Name:     ${name}`,
    `Phone:    ${phone}`,
  ];
  if (email) mailLines.push(`Email:    ${email}`);
  if (service) mailLines.push(`Service:  ${service}`);
  if (urgency) mailLines.push(`Timeline: ${urgency}`);
  if (message) mailLines.push('', 'Message:', message);
  mailLines.push('', '---');
  if (pagePath) mailLines.push(`Page: ${pagePath}`);
  if (utmSource) mailLines.push(`Source: ${utmSource}`);
  mailLines.push(`Received: ${new Date().toISOString()}`);

  const subject = `${label}: ${name}${service ? ` - ${service}` : ''}`;

  const [sms, mail] = await Promise.all([
    sendSms(smsLines.join('\n')),
    sendEmail(subject, mailLines.join('\n'), email),
  ]);

  const delivered: string[] = [];
  if (sms.sent) delivered.push('sms');
  if (mail.sent) delivered.push('email');

  const errors: string[] = [];
  if (sms.error) errors.push(sms.error);
  if (mail.error) errors.push(mail.error);

  if (delivered.length === 0) {
    // Logged so a broken channel shows up in Vercel logs immediately
    // instead of going unnoticed the way the last failure did.
    console.error('[lead] no channel delivered', { errors });
    return NextResponse.json({ ok: false, delivered, errors }, { status: 502 });
  }

  if (errors.length > 0) console.warn('[lead] partial delivery', { delivered, errors });
  return NextResponse.json({ ok: true, delivered });
}
