import React, { useCallback } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import { noop } from '../../utils.js';

const next = {
  ukulele: 'guitar',
  guitar: 'ukulele'
};

export default function Instrument({ instrument = 'ukulele', onChange = noop } = {}) {
  const onSelected = useCallback(() => {
    onChange({ target: { value: next[instrument] } });
  }, [onChange]);

  return (
    <ButtonGroup>
      <Button
        color="primary"
        variant={ instrument === 'ukulele' ? 'contained' : 'outlined' }
        onClick={ onSelected }
        disableElevation
      >{ 'Ukulele' }</Button>
      <Button
        color="primary"
        variant={ instrument === 'guitar' ? 'contained' : 'outlined' }
        onClick={ onSelected }
        disableElevation
      >{ 'Guitar' }</Button>
    </ButtonGroup>
  );
}
