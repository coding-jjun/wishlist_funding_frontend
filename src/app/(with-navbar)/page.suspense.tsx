"use client";
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";
import useFundingsQuery from "@/query/useFundingsQuery";
import { IconButton, Stack, Typography } from "@mui/material";
import { SectionHeader } from "@/components/layout/header";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { grey } from "@mui/material/colors";
import { BoxButton } from "@/components/button";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { HorizontalImgCard, VerticalImgCard } from "@/components/card";
import calculatePercent from "@/utils/calculatePercent";
import styled from "@emotion/styled";

export default function MainPageContent() {
  const router = useRouter();

  // 나의 펀딩
  const { data: myFundingQueryResponse } = useFundingsQuery({
    fundPublFilter: "mine",
  });

  // 다른 사람들의 펀딩
  const { data: othersFundingQueryResponse } = useFundingsQuery({
    fundPublFilter: "both",
    limit: 5,
  });

  return (
    <>
      <Stack direction="column" spacing={1}>
        <SectionHeader
          title="나의 펀딩"
          rightSlot={
            <IconButton sx={{ margin: 0, padding: 0 }}>
              <NavigateNextIcon sx={{ fontSize: 28, color: grey[800] }} />
            </IconButton>
          }
          barSx={{ paddingBottom: "5px" }}
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
        <MyFundingSwiper
          pagination={true}
          modules={[Pagination]}
          style={{ width: "100%", height: "100%" }}
        >
          {myFundingQueryResponse?.pages
            ?.flatMap((page) => page.fundings)
            .map((funding) => (
              <SwiperSlide key={`slide-${funding.fundUuid}`}>
                <HorizontalImgCard
                  key={funding.fundUuid}
                  image={funding.fundImg ?? "/dummy/present.webp"}
                  userId={"Anonymous"} // TODO: 유저 닉네임 펀딩 조회시 받아올 수 있는지 확인
                  title={funding.fundTitle}
                  theme={funding.fundTheme}
                  endDate={funding.endAt.toString()}
                  progress={calculatePercent(funding.fundSum, funding.fundGoal)}
                  handleClick={() =>
                    router.push(`/fundings/${funding.fundUuid}`)
                  }
                />
              </SwiperSlide>
            ))}
        </MyFundingSwiper>
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
          barSx={{ paddingBottom: "5px" }}
        />
        {othersFundingQueryResponse?.pages
          ?.flatMap((page) => page.fundings)
          .map((funding) => (
            <VerticalImgCard
              key={funding.fundUuid}
              image={funding.fundImg ?? "/dummy/present.webp"}
              userId={"Anonymous"} // TODO: 유저 닉네임 펀딩 조회시 받아올 수 있는지 확인
              title={funding.fundTitle}
              theme={funding.fundTheme}
              endDate={funding.endAt.toString()}
              progress={calculatePercent(funding.fundSum, funding.fundGoal)}
              handleClick={() => router.push(`/fundings/${funding.fundUuid}`)}
            />
          ))}
      </Stack>
    </>
  );
}

const MyFundingSwiper = styled(Swiper)`
  .swiper-pagination {
    position: relative;
    margin-top: 10px;
  }
  .swiper-pagination-bullet-active {
    background-color: #424242;
  }
`;
