import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Material UI
import {
  Alert,
  Avatar,
  Button,
  Container,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// api
import { logIn } from '../api/users';
// store
import { useDispatch } from '../store/Store';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#FF286E'
    }
  }
});

const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  // const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    console.log({
      email: formData.get('email'),
      password: formData.get('password')
    });

    try {
      setError('');

      const { data } = await logIn({
        email: formData.get('email'),
        password: formData.get('password')
      });

      console.log(data.firstName);
      console.log(data.email);

      dispatch({
        type: 'SET_USER',
        payload: { firstName: data.firstName, email: data.email }
      });

      // setLoading(false);

      navigate('/games');
    } catch (error) {
      setError(error.message || error);
    }
  };

  return (
    <>
      <Box sx={{ display: 'block', height: '8vh' }} />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
              {error && <Alert severity="error">{error}</Alert>}
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to={'/signup'}>{"Don't have an account? Sign Up"}</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default LogIn;
