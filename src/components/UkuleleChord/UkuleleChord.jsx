import React, { PropTypes, PureComponent } from 'react';
import './UkuleleChord.scss';
import Nut from './Nut.jsx';
import Strings from './Strings.jsx';
import Frets from './Frets.jsx';

export default class UkuleleChord extends PureComponent {
  static propTypes = {
    name: PropTypes.string
  };
  static defaultProps = {
    name: 'none'
  };

  render() {
//    const { name } = this.props;

    return (
      <svg
        className="ukulele-chord"
        viewBox="0 0 100 100"
      >
        <Nut />
        <Strings />
        <Frets />

      </svg>
    );
  }
}
