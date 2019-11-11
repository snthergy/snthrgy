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
}

const Login = ({ auth }: LoginProps): JSX.Element => {
  const authenticated = auth.isAuthenticated();
  const classes = useStyles({});

  return (
    <div>
      <Button
        className={classes.button}
        variant="outlined"
        onClick={authenticated ? auth.logout : auth.login}
      >
        {authenticated ? "Logout" : "Login"}
      </Button>
    </div>
  );
};

export default Login;
