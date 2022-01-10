import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
// Context
import Store from '../store/Store';
// Material UI
import {
  Alert,
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Dialog,
  DialogTitle,
  Grid,
  IconButton,
  Link,
  TextField,
  Typography
} from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// API
import { logIn } from '../api/users';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF286E'
    },
    secondary: {
      main: '#000000'
    }
  }
});

const LogInButton = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(Store);
  const [error, setError] = useState('');
  // eslint-disable-next-line no-unused-vars
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

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        theme={theme}
        variant="outlined"
        onClick={handleClickOpen}
        sx={{ color: 'white', textTransform: 'none' }}
      >
        Log In
      </Button>
      {error && <Alert severity="error">{error}</Alert>}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle onClose={handleClose}></BootstrapDialogTitle>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Avatar sx={{ m: 1, backgroundColor: 'black' }}>
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
                  sx={{
                    mt: 3,
                    mb: 2
                  }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2" color="secondary">
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
        <Box
          sx={{ my: 2, color: 'white', display: 'block', height: '2vh' }}
        ></Box>
      </BootstrapDialog>
    </div>
  );
};

export default LogInButton;
