import axios from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { CommonResponse } from "@/types/CommonResponse";
import { Gratitude } from "@/types/Gratitude";

const fetchGratitude = async (gratId: number): Promise<Gratitude> => {
  const response = await axios.get<CommonResponse<Gratitude>>(
    `/api/gratitude?gratId=${gratId}`,
  );

  return response.data.data;
};

const useGratitudeQuery = (gratId: number): UseQueryResult<Gratitude> => {
  return useQuery<Gratitude>({
    queryKey: ["gratitude", gratId],
    queryFn: () => fetchGratitude(gratId),
  });
};

export default useGratitudeQuery;
