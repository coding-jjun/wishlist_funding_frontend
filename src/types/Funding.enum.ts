import { getKeyByValue } from "@/utils/map";

/**
 * 테마
 */
export type FundTheme = "Birthday" | "Anniversary" | "Donation";
export type FundThemeValue = "생일" | "기념일" | "기부";

const themeName: Record<FundTheme, FundThemeValue> = {
  Birthday: "생일",
  Anniversary: "기념일",
  Donation: "기부",
};

export const getFundThemeValue = (key: FundTheme): FundThemeValue => {
  return themeName[key];
};

export const getFundThemeKey = (value: FundThemeValue): FundTheme => {
  return getKeyByValue(themeName, value);
};

/**
 * 공개범위
 */
export type FundingPublFilter = "all" | "friends" | "both" | "mine";
export type FundingPublFilterValue =
  | "전체"
  | "친구공개"
  | "전체공개"
  | "나의 펀딩";

const fundingPublFilterMap: Record<FundingPublFilter, FundingPublFilterValue> =
  {
    all: "전체",
    friends: "친구공개",
    both: "전체공개",
    mine: "나의 펀딩",
  };

export function getPublFilterName(
  key: FundingPublFilter,
): FundingPublFilterValue {
  return fundingPublFilterMap[key];
}

export const getPublFilterKey = (
  value: FundingPublFilterValue,
): FundingPublFilter => {
  return getKeyByValue(fundingPublFilterMap, value);
};

/**
 * 진행상태
 */
export type FundingStatus = "ongoing" | "ended";
export type FundingStatusValue = "진행 중" | "종료됨";

const fundingStatusMap: Record<FundingStatus, FundingStatusValue> = {
  ongoing: "진행 중",
  ended: "종료됨",
};

export function getFundingStatusValue(key: FundingStatus): FundingStatusValue {
  return fundingStatusMap[key];
}

export const getFundingStatusKey = (
  value: FundingStatusValue,
): FundingStatus => {
  return getKeyByValue(fundingStatusMap, value);
};

/**
 * 정렬
 */
export type FundingSort = "endAtAsc" | "endAtDesc" | "regAtAsc" | "regAtDesc";
export type FundingSortValue =
  | "마감일순"
  | "마감일순 (역순)"
  | "등록일순"
  | "등록일순 (역순)";

const fundingSortMap: Record<FundingSort, FundingSortValue> = {
  endAtAsc: "마감일순",
  endAtDesc: "마감일순 (역순)",
  regAtAsc: "등록일순 (역순)",
  regAtDesc: "등록일순",
};

export function getFundingSortValue(key: FundingSort): FundingSortValue {
  return fundingSortMap[key];
}

export const getFundingSortKey = (value: FundingSortValue): FundingSort => {
  return getKeyByValue(fundingSortMap, value);
};
