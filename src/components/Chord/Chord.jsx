import React from 'react';

import GuitarChord from './GuitarChord.jsx';
import UkuleleChord from '../UkuleleChord/UkuleleChord.jsx';

export default function Chord({ instrument = 'ukulele', name = 'open' } = {}) {
  return (
    instrument === 'ukulele' ?
      <UkuleleChord name={ name } /> :
      <GuitarChord name={ name } />
  );
}
