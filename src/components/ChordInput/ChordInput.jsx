import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

import './ChordInput.css';
import { noop } from '../../utils.js';

export default function ChordInput({ value = '', onChange = noop } = {}) {
  return (
    <FormControl fullWidth className="chord-input">
      <TextField
        label="Chord list"
        variant="outlined"
        value={ value }
        onChange={ onChange }
      />
    </FormControl>
  );
}
