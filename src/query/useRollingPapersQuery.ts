import axios from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { CommonResponse } from "@/types/CommonResponse";
import { RollingPaper } from "@/types/RollingPaper";

const fetchRollingPapers = async (
  fundUuid: string,
): Promise<RollingPaper[]> => {
  const response = await axios.get<CommonResponse<RollingPaper[]>>(
    `/api/rollingpaper?fundUuid=${fundUuid}`,
  );

  return response.data.data;
};

const useRollingPapersQuery = (
  fundUuid: string,
): UseQueryResult<RollingPaper[]> => {
  return useQuery<RollingPaper[]>({
    queryKey: ["rollingPapers", fundUuid],
    queryFn: () => fetchRollingPapers(fundUuid),
  });
};

export default useRollingPapersQuery;
