import { PaletteOptions } from "@mui/material";
import { grey, red } from "@mui/material/colors";

const palette: PaletteOptions = {
  primary: {
    main: red[300],
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: grey[900],
    contrastText: "#FFFFFF",
  },
  info: {
    main: grey[500],
    contrastText: "#FFFFFF",
  },
};

export default palette;
