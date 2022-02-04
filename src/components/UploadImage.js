import { useContext, useState } from 'react';
// Material UI
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// store
import ImageContext from '../store/ImageContext';

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
const Input = styled('input')({
  display: 'none'
});

const UploadButton = () => {
  const { imagePreview, set_imagePreview } = useContext(ImageContext);
  const [inputs, set_inputs] = useState({});

  const fileHandler = (event) => {
    const file = event.target.files[0];
    const fileExt = file.name.split('.').pop();
    const verifyFileExt = ['jpg', 'jpeg', 'png'].includes(
      fileExt.toLowerCase()
    );
    const fileSize = file.size;

    if (!verifyFileExt || fileSize > 2000000) {
      return alert('Archivo no valido');
    }

    set_inputs({ ...inputs, file });
    set_imagePreview(URL.createObjectURL(file));
    // set_imageInfo(file);

    console.log(file);
    console.log(verifyFileExt);
  };

  return (
    <>
      <Box>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: ' 16px 30px ',
                mb: '1em'
              }}
            >
              <Avatar
                alt="Remy Sharp"
                variant="square"
                src={imagePreview}
                sx={{
                  width: '14rem',
                  height: '14rem',
                  alignItems: 'center'
                }}
              />
            </Grid>
            <Grid
              sx={{
                borderBlockEnd: '1px solid black',
                mb: '1em',
                alignItems: 'center'
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                justifyContent="center"
              >
                <label
                  className="upload-container"
                  htmlFor="contained-button-file"
                >
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    onChange={fileHandler}
                    type="file"
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    component="span"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: '1em'
                    }}
                  >
                    Upload Image
                  </Button>
                </label>
              </Stack>
            </Grid>
            <label>
              <Input accept="image/*" multiple />
              <Button variant="contained" fullWidth component="span">
                SAVE IMAGE
              </Button>
            </label>
          </Container>
        </ThemeProvider>
      </Box>
    </>
  );
};

export default UploadButton;
