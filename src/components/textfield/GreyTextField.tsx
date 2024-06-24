import React, { forwardRef } from "react";
import { styled, TextField } from "@mui/material";

interface Props {
  name: string;
  label?: string;
  type?: string;
  value?: string;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  margin?: "none" | "dense" | "normal";
  variant?: "outlined" | "filled" | "standard";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  InputProps?: any;
  InputLabelProps?: any;
}

export const GreyTextField = forwardRef<HTMLInputElement, Props>(
  function GreyTextField(props, ref) {
    return (
      <StyledTextField
        variant="outlined"
        margin="normal"
        fullWidth
        inputRef={ref}
        {...props}
      />
    );
  },
);

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#d3d3d3",
    },
    "&:hover fieldset": {
      borderColor: "#9e9e9e",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#9e9e9e",
    },
    "&.Mui-error fieldset": {
      borderColor: "#f44336",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#9e9e9e",
    "&.Mui-focused": {
      color: "#9e9e9e",
    },
  },
});
