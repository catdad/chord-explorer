import React from 'react';
import { UkuleleChord } from '../../components';
import './App.scss';

function unique(arr) {
  return Array.from(new Set(arr));
}

export default function App() {
  const str = 'A Am A# Am7 Bb B Bm Bm7 C D Em E7 G Gm G7 F Fmaj7 Q open';

  const chords = unique(str.split(' '))
    .map((name) => <UkuleleChord key={ name } name={ name } />);

  return (
    <div>{ chords }</div>
  );
}
