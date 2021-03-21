import React from "react";
import {PlayStopIcon} from "./styles";
import {SequencerButton} from "../SequencerButton";

export interface ButtonProps {
  isActive?: boolean;
  selected?: boolean;
  isMuted?: boolean;
  handleClick?: () => void;
}

export const PlayButton: React.FC<ButtonProps> = props => {
  const {handleClick, ...rest} = props;
  return (
    <SequencerButton handleClick={handleClick}>
      <PlayStopIcon {...rest} />
    </SequencerButton>
  );
};
