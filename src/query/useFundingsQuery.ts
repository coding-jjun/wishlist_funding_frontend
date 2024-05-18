import axios from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { FundingQueryParam, FundingQueryResponse } from "@/types/Funding";
import { CommonResponse } from "@/types/CommonResponse";

const buildURL = (
  userId: number,
  params: Partial<FundingQueryParam>,
): string => {
  const baseUrl = `/api/funding/user/${userId}`;
  const queryParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      if (Array.isArray(value)) {
        value.forEach((item: string) => queryParams.append(key, item));
      } else {
        queryParams.append(key, String(value));
      }
    }
  });

  return `${baseUrl}?${queryParams.toString()}`;
};

const fetchFundings = async (
  userId: number,
  queryParams: Partial<FundingQueryParam>,
): Promise<FundingQueryResponse> => {
  const url = buildURL(userId, queryParams);

  const response = await axios.get<CommonResponse<FundingQueryResponse>>(url);

  return response.data.data;
};

const useFundingsQuery = (
  userId: number,
  queryParams: Partial<FundingQueryParam>,
): UseQueryResult<FundingQueryResponse> => {
  return useQuery<FundingQueryResponse>({
    queryKey: ["fundings", userId],
    queryFn: () => fetchFundings(userId, queryParams),
  });
};

export default useFundingsQuery;
