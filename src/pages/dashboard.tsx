import * as React from "react";
import styled from "styled-components";
import {Login} from "../components/Login/Login";

const Dashboard = (props: any): JSX.Element => {
  return (
    <DashboardContainer>
      <Login />
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  padding: 10px 0;
`;
