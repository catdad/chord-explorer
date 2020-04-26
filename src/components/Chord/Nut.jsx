import React from 'react';

export default function Nut({ base = 0 } = {}) {
  if (base) {
    return (
      <g>
        <rect
          className="nut"
          x="20" y="2"
          width="60"
          height="1"
        />
        <text
          className="fret-num"
          x="88"
          y="18"
        >{ base }</text>
      </g>
    );
  }

  return (
    <g>
      <rect
        className="nut"
        x="20" y="0"
        width="60"
        height="2"
      />
      <rect
        className="nut"
        x="20" y="3"
        width="60"
        height="1"
      />
    </g>
  );
}
