import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './ChordInput.scss';

export default class ChordInput extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const { onChange } = this.props;

    onChange(ev.target.value);
  }

  render() {
    return (
      <div className="chord-input">
        <input
          onChange={ this.handleChange }
          placeholder="Chord list"
        />
      </div>
    );
  }
}
