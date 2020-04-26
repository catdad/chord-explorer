import React, { useCallback, useEffect, useState } from 'react';
import { createHashHistory } from 'history';

import { inputToData, urlToData, urlParts } from '../../utils.js';

import UkuleleChord from '../UkuleleChord/UkuleleChord';
import ChordInput from '../ChordInput/ChordInput';
import EmptyChordlist from '../EmptyChordlist/EmptyChordlist';
import Instrument from '../Instrument/Instrument';

import './App.css';

const history = createHashHistory({
  // no basename is necessary with hash history
  basename: '/',
  hashType: 'slash'
});

function App() {
  const [chordState, setChordState] = useState(urlToData(urlParts().chords));
  const [instrument, setInstrument] = useState(urlParts().instrument);

  const { array: chords, input } = chordState;

  useEffect(() => {
    const unlisten = history.listen((location) => {
      const data = urlToData(urlParts(`#${location.pathname}`).chords);

      setChordState(data);
    });

    return () => unlisten();
  }, [] /* only execute once */);

  const onChordsChage = useCallback((ev) => {
    const val = ev.target.value;
    const data = inputToData(val);

    if (chordState.sanitized !== data.sanitized) {
      // we'll replace the state when chords are updated, to avoid having
      // a brand new history entry every time the user types a character
      history.replace(`/${instrument}/${data.sanitized}`, {
        chords: data,
        instrument
      });
    }

    setChordState(data);
  });

  const onInstrumentChange = useCallback((ev) => {
    const value = ev.target.value;

    history.replace(`/${value}/${chordState.sanitized}`, {
      chords: chordState,
      instrument: value
    });

    setInstrument(value);
  });

  const chordElems = chords.map((name) => (<UkuleleChord key={ name } name={ name } />));

  return (
    <div className="app-body">
      <Instrument instrument={ instrument } onChange={ onInstrumentChange } />
      <ChordInput
        onChange={ onChordsChage }
        value={ input }
      />
      <div className={ `app-body-wrap ${chords.length === 0 ? 'empty' : ''}` }>{
        chordElems.length ?
          <div className="chord-body">{ chordElems }</div> :
          <EmptyChordlist />
      }</div>
      <footer>
        <span>{ 'Made with 💜 and 🍸 by ' }</span>
        <a href="https://github.com/catdad">{ '@catdad' }</a>
        <span>{ '.' }</span>
      </footer>
    </div>
  );
}

export default App;
