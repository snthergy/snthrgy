import {atom} from "jotai";
import {FatOscillator, Sequence} from "tone";
import {Track} from "../app";

export const trackIdsAtom = atom([1, 2]);
export const selectedTrackIdAtom = atom(1);

export const tracksAtom = atom(get =>
  get(trackIdsAtom).map(
    (trackId): Track => ({
      name: `Track ${trackId}`,
      id: trackId,
      synth: new FatOscillator(440, "sawtooth", 20).toDestination(),
      isSelected: trackId === get(selectedTrackIdAtom),
      sequence: new Sequence(),
    })
  )
);

export const selectedTrackAtom = atom(
  get => get(tracksAtom).find(track => track.isSelected),
  (get, set, id) => {
    const selectedId = get(selectedTrackIdAtom);
    if (id !== selectedId) {
      set(selectedTrackIdAtom, id);
    }
  }
);
