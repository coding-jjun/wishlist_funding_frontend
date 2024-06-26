import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { CommonResponse } from "@/types/CommonResponse";
import { Notification } from "@/types/Notification";

const fetchNotifications = async (userId: number): Promise<Notification[]> => {
  const response = await axios.get<CommonResponse<Notification[]>>(
    `/api/notification/${userId}`,
  );
  return response.data.data;
};

const useNotificationsQuery = (
  userId: number,
): UseQueryResult<Notification[]> => {
  return useQuery<Notification[]>({
    queryKey: ["notifications", userId],
    queryFn: () => fetchNotifications(userId),
  });
};

export default useNotificationsQuery;
