import React, { PropTypes, PureComponent } from 'react';
import './UkuleleChord.scss';
import Nut from './Nut.jsx';
import Strings from './Strings.jsx';
import Frets from './Frets.jsx';
import Fingers from './Fingers.jsx';
import * as chords from './chords.json';

export default class UkuleleChord extends PureComponent {
  static propTypes = {
    name: PropTypes.string
  };
  static defaultProps = {
    name: 'open'
  };

  render() {
    const { name } = this.props;
    const fingering = chords[name.toLowerCase()] || chords.open;

    return (
      <div className="ukulele-chord">
        <h1>{ name }</h1>
        <svg viewBox="0 0 100 100">
          <Nut />
          <Strings />
          <Frets />
          <Fingers fingering={ fingering } />

        </svg>
      </div>
    );
  }
}
