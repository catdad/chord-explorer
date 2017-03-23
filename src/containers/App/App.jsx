import React from 'react';
import { UkuleleChord } from '../../components';
import './App.scss';

function unique(arr) {
  return Array.from(new Set(arr));
}

export default function App() {
  const str = 'A Am A# Am7 Bb B Bm C D Em G Gm G7 F Q';

  const chords = unique(str.split(' '))
    .map((name) => <UkuleleChord key={ name } name={ name } />);

  return (
    <div>{ chords }</div>
  );
}
