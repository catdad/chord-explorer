import React, { useCallback, useEffect, useState } from 'react';
import { createHashHistory } from 'history';

import { inputToData, urlToData, urlParts } from '../../actions';

import UkuleleChord from '../UkuleleChord/UkuleleChord';
import ChordInput from '../ChordInput/ChordInput';
import EmptyChordlist from '../EmptyChordlist/EmptyChordlist';

import './App.css';

const history = createHashHistory({
  // no basename is necessary with hash history
  basename: '/',
  hashType: 'slash'
});

function App() {
  const [chordState, setChordState] = useState(urlToData(urlParts().chords));
  // const [instrument, setInstrument] = useState(urlParts().instrument);

  const { array: chords, input } = chordState;

  useEffect(() => {
    const unlisten = history.listen((location) => {
      const data = urlToData(urlParts(`#${location.pathname}`).chords);

      setChordState(data);
    });

    return () => unlisten();
  }, [] /* only execute once */);

  const onChage = useCallback((ev) => {
    const val = ev.target.value;
    const data = inputToData(val);

    if (chordState.sanitized !== data.sanitized) {
      // we'll replace the state when chords are updated, to avoid having
      // a brand new history entry every time the user types a character
      history.replace(`/ukulele/${data.sanitized}`, { chords: data });
    }

    setChordState(data);
  });

  const chordElems = chords.map((name) => (<UkuleleChord key={ name } name={ name } />));

  return (
    <div className="app-body">
      <div className="app-header-wrap">
        <div className="header-input">
          <ChordInput
            onChange={ onChage }
            value={ input }
          />
        </div>
      </div>
      <div className={ `app-body-wrap ${chords.length === 0 ? 'empty' : ''}` }>{
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
