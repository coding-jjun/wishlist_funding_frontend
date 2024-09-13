import axios from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { CommonResponse } from "@/types/CommonResponse";
import { Comment } from "@/types/Comment";

const fetchComments = async (fundUuid: string): Promise<Comment[]> => {
  const response = await axios.get<CommonResponse<Comment[]>>(
    `/api/comment/${fundUuid}`,
  );

  return response.data.data;
};

const useCommentsQuery = (fundUuid: string): UseQueryResult<Comment[]> => {
  return useQuery<Comment[]>({
    queryKey: ["comments", fundUuid],
    queryFn: () => fetchComments(fundUuid),
  });
};

export default useCommentsQuery;
