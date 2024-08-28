import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7e54e3',
    },
    secondary: {
      main: '#6c757d',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;