import GiftDto from "@/types/GiftDto";

export interface Funding {
  fundId: number;
  fundUuid: string;
  fundTitle: string;
  fundCont: string;
  fundImg: string;
  fundTheme: FundTheme;
  fundPubl: boolean;
  fundGoal: number;
  fundSum: number;
  endAt: string;
  regAt: string;
}

export interface FundingForm {
  fundId: number;
  fundTitle: string;
  fundCont: string;
  fundImg: string;
  fundTheme: string;
  fundPubl: boolean;
  fundGoal: number;
  endAt: string;
  gifts: GiftDto[];
  fundAddr: string;
}

export interface FundingForm {
  fundId: number;
  fundTitle: string;
  fundCont: string;
  fundImg: string;
  fundTheme: string;
  fundPubl: boolean;
  fundGoal: number;
  endAt: string;
  gifts: GiftDto[];
  fundAddr: string;
}

export enum FundTheme {
  Birthday = "Birthday",
  Anniversary = "Anniversary",
  Donation = "Donation",
}

const themeName: Record<FundTheme, string> = {
  [FundTheme.Birthday]: "생일",
  [FundTheme.Anniversary]: "기념일",
  [FundTheme.Donation]: "기부",
};

export const getThemeName = (theme: FundTheme): string => {
  return themeName[theme];
};

export interface FundingQueryParam {
  fundPublFilter: "all" | "friends" | "both";
  fundThemes: FundTheme[];
  status: "ongoing" | "ended";
  sort: "endAtAsc" | "endAtDesc" | "regAtAsc" | "regAtDesc";
  limit: number;
  lastFundId: number;
  lastEndAt: string;
}

export interface FundingQueryResponse {
  fundings: Funding[];
  count: number;
  lastFundId: number;
}
