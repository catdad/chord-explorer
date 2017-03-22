import React from 'react';

export default function Frets() {
  const frets = [];

  for (let i = 0; i < 5; i++) {
    frets.push(
      <rect
        className="fret"
        x="0"
        y={ (99 / 4 * i).toString() }
        width="100"
        height="1"
      />
    );
  }

  return (
    <g>{ frets }</g>
  );
}
