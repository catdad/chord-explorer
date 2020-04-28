import React from 'react';
import { noop } from '../../utils.js';

function input({ name, checked, onChange }) {
  return (
    <label key={ `instrument-${name}` }>
      <input
        type="radio"
        name="instrument"
        id={ name }
        value={ name }
        onChange={ onChange }
        checked={ checked }
      />
      { name }
    </label>
  );
}

export default function Instrument({ instrument = 'ukulele', onChange = noop } = {}) {
  return [
    input({
      name: 'ukulele',
      onChange,
      checked: instrument === 'ukulele'
    }),
    input({
      name: 'guitar',
      onChange,
      checked: instrument === 'guitar'
    })
  ];
}
