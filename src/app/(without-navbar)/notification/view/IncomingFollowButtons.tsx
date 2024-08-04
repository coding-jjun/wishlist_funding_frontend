import { Box, Button, ButtonGroup } from "@mui/material";
import useAddFriend from "@/query/useAddFriend";
import useDeleteFriend from "@/query/useDeleteFriend";
import { useQueryClient } from "@tanstack/react-query";

interface Props {
  sendId: number;
}

export default function IncomingFollowButtons({ sendId }: Props) {
  // TODO: 로그인한 유저 아이디로 수정 필요
  const userId: number = 1;

  const queryClient = useQueryClient();
  const { mutate: addFriend } = useAddFriend(userId, sendId);
  const { mutate: deleteFriend } = useDeleteFriend(userId, sendId);

  const handleSubmit = (type: string) => {
    if (type === "accept") {
      addFriend(undefined, {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["notifications", userId],
          });
        },
      });
    } else if (type === "ignore") {
      deleteFriend(undefined, {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["notifications", userId],
          });
        },
      });
    }
  };

  const activeButtonStyle = {
    borderColor: "#d0d0d0",
    borderRadius: 2,
    color: "#4F4635",
    padding: "3px",
    flex: 1,
    "&:hover": {
      borderColor: "#FFE022",
      backgroundColor: "#FFE022",
    },
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
        <Button onClick={() => handleSubmit("accept")} sx={activeButtonStyle}>
          수락
        </Button>
        <Button
          onClick={() => handleSubmit("ignore")}
          sx={{
            ...activeButtonStyle,
            ml: 0.5,
          }}
        >
          무시
        </Button>
      </Box>
    </ButtonGroup>
  );
}
