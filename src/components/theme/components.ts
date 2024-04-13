import { Components } from "@mui/material/styles/components";
import { Theme } from "@mui/material/styles/createTheme";
import MuiLinearProgress from "@/components/theme/components/MuiLinearProgress";

const components: Components<Omit<Theme, "components">> = {
  MuiLinearProgress,
};

export default components;
