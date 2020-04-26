import React from 'react';

const wrap = (elems) => (<g className="nut">{ elems }</g>);

export default function Nut({ base = 0, instrument = 'ukulele' } = {}) {
  const start = instrument === 'ukulele' ? 20 : 10;
  const number = 100 - start + 8;

  if (base) {
    return wrap([
      <rect
        key="nut"
        className="nut"
        x={ `${start}` } y="2"
        width={ `${100 - start - start}` }
        height="1"
      />,
      <text
        key="fret-num"
        className="fret-num"
        x={ `${number}` }
        y="18"
      >{ base }</text>
    ]);
  }

  return wrap([
    <rect
      key="nut1"
      className="nut"
      x={ `${start}` } y="0"
      width={ `${100 - start - start}` }
      height="2"
    />,
    <rect
      key="nut2"
      className="nut"
      x={ `${start}` } y="3"
      width={ `${100 - start - start}` }
      height="1"
    />
  ]);
}
