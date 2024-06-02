"use client";
import { useRouter } from "next/navigation";
import { IconButton, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import calculatePercent from "@/utils/calculatePercent";
import useFundingsQuery from "@/query/useFundingsQuery";
import { HorizontalImgCard, VerticalImgCard } from "@/components/card";
import { SectionHeader } from "@/components/layout/header";
import { BoxButton } from "@/components/button";

export default function Home() {
  const router = useRouter();

  // TODO: user 기능이 추가되면 useMyFundingQuery와 useFundingsQuery에 전달하는 userId 수정 필요
  // 나의 펀딩
  const { data: myFundingQueryResponse } = useFundingsQuery(1, {
    fundPublFilter: "mine",
    limit: 5,
  });

  // 다른 사람들의 펀딩
  const { data: othersFundingQueryResponse } = useFundingsQuery(2, {
    fundPublFilter: "both",
    limit: 5,
  });

  return (
    <main>
      <Stack direction="column" spacing={2}>
        <SectionHeader
          title="나의 펀딩"
          rightSlot={
            <IconButton sx={{ margin: 0, padding: 0 }}>
              <NavigateNextIcon sx={{ fontSize: 28, color: grey[800] }} />
            </IconButton>
          }
        />
        {myFundingQueryResponse === undefined && (
          <BoxButton
            handleClick={() => router.push("/fundings/creation")}
            content={
              <Typography variant="body1" display="block" fontWeight={700}>
                펀딩 개설하러 가기
              </Typography>
            }
          />
        )}
        {myFundingQueryResponse?.pages
          ?.flatMap((page) => page.fundings)
          .map((funding) => (
            <HorizontalImgCard
              key={funding.fundUuid}
              image={funding.fundImg ?? "/dummy/present.png"}
              userId={"Anonymous"} // TODO: 유저 닉네임 펀딩 조회시 받아올 수 있는지 확인
              title={funding.fundTitle}
              theme={funding.fundTheme}
              endDate={funding.endAt.toString()}
              progress={calculatePercent(funding.fundSum, funding.fundGoal)}
              handleClick={() => router.push(`/fundings/${funding.fundUuid}`)}
            />
          ))}
        <SectionHeader
          title="다른 사람들의 펀딩"
          rightSlot={
            <IconButton
              sx={{ margin: 0, padding: 0 }}
              onClick={() => router.push("/fundings")}
            >
              <NavigateNextIcon sx={{ fontSize: 28, color: grey[800] }} />
            </IconButton>
          }
        />
        {othersFundingQueryResponse?.pages
          ?.flatMap((page) => page.fundings)
          .map((funding) => (
            <VerticalImgCard
              key={funding.fundUuid}
              image={funding.fundImg ?? "/dummy/present.png"}
              userId={"Anonymous"} // TODO: 유저 닉네임 펀딩 조회시 받아올 수 있는지 확인
              title={funding.fundTitle}
              theme={funding.fundTheme}
              endDate={funding.endAt.toString()}
              progress={calculatePercent(funding.fundSum, funding.fundGoal)}
              handleClick={() => router.push(`/fundings/${funding.fundUuid}`)}
            />
          ))}
      </Stack>
    </main>
  );
}
