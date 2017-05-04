import React from 'react';
import { Icon } from '../../components';
import './EmptyChordlist.scss';

export default function EmptyChordlist() {
  return (
    <div className="empty-chordlist">
      <Icon name="ukulele" size={ 100 } viewBox="0 0 100 100" />
    </div>
  );
}
