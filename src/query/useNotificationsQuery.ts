import {
  DefaultError,
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";
import axios from "axios";
import { CommonResponse } from "@/types/CommonResponse";
import {
  NotificationQueryParam,
  NotificationResponse,
} from "@/types/Notification";

// 쿼리 스트링
const buildURL = (
  userId: number,
  params: Partial<NotificationQueryParam>,
): string => {
  const baseUrl = `/api/notification/${userId}`;
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

const fetchNotifications = async (
  userId: number,
  queryParams: Partial<NotificationQueryParam>,
): Promise<NotificationResponse> => {
  const url = buildURL(userId, queryParams);
  const response = await axios.get<CommonResponse<NotificationResponse>>(url);
  return response.data.data;
};

interface PageParam {
  lastId: number | undefined;
}

const useNotificationsQuery = (
  userId: number,
  queryParams: Partial<NotificationQueryParam>,
): UseInfiniteQueryResult<InfiniteData<NotificationResponse>> => {
  return useInfiniteQuery<
    NotificationResponse,
    DefaultError,
    InfiniteData<NotificationResponse>,
    QueryKey,
    PageParam
  >({
    queryKey: ["notifications", userId, queryParams],
    queryFn: ({ pageParam = { lastId: undefined } }) =>
      fetchNotifications(userId, {
        ...queryParams,
        lastId: pageParam.lastId,
      }),
    initialPageParam: { lastId: undefined },
    getNextPageParam: (lastPage) => {
      if (lastPage.count < (queryParams?.lastId ?? 1)) {
        return undefined;
      }

      return { lastId: lastPage.lastId };
    },
  });
};

export default useNotificationsQuery;
