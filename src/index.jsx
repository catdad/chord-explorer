import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import App from './components/App/App';
import './global.css';

const style = getComputedStyle(document.documentElement);
const getVar = (name) => style.getPropertyValue(name).trim();

const theme = createMuiTheme({
  palette: {
    primary: { main: getVar('--primary') },
    secondary: { main: getVar('--secondary') },
    text: { primary: getVar('--color-text') }
  }
});

render(
  <ThemeProvider theme={ theme } >
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
