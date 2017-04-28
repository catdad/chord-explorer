import * as types from '../constants/actionTypes';

function unique(arr) {
  return Array.from(new Set(arr));
}

function clean(str) {
  return str
    .replace(/\s*,\s*/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export const setChords = (value) => {
  const data = {
    type: types.SET_CHORDS
  };

  if (Array.isArray(value)) {
    data.array = unique(value);
    data.value = data.array.join(' ');
  } else {
    data.value = value;
    data.array = unique(clean(value).split(' '));
  }

  return data;
};

export const setChordstring = (value) => setChords(value.replace(/s/gi, '#').replace(/,/g, ' '));
