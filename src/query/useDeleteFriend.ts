import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CommonResponse } from "@/types/CommonResponse";

interface ResponseData {
  message: string;
  data: string;
}

const deleteFriend = async (
  userId: number,
  friendId: number,
): Promise<CommonResponse<ResponseData>> => {
  const { data } = await axios.delete<CommonResponse<ResponseData>>(
    `/api/friend`,
    {
      data: {
        userId,
        friendId,
      },
    },
  );

  return data;
};

const useDeleteFriend = (userId: number, frdId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteFriend(userId, frdId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["friendStatus", userId, frdId],
      });
      queryClient.invalidateQueries({
        queryKey: ["friends", userId],
      });
    },
  });
};

export default useDeleteFriend;
