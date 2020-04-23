import React, { useCallback, useEffect, useState } from 'react';
import { createHashHistory } from 'history';

import { inputToData, urlToData, urlParts } from '../../actions';

import { UkuleleChord, ChordInput, EmptyChordlist } from '../../components';
import './App.css';

// eslint-disable-next-line no-console
const inspect = (...args) => console.log(...args);

const history = createHashHistory({
  // no basename is necessary with hash history
  basename: '/',
  hashType: 'slash'
});

function App() {
  const [chordState, setChordState] = useState(urlToData(urlParts().chords));
  // const [instrument, setInstrument] = useState(urlParts().instrument);

  const { array: chords, input } = chordState;

  inspect('RENDER APP WITH CHORD STATE', chordState);

  useEffect(() => {
    const unlisten = history.listen((location) => {
      const data = urlToData(urlParts(`#${location.pathname}`).chords);

      setChordState(data);
    });

    return () => unlisten();
  }, [] /* only execute once */);

  const handleChordChange = useCallback((val) => {
    const data = inputToData(val);

    if (chordState.sanitized !== data.sanitized) {
      inspect('chord change', val, data);

      // we'll replace the state when chords are updated, to avoid having
      // a brand new history entry every time the user types a character
      history.replace(`/ukulele/${data.sanitized}`, { chords: data });
    }

    setChordState(data);
  });

  const chordElems = chords.map((name) => (<UkuleleChord key={ name } name={ name } />));

  inspect('chords:', chordElems.length);

  return (
    <div className="app-body">
      <div className="app-header-wrap">
        <div className="header-input">
          <ChordInput
            onChange={ handleChordChange }
            value={ input }
          />
        </div>
      </div>
      <div className="app-body-wrap">{
        chordElems.length ?
          <div className="chord-body">{ chordElems }</div> :
          <EmptyChordlist />
      }</div>
      <div className="app-footer-wrap">
        <span>{ 'Made with 💜 and 🍸 by ' }</span>
        <a href="https://github.com/catdad">{ '@catdad' }</a>
        <span>{ '.' }</span>
      </div>
    </div>
  );
}

export default App;
