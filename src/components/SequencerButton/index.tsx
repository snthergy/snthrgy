import React from "react";
import {StyledButton} from "./styles";

export interface ButtonProps {
  onClick: () => void;
  isActive: boolean;
  selected: boolean;
  isMuted: boolean;
  handleClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  onClick,
  isActive,
  selected,
  isMuted,
  handleClick,
  children, 
}) => {

  return 
  <StyledButton onClick={handleClick} selected={selected} isMuted={isMuted} isActive={isActive}>
    {children}
  </StyledButton>;
};
