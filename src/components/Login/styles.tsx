import styled from "styled-components";
import colors from "../../desigin/colors";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 4px solid ${colors.mainBlue};
  align-items: center;
  border-radius: 5px;
  width: 450px;
  height: 425px;
`;

export const SignIn = styled.h1`
  margin-top: 14px;
  font-size: 18px;
  font-weight: bold;
  font-family: Open-Sans, Helvetica, Sans-Serif;
`;
