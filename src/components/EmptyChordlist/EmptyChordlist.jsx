import { h } from 'preact';
import Icon from '../Icon/Icon';

const viewBox = {
  guitar: '0 0 90 90',
  ukulele: '0 0 100 100'
};

export default function EmptyChordlist({ instrument = 'ukulele' } = {}) {
  return (
    <Icon
      name={ instrument }
      size={ 300 }
      style={ { fill: 'var(--primary)', opacity: 'var(--icon-opacity)' } }
      viewBox={ viewBox[instrument] }
    />
  );
}
