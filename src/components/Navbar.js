import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Material UI
import {
  AppBar,
  Box,
  Button,
  Container,
  createTheme,
  Menu,
  MenuItem,
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

const Navbar = () => {
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

  // menu handler
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Material UI theme
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
                  <div>
                    <ThemeProvider theme={theme}>
                      <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                      >
                        {user.firstName}
                      </Button>
                    </ThemeProvider>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button'
                      }}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={onLogOut}>Logout</MenuItem>
                    </Menu>
                  </div>
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
