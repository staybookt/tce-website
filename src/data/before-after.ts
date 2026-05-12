// Before/after pairs for the BeforeAfterSlider component.
//
// The map is intentionally EMPTY right now. Stock photos chosen on the basis
// of text descriptions turned out to be wrong on every dimension (industrial
// breakers shown as residential panels, a Russian engineering lab board shown
// as knob-and-tube, etc.) — see the Wave 3 review.
//
// The component renders null when no pair exists for a slug, so the slider
// section will not appear anywhere on the site until real pairs land here.
//
// To activate sliders: Tim takes a phone photo of every panel/garage/attic
// the moment he opens the truck on a new job, BEFORE starting work. Pair
// each before-shot with the matching finished-work shot from the same job
// and add an entry below.

export interface BeforeAfterPair {
  beforeSrc: string;
  beforeLabel: string;
  beforeCaption: string;
  afterSrc: string;
  afterLabel: string;
  afterCaption: string;
}

export const beforeAfterPairs: Record<string, BeforeAfterPair> = {
  // Empty until real before/after photo pairs are captured.
};
