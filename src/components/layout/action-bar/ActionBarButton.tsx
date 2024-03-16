import { styled } from "@mui/system";
import { Button } from "@mui/material";
import { red } from "@mui/material/colors";

export const ActionBarButton = styled(Button)(() => ({
  width: "100%",
  height: "100%",
  fontSize: 18,
  fontWeight: 700,
  letterSpacing: 5,
  borderRadius: 10,
  backgroundColor: red[300],
}));
