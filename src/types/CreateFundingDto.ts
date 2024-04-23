import { Dayjs } from "dayjs";
import GiftDto from "@/types/GiftDto";

export interface CreateFundingDto {
  fundTitle: string;
  fundCont: string;
  fundPubl: boolean;
  fundTheme: string;
  fundGoal: number;
  endAt: Date;
  fundImg: string;
  gifts: GiftDto[];
}
