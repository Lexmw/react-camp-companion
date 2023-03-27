import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#6B9080',
      darker: '#156064',
    },
    secondary: {
      main: '#ff9100',
      darker: '#b26500',
      contrastText: '#000000',
    },
    neutral: {
      main: '#CCE3DE',
      contrastText: '#fff',
    },
  },
});

export default theme;
