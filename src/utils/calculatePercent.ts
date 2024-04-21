export default function calculatePercent(
  numerator: number,
  denominator: number,
) {
  const percentage = (numerator / denominator) * 100;
  return Math.floor(percentage);
}
