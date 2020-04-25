import React from 'react';
import * as icons from '../../constants/icons';
import './Icon.css';

export default function Icon({ name, size = 24, viewBox = '0 0 36 36', ...props } = {}) {
  return (
    <svg
      className="icon"
      width={ size }
      height={ size }
      viewBox={ viewBox }
      { ...props }
    >
      <path d={ icons[name.toUpperCase()] } />
    </svg>
  );
}
