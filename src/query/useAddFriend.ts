import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CommonResponse } from "@/types/CommonResponse";

interface ResponseData {
  message: string;
  data: string;
}

const addFriend = async (
  userId: number,
  friendId: number,
): Promise<CommonResponse<ResponseData>> => {
  const dto = { userId, friendId };

  const { data } = await axios.post<CommonResponse<ResponseData>>(
    "/api/friend",
    dto,
  );

  return data;
};

const useAddFriend = (userId: number, frdId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => addFriend(userId, frdId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["friend", userId, frdId],
      });
    },
  });
};

export default useAddFriend;
