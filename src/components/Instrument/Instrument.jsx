import React from 'react';

export default function Instrument({ instrument = 'ukulele' } = {}) {
  return (
    <div>{ instrument }</div>
  );
}
