import useFriendsQuery from "@/query/useFriendsQuery";
import { Typography } from "@mui/material";

interface Props {
  userId: number;
}

export default function FriendCount({ userId }: Props) {
  const { data: friends } = useFriendsQuery(userId);
  return (
    <Typography variant="body2" padding={0} margin={0}>
      친구 {friends?.total ?? 0}명
    </Typography>
  );
}
