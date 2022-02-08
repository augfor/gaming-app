import { useState } from 'react';
import PropTypes from 'prop-types';
// Material UI
import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// components
import AvatarUser from './AvatarUser';
import AccountInfo from './AccountInfo';
import UploadImage from './UploadImage';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#000000'
    },
    primary: {
      main: '#FF286E'
    },
    typography: {
      fontFamily: 'Poppins',
      fontSize: 18
    }
  }
});

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
};

const VerticalTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: {
          xs: 'column',
          sm: 'column',
          md: 'row',
          lg: 'row',
          xl: 'row'
        }
      }}
    >
      <ThemeProvider theme={theme}>
        <Tabs
          orientation="vertical"
          onChange={handleChange}
          value={value}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: 'divider',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: '5em',
            width: { xs: '100%', sm: '100%', md: '20%', lg: '20%', xl: '20%' }
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <AvatarUser />
          </Grid>
          <Tab sx={{ margin: '0 auto' }} label="Account" {...a11yProps(0)} />
          <Tab sx={{ margin: '0 auto' }} label="Photo" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <AccountInfo />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AccountInfo />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <UploadImage />
        </TabPanel>
      </ThemeProvider>
    </Box>
  );
};

export default VerticalTabs;
