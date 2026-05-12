// Neighbourhood data per area slug — drives the neighbourhood chip cluster
// on /areas/[slug] pages. Pulled from the area-research doc.
//
// Visual + SEO value: surfaces specific neighbourhood names that homeowners
// will search for ("electrician Stonehaven", "Oak Ridges electrician") and
// signals to visitors that we genuinely know the area.

export const areaNeighbourhoods: Record<string, string[]> = {
  'newmarket': ['Stonehaven', 'Glenway', 'Summerhill', 'Bristol-London', 'Woodland Hill', 'Armitage', 'Davis Drive corridor'],
  'aurora': ['Aurora Village', 'Bayview Wellington', 'Hills of St. Andrews', 'Aurora Estates', 'Aurora Heights'],
  'east-gwillimbury': ['Holland Landing', 'Sharon', 'Mount Albert', 'Queensville'],
  'bradford': ['Bond Head', 'Bridge Estates', 'Hampton Estates', 'Bradford Highlands'],
  'keswick': ['Old Keswick', 'Keswick North', 'Roches Point', 'Willow Beach', 'Sutton'],
  'king-city': ['Estates of King City', 'King City Centre', 'Kettleby'],
  'richmond-hill': ['Oak Ridges', 'Bayview Hill', 'Mill Pond', 'Jefferson', 'North Richvale', 'Westbrook'],
  'markham': ['Unionville', 'Cathedraltown', 'Cornell', 'Berczy Village', 'Markham Village', 'Box Grove'],
  'vaughan': ['Woodbridge', 'Maple', 'Thornhill', 'Kleinburg', 'Concord', 'Vaughan Metropolitan Centre'],
  'stouffville': ['Old Stouffville', "Wheler's Mill", 'Glad Park', 'Ballantrae'],
  'innisfil': ['Alcona', 'Lefroy', 'Stroud', 'Cookstown', 'Big Bay Point'],
  'uxbridge': ['Uxbridge town centre', 'Goodwood', "Coppin's Corners", 'Sandford'],
};
