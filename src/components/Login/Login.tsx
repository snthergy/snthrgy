import React from "react";
import {LoginContainer, SignIn, StyledInput} from "./styles";

export interface LoginProps {}

export const Login = (props: LoginProps) => {
  return (
    <LoginContainer>
      <SignIn>Sign In</SignIn>
      <StyledInput label="Email" type="email" />
      <StyledInput label="Password" type="password" />
    </LoginContainer>
  );
};
