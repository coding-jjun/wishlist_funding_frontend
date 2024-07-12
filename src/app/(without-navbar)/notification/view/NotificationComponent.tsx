import { Stack, Typography } from "@mui/material";
import React from "react";
import NotificationWrapper from "@/app/(without-navbar)/notification/view/NotificationWrapper";
import useNotificationsQuery from "@/query/useNotificationsQuery";
import { NotiType, ReqType } from "@/types/Notification.enum";

const dummyNotifications = [
  {
    notiId: 1,
    recvId: 1,
    sendId: 2,
    senderImg: "/dummy/profile1.png",
    sendNick: "영의",
    notiType: NotiType.IncomingFollow,
    reqType: ReqType.NotResponse,
    // subId,
    notiTime: new Date(),
  },
  {
    notiId: 2,
    recvId: 1,
    sendId: 3,
    senderImg: "/dummy/profile2.png",
    sendNick: "현진",
    notiType: NotiType.NewDonate,
    reqType: ReqType.Accept,
    // subId,
    notiTime: new Date(),
    fundTitle: "아이폰 골랐..",
  },
];

export default function NotificationComponent() {
  const notifications = dummyNotifications;
  // const { data: notifications } = useNotificationsQuery(1);

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
