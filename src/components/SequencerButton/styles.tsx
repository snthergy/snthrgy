import styled from "styled-components";
import colors from "../../desigin/colors";

export const StyledButton = styled.button`
  color: white;
  background-color: ${({isActive}) => (isActive ? colors.mainBlue : "white")};
  border: solid 2.5px ${colors.mainBlue};
  width: 60px;
  height: 60px;
  border-radius: 10px;
`;
