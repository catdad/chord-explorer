import { h, render } from 'preact';

import App from './components/App/App';
import './global.css';

// eslint-disable-next-line no-console
const log = (...args) => console.log(...args);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then((registration) => {
      log(`Service worker registered for scope ${registration.scope}`);
    })
    .catch((err) => {
      log('Service worker registration failed, error:', err);
    });
}

render(<App />, document.getElementById('root'));
