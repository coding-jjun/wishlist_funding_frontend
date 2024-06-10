import axios from "axios";
import {
  DefaultError,
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";
import { FundingQueryParam, FundingQueryResponse } from "@/types/Funding";
import { CommonResponse } from "@/types/CommonResponse";

const buildURL = (
  userId: number,
  params: Partial<FundingQueryParam>,
): string => {
  const baseUrl = `/api/user/${userId}/funding`;
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

// PageParam 타입 정의
interface PageParam {
  lastFundId: number | undefined;
  lastEndAt: string | undefined;
}

const useFundingsQuery = (
  userId: number,
  queryParams: Partial<FundingQueryParam>,
): UseInfiniteQueryResult<InfiniteData<FundingQueryResponse>> => {
  return useInfiniteQuery<
    FundingQueryResponse,
    DefaultError,
    InfiniteData<FundingQueryResponse>,
    QueryKey,
    PageParam
  >({
    queryKey: ["fundings", userId, queryParams],
    queryFn: ({
      pageParam = { lastFundId: undefined, lastEndAt: undefined },
    }) =>
      fetchFundings(userId, {
        ...queryParams,
        lastFundId: pageParam.lastFundId,
        lastEndAt: pageParam.lastEndAt,
      }),
    initialPageParam: { lastFundId: undefined, lastEndAt: undefined },
    getNextPageParam: (lastPage) => {
      if (lastPage.count < (queryParams?.limit ?? 1)) {
        return undefined;
      }

      return { lastFundId: lastPage.lastFundId, lastEndAt: lastPage.lastEndAt };
    },
  });
};

export default useFundingsQuery;
