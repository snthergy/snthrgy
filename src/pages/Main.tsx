import * as React from "react";
import styled from "@emotion/styled";
import Dashboard from "./dashboard";

const Main = (props?: any): JSX.Element => {
  return (
    <AppContainer>
      <Dashboard {...props} />
    </AppContainer>
  );
};

export default Main;

const AppContainer = styled.div`
  margin-top: 64px;
`;
