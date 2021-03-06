import * as React from "react";
import {DashboardContainer, LeftPanel} from "./styles";
import ProfileRow from "../../components/ProfileRow/index";
import PlayField from "./Playfield";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <LeftPanel>
        <ProfileRow />
      </LeftPanel>
      <PlayField />
    </DashboardContainer>
  );
};

export default Dashboard;
