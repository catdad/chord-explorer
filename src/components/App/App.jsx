import React, { useCallback, useEffect, useState } from 'react';
import { createHashHistory } from 'history';

import { inputToData, urlToData, urlParts } from '../../utils.js';

import Chord from '../Chord/Chord';
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
      const { chords: urlChords, instrument: urlInstrument } = urlParts(`#${location.pathname}`);
      const data = urlToData(urlChords);

      setChordState(data);
      setInstrument(urlInstrument);
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

  const chordElems = chords.map((name) => (
    <Chord key={ `${instrument}-${name}` } name={ name } instrument={ instrument } />
  ));

  return (
    <div className="app-body">
      <Instrument instrument={ instrument } onChange={ onInstrumentChange } />
      <ChordInput
        onChange={ onChordsChage }
        value={ input }
      />
      <div className={ `app-body-wrap ${chords.length === 0 ? 'empty' : ''}` }>{
        chordElems.length ?
          chordElems :
          <EmptyChordlist />
      }</div>
      <footer>
        <span>{ 'made with 💜 and 🍹 by ' }</span>
        <a href="https://github.com/catdad">{ '@catdad' }</a>
      </footer>
    </div>
  );
}

export default App;
