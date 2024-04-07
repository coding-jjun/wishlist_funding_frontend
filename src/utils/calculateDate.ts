export default function calculateDate(currentDate: Date, endDate: string) {
  const endDateObj = new Date(endDate);

  const timeDifference = endDateObj.getTime() - currentDate.getTime();
  const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return days;
}
