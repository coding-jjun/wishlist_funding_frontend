import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GetCommentDto, UpdateCommentDto } from "@/types/Comment";
import { CommonResponse } from "@/types/CommonResponse";

const updateComment = async (
  dto: UpdateCommentDto,
): Promise<CommonResponse<GetCommentDto>> => {
  const { data } = await axios.put(
    `/api/comment?comId=${dto.comId}&fundId=${dto.fundId}`,
    { content: dto.content },
  );
  return data;
};

const useUpdateComment = (fundId: number | undefined) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: UpdateCommentDto) => updateComment(dto),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments", fundId],
      });
    },
  });
};

export default useUpdateComment;
