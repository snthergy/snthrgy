import React, {useState} from "react";
import {Basic} from "react-dial-knob";

export const MainDial = () => {
  const [value, setValue] = useState(0);
  return (
    <Basic
      diameter={200}
      min={0}
      max={4}
      step={1}
      value={value}
      theme={{
        defaultColor: "#333",
        activeColor: "#333",
      }}
      onValueChange={setValue}
      ariaLabelledBy={"my-label"}
    >
      <label id={"my-label"}>Some label</label>
    </Basic>
  );
};
