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
  Grid,
  ThemeProvider,
  Typography
} from '@mui/material';
// api
import { RAWG_API_KEY } from '../api/const';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000'
    }
  }
});

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const gameData = async () => {
      const response = await axios.get(
        `https://api.rawg.io/api/games?key=${RAWG_API_KEY}`
      );
      console.log(response);

      setGames(response.data.results);
    };

    gameData();
  }, []);

  return (
    <>
      <Box sx={{ display: 'block', height: '7vh' }} />
      <ThemeProvider theme={theme}>
        <Container>
          <Typography
            align="left"
            variant="h1"
            sx={{
              fontFamily: 'Poppins',
              padding: '30px 0 30px 0',
              display: { xs: 'none', sm: 'block' }
            }}
          >
            COMMUNITIES
          </Typography>
          <Grid container spacing={4}>
            {games.map((game) => (
              <Grid key={game.id} item xs={12} sm={6} md={3}>
                <CardMedia
                  component="img"
                  alt={game.name}
                  height="450"
                  image={game.background_image}
                  sx={{
                    borderRadius: '5px',
                    boxShadow: '5px 5px 5px rgb(138,138,138)'
                  }}
                ></CardMedia>
                <Card
                  elevation={0}
                  sx={{ backgroundColor: 'transparent', paddingBottom: '35px' }}
                >
                  <CardContent sx={{ padding: '8px 0px 8px 0px' }}>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                      sx={{
                        fontWeight: 'bold',
                        height: 15
                      }}
                    >
                      {game.name}
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
                      margin: '10px 0px 10px 0px'
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
