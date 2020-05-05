import React from 'react';
import FancyInput from './FancyField';

import './ChordInput.css';
import { noop } from '../../utils.js';

export default function ChordInput({ value = '', onChange = noop } = {}) {
  return (
    <FancyInput
      className="chord-input"
      label="Chord list"
      value={ value }
      onChange={ onChange }
    />
  );
}
