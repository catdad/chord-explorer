import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './UkuleleChord.scss';
import Nut from './Nut.jsx';
import Strings from './Strings.jsx';
import Frets from './Frets.jsx';
import Fingers from './Fingers.jsx';
import * as chords from './chords.js';

export default class UkuleleChord extends PureComponent {
  static propTypes = {
    name: PropTypes.string
  };
  static defaultProps = {
    name: 'open'
  };

  render() {
    const { name } = this.props;
    const fingering = chords.get({ name });
    let fingers = fingering ? fingering.split('').map(Number) : [];
    const min = Math.min(...fingers);
    const max = Math.max(...fingers);
    let base = 0;

    if (max > 4) {
      // this chord is further up the next, so adjust
      base = min;
      fingers = fingers.map((i) => {
        if (i) {
          return i - min + 1;
        }

        return 0;
      });
    }

    return (
      <div className="ukulele-chord">
        <h1>{ name }</h1>
        <svg viewBox="0 0 100 100">
          <Frets />
          <Strings />
          <Nut base={ base } />
          <Fingers fingers={ fingers } />

        </svg>
      </div>
    );
  }
}
