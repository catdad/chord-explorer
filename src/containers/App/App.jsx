import React from 'react';
import { UkuleleChord } from '../../components';
import './App.scss';

export default function App() {
  return (
    <div>
      <UkuleleChord name="Am" />
      <UkuleleChord name="Bm" />
      <UkuleleChord name="C" />
      <UkuleleChord name="D" />
      <UkuleleChord name="Em" />
      <UkuleleChord name="G" />
      <UkuleleChord name="F" />
    </div>
  );
}
