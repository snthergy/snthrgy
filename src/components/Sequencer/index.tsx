import * as React from "react";
import {SectionContainer} from "../sharedStyles";
import { SequencerButton } from "../SequencerButton";
import { SequencerStyles } from "./styles";

export interface ISequencerProps {}

export default function Sequencer(props: ISequencerProps) {
  return (
    <SequencerStyles>
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
        <SequencerButton><img src="/images/play.jpg" alt="play button"></img></SequencerButton>
      </SectionContainer>
    </SequencerStyles>
   
  )
 
}
