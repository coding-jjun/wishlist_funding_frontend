import { Box, Button, ButtonGroup } from "@mui/material";
import useAddFriend from "@/query/useAddFriend";
import useDeleteFriend from "@/query/useDeleteFriend";
import { useQueryClient } from "@tanstack/react-query";

interface Props {
  sendId: number;
}

export default function IncomingFollowButtons({ sendId }: Props) {
  const queryClient = useQueryClient();
  const { mutate: addFriend } = useAddFriend(sendId);
  const { mutate: deleteFriend } = useDeleteFriend(sendId);

  const handleSubmit = (type: string) => {
    if (type === "accept") {
      addFriend(undefined, {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["notifications"],
          });
        },
      });
    } else if (type === "ignore") {
      deleteFriend(undefined, {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["notifications"],
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
