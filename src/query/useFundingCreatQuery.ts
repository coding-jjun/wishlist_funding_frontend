import axios, { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FundingForm } from "@/types/Funding";
import { CommonResponse } from "@/types/CommonResponse";

const fetchFundingCreate = async (body: FundingForm): Promise<FundingForm> => {
  const response = await axios.post<CommonResponse<FundingForm>>(
    `/api/funding`,
    body,
  );

  return response.data.data;
};

const useFundingCreateQuery = () => {
  const queryClient = useQueryClient();

  return useMutation<FundingForm, AxiosError, FundingForm, void>({
    mutationFn: (body) => fetchFundingCreate(body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["fundings"],
      });
    },
  });
};

export default useFundingCreateQuery;
