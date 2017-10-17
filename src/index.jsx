import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createHashHistory, useBasename } from 'history';
import { App } from './containers';
import reducer from './reducers';
import * as types from './constants/actionTypes';

const browserHistory = useBasename(createHashHistory)({
  // no basename is necessary with hash history
  basename: '/', // process.env.PUBLIC_URL, // eslint-disable-line no-process-env
  hashType: 'slash'
});

const middleware = (store) => (nextState) => (action) => {
//  const before = store.getState();

  const result = nextState(action);
  const after = store.getState();

  if (action.type !== types.SET_CHORDS) {
    return result;
  }

  const url = `/ukulele/${after.chords.sanitized}`;

  // we'll replace the state when chords are updated, to avoid having
  // a brand new history entry every time the user types a character
  browserHistory.replace(url, { chordstring: after.chords.sanitized });

  return result;
};

const store = createStore(reducer, applyMiddleware(middleware));

render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ App } />
      <Route path="/ukulele" component={ App } />
      <Route path="/ukulele/:chordstring" component={ App } />
    </Router>
  </Provider>,
  document.getElementById('root')
);
