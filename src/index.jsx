import { h, render } from 'preact';

import App from './components/App/App';
import './global.css';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(function(registration) {
      console.log('Registration successful, scope is:', registration.scope);
    })
    .catch(function(error) {
      console.log('Service worker registration failed, error:', error);
    });
}

render(<App />, document.getElementById('root'));
