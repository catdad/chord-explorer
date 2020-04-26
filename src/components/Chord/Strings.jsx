import React from 'react';

export default function Strings() {
  const strings = [];

  for (let i = 0; i < 4; i++) {
    strings.push(
      <rect
        key={ i }
        className="string"
        x={ ((99 / 5 * i) + 20) }
        y="0"
        width="1"
        height="100"
      />
    );
  }

  return (
    <g>{ strings }</g>
  );
}
