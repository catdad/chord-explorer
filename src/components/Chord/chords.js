/* eslint-disable quote-props */

import UKULELE from './chords-ukulele.js';
import GUITAR from './chords-guitar.js';

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
