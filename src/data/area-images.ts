// Per-area image used on the /areas index cards. Real Tim photos rotated
// across cities so the grid has visual variety instead of one repeated photo.
// Each photo is genuinely from one of Tim's jobs — we don't claim it's
// specifically in that city.
//
// IMG_3038 (EV charger photo) was removed across the site on Tim's instruction
// — the install wasn't to code so we're not displaying it. Keswick and Innisfil
// rotated to other Tim photos as a result.

export const areaImage: Record<string, string> = {
  'newmarket': '/images/work/IMG_5375.webp',         // HQ — Tim hands-on
  'aurora': '/images/work/IMG_3258.webp',            // panel install
  'east-gwillimbury': '/images/work/IMG_5017.webp',  // clean panel
  'bradford': '/images/work/IMG_1140.webp',          // exterior pot lights
  'keswick': '/images/work/IMG_5695.webp',           // generator (cottage backup power)
  'king-city': '/images/work/IMG_3610.webp',         // landscape lighting (estate area)
  'richmond-hill': '/images/work/IMG_6204.webp',     // pot lights (newer homes)
  'markham': '/images/work/IMG_2638.webp',           // commercial / LED retrofit
  'vaughan': '/images/work/IMG_5695.webp',           // generator (large homes)
  'stouffville': '/images/work/IMG_6785.webp',       // interior wiring detail
  'innisfil': '/images/work/IMG_3258.webp',          // panel install (general residential)
  'uxbridge': '/images/work/IMG_5017.webp',          // panel (historic homes)
};
