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
        alignItems: 'flex-start',
        justifyContent: 'center'
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
            width: '20%',
            mt: '5em'
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
          <Tab label="Account" {...a11yProps(0)} />
          <Tab label="Photography" {...a11yProps(1)} />
          <Tab label="Communities" {...a11yProps(2)} />
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
        <TabPanel value={value} index={3}>
          Communities
        </TabPanel>
      </ThemeProvider>
    </Box>
  );
};

export default VerticalTabs;
