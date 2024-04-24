import calculateDateDiff from "@/utils/calculateDateDiff";

const getTimeAgoText = (time: string) => {
  const { years, months, days, hours, minutes, seconds } = calculateDateDiff(
    time,
    new Date().toString(),
  );

  if (years > 0) return `${years}년 전`;
  if (months > 0) return `${months}개월 전`;
  if (days > 0) return `${days}일 전`;
  if (hours > 0) return `${hours}시간 전`;
  if (minutes > 0) return `${minutes}분 전`;
  return `${seconds}초 전`;
};

export default getTimeAgoText;
