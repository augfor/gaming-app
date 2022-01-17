// Material UI
import * as React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
// store
import { useSelector } from '../store/Store';

function AvatarUser() {
  const user = useSelector((state) => state.user);
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Avatar
          alt="Remy Sharp"
          sx={{
            width: '8rem',
            height: '8rem',
            mb: '1em'
          }}
        />
        <Typography
          component="h1"
          variant="h5"
          sx={{ mb: '1em', fontFamily: 'Poppins', textTransform: 'uppercase' }}
        >
          {user.firstName}
        </Typography>
      </Box>
    </>
  );
}

export default AvatarUser;
