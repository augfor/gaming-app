import React, { Fragment, useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// Material UI
import {
  AppBar,
  Avatar,
  Box,
  Container,
  createTheme,
  IconButton,
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
                  <ThemeProvider theme={theme}>
                    <React.Fragment>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          textAlign: 'center'
                        }}
                      >
                        <IconButton
                          onClick={handleClick}
                          size="small"
                          sx={{ ml: 2 }}
                          aria-controls={open ? 'account-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                        >
                          <Avatar
                            src={imagePreview}
                            sx={{ color: 'black', width: 44, height: 44 }}
                          >{`${user.firstName[0]}`}</Avatar>
                        </IconButton>
                      </Box>
                    </React.Fragment>
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
                    <MenuItem
                      component={Link}
                      to="/Profile"
                      onClick={handleClose}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem onClick={onLogOut}>Logout</MenuItem>
                  </Menu>
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
