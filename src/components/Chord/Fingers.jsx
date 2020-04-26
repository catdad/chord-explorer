import React from 'react';

const STRINGSIZE = 20;
const FRETSIZE = 99 / 4;
const RADIUS = 5;

export default function Fingers({ fingers = null } = {}) {
  const elems = [];

  if (fingers === null || !fingers.length) {
    elems.push(
      <text
        key="?"
        className="finger"
        x="40"
        y="68"
      >{ '?' }</text>
    );
  } else {

    for (let i = 0, l = fingers.length; i < l; i++) {
      const fret = fingers[i];

      if (fret !== 0) {
        elems.push(
          <circle
            key={ i }
            className="finger"
            r={ RADIUS }
            cy={ ((FRETSIZE * fret) - (FRETSIZE / 2)) }
            cx={ (STRINGSIZE + (STRINGSIZE * i)) }
          />
        );
      }
    }

  }

  return (
    <g>{ elems }</g>
  );
}