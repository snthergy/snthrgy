import * as React from "react";
import Navbar from "../components/Navbar";
import styled from "@emotion/styled";
import { Icon, Container } from "@material-ui/core";
import Lanes from "../components/Lanes";

const Dashboard = (props: any): JSX.Element => {
  return (
    <DashboardContainer>
      <Navbar {...props} />
      <Container>
        <Lanes />
        <Icon color="primary">add_circle</Icon>
      </Container>
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  padding: 10px 0;
`;
