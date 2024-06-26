import React from "react";
import { Stack, Avatar, Typography } from "@mui/material";
import { Notification } from "@/types/Notification";
import NotificationHeader from "@/app/(without-navbar)/notification/view/NotificationHeader";

interface Props {
  notification: Notification;
}

export default function NotificationWrapper({ notification }: Props) {
  const {
    notiId,
    sendId,
    senderImg,
    sendName,
    notiType,
    reqType,
    subId,
    content,
  } = notification;

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
      sx={{ pb: 3, width: "100%", position: "relative" }}
    >
      <Avatar
        alt={`${sendName}-profile`}
        src={senderImg ?? "/dummy/profile.png"}
        sx={{ width: 30, height: 30 }}
      />
      <div style={{ width: "100%" }}>
        <NotificationHeader sender={sendName} />
        <Typography variant="body1">{content}</Typography>
      </div>
    </Stack>
  );
}
