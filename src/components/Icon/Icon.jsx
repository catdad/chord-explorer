import React, { PropTypes, PureComponent } from 'react';
import * as icons from '../../constants/icons';
import './Icon.scss';

export default class Icon extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number
  };
  static defaultProps = {
    size: 24
  };

  render() {
    const { name, size, ...restProps } = this.props;

    return (
      <svg
        className="icon"
        width={ size }
        height={ size }
        viewBox="0 0 36 36"
        { ...restProps }
      >
        <path d={ icons[name.toUpperCase()] } />
      </svg>
    );
  }
}
