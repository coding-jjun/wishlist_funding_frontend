"use client";
import { Badge, IconButton } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { grey } from "@mui/material/colors";
import React from "react";
import { useRouter } from "next/navigation";

interface Props {
  hasNotification: boolean;
}

export default function NotificationIcon({ hasNotification }: Props) {
  const router = useRouter();
  return (
    <IconButton onClick={() => router.push("/notification")}>
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
