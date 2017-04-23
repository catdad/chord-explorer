import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createHistory, useBasename } from 'history';
import { App } from './containers';
import reducer from './reducers';

const store = createStore(reducer);

const browserHistory = useBasename(createHistory)({
  basename: process.env.PUBLIC_URL // eslint-disable-line no-process-env
});

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
