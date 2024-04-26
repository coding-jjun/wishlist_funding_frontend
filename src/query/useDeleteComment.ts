import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GetCommentDto } from "@/types/Comment";
import { CommonResponse } from "@/types/CommonResponse";

const deleteComment = async (
  comId: number,
  fundId: number | undefined,
): Promise<CommonResponse<GetCommentDto>> => {
  if (fundId === undefined) {
    throw new Error("fundId가 유효하지 않습니다.");
  }

  const { data } = await axios.delete(
    `/api/comment?comId=${comId}&fundId=${fundId}`,
  );
  return data;
};

const useDeleteComment = (fundId: number | undefined) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (comId: number) => deleteComment(comId, fundId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments", fundId],
      });
    },
  });
};

export default useDeleteComment;
