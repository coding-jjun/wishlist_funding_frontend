import { atom } from "recoil";
import { FundingDto } from "@/types/Funding";

// 현재 조회 중인 펀딩 정보
export const currentFundingAtom = atom<FundingDto | undefined>({
  key: "currentFundingAtom",
  default: undefined,
});
