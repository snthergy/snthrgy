import * as React from "react";
import Dashboard from "./dashboard";
import styled from "styled-components";

const Main = (props: {}): JSX.Element => {
  const authenticated = true;
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
