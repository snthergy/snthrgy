import * as React from "react";
import Sound from "../components/Sound";
import Navbar from "../components/Navbar";

const Main = (props?: any): JSX.Element => {
  return (
    <div className="App">
      <Navbar {...props} />
      <Sound />
    </div>
  );
};

export default Main;
