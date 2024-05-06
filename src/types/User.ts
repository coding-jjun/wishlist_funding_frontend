import { Funding } from "@/types/Funding";
import { Comment } from "@/types/Comment";

// TODO: account, image, addressed 타입 수정 필요
export interface User {
  userId: number;
  userNick: string;
  userPw: string;
  userName: string;
  userPhone: string;
  userEmail: string;
  userBirth: Date;
  account: any;
  image: any;
  regAt: Date;
  delAt: Date;
  fundings: Funding[];
  comments: Comment[];
  addresses: any[];
}
