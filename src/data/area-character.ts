// Character descriptors per area: a Lucide-style icon name and a 'known for'
// landmarks line that names recognizable local features in plain HTML text.
//
// This is what gives each city card visual variety and local-knowledge SEO
// content — no fabricated landmark photos required.

export interface AreaCharacter {
  /** Lucide-icon identifier — see iconMap below */
  icon: string;
  /** 1-line description of what defines the area (real landmarks/features named) */
  knownFor: string;
}

export const areaCharacter: Record<string, AreaCharacter> = {
  'newmarket': {
    icon: 'home',
    knownFor: 'Upper Canada Mall, Fairy Lake, Old Main Street, Davis Drive corridor',
  },
  'aurora': {
    icon: 'building',
    knownFor: 'Aurora Cultural Centre, Town Park, Yonge & Wellington downtown',
  },
  'east-gwillimbury': {
    icon: 'landmark',
    knownFor: 'Sharon Temple, Holland River, Holland Landing, Mount Albert',
  },
  'king-city': {
    icon: 'tree',
    knownFor: "Eaton Hall, King's Riding, Country Day School, estate properties",
  },
  'richmond-hill': {
    icon: 'telescope',
    knownFor: 'David Dunlap Observatory, Mill Pond Park, Oak Ridges, Lake Wilcox',
  },
  'markham': {
    icon: 'building-2',
    knownFor: 'Main Street Unionville, Cornell Centre, Cathedraltown, Box Grove',
  },
  'vaughan': {
    icon: 'ferris-wheel',
    knownFor: "Canada's Wonderland, McMichael Art Collection, Vaughan Mills, Kleinburg",
  },
  'stouffville': {
    icon: 'train',
    knownFor: 'Stouffville GO, Main Street historic district, Glad Park',
  },
  'keswick': {
    icon: 'waves',
    knownFor: 'Lake Simcoe shoreline, The Briars, Roches Point, Willow Beach',
  },
  'bradford': {
    icon: 'sprout',
    knownFor: 'Bradford Marsh, Holland Marsh agricultural belt, Highway 88, Bond Head',
  },
  'innisfil': {
    icon: 'anchor',
    knownFor: 'Friday Harbour, Lake Simcoe shoreline, Alcona, Big Bay Point',
  },
  'uxbridge': {
    icon: 'footprints',
    knownFor: "Trail Capital of Canada, historic downtown, Goodwood, Coppin's Corners",
  },
};
