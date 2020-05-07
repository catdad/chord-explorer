import { h } from 'preact';

import './ChordInput.css';
import { noop } from '../../utils.js';

export default function ChordInput({ value = '', onChange = noop } = {}) {
  return (
    <div className="chord-input">
      <div className="floating-input">
        <input placeholder={ ' ' } onInput={ onChange } value={ value } />
        <label>{ 'Chord list' }</label>
      </div>
    </div>
  );
}
