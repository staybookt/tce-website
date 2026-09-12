'use client';

import { useState } from 'react';
import { useEffect } from 'react';
import { client } from '@/data/client';
import { deliverLead } from '@/lib/deliverLead';

// Source-tracking metadata captured from URL + page context. Sent with every
// quote-request submission so we can attribute leads to channel, campaign,
// and which page the visitor was on when they converted.
interface SourceMeta {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  page_path: string;
  referrer: string;
  submitted_at: string;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function QuoteForm({ preselectedService }: { preselectedService?: string }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedService || '',
    urgency: '',
    message: '',
  });
  const [source, setSource] = useState<SourceMeta>({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
    page_path: '',
    referrer: '',
    submitted_at: '',
  });
  const [botField, setBotField] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [failed, setFailed] = useState(false);
  const [timelineError, setTimelineError] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    setSource({
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_term: params.get('utm_term') || '',
      utm_content: params.get('utm_content') || '',
      page_path: window.location.pathname,
      referrer: document.referrer || '',
      submitted_at: '',
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Timeline is a button group, so the browser cannot enforce it for us.
    if (!formData.urgency) {
      setTimelineError(true);
      document.getElementById('timeline-group')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setSubmitting(true);
    setFailed(false);

    const payload = {
      form_type: 'quote_request',
      ...formData,
      ...source,
      _gotcha: botField,
      submitted_at: new Date().toISOString(),
      _subject: `New Quote Request: ${formData.service || 'General Inquiry'} — ${formData.name}`,
    };

    // A lead is only "sent" if at least one delivery path accepted it.
    // See src/lib/deliverLead.ts for the two paths.
    const { delivered, channels } = await deliverLead(payload);

    setSubmitting(false);

    if (delivered) {
      setSubmitted(true);
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'form_submit', {
          form_id: 'quote_form',
          service: formData.service,
          urgency: formData.urgency,
          page_path: source.page_path,
          delivery_channels: channels.join(',') || 'none',
          utm_source: source.utm_source || '(direct)',
          utm_medium: source.utm_medium || '(none)',
          utm_campaign: source.utm_campaign || '(none)',
        });
      }
    } else {
      setFailed(true);
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'form_error', {
          form_id: 'quote_form',
          page_path: source.page_path,
        });
      }
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-6">
        <div className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Thanks, {formData.name}!</h3>
        <p className="text-gray-500 text-sm mb-4">
          We got your request and sent a confirmation to {formData.email}. Tim will be in touch within 2 hours during
          business hours.
        </p>
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Need it sooner?</p>
          <a
            href={`tel:${client.phone}`}
            className="inline-flex items-center gap-2 text-gold-dark font-bold text-sm hover:underline"
          >
            Call or text Tim directly &mdash; {client.phone}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {failed && (
        <div role="alert" className="bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="text-red-800 font-bold text-sm mb-1">That didn&apos;t send.</p>
          <p className="text-red-700 text-sm leading-relaxed mb-3">
            Something went wrong on our end, so your request didn&apos;t reach us. Your details are
            still filled in below if you&apos;d like to try again — or just call Tim directly and
            skip the form.
          </p>
          <a
            href={`tel:${client.phone}`}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-4 py-2.5 rounded-lg transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.21l-2.26 1.13a11 11 0 005.5 5.5l1.13-2.26a1 1 0 011.21-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
            </svg>
            Call {client.phone}
          </a>
        </div>
      )}
      <div>
        <label htmlFor="name" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">Name *</label>
        <input
          id="name"
          type="text"
          required
          placeholder="Your full name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold focus:bg-white transition-all duration-200"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="phone" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">Phone *</label>
          <input
            id="phone"
            type="tel"
            required
            placeholder="(905) 555-1234"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold focus:bg-white transition-all duration-200"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">Email *</label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold focus:bg-white transition-all duration-200"
          />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">Service Needed *</label>
        <select
          id="service"
          required
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold focus:bg-white transition-all duration-200 appearance-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236B7280' d='M2 4l4 4 4-4'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
        >
          <option value="">Select a service...</option>
          {client.services.map((s) => (
            <option key={s.slug} value={s.name}>{s.name}</option>
          ))}
          <option value="Other">Other / Not Sure</option>
        </select>
      </div>
      <div id="timeline-group" className="scroll-mt-32">
        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">Timeline *</label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { value: 'no-rush', label: 'No rush' },
            { value: 'this-week', label: 'This week' },
            { value: 'emergency', label: 'Emergency' },
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                setFormData({ ...formData, urgency: option.value });
                setTimelineError(false);
              }}
              className={`min-h-[44px] py-3 px-3 rounded-xl text-xs font-medium border transition-all duration-200 ${
                formData.urgency === option.value
                  ? option.value === 'emergency'
                    ? 'bg-red/10 border-red/30 text-red'
                    : 'bg-gold/10 border-gold/30 text-gold-dark'
                  : timelineError
                    ? 'bg-red-50 border-red-300 text-red-700'
                    : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-gray-300'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        {timelineError && (
          <p role="alert" className="text-red-600 text-xs mt-2 font-medium">
            Pick a timeline so Tim knows how fast to move.
          </p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">
          Tell us about the job <span className="text-gray-400 normal-case font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          placeholder="What do you need done? Any details help us prepare a more accurate quote."
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold focus:bg-white transition-all duration-200 resize-none"
        />
      </div>

      {/* Honeypot — hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="company-website">Leave this field empty</label>
        <input
          id="company-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={botField}
          onChange={(e) => setBotField(e.target.value)}
        />
      </div>

      {/* Hidden source-tracking fields, duplicated so Formspree surfaces them. */}
      <input type="hidden" name="utm_source" value={source.utm_source} />
      <input type="hidden" name="utm_medium" value={source.utm_medium} />
      <input type="hidden" name="utm_campaign" value={source.utm_campaign} />
      <input type="hidden" name="utm_term" value={source.utm_term} />
      <input type="hidden" name="utm_content" value={source.utm_content} />
      <input type="hidden" name="page_path" value={source.page_path} />
      <input type="hidden" name="referrer" value={source.referrer} />

      <button
        type="submit"
        disabled={submitting}
        className="w-full btn-premium bg-gold hover:bg-gold-dark text-white font-bold py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/40 disabled:opacity-60 disabled:cursor-not-allowed text-sm"
      >
        {submitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : failed ? (
          'Try again'
        ) : (
          'Get Your Free Quote'
        )}
      </button>
      <p className="text-xs text-gray-400 text-center">
        No obligation. We respond within 2 hours during business hours.
      </p>
    </form>
  );
}
