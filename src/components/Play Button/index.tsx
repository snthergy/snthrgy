import React from "react";
import { StyledButton } from "./styles";
import { SequencerButton } from "../SequencerButton";

export interface ButtonProps {
  isActive?: boolean;
  selected?: boolean;
  isMuted?: boolean;
  handleClick?: () => void;
}

export const PlayButton: React.FC<ButtonProps> = (props) => {
  return (
    <SequencerButton>
      <StyledButton {...props} />
    </SequencerButton>
  );
};
