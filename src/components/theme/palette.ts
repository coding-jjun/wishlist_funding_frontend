import { PaletteOptions } from "@mui/material";
import { grey, red } from "@mui/material/colors";

const palette: PaletteOptions = {
  primary: {
    main: red[300],
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: "#FFC2C7",
  },
  info: {
    main: grey[500],
    contrastText: "white",
  },
};

export default palette;
