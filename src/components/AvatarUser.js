import { useContext } from 'react';
// Material UI
import { Avatar, Box, Typography } from '@mui/material';
// store
import { useSelector } from '../store/Store';
import ImageContext from '../store/ImageContext';

const AvatarUser = () => {
  const { imagePreview } = useContext(ImageContext);

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
          src={imagePreview}
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
};

export default AvatarUser;
