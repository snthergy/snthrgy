import * as React from "react";
import Oscilators from "../../components/Oscilators/index";
import Filter from "../../components/Filter/index";
import Amp from "../../components/Amp/index";
import Effects from "../../components/Effects/index";
import {PlayfieldContainer} from "./styles";
import Sequencer from "../../components/Sequencer/index";

export interface IPlayFieldProps {}

export default function PlayField(props: IPlayFieldProps) {
  return (
    <PlayfieldContainer>
      <Oscilators />
      <Filter />
      <Amp />
      <Effects />
      <Sequencer />
    </PlayfieldContainer>
  );
}
