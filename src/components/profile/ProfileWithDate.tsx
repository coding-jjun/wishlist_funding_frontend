import { Avatar, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import getTimeAgoText from "@/utils/getTimeAgoText";

interface Props {
  userName: string;
  regAt?: string;
  profileImg?: string;
}

export default function ProfileWithDate({
  profileImg,
  userName,
  regAt,
}: Props) {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      sx={{ width: "100%", position: "relative" }}
    >
      <Avatar
        alt={`${userName}-profile-avatar`}
        src={profileImg ?? "/dummy/profile.png"}
        sx={{ width: 30, height: 30 }}
      />
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={1}
      >
        <Typography fontWeight={700} margin="none">
          {userName}
        </Typography>
        {regAt && (
          <Typography variant="body2" color={grey[500]} margin="none">
            {getTimeAgoText(regAt)}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
}
