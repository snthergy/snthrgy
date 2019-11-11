import * as React from "react";
import {
  Toolbar,
  AppBar,
  Button,
  makeStyles,
  createStyles
} from "@material-ui/core";
import auth0 from "auth0-js";
import { AUTH_CONFIG } from "../client/auth0-variables";
import NavMenu from "./NavMenu";

export interface NavBarProps {
  auth?: any;
  client: any;
}

const useStyles = makeStyles(() =>
  createStyles({
    toolbar: {
      display: "flex",
      justifyContent: "space-between"
    }
  })
);

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
  const authProp = props.auth;
  const classes = useStyles();
  const auth = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    responseType: "token id_token",
    scope: "openid profile"
  });

  const login = (): void => {
    auth.authorize();
  };

  const logout = (): void => {
    authProp.logout();
  };

  const authenticated = authProp.isAuthenticated();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <NavMenu
          client={props.client}
          authenticated={authenticated}
          authId={authProp.getSub()}
          isLoggedIn={isLoggedIn}
        />
        <Button variant="outlined" onClick={authenticated ? logout : login}>
          {authenticated ? "Logout" : "Login"}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
