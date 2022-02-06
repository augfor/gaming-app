// Material UI
import {
  Avatar,
  Box,
  createTheme,
  CssBaseline,
  // Grid,
  Link,
  Paper,
  responsiveFontSizes,
  Stack,
  Typography
} from '@mui/material';

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// assets
import Image from '../assets/landing_bg.jpg';
import augusto from '../assets/augusto.jpg';
import iris from '../assets/iris.jpg';
import jerson from '../assets/jerson.jpg';
// components
import LandingCTA from '../components/LandingCTA';
// import Team from '../components/Team';

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

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black
  }
}));

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
        <Box
          display="flex"
          width="100vw"
          alignItems="right"
          position="fixed"
          justifyContent="right"
        >
          <Stack direction="row" spacing={5} paddingTop={2} paddingRight={5}>
            <Box>
              <Box marginBottom={1}>
                <BootstrapTooltip title="Augusto Forero" placement="top">
                  <Avatar alt="Augusto Forero" src={`${augusto}`} />
                </BootstrapTooltip>
              </Box>
              <Link target="_blank" href="https://github.com/augfor">
                <GitHubIcon fontSize="small" sx={{ color: grey[50] }} />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/augustoforero/"
              >
                <LinkedInIcon fontSize="small" sx={{ color: grey[50] }} />
              </Link>
            </Box>
            <Box>
              <Box marginBottom={1}>
                <BootstrapTooltip title="Iris Monteza" placement="top">
                  <Avatar alt="Iris Monteza" src={`${iris}`} />
                </BootstrapTooltip>
              </Box>
              <Link target="_blank" href="https://github.com/IrisMonteza">
                <GitHubIcon fontSize="small" sx={{ color: grey[50] }} />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/irismonteza-dev/"
              >
                <LinkedInIcon fontSize="small" sx={{ color: grey[50] }} />
              </Link>
            </Box>
            <Box>
              <Box marginBottom={1}>
                <BootstrapTooltip title="Jerson Zúñiga" placement="top">
                  <Avatar alt="Jerson Zuñiga" src={`${jerson}`} />
                </BootstrapTooltip>
              </Box>
              <Link target="_blank" href="https://github.com/jersonzc">
                <GitHubIcon fontSize="small" sx={{ color: grey[50] }} />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/jzunigacoayla/"
              >
                <LinkedInIcon fontSize="small" sx={{ color: grey[50] }} />
              </Link>
            </Box>
          </Stack>
        </Box>
      </Paper>
    </>
  );
};

export default Landing;
