import ProgressBarWithText from "@/components/progress/ProgressBarWithText";
import calculatePercent from "@/utils/calculatePercent";
import { Funding } from "@/types/Funding";

interface Props {
  funding: Funding;
}

export default function FundingProgress({ funding }: Props) {
  const { fundSum, fundGoal, endAt } = funding;

  return (
    <ProgressBarWithText
      progress={calculatePercent(fundSum, fundGoal)}
      endDate={endAt}
    />
  );
}
