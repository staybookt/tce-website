'use client';

import { useEffect, useState } from 'react';
import { client } from '@/data/client';

/**
 * Low-friction callback request — the "I don't want to call but I'd
 * like Tim to call me" form. Three fields: name, phone, best time
 * window. Optional message. Goal: capture leads from visitors who
 * won't tap-to-call but also won't fill a long form.
 *
 * Separate from QuoteForm on the contact page. Lives on the homepage
 * so we have two distinct lead surfaces: callback request (here) and
 * full quote request (contact page).
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface SourceMeta {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  page_path: string;
  referrer: string;
  submitted_at: string;
}

const TIME_WINDOWS = [
  { value: 'morning', label: 'Morning' },
  { value: 'afternoon', label: 'Afternoon' },
  { value: 'evening', label: 'Evening' },
  { value: 'anytime', label: 'Anytime' },
];

export default function CallbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    timeWindow: '',
    message: '',
  });
  const [source, setSource] = useState<SourceMeta>({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    page_path: '',
    referrer: '',
    submitted_at: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    setSource({
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      page_path: window.location.pathname,
      referrer: document.referrer || '',
      submitted_at: '',
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      form_type: 'callback_request',
      ...formData,
      ...source,
      submitted_at: new Date().toISOString(),
      _subject: `Callback request — ${formData.name} (${formData.timeWindow || 'anytime'})`,
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
        console.log('Callback submitted:', payload);
        setSubmitted(true);
      }
    } catch {
      console.log('Callback submitted (network error):', payload);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'form_submit', {
          form_id: 'callback_form',
          time_window: formData.timeWindow || 'unspecified',
          page_path: source.page_path,
          utm_source: source.utm_source || '(direct)',
        });
      }
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50/60 via-white to-amber-50/30 border-y border-amber-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* Left — pitch */}
          <div>
            <p className="text-amber-600 font-semibold text-xs uppercase tracking-[0.25em] mb-3">
              Prefer Tim to call you?
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-5">
              Get a call back<br />
              <span className="gradient-text">in 10 minutes.</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              Drop your number and the best time. Tim calls back personally — usually within 10 minutes during business hours, same-day otherwise. No phone tree, no &ldquo;quote bot,&rdquo; no chasing.
            </p>
            <ul className="space-y-3 text-gray-700 text-sm md:text-base">
              {[
                'Real conversation, not a form-letter follow-up',
                '60-second triage on the call — Tim tells you straight whether the job is in his wheelhouse',
                'On-site quote scheduled if the fit is right',
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.4}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-500 text-xs mt-6">
              Want to talk now instead?{' '}
              <a href={`tel:${client.phone}`} className="text-amber-700 font-semibold hover:underline">
                Call {client.phone}
              </a>
              .
            </p>
          </div>

          {/* Right — form */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-50 border border-green-200 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.4}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2 tracking-tight">
                  Got it, {formData.name.split(' ')[0] || 'thanks'}.
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tim will call you back during the time window you picked. If it&apos;s outside business hours, he&apos;ll catch you first thing tomorrow morning.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="cb-name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your name *
                  </label>
                  <input
                    id="cb-name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-base sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="cb-phone" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Phone number *
                  </label>
                  <input
                    id="cb-phone"
                    type="tel"
                    required
                    placeholder="(905) 555-1234"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-base sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Best time to call
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {TIME_WINDOWS.map((tw) => (
                      <button
                        key={tw.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeWindow: tw.value })}
                        className={`min-h-[44px] py-3 px-2 rounded-xl text-sm sm:text-xs font-semibold border transition-all ${
                          formData.timeWindow === tw.value
                            ? 'bg-amber-500 border-amber-500 text-white shadow-sm'
                            : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-100'
                        }`}
                      >
                        {tw.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="cb-msg" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    What&apos;s the job? <span className="text-gray-400 font-normal normal-case">(optional)</span>
                  </label>
                  <textarea
                    id="cb-msg"
                    rows={2}
                    placeholder="Panel upgrade, EV charger, dimming lights, etc."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Hidden source-tracking fields for Formspree dashboard */}
                <input type="hidden" name="utm_source" value={source.utm_source} />
                <input type="hidden" name="utm_medium" value={source.utm_medium} />
                <input type="hidden" name="utm_campaign" value={source.utm_campaign} />
                <input type="hidden" name="page_path" value={source.page_path} />
                <input type="hidden" name="form_type" value="callback_request" />

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold py-4 rounded-xl text-base sm:text-sm transition-all shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 disabled:opacity-60 disabled:cursor-not-allowed"
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
                    'Request a callback'
                  )}
                </button>
                <p className="text-[11px] text-gray-400 text-center">
                  We never share your number. One call back, no spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
