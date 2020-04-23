import React from 'react';
import PropTypes from 'prop-types';
import * as icons from '../../constants/icons';
import './Icon.scss';

export default function Icon(props) {
  const { name, size, viewBox, ...restProps } = props;

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

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  viewBox: PropTypes.string
};

Icon.defaultProps = {
  size: 24,
  viewBox: '0 0 36 36'
};
