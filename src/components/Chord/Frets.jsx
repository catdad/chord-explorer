import React from 'react';

export default function Frets() {
  const frets = [];

  for (let i = 1; i < 5; i++) {
    frets.push(
      <rect
        key={ i }
        className="fret"
        x="20"
        y={ (99 / 4 * i) }
        width="60"
        height="1"
      />
    );
  }

  return (
    <g>{ frets }</g>
  );
}
