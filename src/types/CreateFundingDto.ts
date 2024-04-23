import { Dayjs } from "dayjs";
import GiftDto from "@/types/GiftDto";

export interface CreateFundingDto {
  fundTitle: string;
  fundCont: string;
  fundPubl: boolean;
  fundTheme: string;
  fundGoal: number;
  endAt: Dayjs;
  fundImg: string;
  gifts: GiftDto[];
}
