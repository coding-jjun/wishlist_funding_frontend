import CoverImage from "@/components/image/CoverImage";
import { FundingDto } from "@/types/Funding";

interface Props {
  funding: FundingDto;
}

export default function FundingThumbnail({ funding }: Props) {
  const { fundImgUrls, fundTitle } = funding;

  // TODO: 펀딩 이미지 슬라이드 변경 기능 추가 필요
  return (
    <CoverImage
      src={fundImgUrls[0] ?? "/dummy/present.webp"}
      alt={`thumbnail-${fundTitle}`}
    />
  );
}
