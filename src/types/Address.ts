import { User } from "@/types/User";

export interface Address {
  addrId: number;
  addrUser: User;
  addrNick: string;
  addrRoad: string;
  addrDetl: string;
  addrZip: string;
  recvName: string;
  recvPhone: string;
  recvReq?: string;
  isDef: boolean;
}
