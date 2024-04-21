import { styled } from "@mui/system";
import { Stack } from "@mui/material";

export const ActionBarStack = styled(Stack)(() => ({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  boxSizing: "border-box",
  height: 65,
  padding: 10,
  borderTop: "1px solid #eeeeee",
  backgroundColor: "white",
}));
