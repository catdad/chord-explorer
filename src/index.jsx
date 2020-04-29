import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import App from './components/App/App';
import './global.css';

const style = getComputedStyle(document.documentElement);

const theme = createMuiTheme({
  palette: {
    primary: { main: style.getPropertyValue('--primary').trim() },
    secondary: { main: style.getPropertyValue('--secondary').trim() }
  }
});

render(
  <ThemeProvider theme={ theme } >
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
