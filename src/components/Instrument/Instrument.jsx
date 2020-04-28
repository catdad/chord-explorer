import React, { useCallback } from 'react';
import Switch from '@material-ui/core/Switch';
import { noop } from '../../utils.js';

export default function Instrument({ instrument = 'ukulele', onChange = noop } = {}) {
  const onSwitchChange = useCallback((ev) => {
    const checked = ev.target.checked;
    const value = checked ? 'guitar' : 'ukulele';

    if (instrument !== value) {
      onChange({ target: { value } });
    }
  }, [onChange]);

  return (
    <div>
      <span>{ 'Ukulele' }</span>
      <Switch checked={ instrument === 'guitar' } onChange={ onSwitchChange } />
      <span>{ 'Guitar' }</span>
    </div>
  );
}
