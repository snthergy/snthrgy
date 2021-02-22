import styled from "styled-components";
import colors from "../../desigin/colors";

export const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const LeftPanel = styled.div`
  border-right: 2px solid ${colors.grey};
  min-width: 350px;
`;
