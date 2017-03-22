//  import React, { PropTypes, PureComponent } from 'react';
//  import { connect } from 'react-redux';

import React from 'react';
import { UkuleleChord } from '../../components';
import './App.scss';

export default function App(/* { children, levels, currentLevel } */) {
  return (
    <UkuleleChord />
  );
}

//  App.propTypes = {
//    children: PropTypes.node.isRequired,
//    levels: PropTypes.arrayOf(PropTypes.object).isRequired,
//    currentLevel: PropTypes.number.isRequired
//  };
