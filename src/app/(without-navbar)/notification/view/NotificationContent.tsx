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
    <div
      style={{
        display: "inline",
      }}
    >
      {fundTitle && (
        <Typography
          component="span"
          fontWeight={600}
          sx={{ padding: 0, marginRight: 1 }}
        >
          [{fundTitle}]
        </Typography>
      )}
      <Typography
        component="span"
        fontWeight={700}
        sx={{ padding: 0, margin: 0 }}
      >
        {sender}
      </Typography>
      <Typography component="span" sx={{ padding: 0, margin: 0 }}>
        {NotificationMessages[notiType]}
      </Typography>
    </div>
  );
}
