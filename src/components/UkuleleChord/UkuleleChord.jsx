import React, { PropTypes, PureComponent } from 'react';
import './UkuleleChord.scss';

export default class UkuleleChord extends PureComponent {
  static propTypes = {
    name: PropTypes.string
  };
  static defaultProps = {
    name: 'none'
  };

  render() {
    const { name } = this.props;

    return (
      <div>{ name }</div>
    );
  }
}
