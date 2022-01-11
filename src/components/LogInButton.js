import { Link } from 'react-router-dom';
// Material UI
import { Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF286E'
    }
  }
});

const LogInButton = () => {
  return (
    <Button theme={theme} variant="outlined" sx={{ textTransform: 'none' }}>
      <Link
        to={'/login'}
        style={{
          color: 'white',
          fontWeight: 'bold',
          textDecoration: 'none'
        }}
      >
        Log in
      </Link>
    </Button>
  );
};

export default LogInButton;
