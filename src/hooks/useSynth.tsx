import React from "react";
import {useAtom} from "jotai";
import {synthStartedAtom, frequencyAtom} from "../store/synth";
import {selectedTrackAtom} from "../store/tracks";
import {ToneOscillatorType} from "tone";
import {osc1Range} from "../store/oscillators";

const useControlSynth = synth => {
  const [freq] = useAtom(osc1Range);

  synth.set({frequency: freq});
};

export const useSynth = () => {
  const [selectedTrack] = useAtom(selectedTrackAtom);
  useControlSynth(selectedTrack.synth);

  const [started, setStarted] = useAtom(synthStartedAtom);
  const [freq, setFreq] = useAtom(frequencyAtom);

  const newFreq = (_: React.ChangeEvent<unknown>, value: number): void => {
    selectedTrack.synth.frequency.value = value;
    setFreq(value);
  };

  const newWave = (newType: ToneOscillatorType): void => {
    selectedTrack.synth.type = newType;
  };

  const startSynth = (): void => {
    setStarted(true);
    selectedTrack.synth.start();
  };
  const stopSynth = (): void => {
    setStarted(false);
    selectedTrack.synth.stop();
  };

  return {
    startSynth,
    stopSynth,
    newWave,
    newFreq,
    started,
    freq,
  };
};
