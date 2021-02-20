import * as React from "react";
import styled from "styled-components";
import {Login} from "../components/Login/Login";

const Dashboard = (): JSX.Element => {
  return (
    <DashboardContainer>
      <Login />
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 64px 0;
`;
