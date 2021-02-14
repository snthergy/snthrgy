import React, {ChangeEvent, ReactElement} from "react";
import {TextField} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import colors from "../../desigin/colors";

const StyledTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: colors.mainBlue,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: colors.mainBlue,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: colors.mainBlue,
      },
      "&:hover fieldset": {
        borderColor: colors.mainBlue,
      },
      "&.Mui-focused fieldset": {
        borderColor: colors.mainBlue,
      },
    },
  },
})(TextField);

export interface InputProps {
  label?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export function Input({label, onChange}: InputProps): ReactElement {
  return (
    <StyledTextField onChange={onChange} label={label} variant="outlined" />
  );
}
