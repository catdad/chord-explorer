import { h } from 'preact';

export default function Frets({ instrument = 'ukulele' } = {}) {
  const frets = [];

  const start = instrument === 'ukulele' ? 20 : 10;

  for (let i = 1; i < 5; i++) {
    frets.push(
      <rect
        key={ i }
        className="fret"
        x={ `${start}` }
        y={ (99 / 4 * i) }
        width={ `${100 - start - start}` }
        height="1"
      />
    );
  }

  return (
    <g className="frets">{ frets }</g>
  );
}
