const CHORDS = {
  // A
  'a': '2100',
  'am': '2000',
  'am7': '0000',

  // A# / Bb
  'a#': '3211',
  'a#7': '3210',
  'a#m': '3111',
  'bb': '3211',

  // B
  'b': '4322',
  'bm': '4222',

  // C
  'c': '0003',
  'cmaj7': '0002',
  'c7': '0001',

  // C# / Db
  'c#': '1114',

  // D
  'd': '2220',
  'dm': '2210',

  // D# / Eb

  // E
  'em': '0432',
  'e7': '1202',

  // F
  'f': '2010',

  // F# / Gb
  'f#': '2020',
  'f#m': '2120',
  'fadd9': '0010',

  // G
  'g': '0232',
  'gm': '0231',
  'g7': '0212',

  // G# / Ab

  // special names
  'open': '0000'
};

export function get(name) {
  return CHORDS[name.toLowerCase()];
}
