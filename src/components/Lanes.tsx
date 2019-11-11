import * as React from "react";
import styled from "@emotion/styled";
import Sound from "../components/Sound";
import { Box } from "@material-ui/core";

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
