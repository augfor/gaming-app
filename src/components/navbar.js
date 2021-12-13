import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SignUpButton from "./signup";
import LogInButton from "./login";
import { Stack } from "@mui/material";

import Image from "../assets/Logo_latcom.png";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoStyles = {
    logoContainer: {
      objectFit: "contain",
      height: "45px",
      margin: "auto",
      textAlign: "center",
    },
  };

  return (
    <AppBar
      position="static"
      style={{ background: "transparent" }}
      elevation={0}
    >
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <img src={`${Image}`} alt="logo" style={logoStyles.logoContainer} />

          <Box sx={{ flexGrow: 1 }}>
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontFamily: "Poppins",
                fontSize: "1.5rem",
                marginLeft: "0.5rem",
              }}
            >
              LATCOM
            </Button>
          </Box>

          <Box>
            <Stack spacing={1} direction="row">
              <LogInButton />
              <SignUpButton />
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
