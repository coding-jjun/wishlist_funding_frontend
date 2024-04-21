import { Dayjs } from "dayjs";
import FormDataItem from "@/types/FormDataItem";

export interface FundingCreate {
  fundTitle: string;
  fundCont: string;
  fundPubl: boolean;
  fundTheme: string;
  fundGoal: number;
  endAt: Dayjs;
  fundImg: string;
  gifts: FormDataItem[];
}
