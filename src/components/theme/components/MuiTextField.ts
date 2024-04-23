import { Components } from "@mui/material/styles/components";

const MuiTextField: Components["MuiTextField"] = {
  styleOverrides: {
    root: {
      "& label.Mui-focused": {
        color: "#FF626F",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#FF626F",
      },
      "& .MuiOutlinedInput-root": {
        borderRadius: "10px",
        "& fieldset": {
          borderColor: "#E0E3E7",
        },
        "&:hover fieldset": {
          borderColor: "#FFC2C7",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#FFC2C7",
        },
      },
    },
  },
};

export default MuiTextField;
