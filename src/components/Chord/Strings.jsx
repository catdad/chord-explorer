import { h } from 'preact';

export default function Strings({ instrument = 'ukulele' } = {}) {
  const strings = [];

  const start = instrument === 'ukulele' ? 20 : 10;
  const length = instrument === 'ukulele' ? 4 : 6;
  const interval = (100 - start - start) / (length - 1);

  for (let i = 0; i < length; i++) {
    strings.push(
      <rect
        key={ i }
        className="string"
        x={ (interval * i) + start }
        y="0"
        width="1"
        height="100"
      />
    );
  }

  return (
    <g className="strings">{ strings }</g>
  );
}
