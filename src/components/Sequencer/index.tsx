import * as React from "react";
import {SectionContainer} from "../sharedStyles";
import { SequencerButton } from "../SequencerButton";
import { PlayButton }  from "../Play Button";
import { StyledSequencerComponent } from "./styles";

export interface ISequencerProps {}

export default function Sequencer(props: ISequencerProps) {
  return (
    <StyledSequencerComponent>
      <SectionContainer>
        Sequencer
        <SequencerButton></SequencerButton>
        <SequencerButton></SequencerButton>
        <SequencerButton></SequencerButton>
        <SequencerButton></SequencerButton>
        <SequencerButton></SequencerButton>
        <SequencerButton></SequencerButton>
        <SequencerButton></SequencerButton>
        <SequencerButton></SequencerButton>
        <SequencerButton>
          <PlayButton></PlayButton>
        </SequencerButton>
      </SectionContainer>
    </StyledSequencerComponent>
   
  )
 
}
