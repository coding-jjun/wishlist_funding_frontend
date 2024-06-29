export interface Image {
  imgId: number;
  imgUrl: string;
  imgType: ImageType;
  subId?: number;
}

export enum ImageType {
  Funding = "Funding",
  Gratitude = "Gratitude",
  RollingPaper = "RollingPaper",
  User = "User",
  Gift = "Gift",
}
