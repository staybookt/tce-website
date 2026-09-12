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
 * This route removes the dependency. It emails Tim directly, can also
 * text him, and sends the customer a confirmation. The response always
 * states which channels delivered, so a future failure is visible in
 * the browser console and in GA4 rather than invisible for months.
 *
 * The forms still post to Formspree in parallel, so this changes
 * nothing about existing behaviour — it only adds paths.
 *
 * Environment variables (all optional):
 *   RESEND_API_KEY                Resend API key
 *   LEAD_EMAIL_FROM               Override sender (default below)
 *   LEAD_EMAIL_TO                 Override recipient (default: Tim)
 *   LEAD_AUTORESPONDER            Set to "off" to disable customer confirmations
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

const DEFAULT_EMAIL_FROM = 'Top Choice Electrical <leads@topchoiceelectrical.com>';

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
 * file stays plain ASCII.
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

/** Deliberately loose. We are avoiding obvious junk, not policing addresses. */
function looksLikeEmail(value: string): boolean {
  if (value.length < 6 || value.length > 254) return false;
  const at = value.indexOf('@');
  if (at < 1) return false;
  const domain = value.slice(at + 1);
  return domain.includes('.') && !domain.startsWith('.') && !domain.endsWith('.') && !value.includes(' ');
}

/** Form values are slugs. Customers should not be shown "this-week". */
function readableTiming(value: string): string {
  const map: Record<string, string> = {
    'no-rush': 'no rush',
    'this-week': 'this week',
    emergency: 'emergency',
    morning: 'a morning callback',
    afternoon: 'an afternoon callback',
    evening: 'an evening callback',
    anytime: 'a callback anytime',
  };
  return map[value] ?? value;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
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

function autoresponderEnabled(): boolean {
  return emailConfigured() && process.env.LEAD_AUTORESPONDER !== 'off';
}

type Channel = { sent: boolean; error?: string };

interface ResendMessage {
  to: string;
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
}

async function sendViaResend(message: ResendMessage): Promise<Channel> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_EMAIL_FROM || DEFAULT_EMAIL_FROM;
  if (!key) return { sent: false, error: 'email_not_configured' };

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [message.to],
        subject: message.subject,
        text: message.text,
        ...(message.html ? { html: message.html } : {}),
        ...(message.replyTo ? { reply_to: message.replyTo } : {}),
      }),
    });
    if (res.ok) return { sent: true };
    const detail = await res.text();
    return { sent: false, error: `resend_${res.status}: ${detail.slice(0, 300)}` };
  } catch (err) {
    return { sent: false, error: `resend_network: ${String(err).slice(0, 200)}` };
  }
}

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

/**
 * Confirmation to the customer.
 *
 * Short on purpose. Someone with a tripping breaker wants two things:
 * proof it was received, and the fastest way to reach a human. Their
 * own form answers are echoed back so it reads as a real reply rather
 * than an autoresponder, and the only call to action is the phone.
 */
function buildConfirmation(
  firstName: string,
  service: string,
  timing: string,
): { subject: string; text: string; html: string } {
  const greeting = firstName ? `Hi ${firstName},` : 'Hi,';

  const recap = [service, timing ? readableTiming(timing) : ''].filter(Boolean).join(' — ');

  const text = [
    greeting,
    '',
    recap ? `Thanks for reaching out. Got your request: ${recap}.` : 'Thanks for reaching out. Got your request.',
    '',
    "I'm likely on a job at the moment, but I'll get back to you as soon as I'm free.",
    '',
    `For the fastest response, call or text me directly: ${client.phone}`,
    '',
    'Tim',
    'Top Choice Electrical',
  ].join('\n');

  const html = `<div style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6;color:#111827;max-width:480px">
<p>${escapeHtml(greeting)}</p>
<p>Thanks for reaching out.${recap ? ` Got your request: <strong>${escapeHtml(recap)}</strong>.` : ' Got your request.'}</p>
<p>I&rsquo;m likely on a job at the moment, but I&rsquo;ll get back to you as soon as I&rsquo;m free.</p>
<p>For the fastest response, call or text me directly: <a href="tel:${escapeHtml(client.phone)}" style="color:#b45309;font-weight:700;text-decoration:none">${escapeHtml(client.phone)}</a></p>
<p style="margin-bottom:0">Tim<br><strong>Top Choice Electrical</strong></p>
</div>`;

  return { subject: 'Got your request - Tim, Top Choice Electrical', text, html };
}

/** Config check. Booleans only — safe to open in a browser. */
export async function GET() {
  const sms = smsConfigured();
  const email = emailConfigured();
  return NextResponse.json({
    ok: true,
    delivery: {
      sms_configured: sms,
      email_configured: email,
      autoresponder_enabled: autoresponderEnabled(),
      any_configured: sms || email,
    },
    note:
      sms || email
        ? 'Direct delivery is on. Submit a test lead to confirm it arrives.'
        : 'Direct delivery is OFF. Leads reach Formspree only. Set RESEND_API_KEY and redeploy.',
  });
}

export async function POST(req: Request) {
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
  if (urgency) smsLines.push(`When: ${readableTiming(urgency)}`);
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
  if (urgency) mailLines.push(`Timeline: ${readableTiming(urgency)}`);
  if (message) mailLines.push('', 'Message:', message);
  mailLines.push('', '---');
  if (pagePath) mailLines.push(`Page: ${pagePath}`);
  if (utmSource) mailLines.push(`Source: ${utmSource}`);
  mailLines.push(`Received: ${new Date().toISOString()}`);

  const subject = `${label}: ${name}${service ? ` - ${service}` : ''}`;
  const notifyTo = process.env.LEAD_EMAIL_TO || client.leadDelivery.email;

  // Tim's notification is the job. Everything else is secondary.
  const [sms, mail] = await Promise.all([
    sendSms(smsLines.join('\n')),
    sendViaResend({
      to: notifyTo,
      subject,
      text: mailLines.join('\n'),
      replyTo: email && looksLikeEmail(email) ? email : undefined,
    }),
  ]);

  const delivered: string[] = [];
  if (sms.sent) delivered.push('sms');
  if (mail.sent) delivered.push('email');

  const errors: string[] = [];
  if (sms.error) errors.push(sms.error);
  if (mail.error) errors.push(mail.error);

  // Customer confirmation. Result deliberately kept out of `delivered`:
  // a failed confirmation must never make a real lead look failed.
  let confirmationSent = false;
  if (autoresponderEnabled() && email && looksLikeEmail(email)) {
    const firstName = name.split(' ')[0] ?? '';
    const body = buildConfirmation(firstName, service, urgency);
    const confirmation = await sendViaResend({
      to: email,
      subject: body.subject,
      text: body.text,
      html: body.html,
      replyTo: notifyTo,
    });
    confirmationSent = confirmation.sent;
    if (confirmation.error) console.warn('[lead] confirmation failed', { error: confirmation.error });
  }

  if (delivered.length === 0) {
    console.error('[lead] no channel delivered', { errors });
    return NextResponse.json({ ok: false, delivered, errors }, { status: 502 });
  }

  if (errors.length > 0) console.warn('[lead] partial delivery', { delivered, errors });
  return NextResponse.json({ ok: true, delivered, confirmation: confirmationSent });
}
