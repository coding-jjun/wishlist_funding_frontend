import axios from "axios";
import { CommonResponse } from "@/types/CommonResponse";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddressDto, CreateAddressDto } from "@/types/Address";

const fetchAddrCreate = async (
  dto: CreateAddressDto,
): Promise<CommonResponse<AddressDto>> => {
  const { data } = await axios.post(`/api/address`, dto);
  return data;
};

const useAddAddress = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: CreateAddressDto) => fetchAddrCreate(dto),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["addresses"],
      });
    },
  });
};

export default useAddAddress;
