import React from 'react';

const FRETSIZE = 99 / 4;
const RADIUS = 5;
const LINE_COMP = 0.5;

const wrap = (elems) => (<g className="fingers">{ elems }</g>);

const position = (fret, i, interval, start) => {
  const x = (interval * i) + start + LINE_COMP;
  const y = ((FRETSIZE * fret) - (FRETSIZE / 2)) + LINE_COMP;

  const r = Math.ceil((RADIUS + 2) / 2);

  const x1 = x - r;
  const x2 = x + r;
  const y1 = y - r;
  const y2 = y + r;

  return { x, y, x1, x2, y1, y2 }; // eslint-disable-line object-property-newline
};

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

    if (isNaN(fret)) {
      const { x1, x2, y1, y2 } = position(1, i, interval, start);

      return (
        <path
          key={ `${i + i}` }
          className="mute"
          d={ `M ${x1} ${y1} L ${x2} ${y2} M ${x1} ${y2} L ${x2} ${y1} Z` }
        />
      );
    }

    const { x, y } = position(1, i, interval, start);

    return (
      <circle
        key={ `${i + i}` }
        className="finger"
        r={ RADIUS }
        cy={ y }
        cx={ x }
      />
    );
  }).filter((i) => i));
}
