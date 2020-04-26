import React from 'react';

export default function GuitarChord({ name = 'open' } = {}) {
  return (<div>{ `guitar chord: ${name}` }</div>);
}
