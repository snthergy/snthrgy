import styled from "styled-components";
import colors from "../../design/colors";

export const StyledButton = styled.button`
  color: white;
  background-color: ${({ isActive }) =>
    isActive ? colors.mainBlue : colors.white};
  border: solid 3.5px ${colors.mainBlue};
  width: 70px;
  height: 70px;
  border-radius: 10px;
  margin: 5px;
`;
