import React from "react";
import {LoginContainer, SignIn} from "./styles";
import {Card} from "@material-ui/core";

export interface LoginProps {}

export const Login = (props: LoginProps) => {
  return (
    <LoginContainer>
      <SignIn>Sign In</SignIn>
      <input />
    </LoginContainer>
  );
};
