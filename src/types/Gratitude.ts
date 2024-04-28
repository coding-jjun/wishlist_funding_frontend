import { Funding } from "@/types/Funding";

export interface Gratitude {
  gratId: number;
  funding: Funding;
  gratTitle: string;
  gratCont: string;
  regAt: Date;
  isDel: boolean;
}
