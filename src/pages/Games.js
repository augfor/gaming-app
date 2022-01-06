import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// Material UI
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography
} from '@mui/material';
// Components
import Navbar from '../components/Navbar';

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

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const gameData = async () => {
      const result = await axios.get(
        'https://api.rawg.io/api/games?key=eee1d7390c4f4ce7a32fe78c75ee15a1'
      );
      console.log(result);

      setGames(result.data.results);
    };

    gameData();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Box sx={{ display: 'block', height: '2vh' }}></Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Grid container spacing={4}>
            {games.map((game) => (
              <Grid key={game.id} item xs={12} sm={6} md={3}>
                <Card sx={{ backgroundColor: 'black', paddingBottom: '25px' }}>
                  <CardMedia
                    component="img"
                    alt={game.name}
                    height="300"
                    image={game.background_image}
                    sx={{
                      borderRadius: '5px'
                    }}
                  ></CardMedia>
                  <CardContent sx={{ padding: '8px 0px 8px 0px' }}>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                      sx={{
                        color: 'white',
                        fontWeight: 'bold',
                        height: 15
                      }}
                    >
                      {game.name}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      component="div"
                      sx={{
                        color: '#ADADB8',
                        padding: '8px 0px 8px 0px',
                        height: 15
                      }}
                    >
                      {`Members: 0`}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ padding: '8px 0px 8px 0px' }}>
                    {game.genres.slice(0, 3).map((genre) => (
                      <Button
                        key={genre.id}
                        variant="contained"
                        size="small"
                        sx={{
                          fontSize: '12px',
                          textTransform: 'none',
                          borderRadius: '20px',
                          height: '20px'
                        }}
                      >
                        {genre.name}
                      </Button>
                    ))}
                  </CardActions>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: '#FF286E',
                      textTransform: 'none',
                      margin: '16px 0px 16px 0px'
                    }}
                  >
                    <Link
                      to={`${game.id}`}
                      style={{
                        fontFamily: 'Poppins',
                        color: 'white',
                        fontWeight: 'bold',
                        textDecoration: 'none'
                      }}
                    >
                      Join the Community
                    </Link>
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Games;
