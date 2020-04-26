import React from 'react';

const wrap = (...elems) => (<g className="nut">{ elems }</g>);

export default function Nut({ base = 0, instrument = 'ukulele' } = {}) {
  const start = instrument === 'ukulele' ? 20 : 10;

  if (base) {
    return wrap(
      <rect
        className="nut"
        x={ `${start}` } y="2"
        width={ `${100 - start - start}` }
        height="1"
      />,
      <text
        className="fret-num"
        x="88"
        y="18"
      >{ base }</text>
    );
  }

  return wrap(
    <rect
      className="nut"
      x={ `${start}` } y="0"
      width={ `${100 - start - start}` }
      height="2"
    />,
    <rect
      className="nut"
      x={ `${start}` } y="3"
      width={ `${100 - start - start}` }
      height="1"
    />
  );
}
