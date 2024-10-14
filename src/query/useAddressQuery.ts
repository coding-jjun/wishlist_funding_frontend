import axios from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Address } from "@/types/Address";
import { CommonResponse } from "@/types/CommonResponse";

const fetchAddress = async (addrId: number): Promise<Address> => {
  const response = await axios.get<CommonResponse<Address>>(
    `/api/address/${addrId}`,
  );

  return response.data.data;
};

const useAddressQuery = (addrId: number): UseQueryResult<Address> => {
  return useQuery<Address>({
    queryKey: ["address", addrId],
    queryFn: () => fetchAddress(addrId),
  });
};

export default useAddressQuery;
