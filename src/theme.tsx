import { ThemeOptions } from '@material-ui/core';

export const themeOptions: ThemeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#44e996',
    },
    secondary: {
      main: '#80acac',
      contrastText: '#ffffff',
    },
    success: {
      main: '#44e996',
    },
    warning: {
      main: '#ffd534',
    },
    error: {
      main: '#ff4961',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  typography: {
    h1: {
      fontSize: '4rem',
    },
    h2: {
      fontSize: '3rem',
    },
    h3: {
      fontSize: '2.5rem',
    },
  },
};