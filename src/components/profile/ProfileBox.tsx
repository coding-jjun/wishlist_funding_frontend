import { Stack } from "@mui/material";
import Profile from "@/components/profile/Profile";

interface Props {
  userName: string;
  content: React.ReactNode;
  profileImg?: string;
  regAt?: string;
  description?: React.ReactNode;
}

export default function ProfileBox({ content, ...props }: Props) {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={1}
      sx={{ pb: 3, width: "100%" }}
    >
      <Profile {...props} />
      <div style={{ marginLeft: 50 }}>{content}</div>
    </Stack>
  );
}
