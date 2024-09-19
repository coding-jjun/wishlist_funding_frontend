import { Avatar, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import getTimeAgoText from "@/utils/getTimeAgoText";

interface Props {
  userName: string;
  profileImg?: string;
  regAt?: string;
  description?: React.ReactNode;
}

export default function Profile({
  profileImg,
  userName,
  regAt,
  description,
}: Props) {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      sx={{ width: "100%", position: "relative" }}
    >
      {/*프로필 이미지*/}
      <Avatar
        alt={`${userName}-profile-avatar`}
        src={profileImg ?? "/dummy/profile.webp"}
        sx={{ width: 30, height: 30 }}
      />
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={1}
      >
        {/*닉네임*/}
        <Typography fontWeight={700} margin="none">
          {userName}
        </Typography>
        {/*등록일*/}
        {regAt && (
          <Typography variant="body2" color={grey[500]} margin="none">
            {getTimeAgoText(regAt)}
          </Typography>
        )}
        {/*부가정보*/}
        {description}
      </Stack>
    </Stack>
  );
}
