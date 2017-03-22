import React, { PropTypes } from 'react';

export default function Fingers({ fingering }) {
  const fingers = [];

  for (let i = 0, l = fingering.length; i < l; i++) {
    const fret = Number(fingering[i]);

    if (fret !== 0) {
      fingers.push(
        <circle
          className="finger"
          r="5"
          cy={ (20 * fret).toString() }
          cx={ (20 + (20 * i)).toString() }
        />
      );
    }
  }

  return (
    <g>{ fingers }</g>
  );
}

Fingers.propTypes = {
  fingering: PropTypes.string.isRequired
};
