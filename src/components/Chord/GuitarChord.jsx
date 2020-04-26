import React from 'react';

import Nut from './Nut.jsx';
import Strings from './Strings.jsx';
import Frets from './Frets.jsx';
import Fingers from './Fingers.jsx';
import { get as getChord } from './chords.js';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const instrument = 'guitar';

export default function GuitarChord({ name = 'open' } = {}) {
  const fingering = getChord({ name, instrument });
  let fingers = fingering ? fingering.split('').map(Number) : [];
  const min = Math.min(...fingers.filter((i) => i > 0));
  const max = Math.max(...fingers);
  let base = 0;

  if (max > 4) {
    // this chord is further up the next, so adjust
    base = min;
    fingers = fingers.map((i) => {
      if (i) {
        return i - min + 1;
      }

      return 0;
    });
  }

  return (
    <div className="chord">
      <h1>{ fingering ? capitalize(name) : name }</h1>
      <svg viewBox="0 0 100 100">
        <Frets instrument={ instrument } />
        <Strings instrument={ instrument } />
        <Nut base={ base } instrument={ instrument } />
        <Fingers fingers={ fingers } />
      </svg>
    </div>
  );
}
