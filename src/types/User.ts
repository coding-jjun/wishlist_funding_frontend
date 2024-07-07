import { Funding } from "@/types/Funding";
import { Comment } from "@/types/Comment";
import { AuthType } from "@/types/Auth";
import { Address } from "@/types/Address";
import { Image } from "@/types/Image";
import { Account, BankType } from "@/types/Account";

// TODO: account, image, addressed 타입 수정 필요
export interface User {
  userId: number;
  authId?: string;
  authType: AuthType;
  userNick: string;
  userPw: string;
  userName: string;
  userPhone: string;
  userEmail: string;
  userBirth?: Date;
  account?: Account;
  regAt: Date;
  uptAt: Date;
  delAt: Date;
  fundings: Funding[];
  comments: Comment[];
  addresses: Address[];
  defaultImgId?: number;
  image: Image;
}

export interface UserDto {
  userNick: string;
  userName: string;
  userPhone: string;
  userBirth: Date;
  authType: AuthType;
  userImg: string;
  userId: number;
  userEmail?: string;
  authId?: string;
}

export interface UpdateUserDto {
  userNick: string;
  userName: string;
  userPhone: string;
  userEmail: string;
  userBirth?: Date;
  userAcc?: number;
  userImg?: string;
  defaultImgId?: number;
}

export interface CreateUserDto {
  userEmail?: string;
  userPw: string;
  userNick: string;
  userName: string;
  userPhone: string;
  userBirth?: Date;
  userAcc?: number;
  userImg?: string;
  defaultImgId?: number;
}

export interface CreateUserForm {
  userEmail: string;
  userPw: string;
  userName: string;
  userNick: string;
  userPhone: string;
  userBirth?: Date;
  userAccBank?: BankType;
  userAccNum?: string;
  userImg?: string;
  defaultImgId?: number;
}
