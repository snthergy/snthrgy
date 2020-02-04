import * as React from "react";
import {Button, makeStyles, createStyles} from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      color: "white",
      borderColor: "white"
    }
  })
);

const Login = (): JSX.Element => {
  const classes = useStyles({});

  return (
    <div>
      <Button className={classes.button} variant="outlined">
        Login
      </Button>
    </div>
  );
};

export default Login;
