import * as React from "react";
import {tracks_fixtures} from "./__fixtures__/constants";
import {
  AddTrackButton,
  AddTrackStyles,
  ThickDivider,
  TracksWrapper,
  TrackWrapper,
} from "./styles";
import {Dial} from "../Dial/Dial";

// export interface ITracksProps {}

export default function Tracks() {
  return (
    <TracksWrapper>
      <AddTrackStyles>
        <div>Add track</div>
        <AddTrackButton>+</AddTrackButton>
      </AddTrackStyles>
      <ThickDivider />
      {tracks_fixtures.map(track => (
        <TrackWrapper key={track.id}>
          {track.name}
          <Dial diameter={40} value={1} min={1} max={2} step={1} />
        </TrackWrapper>
      ))}
      <ThickDivider />
    </TracksWrapper>
  );
}
