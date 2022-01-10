import { useNavigate } from 'react-router-dom';
// Context
import { useDispatch, useSelector } from '../store/Store';
// Material UI
import { AppBar, Box, Button, Container, Stack, Toolbar } from '@mui/material';
// Components
import LogInButton from './LogInButton';
import SignUpButton from './SignUpButton';
// Assets
import Image from '../assets/Logo_latcom.png';
// API
import { logOut } from '../api/users';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  function onLogOut() {
    dispatch({
      type: 'UNSET_USER'
    });
    logOut();
    navigate('/');
  }

  return (
    <AppBar elevation={0} position="static" style={{ background: 'black' }}>
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <img src={`${Image}`} alt="Latcom logo" style={{ height: '35px' }} />
          <Box sx={{ flexGrow: 1 }}>
            <Button
              sx={{
                color: 'white',
                display: 'block',
                fontFamily: 'Poppins',
                fontSize: '1.3rem',
                marginLeft: '0.3rem',
                my: 2
              }}
            >
              LATCOM
            </Button>
          </Box>
          <Box>
            <Stack spacing={1} direction="row">
              {user?.email ? (
                <>
                  <h2>{`Hello ${user.firstName}!`}</h2>
                  <Button onClick={onLogOut}>Log Out</Button>
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
