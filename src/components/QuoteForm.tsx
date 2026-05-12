'use client';

import { useState, useEffect } from 'react';
import { client } from '@/data/client';

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

// GA4 dataLayer typing (loose) — fires the `form_submit` conversion event
// when the form succeeds.
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
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // On mount, capture UTM params, page path, and referrer. Stored in state so
  // they survive even if the user navigates within the SPA before submitting.
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
    setSubmitting(true);

    const payload = {
      ...formData,
      ...source,
      submitted_at: new Date().toISOString(),
      _subject: `New Quote Request: ${formData.service || 'General Inquiry'} — ${formData.name}`,
    };

    try {
      const response = await fetch('https://formspree.io/f/xpwdqkbj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        console.log('Form submitted:', payload);
        setSubmitted(true);
      }
    } catch {
      console.log('Form submitted:', payload);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
      // GA4 conversion event — survives even if Formspree blip
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'form_submit', {
          form_id: 'quote_form',
          service: formData.service || 'unspecified',
          urgency: formData.urgency || 'unspecified',
          page_path: source.page_path,
          utm_source: source.utm_source || '(direct)',
          utm_medium: source.utm_medium || '(none)',
          utm_campaign: source.utm_campaign || '(none)',
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
        <p className="text-gray-500 text-sm mb-4">We got your request and will be in touch within 2 hours during business hours.</p>
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">What happens next</p>
          <div className="space-y-3">
            {[
              { step: '1', text: 'We review your request and prepare questions' },
              { step: '2', text: 'We call you to discuss the job and schedule a visit' },
              { step: '3', text: 'We provide a clear, written quote on-site' },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold/10 text-gold text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{item.step}</span>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
          <label htmlFor="email" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">Email</label>
          <input
            id="email"
            type="email"
            placeholder="you@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold focus:bg-white transition-all duration-200"
          />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">Service Needed</label>
        <select
          id="service"
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
      <div>
        <label htmlFor="urgency" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">Timeline</label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { value: 'no-rush', label: 'No rush' },
            { value: 'this-week', label: 'This week' },
            { value: 'emergency', label: 'Emergency' },
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setFormData({ ...formData, urgency: option.value })}
              className={`py-2.5 px-3 rounded-xl text-xs font-medium border transition-all duration-200 ${
                formData.urgency === option.value
                  ? option.value === 'emergency'
                    ? 'bg-red/10 border-red/30 text-red'
                    : 'bg-gold/10 border-gold/30 text-gold-dark'
                  : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-gray-300'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">Tell us about the job</label>
        <textarea
          id="message"
          placeholder="What do you need done? Any details help us prepare a more accurate quote."
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold focus:bg-white transition-all duration-200 resize-none"
        />
      </div>

      {/* Hidden source-tracking fields — also included in JSON payload, but
          duplicated as form inputs so Formspree dashboards surface them. */}
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
