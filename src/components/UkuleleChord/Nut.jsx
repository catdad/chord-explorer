import React, { PropTypes } from 'react';

export default function Nut({ base }) {
  if (base) {
    return (
      <g>
        <rect
          x="20" y="3"
          width="60"
          height="1"
        />
      </g>
    );
  }

  return (
    <g>
      <rect
        x="20" y="0"
        width="60"
        height="2"
      />
      <rect
        x="20" y="3"
        width="60"
        height="1"
      />
    </g>
  );
}

Nut.propTypes = {
  base: PropTypes.number
};

Nut.defaultProps = {
  base: 0
};
