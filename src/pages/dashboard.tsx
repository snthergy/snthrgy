import * as React from "react";
import Navbar from "../components/Navbar";
import styled from "@emotion/styled";
import PlayField from "../components/PlayField";

const Dashboard = (props: any): JSX.Element => {
  return (
    <DashboardContainer>
      <Navbar {...props} />
      <PlayField />
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  padding: 10px 0;
`;
