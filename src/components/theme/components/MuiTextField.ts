import { Components } from "@mui/material/styles/components";

const MuiTextField: Components["MuiTextField"] = {
  styleOverrides: {
    root: {
      "& label.Mui-focused": {
        color: "#4F4635",
        fontWeight: "bold",
      },
      "& .MuiOutlinedInput-root": {
        borderRadius: "15px",
        "& fieldset": {
          borderColor: "#E0E3E7",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#D0D0D0",
        },
      },
    },
  },
};

export default MuiTextField;
