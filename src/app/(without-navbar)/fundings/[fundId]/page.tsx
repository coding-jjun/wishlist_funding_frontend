"use client";
import { Stack } from "@mui/material";
import useFundingDetailQuery from "@/query/useFundingsQuery";
import FundingPageTab from "@/app/(without-navbar)/fundings/[fundId]/view/FundingPageTab";
import FundingTitle from "@/app/(without-navbar)/fundings/[fundId]/view/FundingTitle";
import FundingProgress from "@/app/(without-navbar)/fundings/[fundId]/view/FundingProgress";
import FundingThumbnail from "@/app/(without-navbar)/fundings/[fundId]/view/FundingThumbnail";
import { DetailActionBar } from "@/components/layout/action-bar";

export default function FundingDetailPage({
  params,
}: {
  params: { fundId: string };
}) {
  const { data: funding } = useFundingDetailQuery(params.fundId);

  const handleSubmit = () => {};

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
      <DetailActionBar buttonText="구매하기" handleSubmit={handleSubmit} />
    </>
  );
}
