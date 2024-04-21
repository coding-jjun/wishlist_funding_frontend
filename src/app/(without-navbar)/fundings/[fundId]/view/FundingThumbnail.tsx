import FillImage from "@/components/image/FillImage";
import { Funding } from "@/types/Funding";

interface Props {
  funding: Funding;
}

export default function FundingThumbnail({ funding }: Props) {
  const { fundImg, fundTitle } = funding;

  return (
    <FillImage
      src={fundImg ?? "/dummy/present.png"}
      alt={`thumbnail-${fundTitle}`}
      parentDivStyle={{
        width: "100%",
        aspectRatio: "1 / 1",
        borderRadius: 10,
      }}
    />
  );
}
