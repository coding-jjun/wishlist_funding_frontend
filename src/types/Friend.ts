export interface FriendDto {
  userId: number;
  friendId: number;
}

export interface FriendQueryDto {
  userId: number;
  userName: string;
  userImg: string | null;
}

export type FriendStatus = "friend" | "request" | "requested" | "notFriend";
