import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { UpdateUserDto, UserDto } from "@/types/User";
import { CommonResponse } from "@/types/CommonResponse";

const updateUser = async (
  dto: UpdateUserDto,
): Promise<CommonResponse<UserDto>> => {
  const { data } = await axios.patch("/api/auth/signup/extra", dto, {
    withCredentials: true,
  });
  return data;
};

const useUpdateSignUpUser = () => {
  return useMutation({
    mutationFn: (dto: UpdateUserDto) => updateUser(dto),
  });
};

export default useUpdateSignUpUser;
