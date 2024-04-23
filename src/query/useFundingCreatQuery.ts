import axios, { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateFundingDto } from "@/types/CreateFundingDto";
import { CommonResponse } from "@/types/CommonResponse";

const fetchFundingCreate = async (
  body: CreateFundingDto,
): Promise<CreateFundingDto> => {
  const response = await axios.post<CommonResponse<CreateFundingDto>>(
    `/api/funding`,
    body,
  );

  return response.data.data;
};

const useFundingCreateQuery = () => {
  const queryClient = useQueryClient();

  return useMutation<CreateFundingDto, AxiosError, CreateFundingDto, void>({
    mutationFn: (body) => fetchFundingCreate(body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["fundings"],
      });
    },
  });
};

export default useFundingCreateQuery;
