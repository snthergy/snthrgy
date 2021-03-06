import React, {useState} from "react";
import {StyledButton} from "./styles";

export interface ButtonProps {
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, ...restProps }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(0);
  const [isMuted, setIsmuted] = useState(false);

  const handleClick = (e) => {
    e.preventDefault;
    setIsActive(!isActive);

  }
  

  return <StyledButton onClick={onClick} handleClick={handleClick} isActive={isActive}>{children}</StyledButton>;
};
