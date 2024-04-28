import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import CoverImage from "@/components/image/CoverImage";
import useGratitudeQuery from "@/query/useGratitudeQuery";
import ProfileWithDate from "@/components/profile/ProfileWithDate";
import { SwiperWithThumbs } from "@/components/swiper";
import { grey } from "@mui/material/colors";

// TODO: Gratitude에 이미지 프로퍼티가 추가되면 대체 필요
const DUMMY_IMAGES = [
  "/dummy/slide1.avif",
  "/dummy/slide2.avif",
  "/dummy/slide3.avif",
  "/dummy/slide4.avif",
];

interface Props {
  gratId: number;
}

export default function GratitudePanel({ gratId }: Props) {
  const { data: gratitude } = useGratitudeQuery(gratId);

  return (
    <>
      {gratitude ? (
        <Stack direction="column" spacing={2}>
          {/*TODO: Funding 객체 또는 Gratitude 객체에 유저 정보가 추가되면 userName 하드코딩 제거 필요*/}
          <ProfileWithDate
            userName="홍길동"
            regAt={gratitude?.regAt.toString()}
          />
          <Typography variant="body1">{gratitude?.gratCont}</Typography>
          <SwiperWithThumbs
            slides={DUMMY_IMAGES.map((image) => ({
              key: `swiper-${image}`,
              component: <CoverImage src={image} alt="감사인사" />,
            }))}
          />
        </Stack>
      ) : (
        <Stack direction="column" alignItems="center" spacing={2}>
          <Typography variant="body1" color={grey[400]}>
            등록된 감사인사가 없습니다.
          </Typography>
          {/*TODO: 로그인 기능이 추가되면 본인이 생성한 펀딩일 때만 등록 버튼이 보이도록 수정 필요*/}
          <Button variant="contained" color="info">
            등록하기
          </Button>
        </Stack>
      )}
    </>
  );
}
