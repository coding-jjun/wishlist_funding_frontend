import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateCommentDto, GetCommentDto } from "@/types/Comment";
import { CommonResponse } from "@/types/CommonResponse";

const addComment = async (
  dto: CreateCommentDto,
): Promise<CommonResponse<GetCommentDto>> => {
  const { data } = await axios.post("/api/comment", dto);
  return data;
};

const useAddComment = (fundId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: CreateCommentDto) => addComment(dto),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments", fundId],
      });
    },
  });
};

export default useAddComment;
