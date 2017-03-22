//  import React, { PropTypes, PureComponent } from 'react';
//  import { connect } from 'react-redux';

import React from 'react';
import { UkuleleChord } from '../../components';
import './App.scss';

export default function App(/* { children, levels, currentLevel } */) {
  return (
    <div>
      <UkuleleChord name="Am" />
      <UkuleleChord name="C" />
      <UkuleleChord name="G" />
      <UkuleleChord name="F" />
    </div>
  );
}

//  App.propTypes = {
//    children: PropTypes.node.isRequired,
//    levels: PropTypes.arrayOf(PropTypes.object).isRequired,
//    currentLevel: PropTypes.number.isRequired
//  };
