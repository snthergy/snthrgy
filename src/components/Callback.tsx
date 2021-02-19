import React, { Component, DetailedHTMLProps, HTMLAttributes } from "react";

class Callback extends Component {
  render(): JSX.Element {
    const style = {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      height: "100vh",
      width: "100vw",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "white"
    } as DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

    return <div style={style}>Loading...</div>;
  }
}

export default Callback;
