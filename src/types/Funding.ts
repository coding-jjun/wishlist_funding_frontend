export interface Funding {
  fundId: number;
  fundUuid: string;
  fundTitle: string;
  fundCont: string;
  fundImg: string;
  fundTheme: string;
  fundPubl: boolean;
  fundGoal: number;
  fundSum: number;
  endAt: string;
  regAt: string;
}

export enum FundTheme {
  Birthday = "Birthday",
  Anniversary = "Anniversary",
  Donation = "Donation",
}

export interface FundingQueryParam {
  fundPublFilter: "all" | "friends" | "both";
  fundThemes: FundTheme[];
  status: "ongoing" | "ended";
  sort: "endAtAsc" | "endAtDesc" | "regAtAsc" | "regAtDesc";
  limit: number;
  lastFundId: number;
  lastEndAt: string;
}
