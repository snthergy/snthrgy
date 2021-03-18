import styled from "styled-components";
import colors from "../../design/colors";

export const StyledButton = styled.button`
  color: white;
  width: 20px;
  height: 20px;
  background-color: ${({isActive}) => (isActive ? colors.mainBlue : "white")};
  border: solid 3.5px ${colors.mainBlue};
  margin: 5px;
  box-sizing: border-box;
  border-color: transparent transparent transparent ${colors.mainBlue};
  cursor: pointer;
  border-style: solid;
  border-width: 16px 0 16px 28px;
  `;
