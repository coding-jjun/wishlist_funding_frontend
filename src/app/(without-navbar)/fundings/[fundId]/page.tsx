"use client";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { Stack } from "@mui/material";
import useFundingDetailQuery from "@/query/useFundingDetailQuery";
import FundingPageTab from "@/app/(without-navbar)/fundings/[fundId]/view/FundingPageTab";
import FundingTitle from "@/app/(without-navbar)/fundings/[fundId]/view/FundingTitle";
import FundingProgress from "@/app/(without-navbar)/fundings/[fundId]/view/FundingProgress";
import FundingThumbnail from "@/app/(without-navbar)/fundings/[fundId]/view/FundingThumbnail";
import { currentFundingAtom } from "@/store/atoms/funding";
import { DetailActionBar } from "@/components/layout/action-bar";
import { useRouter } from "next/navigation";
import Appbar from "@/components/layout/appbar/appbar";

export default function FundingDetailPage({
  params,
}: {
  params: { fundId: string };
}) {
  const { data: funding } = useFundingDetailQuery(params.fundId);

  const setCurrentFunding = useSetRecoilState(currentFundingAtom);
  const [isWriter, setIsWriter] = useState<boolean>(false);
  // TODO: 로그인한 유저 아이디로 수정 필요
  const currentUser = 1;

  const router = useRouter();

  useEffect(() => {
    setCurrentFunding(funding);
    if (currentUser) {
      setIsWriter(currentUser === 1);
    }
  }, [setCurrentFunding, funding, currentUser]);

  const handleEdit = () => {
    router.push(`/fundings/${params.fundId}/edit`);
  };

  const handleDelete = () => {};

  if (!funding) {
    // TODO: fallback UI 작업 필요
    return null;
  }

  return (
    <>
      <Appbar
        showMenuIcon={isWriter}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {funding && (
        <Stack direction={"column"} spacing={1} sx={{ mt: 7 }}>
          <FundingThumbnail funding={funding} />
          <Stack padding={3} spacing={2}>
            <FundingTitle funding={funding} />
            <FundingProgress funding={funding} />
          </Stack>
          <FundingPageTab funding={funding} />
          {!isWriter && (
            <DetailActionBar
              buttonText="선물하기"
              handleSubmit={() => router.push(``)}
            />
          )}
        </Stack>
      )}
    </>
  );
}
