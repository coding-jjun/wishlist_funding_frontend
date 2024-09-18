import { Funding } from "@/types/Funding";

export interface Gratitude {
  gratId: number;
  funding: Funding;
  gratTitle: string;
  gratCont: string;
  regAt: Date;
  isDel: boolean;
}

export interface GratitudeDto {
  gratTitle: string;
  gratCont: string;
  gratImg: string[];
}

export interface GetGratitudeDto {
  fundUuid: string;
  gratTitle: string;
  gratCont: string;
  imgUrl: string[];
}
