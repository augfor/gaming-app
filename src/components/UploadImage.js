// Material UI
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Stack,
  Typography
} from '@mui/material';
import * as React from 'react';
import { useState } from 'react';

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

export default function UploadButton() {
  const [inputs, set_inputs] = useState({});
  const [imagePreview, set_imagePreview] = useState(null);
  // const [imageInfo, set_imageInfo] = useState(null);

  // Configuración de Imagen
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
            <Typography
              component="h1"
              variant="h5"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: 'black',
                fontWeight: 'bold',
                textDecoration: 'none'
              }}
            >
              PHOTOGRAPHY
            </Typography>
            <Typography
              sx={{
                mt: '1em',
                fontWeight: 'bold',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              Image Preview
            </Typography>
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid black',
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
                  {/* <label>{imageInfo?.name} </label> */}
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
}

// display: flex;
// gap: 1em;
// align-items: center;
// border: 1px solid black;
// border-radius: 4px;
// padding: 16px;
// height: 30px;
