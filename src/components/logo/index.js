import { Navbar } from "react-bootstrap";

import GamingAppLogo from "../../assets/react-logo.png";

export function Logo(props) {
  return (
    <Navbar.Brand>
      <img src={GamingAppLogo} alt="GamingAppLogo" width="30px" height="30px" />{" "}
      GamingApp
    </Navbar.Brand>
  );
}
