function chordRegex() {
  return /^([a-g][#b]?)([a-z0-9]*)/i;
}

const ALTROOT = {
  'a#': 'bb',
  'bb': 'a#',

  'c#': 'db',
  'db': 'c#',

  'd#': 'eb',
  'eb': 'd#',

  'f#': 'gb',
  'gb': 'f#',

  'g#': 'ab',
  'ab': 'g#'
};

const UKULELE = {
  // A
  'a': '2100',
  'a7': '0100',
  'am': '2000',
  'am7': '0000', // '0433',
  'amaj7': '1100',
  'a9': '0102',
  'asus2': '2452',
  'asus4': '2200',
  'aaug': '2110', //

  // A# / Bb
  'a#': '3211',
  'a#7': '1211',
  'a#m': '3111',
  'a#maj7': '3210',

  // B
  'b': '4322',
  'bm': '4222',
  'b7': '4320', // '2322',
  'bsus4': '4422',
  'bmaj7': '3322',
  'bm7': '2222',

  // C
  'c': '0003',
  'cm': '0333', // '5333',
  'c7': '0001',
  'cmaj7': '0002',
  'cm7': '3333',
  'csus2': '0233',
  'csus4': '0013',
  'caug': '1003', // '5443',
  'c6': '0000',
  'c9': '0201',

  // C# / Db
  'c#': '1114',
  'c#m': '1104',
  'c#6': '1111',
  'c#7': '1112',
  'c#maj7': '1113',
  'c#m7': '1102',
  'c#aug': '6554',
  'c#dim': '0104',

  // D
  'd': '2220',
  'dm': '2210',
  'd7': '2020', // '2223',
  'dmaj7': '2224',
  'dm7': '2213',
  'dsus2': '2200',
  'dsus4': '0230',
  'd6': '2222',

  // D# / Eb
  'd#': '0331',
  'd#m': '3321',
  'd#maj7': '3330', // '3335',
  'd#7': '3334',
  'd#9': '0111',

  // E
  'e': '4442',
  'em': '0432',
  'e7': '1202',
  'emaj7': '1302',
  'em7': '0202', // '4430',
  'esus4': '2452',
  'e9': '1222',

  // F
  'f': '2010',
  'fm': '1013',
  'f7': '2310',
  'fmaj7': '2413', // '5557',
  'fm7': '1313',
  'fsus4': '3011',
  'faug': '2110',
  'f9': '2333',
  'fadd9': '0010',

  // F# / Gb
  'f#': '2020',
  'f#m': '2120',
  'f#6': '3324',
  'f#7': '3424',
  'f#maj7': '6668',

  // G
  'g': '0232',
  'gm': '0231',
  'g6': '0202',
  'g7': '0212',
  'gmaj7': '0222',
  'gm7': '0211',
  'gsus2': '0230',
  'gsus4': '0233',
  'g9': '0310',

  // G# / Ab
  'g#': '5343',
  'g#m': '4342',
  'g#aug': '1003',
  'g#maj7': '1333',

  // special names
  'open': '0000'
};

const GUITAR = {
  'a': '002220',
  'c': '032010',
  'd': '000232',
  'e': '022100',
  'f': '133211',
  'g': '320003'
};

function parse(chord, instrument) {
  const str = chord.toLowerCase();
  const CHORDS = instrument === 'ukulele' ? UKULELE : GUITAR;

  const match = str.match(chordRegex());

  if (!match) {
    return {
      name: chord,
      chord: CHORDS[str]
    };
  }

  const root = match[1];
  const mod = match[2] || '';
  const altroot = ALTROOT[root] || root;

  return {
    name: chord,
    root,
    altroot,
    mod,
    chord: CHORDS[str],
    altchord: CHORDS[altroot + mod]
  };
}

export function get({ name, instrument = 'ukulele' }) {
  const chord = parse(name, instrument);

  return chord.chord || chord.altchord;
}
