import React from 'react';
import './ChordInput.css';

// eslint-disable-next-line no-empty-function
const noop = () => {};

export default function ChordInput({ value = '', onChange = noop } = {}) {
  return (
    <div className="chord-input">
      <input
        onChange={ onChange }
        placeholder="Chord list"
        value={ value }
      />
    </div>
  );
}
