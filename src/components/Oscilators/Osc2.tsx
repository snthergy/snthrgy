import React, {useState} from "react";
import {Dial} from "../Dial/Dial";
import {DialContainer, OscContainer, OscTitle} from "./styles";

export default function Osc2() {
  const [osc1Value, setOsc1Value] = useState(0);
  const [osc2Value, setOsc2Value] = useState(0);
  const [osc3Value, setOsc3Value] = useState(0);

  return (
    <OscContainer>
      <OscTitle>Osc 2</OscTitle>
      <DialContainer>
        <Dial
          value={osc1Value}
          diameter={50}
          min={0}
          max={120}
          step={1}
          onValueChange={setOsc1Value}
        >
          Wave
        </Dial>
        <Dial
          value={osc2Value}
          diameter={50}
          min={0}
          max={120}
          step={1}
          onValueChange={setOsc2Value}
        >
          Tune
        </Dial>
        <Dial
          value={osc3Value}
          diameter={50}
          min={0}
          max={120}
          step={1}
          onValueChange={setOsc3Value}
        >
          Pan
        </Dial>
      </DialContainer>
    </OscContainer>
  );
}
