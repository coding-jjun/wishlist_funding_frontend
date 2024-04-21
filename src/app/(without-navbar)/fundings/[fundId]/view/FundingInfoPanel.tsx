import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Funding } from "@/types/Funding";

interface Props {
  funding: Funding;
}

export default function FundingInfoPanel({ funding }: Props) {
  const { fundCont } = funding;

  return (
    <>
      <Typography variant="body1" color={grey[800]}>
        {fundCont}
      </Typography>
      {/*TODO: 펀딩 상세 정보 조회 API에 선물 목록이 추가됐을 때 선물 목록 카드 추가하기*/}
    </>
  );
}
