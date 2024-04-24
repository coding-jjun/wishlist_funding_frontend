import { atom } from "recoil";
import { Funding } from "@/types/Funding";

// 현재 조회 중인 펀딩 정보
export const currentFundingAtom = atom<Funding | undefined>({
  key: "currentFundingAtom",
  default: undefined,
});
