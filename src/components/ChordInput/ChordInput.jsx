import React, { PureComponent, PropTypes } from 'react';

export default class ChordInput extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    global.console.log(ev);
    const { onSubmit } = this.props;

    onSubmit(ev.target.value);
  }

  render() {
    return (
      <div>
        <input onChange={ this.handleSumit } />
      </div>
    );
  }
}
