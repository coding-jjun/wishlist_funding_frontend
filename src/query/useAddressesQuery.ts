import axios from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Address } from "@/types/Address";
import { CommonResponse } from "@/types/CommonResponse";

const fetchAddresses = async (userId: number): Promise<Address[]> => {
  const response = await axios.get<CommonResponse<Address[]>>(
    `/api/user/${userId}/address`,
  );

  return response.data.data;
};

const useAddressesQuery = (userId: number): UseQueryResult<Address[]> => {
  return useQuery<Address[]>({
    queryKey: ["addresses", userId],
    queryFn: () => fetchAddresses(userId),
  });
};

export default useAddressesQuery;
