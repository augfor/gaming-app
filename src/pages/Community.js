import { useEffect, useState } from 'react';
import axios from 'axios';
// Material UI
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography
} from '@mui/material';

const Community = () => {
  const [game, setGame] = useState({});

  useEffect(() => {
    const gameData = async () => {
      const result = await axios.get(
        `https://api.rawg.io/api${window.location.pathname}?key=`
      );
      console.log(result);

      setGame(result.data);
    };

    gameData();
  }, []);

  return (
    <>
      <Container>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={3} sx={{ paddingTop: 2 }}>
            <Card elevation={0} sx={{ maxWidth: 700, paddingTop: 3 }}>
              <CardMedia
                component="img"
                height="400"
                image={game.background_image}
                alt={game.name}
                sx={{ objectFit: 'contain', paddingBottom: 4 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  {game.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {game.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Community;
