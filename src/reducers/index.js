import { combineReducers } from 'redux';
import * as types from '../constants/actionTypes';

const DEFAULT_CHORDS = 'A Am A# Am7 Bb B Bm Bm7 C D Em E7 G Gm G7 F Fmaj7 F#maj7 Q open'.split(' ');

function createReducer(initialState, handlers) {

  return function reducer(state = initialState, action) {

    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }

    return state;
  };
}

function sanitize(arr) {
  return arr.join(',').replace(/#/g, '-');
}

const chords = createReducer({
  value: DEFAULT_CHORDS.join(' '),
  array: DEFAULT_CHORDS,
  sanitized: sanitize(DEFAULT_CHORDS)
}, {
  [types.SET_CHORDS](state, action) {
    const data = { ...state };

    if (action.value === '') {
      data.value = '';
      data.array = [];
    } else {
      data.value = action.value || '';
      data.array = action.array || [];
    }

    // create a url-safe version of the string value as well
    data.sanitized = sanitize(data.array);

    return data;
  }
});

const rootReducer = combineReducers({
  chords
});

export default rootReducer;
