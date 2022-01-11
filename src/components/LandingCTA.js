import { Link } from 'react-router-dom';
// Material UI
import { Button, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

let theme = createTheme({
  palette: {
    primary: {
      main: '#fdf800'
    }
  },
  typography: {
    fontFamily: 'Poppins',
    fontSize: 18
  }
});

const LandingCTA = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" size="large">
        <Link
          to={'/games'}
          style={{
            color: 'black',
            fontWeight: 'bold',
            textDecoration: 'none'
          }}
        >
          JOIN US
        </Link>
      </Button>
    </ThemeProvider>
  );
};

export default LandingCTA;
