import { NotiType, ReqType } from "@/types/Notification.enum";

export interface Notification {
  notiId: number;
  recvId: number;
  sendId: number;
  sendNick: string;
  senderImg: string;
  notiType: NotiType;
  reqType: ReqType;
  // subId: number;
  notiTime: Date;
  fundTitle?: string;
}
