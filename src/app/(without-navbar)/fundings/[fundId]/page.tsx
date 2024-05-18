"use client";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { Stack } from "@mui/material";
import useFundingDetailQuery from "@/query/useFundingDetailQuery";
import FundingPageTab from "@/app/(without-navbar)/fundings/[fundId]/view/FundingPageTab";
import FundingTitle from "@/app/(without-navbar)/fundings/[fundId]/view/FundingTitle";
import FundingProgress from "@/app/(without-navbar)/fundings/[fundId]/view/FundingProgress";
import FundingThumbnail from "@/app/(without-navbar)/fundings/[fundId]/view/FundingThumbnail";
import { currentFundingAtom } from "@/store/atoms/funding";
import { Funding } from "@/types/Funding";

const defaultFunding: Funding = {
  fundId: 1,
  fundUuid: "d",
  fundTitle: "펀딩 제목",
  fundCont: "펀딩 내용",
  fundImg: "/dummy/present.png",
  fundTheme: "기념일",
  fundPubl: true,
  fundGoal: 100,
  fundSum: 60,
  endAt: new Date(2024, 4, 28, 12).toString(),
  regAt: new Date().toString(),
};

export default function FundingDetailPage({
  params,
}: {
  params: { fundId: string };
}) {
  const { data: funding = defaultFunding } = useFundingDetailQuery(
    params.fundId,
  );

  const setCurrentFunding = useSetRecoilState(currentFundingAtom);

  useEffect(() => {
    setCurrentFunding(funding);
  }, [setCurrentFunding, funding]);

  return (
    <>
      {funding && (
        <Stack direction={"column"} spacing={1}>
          <FundingThumbnail funding={funding} />
          <Stack padding={3} spacing={2}>
            <FundingTitle funding={funding} />
            <FundingProgress funding={funding} />
          </Stack>
          <FundingPageTab funding={funding} />
        </Stack>
      )}
    </>
  );
}
