import React from "react";
import ReactDOM from "react-dom";
import { FatOscillator } from "tone";
import { Card, CardHeader, Button, CardContent } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";

import "./styles.css";

function App() {
  const [freq, setFreq] = React.useState(400);
  const synth = React.useRef(
    new FatOscillator(freq, "sawtooth", 20).toMaster()
  );
  const newFreq = (event, value) => {
    synth.current.frequency.value = value;
    setFreq(value);
  };
  const newWave = newType => {
    synth.current.type = newType;
  };

  const newPhase = (_, newSpread) => (synth.current.spread = newSpread);
  const startSynth = () => synth.current.start();
  const stopSynth = () => synth.current.stop();

  return (
    <div className="App">
      <Card>
        <Button onClick={startSynth}>Start</Button>
        <Button onClick={stopSynth}>Stop</Button>
      </Card>

      <Card>
        <Button onClick={() => newWave("sawtooth")}>Sawtooth</Button>
        <Button onClick={() => newWave("sine")}>Sine</Button>
      </Card>

      <Card>
        <CardHeader title="Freq" />
        <Slider defaultValue={440} min={0} max={1200} onChange={newFreq} />
      </Card>

      <Card>
        <CardHeader title="Phase" />
        <Slider defaultValue={20} min={0} max={100} onChange={newPhase} />
      </Card>
      <Card>
        <CardContent>{freq}</CardContent>
      </Card>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
