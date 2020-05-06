import { h } from 'preact';
import { useCallback } from 'preact/hooks';

import Toggle from '../Toggle/Toggle';

import { noop } from '../../utils.js';
import './Instrument.css';

const next = {
  ukulele: 'guitar',
  guitar: 'ukulele'
};

export default function Instrument({ instrument = 'ukulele', onChange = noop } = {}) {
  const onSelected = useCallback(() => {
    onChange({ target: { value: next[instrument] } });
  }, [onChange]);

  return (
    <Toggle
      className="instrument-input"
      options={ ['ukulele', 'guitar'] }
      selected={ instrument }
      onChange={ onSelected }
    />
  );
}
