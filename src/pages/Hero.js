// Material UI
import {
  Box,
  createTheme,
  CssBaseline,
  Paper,
  responsiveFontSizes,
  Typography
} from '@mui/material';
import { ThemeProvider } from '@emotion/react';
// assets
import Image from '../assets/landing_bg.jpg';
// components
import LandingCTA from '../components/LandingCTA';

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
        <Box sx={{ display: 'block', height: '50vh' }} />
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
            <LandingCTA />
          </Box>
        </ThemeProvider>
      </Paper>
    </>
  );
};

export default Landing;
