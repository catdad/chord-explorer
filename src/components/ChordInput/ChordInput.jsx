import React, { PureComponent, PropTypes } from 'react';

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
      <div>
        <input onChange={ this.handleChange } />
      </div>
    );
  }
}
