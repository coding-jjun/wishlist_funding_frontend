"use client";
import { Badge } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { grey } from "@mui/material/colors";
import React from "react";
import Link from "next/link";

interface Props {
  hasNotification: boolean;
}

export default function NotificationIcon({ hasNotification }: Props) {
  return (
    <Link href="/notification">
      {hasNotification ? (
        <Badge color="primary" variant="dot">
          <NotificationsNoneIcon sx={{ fontSize: 28, color: grey[800] }} />
        </Badge>
      ) : (
        <NotificationsNoneIcon sx={{ fontSize: 28, color: grey[800] }} />
      )}
    </Link>
  );
}
