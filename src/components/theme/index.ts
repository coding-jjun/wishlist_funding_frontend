"use client";
import { createTheme } from "@mui/material/styles";
import palette from "@/components/theme/palette";
import components from "@/components/theme/components";
import typography from "@/components/theme/typography";

const theme = createTheme({
  palette,
  components,
  typography,
});

export default theme;
