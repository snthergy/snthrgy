import * as React from "react";
import Dashboard from "./dashboard";
import styled from "styled-components";

interface MainProps {}

const Main = (props: MainProps): JSX.Element => {
  return (
    <React.Fragment>
      <AppContainer>
        <Dashboard {...props} />
      </AppContainer>
    </React.Fragment>
  );
};

export default Main;

const AppContainer = styled.div`
  margin-top: 64px;
`;
