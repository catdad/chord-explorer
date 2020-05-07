import { h } from 'preact';
import { useCallback } from 'preact/hooks';

import './Toggle.css';

import { noop } from '../../utils.js';

export default function Toggle({ options = [], selected = null, onChange = noop, className = '' } = {}) {
  const checked = selected || options[0];

  const onRadioChange = useCallback((ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    onChange();
  }, [onChange]);

  return (
    <div className={ `${className} toggle-group` }>
      { options.map((item) => (
        <label
          key={ item }
          style={ {
            backgroundColor: checked === item ? 'var(--primary)' : 'rgba(0, 0, 0, 0)',
            color: checked === item ? 'var(--color-background)' : 'var(--primary)'
          } }
          onClick={ onRadioChange }
        >
          <input
            type="radio"
            name="instrument"
            value={ item }
            style={ { display: 'none' } }
            onChange={ onRadioChange }
            checked={ selected === item }
          />
          { item }
        </label>
      ))}
    </div>
  );
}
