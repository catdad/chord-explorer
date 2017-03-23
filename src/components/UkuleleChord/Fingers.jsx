import React, { PropTypes } from 'react';

const STRINGSIZE = 20;
const FRETSIZE = 99 / 4;
const RADIUS = 5;

export default function Fingers({ fingering }) {
  const fingers = [];

  if (fingering === null) {
    fingers.push(
      <text
        key="?"
        className="finger"
        x="32"
        y="70"
      >{ '?' }</text>
    );
  } else {

    for (let i = 0, l = fingering.length; i < l; i++) {
      const fret = Number(fingering[i]);

      if (fret !== 0) {
        fingers.push(
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
    <g>{ fingers }</g>
  );
}

Fingers.propTypes = {
  fingering: PropTypes.string
};

Fingers.defaultProps = {
  fingering: null
};
