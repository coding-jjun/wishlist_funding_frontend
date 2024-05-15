import axios from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Funding } from "@/types/Funding";
import { CommonResponse } from "@/types/CommonResponse";

const fetchFundingDetail = async (fundingUuid: string): Promise<Funding> => {
  const response = await axios.get<CommonResponse<Funding>>(
    `/api/funding/${fundingUuid}`,
  );

  return response.data.data;
};

const useFundingDetailQuery = (
  fundingUuid: string,
): UseQueryResult<Funding> => {
  return useQuery<Funding>({
    queryKey: ["funding", fundingUuid],
    queryFn: () => fetchFundingDetail(fundingUuid),
  });
};

export default useFundingDetailQuery;
