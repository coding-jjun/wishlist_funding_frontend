import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FundingForm } from "@/types/Funding";
import { CommonResponse } from "@/types/CommonResponse";

const fetchFundingCreate = async (
  body: FundingForm,
): Promise<CommonResponse<FundingForm>> => {
  const { data } = await axios.post<CommonResponse<FundingForm>>(
    `/api/funding`,
    body,
  );
  return data;
};

const useFundingCreateQuery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: FundingForm) => fetchFundingCreate(body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["fundings"],
      });
    },
  });
};

export default useFundingCreateQuery;
