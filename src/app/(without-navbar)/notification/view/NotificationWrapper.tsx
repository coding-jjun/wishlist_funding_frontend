import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import { Notification } from "@/types/Notification";
import NotificationContent from "@/app/(without-navbar)/notification/view/NotificationContent";
import { grey } from "@mui/material/colors";
import getTimeAgoText from "@/utils/getTimeAgoText";
import IncomingFollowButtons from "@/app/(without-navbar)/notification/view/IncomingFollowButtons";
import { NotiType } from "@/types/Notification.enum";
import { useRouter } from "next/navigation";

interface Props {
  notification: Notification;
}

export default function NotificationWrapper({ notification }: Props) {
  const router = useRouter();
  const { sendId, senderImg, sendNick, notiType, subId, notiTime, fundTitle } =
    notification;

  const handleClick = () => {
    if (
      notiType === NotiType.IncomingFollow ||
      notiType === NotiType.AcceptFollow
    ) {
      router.push(`/profile/${sendId}`);
    } else if (subId) {
      router.push(`/fundings/${subId}`);
    }
  };

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
      sx={{
        pb: 3,
        width: "100%",
        position: "relative",
      }}
    >
      <Avatar
        alt={`${sendNick}-profile`}
        src={senderImg ?? "/dummy/profile.png"}
        sx={{ width: 30, height: 30 }}
        onClick={() => router.push(`/profile/${sendId}`)}
      />
      <div style={{ width: "100%" }} onClick={handleClick}>
        <NotificationContent
          sender={sendNick}
          notiType={notiType}
          fundTitle={fundTitle}
        />
        <Typography
          variant={"body2"}
          color={grey[500]}
          sx={{ padding: 0, margin: 0 }}
        >
          {getTimeAgoText(notiTime.toString())}
        </Typography>
      </div>
      {notiType === NotiType.IncomingFollow && <IncomingFollowButtons />}
    </Stack>
  );
}
