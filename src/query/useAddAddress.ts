import axios from "axios";
import { CommonResponse } from "@/types/CommonResponse";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Address, CreateAddressDto } from "@/types/Address";

const fetchAddrCreate = async (
  dto: CreateAddressDto,
): Promise<CommonResponse<Address>> => {
  const { data } = await axios.post(`/api/address`, dto);
  return data;
};

const useAddAddress = (userId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: CreateAddressDto) => fetchAddrCreate(dto),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["addresses", userId],
      });
    },
  });
};

export default useAddAddress;
