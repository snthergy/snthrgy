import * as React from "react";
import { Toolbar, AppBar, Typography } from "@material-ui/core";

export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>Menu</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
