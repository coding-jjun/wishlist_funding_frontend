export default function calculateDateDiff(
  startDateStr: string,
  endDateStr: string,
) {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    throw new Error("유효하지 않은 날짜 형식입니다.");
  }

  const SECOND_TO_MS = 1000;
  const MINUTE_TO_MS = 1000 * 60;
  const HOUR_TO_MS = 1000 * 60 * 60;
  const DAY_TO_MS = 1000 * 60 * 60 * 24;
  const MONTH_TO_MS = 1000 * 60 * 60 * 24 * 30;
  const YEAR_TO_MS = 1000 * 60 * 60 * 24 * 365;

  const distance = endDate.getTime() - startDate.getTime();

  if (distance <= 0) {
    return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    years: Math.floor(distance / YEAR_TO_MS),
    months: Math.floor((distance % YEAR_TO_MS) / MONTH_TO_MS),
    days: Math.floor((distance % MONTH_TO_MS) / DAY_TO_MS),
    hours: Math.floor((distance % DAY_TO_MS) / HOUR_TO_MS),
    minutes: Math.floor((distance % HOUR_TO_MS) / MINUTE_TO_MS),
    seconds: Math.floor((distance % MINUTE_TO_MS) / SECOND_TO_MS),
  };
}
