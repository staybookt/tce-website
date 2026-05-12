// Audience tag per service slug. Drives the audience filter on /services.
// 'residential' — only relevant to homeowners
// 'commercial'  — only relevant to business owners
// 'both'        — pitched to both (panel, generator, surge, etc.)

export type Audience = 'residential' | 'commercial' | 'both';

export const serviceAudience: Record<string, Audience> = {
  'panel-upgrades':              'both',
  'ev-charger-installation':     'both',
  'landscape-lighting':          'residential',
  'pot-light-installation':      'residential',
  'knob-and-tube-removal':       'residential',
  'residential-wiring':          'residential',
  'commercial-electrical':       'commercial',
  'generator-installation':      'both',
  'smoke-co-detectors':          'both',
  'smart-home-installation':     'residential',
  'esa-safety-inspections':      'both',
  'hot-tub-wiring':              'residential',
  'fpe-panel-replacement':       'residential',
  'aluminum-wiring':             'residential',
  'heat-pump-electrical':        'residential',
  'battery-backup-installation': 'both',
  'surge-protection':            'both',
  'ceiling-fan-installation':    'residential',
};
