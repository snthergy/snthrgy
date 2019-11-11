import * as React from "react";
import { Button, makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      color: "white",
      borderColor: "white"
    }
  })
);

interface LoginProps {
  auth: any;
  authProp: any;
}

const Login = ({ auth, authProp }: LoginProps): JSX.Element => {
  const authenticated = authProp.isAuthenticated();
  const classes = useStyles({});
  const login = (): void => {
    auth.authorize();
  };

  const logout = (): void => {
    authProp.logout();
  };

  return (
    <div>
      <Button
        className={classes.button}
        variant="outlined"
        onClick={authenticated ? logout : login}
      >
        {authenticated ? "Logout" : "Login"}
      </Button>
    </div>
  );
};

export default Login;
