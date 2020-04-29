import React, { useEffect, useState } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { noop } from '../../utils.js';

const getVar = (style, name) => style.getPropertyValue(name).trim();

const darkModeMedia = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : {
  matches: false,
  addListener: noop,
  removeListener: noop
};

export default function Theme({ children = []} = {}) {
  const [isDarkMode, setDarkMode] = useState(darkModeMedia.matches);

  useEffect(() => {
    const onChange = () => {
      setDarkMode(darkModeMedia.matches);
    };

    darkModeMedia.addListener(onChange);

    return () => {
      darkModeMedia.removeListener(onChange);
    };
  }, [/* execute once */]);

  const style = getComputedStyle(document.documentElement);

  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? 'dark' : 'light',
      primary: { main: getVar(style, '--primary') },
      secondary: { main: getVar(style, '--secondary') },
      text: { primary: getVar(style, '--color-text') },
      background: {
        default: getVar(style, '--color-background'),
        paper: getVar(style, '--color-background')
      }
    }
  });

  return (
    <ThemeProvider theme={ theme } >
      { children }
    </ThemeProvider>
  );
}

// eslint-disable-next-line react/no-multi-comp
export const withTheme = (Component) => (props) => (
  <Theme>
    <Component { ...props } />
  </Theme>
);
