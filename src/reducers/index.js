import { combineReducers } from 'redux';
import * as types from '../constants/actionTypes';

const DEFAULT_CHORDS = 'A Am A# Am7 Bb B Bm Bm7 C D Em E7 G Gm G7 F Fmaj7 Q open';

function createReducer(initialState, handlers) {

  return function reducer(state = initialState, action) {

    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }

    return state;
  };
}

const chords = createReducer({
  value: DEFAULT_CHORDS
}, {
  [types.SET_CHORDS](state, action) {
    return {
      ...state,
      value: action.value || ''
    };
  }
});

//  function chords(state = DEFAULT_CHORDS, action) {
//    return action.value || state;
//  }

const rootReducer = combineReducers({
  chords
});

export default rootReducer;
