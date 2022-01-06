// Material UI
import { AppBar, Box, Button, Container, Stack, Toolbar } from '@mui/material';
// Components
import LogInButton from './LogInButton';
import SignUpButton from './SignUpButton';
// Assets
import Image from '../assets/Logo_latcom.png';

const Navbar = () => {
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
              <LogInButton />
              <SignUpButton />
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
