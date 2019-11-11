import * as React from "react";
import Sound from "../components/Sound";
import Navbar from "../components/Navbar";
import styled from "@emotion/styled";
import { Container } from "@material-ui/core";

const Dashboard = (props: any): JSX.Element => {
  return (
    <DashboardContainer>
      <Navbar {...props} />
      <Container>
        <Sound />
      </Container>
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  padding: 10px 0;
`;
