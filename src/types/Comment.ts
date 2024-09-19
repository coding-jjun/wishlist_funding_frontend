export interface Comment {
  comId: number;
  content: string;
  regAt: string;
  isMod: boolean;
  authorId: number;
  authorName: string;
  authorImg: string;
}

export interface CreateCommentDto {
  content: string;
}

export interface GetCommentDto {
  comId: number;
  content: string;
  regAt: Date;
  isMod: boolean;
  authorId: number;
  authorName: string;
}

export interface UpdateCommentDto {
  content: string;
}
