import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import App from './components/App/App';
import './global.css';

const style = getComputedStyle(document.documentElement);
const getVar = (name) => style.getPropertyValue(name).trim();
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const theme = createMuiTheme({
  palette: {
    type: userPrefersDark ? 'dark' : 'light',
    primary: { main: getVar('--primary') },
    secondary: { main: getVar('--secondary') },
    text: { primary: getVar('--color-text') },
    background: {
      default: getVar('--color-background'),
      paper: getVar('--color-background')
    }
  }
});

render(
  <ThemeProvider theme={ theme } >
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
