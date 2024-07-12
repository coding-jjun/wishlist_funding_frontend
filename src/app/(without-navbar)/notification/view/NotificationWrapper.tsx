import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import { Notification } from "@/types/Notification";
import NotificationContent from "@/app/(without-navbar)/notification/view/NotificationContent";
import { grey } from "@mui/material/colors";
import getTimeAgoText from "@/utils/getTimeAgoText";
import IncomingFollowButtons from "@/app/(without-navbar)/notification/view/IncomingFollowButtons";
import { NotiType, ReqType } from "@/types/Notification.enum";
import { useRouter } from "next/navigation";

interface Props {
  notification: Notification;
}

export default function NotificationWrapper({ notification }: Props) {
  const router = useRouter();
  const {
    notiId,
    recvId,
    sendId,
    senderImg,
    sendNick,
    notiType,
    reqType,
    // subId: fundUuid,
    notiTime,
    fundTitle,
  } = notification;

  const handleClick = () => {
    if (
      notiType === NotiType.IncomingFollow ||
      notiType === NotiType.AcceptFollow
    ) {
      /*TODO: 기능 추가되면 userId, fundUuid 수정 필요*/
      router.push(`/profile/1`);
    } else if (fundTitle) {
      router.push(`/fundings/607d519a-ddd3-40c3-ac33-c832d8c5b57c`);
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
        onClick={() => router.push(`/profile/1`)}
      />
      <div style={{ width: "100%" }} onClick={handleClick}>
        <NotificationContent
          sender={sendNick}
          notiType={notiType}
          fundTitle={fundTitle || undefined}
        />
        <Typography
          variant={"body2"}
          color={grey[500]}
          sx={{ padding: 0, margin: 0 }}
        >
          {getTimeAgoText(notiTime.toString())}
        </Typography>
      </div>
      {reqType == ReqType.NotResponse && <IncomingFollowButtons />}
    </Stack>
  );
}
