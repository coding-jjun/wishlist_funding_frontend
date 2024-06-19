import { Address, UpdateAddressDto } from "@/types/Address";
import { CommonResponse } from "@/types/CommonResponse";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const updateAddress = async (
  addrId: number,
  dto: UpdateAddressDto,
): Promise<CommonResponse<Address>> => {
  const { data } = await axios.put(`/api/address/${addrId}`, dto);
  return data;
};

const useUpdateAddress = (addrId: number, userId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: UpdateAddressDto) => updateAddress(addrId, dto),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["addresses", userId],
      });
    },
  });
};

export default useUpdateAddress;
