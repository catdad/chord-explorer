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
  'b7': '2322',
  'bmaj7': '3322',
  'bm7': '2222',

  // C
  'c': '0003',
  'cm': '0333',
  'c7': '0001',
  'cmaj7': '0002',
  'cm7': '3333',

  // C# / Db
  'c#': '1114',

  // D
  'd': '2220',
  'dm': '2210',
  'd7': '2020',
  'dmaj7': '2224',
  'dm7': '2213',
  'dsus2': '2200',

  // D# / Eb
  'd#': '0331',

  // E
  'e': '4442',
  'em': '0432',
  'e7': '1202',
  'emaj7': '1302',
  'em7': '0202', // '4430'

  // F
  'f': '2010',
  'fm': '1013',
  'f7': '2310',
  'fmaj7': '2413',
  'fm7': '1313',

  // F# / Gb
  'f#': '2020',
  'f#m': '2120',
  'fadd9': '0010',

  // G
  'g': '0232',
  'gm': '0231',
  'g7': '0212',
  'gmaj7': '0222',
  'gm7': '0211',

  // G# / Ab

  // special names
  'open': '0000'
};

export function get(name) {
  return CHORDS[name.toLowerCase()];
}
