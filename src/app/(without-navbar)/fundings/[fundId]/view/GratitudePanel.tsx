import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import CoverImage from "@/components/image/CoverImage";
import useGratitudeQuery from "@/query/useGratitudeQuery";
import Profile from "@/components/profile/Profile";
import { SwiperWithThumbs } from "@/components/swiper";
import { grey } from "@mui/material/colors";
import { useRouter } from "next/navigation";

interface Props {
  fundUuid: string;
}

export default function GratitudePanel({ fundUuid }: Props) {
  const { data: gratitude } = useGratitudeQuery(fundUuid);
  const router = useRouter();

  const moveToGratitudeCreationPage = () => {
    router.push(`/fundings/${fundUuid}/gratitude/creation`);
  };

  return (
    <>
      {gratitude ? (
        <Stack direction="column" spacing={2}>
          <Typography variant="h6" fontWeight={700}>
            {gratitude?.gratTitle}
          </Typography>
          <Typography variant="body1">{gratitude?.gratCont}</Typography>
          <SwiperWithThumbs
            slides={gratitude.imgUrl.map((image) => ({
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
          <Button
            variant="contained"
            color="info"
            onClick={moveToGratitudeCreationPage}
          >
            등록하기
          </Button>
        </Stack>
      )}
    </>
  );
}
