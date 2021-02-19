import * as React from "react";
import { Icon, Container } from "@material-ui/core";
import Lanes from "../components/Lanes";

const PlayField = (): JSX.Element => {
  return (
    <Container maxWidth={false}>
      <Lanes />
      <Icon color="primary">add_circle</Icon>
    </Container>
  );
};

export default PlayField;
