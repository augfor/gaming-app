// Material UI
import {
  Box,
  Button,
  createTheme,
  CssBaseline,
  Paper,
  responsiveFontSizes,
  Typography
} from '@mui/material';
import { ThemeProvider } from '@emotion/react';
// Components
import LandingNavbar from '../components/LandingNavbar';
// Assets
import Image from '../assets/landing_bg.jpg';

const background = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '0px',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw'
  }
};

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

theme = responsiveFontSizes(theme);

const Landing = () => {
  return (
    <>
      <Paper style={background.paperContainer}>
        <LandingNavbar />
        <Box sx={{ display: 'block', height: '50vh' }}></Box>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Typography align="center" color="#FF286E" variant="h1">
            GAMERS ONLY
          </Typography>
          <Box
            display="flex"
            width="100vw"
            height={80}
            alignItems="center"
            justifyContent="center"
          >
            <Button variant="contained">{'START'}</Button>
          </Box>
        </ThemeProvider>
      </Paper>
    </>
  );
};

export default Landing;
