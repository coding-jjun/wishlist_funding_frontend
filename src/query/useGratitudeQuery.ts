import axios from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { CommonResponse } from "@/types/CommonResponse";
import { Gratitude } from "@/types/Gratitude";

const fetchGratitude = async (fundUuid: string): Promise<Gratitude> => {
  const response = await axios.get<CommonResponse<Gratitude>>(
    `/api/gratitude?fundUuid=${fundUuid}`,
  );

  return response.data.data;
};

const useGratitudeQuery = (fundUuid: string): UseQueryResult<Gratitude> => {
  return useQuery<Gratitude>({
    queryKey: ["gratitude", fundUuid],
    queryFn: () => fetchGratitude(fundUuid),
  });
};

export default useGratitudeQuery;
