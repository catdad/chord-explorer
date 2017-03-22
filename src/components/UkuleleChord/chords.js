const CHORDS = {
  'a': '2100',
  'am': '2000',
  'am7': '0000',
  'a#': '3211',
  'bb': '3211',
  'b': '4322',
  'bm': '4222',
  'c': '0003',
  'd': '2220',
  'em': '0432',
  'f': '2010',
  'f#': '2020',
  'g': '0232',
  'gm': '0231',
  'g7': '0212',
  'open': '0000'
};

export function get(name) {
  return CHORDS[name.toLowerCase()];
}
