import * as React from "react";
import { SectionContainer } from "../sharedStyles";
import { SequencerButton } from "../SequencerButton";
import { PlayButton } from "../Play Button";
import { StyledSequencerComponent } from "./styles";

// export interface ISequencerProps {}

const numOfButtons = [1, 2, 3, 4, 5, 6, 7, 8];
const buttons = numOfButtons.map((button) => {
  return <SequencerButton key={button} />;
});

export default function Sequencer() {
  return (
    <StyledSequencerComponent>
      Sequencer
      <SectionContainer>
        {buttons}
        <PlayButton />
      </SectionContainer>
    </StyledSequencerComponent>
  );
}
