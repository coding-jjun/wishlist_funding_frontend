import { Button } from "@mui/material";
import useAddFriend from "@/query/useAddFriend";
import useDeleteFriend from "@/query/useDeleteFriend";
import useFriendStatusQuery from "@/query/useFriendStatusQuery";

interface Props {
  userId: number;
  friendId: number;
}

export default function FriendActionButton({ userId, friendId }: Props) {
  const { data: friendStatus } = useFriendStatusQuery(userId, friendId);
  const { mutate: requestFriend } = useAddFriend(userId, friendId);
  const { mutate: deleteFriend } = useDeleteFriend(userId, friendId);

  const handleClickFriendActionButton = () => {
    switch (friendStatus) {
      case "friend":
        deleteFriend();
        break;
      case "requested":
        requestFriend();
        break;
      case "request":
        deleteFriend();
        break;
      case "notFriend":
        requestFriend();
        break;
      default:
        break;
    }
  };
  const getFriendActionButtonText = () => {
    switch (friendStatus) {
      case "friend":
        return "친구 끊기";
      case "requested":
        return "친구 요청 수락";
      case "request":
        return "친구 요청 보냄";
      case "notFriend":
        return "친구 신청";
      default:
        return "친구 신청";
    }
  };

  return (
    <Button
      variant="outlined"
      sx={{ borderRadius: 2 }}
      color="info"
      onClick={handleClickFriendActionButton}
    >
      {getFriendActionButtonText()}
    </Button>
  );
}
