import * as React from "react";
import { SectionContainer } from "../sharedStyles";
import { SequencerButton } from "../SequencerButton";
import { PlayButton } from "../Play Button";
import { StyledSequencerComponent } from "./styles";

// export interface ISequencerProps {}
const numOfButtons = [1, 2, 3, 4, 5, 6, 7, 8];
const sequencerButtons = numOfButtons.map((num) => {
  return <SequencerButton key={num} />;
});
export default function Sequencer() {
  return (
    <StyledSequencerComponent>
      Sequencer
      <SectionContainer>
        {sequencerButtons}
        <PlayButton />
      </SectionContainer>
    </StyledSequencerComponent>
  );
}
