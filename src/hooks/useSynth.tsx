import React from "react";
import {useAtom} from "jotai";
import {synthStartedAtom, frequencyAtom} from "../store/synth";
import {selectedTrackAtom} from "../store/tracks";
import {ToneOscillatorType} from "tone";

export const useSynth = () => {
  const [selectedTrack, setSelectedTrack] = useAtom(selectedTrackAtom);

  const [started, setStarted] = useAtom(synthStartedAtom);
  const [freq, setFreq] = useAtom(frequencyAtom);

  const newFreq = (_: React.ChangeEvent<unknown>, value: number): void => {
    selectedTrack.synth.frequency.value = value;
    setFreq(value);
  };

  const newWave = (newType: ToneOscillatorType): void => {
    selectedTrack.synth.type = newType;
  };

  const newPhase = (_: React.ChangeEvent<unknown>, newSpread: number): void => {
    selectedTrack.synth.spread = newSpread;
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
    newPhase,
    newWave,
    newFreq,
    started,
    freq,
  };
};
