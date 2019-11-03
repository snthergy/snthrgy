import * as React from "react";
import * as ReactDOM from "react-dom";
import Sound from "./components/sound";
import Navbar from "./components/navbar";

import "./styles.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Sound />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
