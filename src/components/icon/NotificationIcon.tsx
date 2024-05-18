import { Badge, IconButton } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { grey } from "@mui/material/colors";
import React from "react";

interface Props {
  hasNotification: boolean;
}

export default function NotificationIcon({ hasNotification }: Props) {
  return (
    <IconButton>
      {hasNotification ? (
        <Badge color="primary" variant="dot">
          <NotificationsNoneIcon sx={{ fontSize: 28, color: grey[800] }} />
        </Badge>
      ) : (
        <NotificationsNoneIcon sx={{ fontSize: 28, color: grey[800] }} />
      )}
    </IconButton>
  );
}
