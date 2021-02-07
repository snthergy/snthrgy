import * as React from "react";
import styled from "styled-components";
import {Box} from "@material-ui/core";
import Sound from "./Sound";

const Lanes = (): JSX.Element => {
  return (
    <LanesContainer p="1rem">
      Title
      <Sound />
    </LanesContainer>
  );
};

export default Lanes;

const LanesContainer = styled(Box)``;
