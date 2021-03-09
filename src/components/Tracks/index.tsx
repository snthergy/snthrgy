import * as React from "react";
import {tracks_fixtures} from "./__fixtures__/constants";

// export interface ITracksProps {}

export default function Tracks() {
  return <div>{tracks_fixtures.map(track => track.name)}</div>;
}
