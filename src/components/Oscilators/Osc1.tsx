import React, {useState} from "react";
import {Dial} from "../Dial/Dial";
import {DialContainer, OscContainer} from "./styles";

export interface IOsc1Props {}

export default function Osc1(props: IOsc1Props) {
  const [osc1Value, setOsc1Value] = useState(0);
  const [osc2Value, setOsc2Value] = useState(0);

  return (
    <OscContainer>
      <h4>Osc 1</h4>
      <DialContainer>
        <Dial
          value={osc1Value}
          diameter={50}
          min={0}
          max={120}
          step={1}
          onValueChange={setOsc1Value}
        />
        <Dial
          value={osc2Value}
          diameter={50}
          min={0}
          max={120}
          step={1}
          onValueChange={setOsc2Value}
        />
      </DialContainer>
    </OscContainer>
  );
}
