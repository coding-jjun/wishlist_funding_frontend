import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CommonResponse } from "@/types/CommonResponse";
import { UpdateUserDto, User } from "@/types/User";

const updateUser = async (
  userId: number | undefined,
  dto: UpdateUserDto,
): Promise<CommonResponse<User> | null> => {
  if (!userId) {
    return null;
  }

  const { data } = await axios.put(`/api/user/${userId}`, dto);
  return data;
};

const useUpdateUser = (userId: number | undefined) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: UpdateUserDto) => updateUser(userId, dto),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user", userId],
      });
    },
  });
};

export default useUpdateUser;
