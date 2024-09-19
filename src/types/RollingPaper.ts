import { Donation } from "@/types/Donation";

export interface RollingPaper {
  rollId: number;
  donation: Donation;
  fundId: number;
  rollImg: string;
  rollMsg: string;
  delAt?: Date;
}

export interface RollingPaperDto {
  rollId: number;
  rollMsg: string;
  regAt: Date;
  donAmnt: number;
  userNick: string;
  rollImg: string;
}
