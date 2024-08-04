import axios from "axios";
import {
  DefaultError,
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";
import { CommonResponse } from "@/types/CommonResponse";
import { MyDonationListDto } from "@/types/Donation";

const fetchMyDonations = async (
  userId: number,
  status?: string,
  lastId?: number,
): Promise<MyDonationsQueryResponse> => {
  const response = await axios.get<CommonResponse<MyDonationsQueryResponse>>(
    `/api/user/${userId}/donation?status=${status}&lastId=${lastId}`,
  );

  return response.data.data;
};

interface PageParam {
  lastId: number | undefined;
}

interface MyDonationsQueryResponse {
  donations: MyDonationListDto[];
  lastId: number;
}

const useMyDonationsQuery = (
  userId: number,
  status: "ongoing" | "ended",
): UseInfiniteQueryResult<InfiniteData<MyDonationsQueryResponse>> => {
  return useInfiniteQuery<
    MyDonationsQueryResponse,
    DefaultError,
    InfiniteData<MyDonationsQueryResponse>,
    QueryKey,
    PageParam
  >({
    queryKey: ["myDonation", userId, status],
    queryFn: ({ pageParam = { lastId: undefined } }) =>
      fetchMyDonations(userId, status, pageParam.lastId),
    initialPageParam: { lastId: undefined },
    getNextPageParam: (lastPage) => {
      if (lastPage.donations.length < 10) {
        return undefined;
      }

      return { lastId: lastPage.lastId };
    },
  });
};

export default useMyDonationsQuery;
