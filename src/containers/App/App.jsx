import React from 'react';
import { connect } from 'react-redux';
import { UkuleleChord, ChordInput } from '../../components';
import './App.scss';

function unique(arr) {
  return Array.from(new Set(arr));
}

function App(/* { chords } */) {
  const str = 'A Am A# Am7 Bb B Bm Bm7 C D Em E7 G Gm G7 F Fmaj7 Q open';

  const chordElems = unique(str.split(' '))
    .map((name) => <UkuleleChord key={ name } name={ name } />);

  function onSubmit(val) {
    global.console.log(val);
  }

  return (
    <div>
      <ChordInput onSubmit={ onSubmit } />
      <div>{ chordElems }</div>
    </div>
  );
}

const mapStateToProps = ({ chords }) => ({
  chords
});

export default connect(mapStateToProps)(App);
