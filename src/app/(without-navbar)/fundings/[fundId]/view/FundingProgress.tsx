import ProgressBarWithText from "@/components/progress/ProgressBarWithText";
import calculatePercent from "@/utils/calculatePercent";
import { FundingDto } from "@/types/Funding";

interface Props {
  funding: FundingDto;
}

export default function FundingProgress({ funding }: Props) {
  const { fundSum, fundGoal, endAt } = funding;

  return (
    <ProgressBarWithText
      progress={calculatePercent(fundSum, fundGoal)}
      endDate={endAt.toString()}
    />
  );
}
