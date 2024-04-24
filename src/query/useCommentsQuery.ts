import axios from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { CommonResponse } from "@/types/CommonResponse";
import { Comment } from "@/types/Comment";

const fetchComments = async (fundId: number): Promise<Comment[]> => {
  const response = await axios.get<CommonResponse<Comment[]>>(
    `/api/comment?fundId=${fundId}`,
  );

  return response.data.data;
};

const useCommentsQuery = (fundId: number): UseQueryResult<Comment[]> => {
  return useQuery<Comment[]>({
    queryKey: ["comments", fundId],
    queryFn: () => fetchComments(fundId),
  });
};

export default useCommentsQuery;
