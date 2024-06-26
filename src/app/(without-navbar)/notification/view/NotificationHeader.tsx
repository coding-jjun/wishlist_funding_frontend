import React from "react";
import { Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import getTimeAgoText from "@/utils/getTimeAgoText";

interface Props {
  sender: string;
}

export default function NotificationHeader({ sender }: Props) {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={1}
    >
      <Typography fontWeight={700} sx={{ padding: 0, margin: 0 }}>
        {sender}
      </Typography>
      <Typography
        variant={"body2"}
        color={grey[500]}
        sx={{ padding: 0, margin: 0 }}
      ></Typography>
    </Stack>
  );
}
