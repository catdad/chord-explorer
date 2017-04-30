import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createHistory, useBasename } from 'history';
import { App } from './containers';
import reducer from './reducers';
import * as types from './constants/actionTypes';

/* eslint-disable */

const browserHistory = useBasename(createHistory)({
  basename: process.env.PUBLIC_URL // eslint-disable-line no-process-env
});

const middleware = (store) => (next) => (action) => {
  let before = store.getState();
  console.log(action);

  let result = next(action);
  let after = store.getState();

  console.log('before', before);
  console.log('after', after);
  console.log('result', result);

  if (action !== types.SET_CHORDS) {
    return result;
  }

  const location = browserHistory.location;
  const newLocation = `/ukulele/${after.chords.sanitized}`;

  browserHistory.replace(newLocation, { chordstring: after.chords.sanitized });

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
