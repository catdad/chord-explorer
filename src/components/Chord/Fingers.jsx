import React from 'react';

const FRETSIZE = 99 / 4;
const RADIUS = 5;

const wrap = (elems) => (<g class="fingers">{ elems }</g>);

export default function Fingers({ fingers = null } = {}) {
  if (fingers === null || !fingers.length) {
    return wrap([
      <text
        key="?"
        className="finger"
        x="40"
        y="68"
      >{ '?' }</text>
    ]);
  }

  const start = fingers.length === 4 ? 20 : 10;
  const interval = (100 - start - start) / (fingers.length - 1);

  return wrap(fingers.map((fret, i) => {
    if (fret === 0) {
      return null;
    }

    return (
      <circle
        key={ `${i + i}` }
        className="finger"
        r={ RADIUS }
        cy={ ((FRETSIZE * fret) - (FRETSIZE / 2)) }
        cx={ (interval * i) + start }
      />
    );
  }).filter((i) => i));
}
