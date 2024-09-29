import axios from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { FundingDto } from "@/types/Funding";
import { CommonResponse } from "@/types/CommonResponse";

const fetchFundingDetail = async (fundingUuid: string): Promise<FundingDto> => {
  const response = await axios.get<CommonResponse<FundingDto>>(
    `/api/funding/${fundingUuid}`,
  );

  return response.data.data;
};

const useFundingDetailQuery = (
  fundingUuid: string,
): UseQueryResult<FundingDto> => {
  return useQuery<FundingDto>({
    queryKey: ["funding", fundingUuid],
    queryFn: () => fetchFundingDetail(fundingUuid),
  });
};

export default useFundingDetailQuery;
