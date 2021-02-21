import * as React from "react";
import Dashboard from "./Dashboard/index";

interface MainProps {}

const Main = (props: MainProps): JSX.Element => {
  return <Dashboard {...props} />;
};

export default Main;
