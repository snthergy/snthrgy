import styled from "styled-components";
import colors from "../../desigin/colors";
import {Input} from "../Input/index";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 4px solid ${colors.mainBlue};
  align-items: center;
  border-radius: 12px;
  width: 450px;
  height: 425px;
`;

export const SignIn = styled.h1`
  margin-top: 48px;
  margin-bottom: 48px;
  font-size: 24px;
  font-weight: bold;
  font-family: Open-Sans, Helvetica, Sans-Serif;
`;

export const StyledInput = styled(Input)``;
