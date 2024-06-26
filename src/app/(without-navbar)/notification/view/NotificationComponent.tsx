import { Stack, Typography } from "@mui/material";
import React from "react";
import NotificationWrapper from "@/app/(without-navbar)/notification/view/NotificationWrapper";
import useNotificationsQuery from "@/query/useNotificationsQuery";

export default function NotificationComponent() {
  const { data: notifications } = useNotificationsQuery(1);

  return (
    <Stack spacing={2} sx={{ p: 2 }}>
      {notifications?.length ? (
        notifications.map((notification) => (
          <NotificationWrapper
            key={`notification-${notification.notiId}`}
            notification={notification}
          />
        ))
      ) : (
        <Typography variant="body1">알림이 없어요</Typography>
      )}
    </Stack>
  );
}
