import axios, { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FundingCreate } from "@/types/FundingCreate";
import { CommonResponse } from "@/types/CommonResponse";

const fetchFundingCreate = async (
  body: FundingCreate,
): Promise<FundingCreate> => {
  const response = await axios.post<CommonResponse<FundingCreate>>(
    `/api/funding`,
    body,
  );

  return response.data.data;
};

const useFundingCreateQuery = () => {
  const queryClient = useQueryClient();

  return useMutation<FundingCreate, AxiosError, FundingCreate, void>({
    mutationFn: (body) => fetchFundingCreate(body),
    onSuccess: () => {
      console.log("👌🏻펀딩 생성 성공");
      queryClient.invalidateQueries({
        queryKey: ["fundingCreate"],
      });
    },
    onError: (error) => {
      console.error("❌펀딩 생성 중 에러 발생", error);
    },
    onSettled: () => {
      console.log("결과랑 상관없이 실행은 됨");
    },
  });
};

export default useFundingCreateQuery;
