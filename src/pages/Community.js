import { useEffect, useState } from 'react';
import axios from 'axios';
// Material UI
import {
  Avatar,
  Box,
  Card,
  CardMedia,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  Stack,
  ThemeProvider,
  Typography
} from '@mui/material';
// API
import { RAWG_API_KEY } from '../api/const';

const theme = createTheme({
  palette: {
    background: { default: '#000000' },
    primary: {
      main: '#3C4043'
    },
    secondary: {
      main: '#000000'
    }
  }
});

const Community = () => {
  const [game, setGame] = useState({});

  useEffect(() => {
    const gameData = async () => {
      const result = await axios.get(
        `https://api.rawg.io/api${window.location.pathname}?key=${RAWG_API_KEY}`
      );
      console.log(result);

      setGame(result.data);
    };

    gameData();
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'block', height: '2vh' }}></Box>
        <Container>
          <Grid
            container
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              component={Grid}
              item
              xs={0}
              md={2.5}
              sx={{ paddingTop: 2 }}
              display={{ xs: 'none', sm: 'none', md: 'block' }}
            >
              <Card
                elevation={0}
                sx={{
                  maxWidth: 700,
                  height: '82vh',
                  borderRadius: '10px 0px 0px 10px'
                }}
              >
                <CardMedia
                  component="img"
                  height="910px"
                  image={game.background_image}
                  alt={game.name}
                  sx={{ objectFit: 'cover', paddingBottom: 2 }}
                />
              </Card>
            </Box>
            <Grid item xs={12} md={7} sx={{ paddingTop: 2 }}>
              <Box sx={{ background: '#3C4043', height: '82vh' }}></Box>
            </Grid>
            <Grid
              item
              xs={0}
              md={2.5}
              sx={{ paddingTop: 2 }}
              display={{ xs: 'none', sm: 'none', md: 'block' }}
            >
              <Box
                sx={{
                  background: '#3C4043',
                  height: '82vh',
                  borderRadius: '0px 10px 10px 0px'
                }}
              >
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  sx={{
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                    padding: '15px 0px 0px 15px'
                  }}
                >
                  {`Admins - 1`}
                </Typography>
                <Stack
                  direction="row"
                  spacing={1.5}
                  alignItems="center"
                  sx={{ padding: '10px 0px 70px 15px' }}
                >
                  <Avatar alt="Iris" src="/static/images/avatar/1.jpg" />
                  <Typography gutterBottom sx={{ color: '#fdf800' }}>
                    Iris
                  </Typography>
                </Stack>
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  sx={{
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                    padding: '0px 0px 0px 15px'
                  }}
                >
                  {`Community - 2`}
                </Typography>
                <Stack
                  direction="row"
                  spacing={1.5}
                  alignItems="center"
                  sx={{ padding: '10px 0px 0px 15px' }}
                >
                  <Avatar alt="Augusto" src="/static/images/avatar/1.jpg" />
                  <Typography gutterBottom sx={{ color: '#FF286E' }}>
                    Augusto
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={1.5}
                  alignItems="center"
                  sx={{ padding: '10px 0px 0px 15px' }}
                >
                  <Avatar alt="Jerson" src="/static/images/avatar/1.jpg" />
                  <Typography gutterBottom sx={{ color: '#FF286E' }}>
                    Jerson
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Community;
