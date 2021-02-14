import * as React from "react";
import Dashboard from "./dashboard";
import styled from "styled-components";

interface MainProps {}

const Main = (props: MainProps): JSX.Element => {
  const authenticated = true;
  return (
    <React.Fragment>
      <AppContainer>
        <Dashboard {...props} authenticated={authenticated} />
      </AppContainer>
    </React.Fragment>
  );
};

export default Main;

const AppContainer = styled.div`
  margin-top: 64px;
`;
