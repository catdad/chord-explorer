import React from 'react';
import './ChordInput.css';
import { noop } from '../../utils.js';

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
