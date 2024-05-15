import { Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { CSSProperties } from "react";

interface Props {
  title: string;
  rightSlot?: React.ReactNode;
  barSx?: CSSProperties;
  titleSx?: CSSProperties;
}

export default function SectionHeader({
  title,
  rightSlot,
  barSx,
  titleSx,
}: Props) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ pt: 2, ...barSx }}
    >
      <Typography
        sx={{ fontSize: "20px", fontWeight: 700, color: grey[800], ...titleSx }}
      >
        {title}
      </Typography>
      {rightSlot ?? rightSlot}
    </Stack>
  );
}
