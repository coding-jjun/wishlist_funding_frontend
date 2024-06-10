import {
  FundingPublFilter,
  FundingSort,
  FundingStatus,
  FundTheme,
} from "@/types/Funding.enum";
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

export interface FundingQueryParam {
  fundPublFilter: FundingPublFilter;
  fundThemes: FundTheme[];
  status: FundingStatus;
  sort: FundingSort;
  limit: number;
  lastFundId: number;
  lastEndAt: string;
}

export interface FundingQueryResponse {
  fundings: Funding[];
  count: number;
  lastFundId: number;
  lastEndAt?: string;
}
