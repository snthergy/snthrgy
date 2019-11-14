import * as React from "react";
import styled from "@emotion/styled";
import Dashboard from "./dashboard";

interface MainProps {
  auth: any;
}

const Main = (props?: MainProps): JSX.Element => {
  const authenticated = props && props.auth.isAuthenticated();
  return (
    <AppContainer>
      <Dashboard {...props} authenticated={authenticated} />
    </AppContainer>
  );
};

export default Main;

const AppContainer = styled.div`
  margin-top: 64px;
`;
