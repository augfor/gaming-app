import { useEffect, useState } from 'react';
import axios from 'axios';
import { ChatEngine } from 'react-chat-engine';
// Material UI
import { Box, Container, Paper } from '@mui/material';
// CSS
import './Chat.css';
// api
import { RAWG_API_KEY, CHATENGINE_PROJECT_ID } from '../api/const';
// store
import { useSelector } from '../store/Store';

const Chat = () => {
  const user = useSelector((state) => state.user);
  const [game, setGame] = useState({});

  const background = {
    paperContainer: {
      backgroundImage: `url(${game.background_image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '0px',
      flexDirection: 'column',
      height: '100vh',
      width: '100vw'
    }
  };

  useEffect(() => {
    const gameData = async () => {
      const result = await axios.get(
        `https://api.rawg.io/api${window.location.pathname}?key=${RAWG_API_KEY}`
      );

      setGame(result.data);
    };

    gameData();
  }, []);

  return (
    <>
      <Paper style={background.paperContainer}>
        <Box sx={{ display: 'block', height: '7.7vh' }} />
        <Container>
          <ChatEngine
            height="92.3vh"
            projectID={`${CHATENGINE_PROJECT_ID}`}
            userName={user?.firstName}
            userSecret={localStorage.getItem('password')}
          />
        </Container>
      </Paper>
    </>
  );
};

export default Chat;
