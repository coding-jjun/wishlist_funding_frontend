import { Box, Button, ButtonGroup } from "@mui/material";
import useAddFriend from "@/query/useAddFriend";
import useDeleteFriend from "@/query/useDeleteFriend";

interface Props {
  sendId: number;
}

export default function IncomingFollowButtons({ sendId }: Props) {
  // TODO: 로그인한 유저 아이디로 수정 필요
  const userId: number = 1;

  const { mutate: addFriend } = useAddFriend(userId, sendId);
  const { mutate: deleteFriend } = useDeleteFriend(userId, sendId);

  const handleSubmit = (type: string) => {
    if (type === "add") {
      addFriend();
    } else if (type === "delete") {
      deleteFriend();
    }
    setTimeout(() => {
      window.location.reload();
    }, 50);
  };

  return (
    <ButtonGroup
      sx={{
        width: "50%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        <Button
          onClick={() => handleSubmit("add")}
          sx={{
            borderColor: "#d0d0d0",
            borderRadius: 2,
            color: "#4F4635",
            padding: "3px",
            flex: 1,
            "&:hover": {
              borderColor: "#FFE022",
              backgroundColor: "#FFE022",
            },
          }}
        >
          수락
        </Button>
        <Button
          onClick={() => handleSubmit("delete")}
          sx={{
            borderColor: "#d0d0d0",
            borderRadius: 2,
            color: "#4F4635",
            padding: "3px",
            ml: 0.5,
            flex: 1,
            "&:hover": {
              borderColor: "#FFE022",
              backgroundColor: "#FFE022",
            },
          }}
        >
          무시
        </Button>
      </Box>
    </ButtonGroup>
  );
}
