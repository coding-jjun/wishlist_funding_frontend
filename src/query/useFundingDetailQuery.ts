import axios from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GetFundingDto } from "@/types/Funding";
import { CommonResponse } from "@/types/CommonResponse";

const fetchFundingDetail = async (
  fundingUuid: string,
): Promise<GetFundingDto> => {
  const response = await axios.get<CommonResponse<GetFundingDto>>(
    `/api/funding/${fundingUuid}`,
  );

  return response.data.data;
};

const useFundingDetailQuery = (
  fundingUuid: string,
): UseQueryResult<GetFundingDto> => {
  return useQuery<GetFundingDto>({
    queryKey: ["funding", fundingUuid],
    queryFn: () => fetchFundingDetail(fundingUuid),
  });
};

export default useFundingDetailQuery;
