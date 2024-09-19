import axios from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { CommonResponse } from "@/types/CommonResponse";
import { UserDto } from "@/types/User";

const fetchUser = async (): Promise<UserDto> => {
  const response = await axios.get<CommonResponse<UserDto>>(`/api/user`);
  return response.data.data;
};

const useCurrentUserQuery = (): UseQueryResult<UserDto> => {
  return useQuery<UserDto>({
    queryKey: ["currentUser"],
    queryFn: () => fetchUser(),
  });
};

export default useCurrentUserQuery;
