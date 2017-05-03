import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import * as icons from '../../constants/icons';
import './Icon.scss';

export default class Icon extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    viewBox: PropTypes.string
  };
  static defaultProps = {
    size: 24,
    viewBox: '0 0 36 36'
  };

  render() {
    const { name, size, viewBox, ...restProps } = this.props;

    return (
      <svg
        className="icon"
        width={ size }
        height={ size }
        viewBox={ viewBox }
        { ...restProps }
      >
        <path d={ icons[name.toUpperCase()] } />
      </svg>
    );
  }
}
