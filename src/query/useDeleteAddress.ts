import { CommonResponse } from "@/types/CommonResponse";
import { Address } from "@/types/Address";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const deleteAddress = async (
  addrId: number,
): Promise<CommonResponse<Address>> => {
  const { data } = await axios.delete(`/api/address/${addrId}`);

  return data;
};

const useDeleteAddress = (userId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (addrId: number) => deleteAddress(addrId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["addresses", userId],
      });
    },
  });
};

export default useDeleteAddress;
