import React from "react";
import { Stack, Typography } from "@mui/material";
import { NotificationMessages, NotiType } from "@/types/Notification.enum";

interface Props {
  sender: string;
  notiType: NotiType;
  fundTitle?: string;
}

export default function NotificationContent({
  sender,
  notiType,
  fundTitle,
}: Props) {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={1}
    >
      {fundTitle ? (
        <Typography fontWeight={500} sx={{ padding: 0, margin: 0 }}>
          [{fundTitle}]
        </Typography>
      ) : null}
      <Typography fontWeight={700} sx={{ padding: 0, margin: 0 }}>
        {sender}
      </Typography>
      {NotificationMessages[notiType]}
    </Stack>
  );
}
