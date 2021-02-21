import * as React from "react";
import {DashboardContainer, LeftPanel} from "./styles";
import ProfileRow from "../../components/ProfileRow/index";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <LeftPanel>
        <ProfileRow />
      </LeftPanel>
      <div>Right panel</div>
    </DashboardContainer>
  );
};

export default Dashboard;
