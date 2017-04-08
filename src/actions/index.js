import * as types from '../constants/actionTypes';

function unique(arr) {
  return Array.from(new Set(arr));
}

function clean(str) {
  return str
    .replace(/\s*,\s*/g, ' ')
    .trim();
}

export const setChords = (value) => {
  const data = {
    type: types.SET_CHORDS
  };

  if (Array.isArray(value)) {
    data.value = unique(value);
  } else {
    data.value = unique(clean(value).split(' '));
  }

  return data;
};
