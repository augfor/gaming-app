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

const SingUpButton = () => {
  return (
    <Button theme={theme} variant="contained" sx={{ textTransform: 'none' }}>
      <Link
        to={'/signup'}
        style={{
          color: 'white',
          fontWeight: 'bold',
          textDecoration: 'none'
        }}
      >
        Sign Up
      </Link>
    </Button>
  );
};

export default SingUpButton;
