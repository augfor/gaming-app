import { Link, useNavigate } from 'react-router-dom';
// Material UI
import {
  Alert,
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { signUp } from '../api/users';
import { useDispatch } from '../store/Store';
import { useState } from 'react';

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

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState('');
  // const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    console.log({
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      password: formData.get('password')
    });

    try {
      setError('');

      const { data } = await signUp({
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
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

  const inputProps = {
    color: '#FFFFFF'
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
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={inputProps}
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    sx={{ bgcolor: 'white', borderRadius: '5px' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              {error && <Alert severity="error">{error}</Alert>}
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to={'/login'}>Already have an account? Log in</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
