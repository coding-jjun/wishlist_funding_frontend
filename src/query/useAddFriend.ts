import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CommonResponse } from "@/types/CommonResponse";

interface ResponseData {
  message: string;
  data: string;
}

const addFriend = async (
  friendId: number,
): Promise<CommonResponse<ResponseData>> => {
  const dto = { friendId };

  const { data } = await axios.post<CommonResponse<ResponseData>>(
    "/api/friend",
    dto,
  );

  return data;
};

const useAddFriend = (frdId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => addFriend(frdId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["friendStatus", frdId],
      });
      queryClient.invalidateQueries({
        queryKey: ["friends"],
      });
    },
  });
};

export default useAddFriend;
