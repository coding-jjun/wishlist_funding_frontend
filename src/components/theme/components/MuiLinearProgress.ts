import { linearProgressClasses } from "@mui/material/LinearProgress";
import { grey } from "@mui/material/colors";
import { Components } from "@mui/material/styles/components";

const MuiLinearProgress: Components["MuiLinearProgress"] = {
  styleOverrides: {
    root: {
      height: 10,
      borderRadius: 5,
      [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: grey[200],
      },
      [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: "#FFC2C7",
      },
    },
  },
};

export default MuiLinearProgress;
