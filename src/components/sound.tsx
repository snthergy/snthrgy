import * as React from "react";
import {FatOscillator} from "tone";
import {Box, CardHeader, Button, CardContent} from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import styled from "styled-components";

const Sound = (): JSX.Element => {
  const [started, setStarted] = React.useState(false);
  const [freq, setFreq] = React.useState(400);

  const synth: any = React.useRef(
    new FatOscillator(freq, "sawtooth", 20).toMaster()
  );

  React.useEffect((): void => {
    console.log("Synth effect: ", synth.current.state);
  }, [synth.current.state]);

  console.log("Synth started state: ", synth.current.state);
  const newFreq = (
    _: React.ChangeEvent<unknown>,
    value: number | number[]
  ): void => {
    synth.current.frequency.value = value;
    if (Array.isArray(value)) {
      value.map((v: number): void => setFreq(v));
    } else {
      setFreq(value);
    }
  };

  const newWave = (newType: string): void => {
    synth.current.type = newType;
  };

  const newPhase = (
    _: React.ChangeEvent<unknown>,
    newSpread: number | number[]
  ): void => {
    synth.current.spread = newSpread;
  };

  const startSynth = (): void => {
    setStarted(true);
    synth.current.start();
  };
  const stopSynth = (): void => {
    setStarted(false);
    synth.current.stop();
  };

  return (
    <Container className="App">
      <Box>
        {started ? (
          <Button onClick={stopSynth}>Stop</Button>
        ) : (
          <Button onClick={startSynth}>Play</Button>
        )}
      </Box>

      <Box>
        <Button onClick={(): void => newWave("sawtooth")}>Sawtooth</Button>
        <Button onClick={(): void => newWave("sine")}>Sine</Button>
        <Button onClick={(): void => newWave("square")}>Square</Button>
      </Box>

      <Box>
        <CardHeader title="Freq" />
        <Slider defaultValue={440} min={0} max={1200} onChange={newFreq} />
        <CardContent>{freq}</CardContent>
      </Box>

      <Box>
        <CardHeader title="Phase" />
        <Slider defaultValue={20} min={0} max={100} onChange={newPhase} />
      </Box>
    </Container>
  );
};

export default Sound;

const Container = styled("div")`
  border: 2px solid black;
  border-radius: 5px;
  max-width: 20em;
  padding: 10px;
`;
