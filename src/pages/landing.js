import ResponsiveAppBar from "../components/navbar";

import Image from "../assets/landing_bg.jpg";
import { Button, CssBaseline, Paper } from "@mui/material";
import Cta from "../components/cta";
import { Box } from "@mui/system";

const background = {
  paperContainer: {
    width: "100vw",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    alignItems: "center",
    backgroundImage: `url(${Image})`,
  },
};

const title = {
  textContainer: {
    color: "#FF286E",
    fontSize: "10rem",
    fontFamily: "Poppins",
    margin: "0",
    // height: "100vh",
  },
};

const LandingPage = () => {
  return (
    <>
      <Paper style={background.paperContainer}>
        <ResponsiveAppBar />
        <Box
          sx={{ my: 2, color: "white", display: "block", height: "40vh" }}
        ></Box>
        <CssBaseline />
        <h1 style={title.textContainer}>GAMERS ONLY</h1>
        <Cta></Cta>
      </Paper>
    </>
  );
};

export default LandingPage;
