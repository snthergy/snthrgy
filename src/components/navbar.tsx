import * as React from "react";
import { Toolbar, AppBar, makeStyles, createStyles } from "@material-ui/core";
import NavMenu from "./NavMenu";
import Login from "./login";

export interface NavBarProps {
  auth?: any;
  client: any;
  authenticated: boolean;
}

const useStyles = makeStyles(() =>
  createStyles({
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "#3a2091"
    },
    button: {
      color: "white",
      borderColor: "white"
    }
  })
);

const NavBar: React.FC<NavBarProps> = ({
  client,
  auth,
  authenticated
}: NavBarProps) => {
  const classes = useStyles();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <NavMenu
          client={client}
          authenticated={authenticated}
          authId={auth.getSub()}
          isLoggedIn={isLoggedIn}
        />
        <Login auth={auth} />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
