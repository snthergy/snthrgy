import React, {useState} from "react";
import {SectionContainer} from "../sharedStyles";
import Osc1 from "./Osc1";

export interface IOscilatorsProps {}

export default function Oscilators(props: IOscilatorsProps) {
  const [osc1Value, setOsc1Value] = useState(0);

  return (
    <SectionContainer>
      <Osc1 />
      <div>Osc 2</div>
    </SectionContainer>
  );
}
