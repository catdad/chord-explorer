import React from 'react';

import { noop } from '../../utils.js';

export default function FancyInput({ label = '', value = '', onChange = noop, className = '' } = {}) {
  return (
    <div className={ className }>
      <div className="floating-input">
        <input placeholder={ ' ' } onChange={ onChange } value={ value } />
        <label>{ label }</label>
      </div>
    </div>
  );
}

