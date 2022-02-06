// Material UI
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// store
import { useSelector } from '../store/Store';

// Material UI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#FF286E'
    },
    typography: {
      fontFamily: 'Poppins',
      fontSize: 18
    }
  }
});

const AccountInfo = () => {
  const user = useSelector((state) => state.user);
  const inputProps = {
    color: '#FFFFFF'
  };

  return (
    <>
      <Box>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Typography
              component="h1"
              variant="h5"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: 'black',
                fontFamily: 'Poppins',
                fontSize: 28,
                textDecoration: 'none'
              }}
            >
              ACCOUNT
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: 4,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Grid item xs={12} sm={6}>
                <TextField
                  inputProps={inputProps}
                  name="firstName"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={user.firstName}
                  autoFocus
                  sx={{ bgcolor: 'white', borderRadius: '5px' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  value={user.lastName}
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={user.email}
                  name="email"
                  autoComplete="email"
                />
              </Grid>
            </Grid>
            <div>
              <Grid
                container
                spacing={2}
                sx={{
                  marginTop: 4,
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    placeholder="Type in current password"
                    type="password"
                    // id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12} flexDirection={'row'}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    placeholder="Type in new password"
                    type="password"
                    // id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    placeholder="Confirm new password"
                    type="password"
                    // type={values.showPassword ? 'text' : 'password'}
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
                Change Password
              </Button>
            </div>
          </Container>
        </ThemeProvider>
      </Box>
    </>
  );
};

export default AccountInfo;
