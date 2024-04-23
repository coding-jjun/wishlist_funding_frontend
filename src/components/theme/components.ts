import { Components } from "@mui/material/styles/components";
import { Theme } from "@mui/material/styles/createTheme";
import MuiLinearProgress from "@/components/theme/components/MuiLinearProgress";
import MuiTextField from "@/components/theme/components/MuiTextField";

const components: Components<Omit<Theme, "components">> = {
  MuiLinearProgress,
  MuiTextField,
};

export default components;
