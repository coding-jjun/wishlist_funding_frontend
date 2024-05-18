import axios from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { CommonResponse } from "@/types/CommonResponse";
import { Funding } from "@/types/Funding";

const fetchMyFunding = async (userId: number): Promise<Funding[]> => {
  const response = await axios.get<CommonResponse<Funding[]>>(
    `/api/user/${userId}/fundings`,
  );

  return response.data.data;
};

const useMyFundingQuery = (userId: number): UseQueryResult<Funding[]> => {
  return useQuery<Funding[]>({
    queryKey: ["myFunding", userId],
    queryFn: () => fetchMyFunding(userId),
  });
};

export default useMyFundingQuery;
