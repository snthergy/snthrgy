import * as React from "react";
import ReactDOM from "react-dom";
import Main from "./pages/Main";
import {create} from "jss";
import {jssPreset} from "@material-ui/core/styles";

// This allows styled components to take priority over material UI
create({
  ...jssPreset(),
  insertionPoint: document.getElementById("jss-insertion-point"),
});

ReactDOM.render(<Main />, document.getElementById("root"));
