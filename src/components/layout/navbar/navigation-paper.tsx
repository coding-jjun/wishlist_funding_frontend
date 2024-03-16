import { Paper } from "@mui/material";
import { styled } from "@mui/system";

export const StyledNavigationPaper = styled(Paper)(() => ({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  width: "100%",
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
}));
