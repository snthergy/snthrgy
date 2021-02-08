import * as React from "react";
import Dashboard from "./dashboard";
import styled from "styled-components";

// interface MainProps {}

const Main = (props: any): JSX.Element => {
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
