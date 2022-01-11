import { Link } from 'react-router-dom';
// Material UI
import { Box, Button } from '@mui/material';
// assets
import Image from '../assets/Logo_latcom.png';

const LogoLink = () => {
  return (
    <>
      <img src={`${Image}`} alt="Latcom logo" style={{ height: '35px' }} />
      <Box sx={{ flexGrow: 1 }}>
        <Button
          sx={{
            display: 'block',
            fontSize: '1.3rem',
            marginLeft: '0.3rem',
            my: 2
          }}
        >
          <Link
            to={'/'}
            style={{
              fontFamily: 'Poppins',
              color: 'white',
              fontWeight: 'bold',
              textDecoration: 'none'
            }}
          >
            LATCOM
          </Link>
        </Button>
      </Box>
    </>
  );
};

export default LogoLink;
