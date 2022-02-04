import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Material UI
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  createTheme,
  IconButton,
  Stack,
  Toolbar
} from '@mui/material';
import { ThemeProvider } from '@emotion/react';
// components
import LogoLink from './LogoLink';
import LogInButton from './LogInButton';
import SignUpButton from './SignUpButton';
// api
import { logOut } from '../api/users';
// store
import { useDispatch, useSelector } from '../store/Store';
import ImageContext from '../store/ImageContext';

const Navbar = () => {
  const { imagePreview } = useContext(ImageContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  function onLogOut() {
    dispatch({
      type: 'UNSET_USER'
    });
    logOut();
    navigate('/games');
  }

  let theme = createTheme({
    palette: {
      primary: {
        main: '#fdf800'
      },
      secondary: {
        main: '#FFFFFF'
      }
    },
    typography: {
      fontFamily: 'Poppins',
      fontSize: 18
    }
  });

  return (
    <AppBar elevation={0} position="absolute" style={{ background: '#000000' }}>
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <LogoLink />
          <Box>
            <Stack spacing={1} direction="row">
              {user?.email ? (
                <>
                  <ThemeProvider theme={theme}>
                    <Button variant="text" onClick={onLogOut}>
                      log out
                    </Button>
                    <IconButton size="small">
                      <Link to={'/profile'} style={{ textDecoration: 'none' }}>
                        <Avatar
                          src={imagePreview}
                          sx={{ color: 'black', width: 44, height: 44 }}
                        >{`${user.firstName[0]}`}</Avatar>
                      </Link>
                    </IconButton>
                  </ThemeProvider>
                </>
              ) : (
                <>
                  <LogInButton />
                  <SignUpButton />
                </>
              )}
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
