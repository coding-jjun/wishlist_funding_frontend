"use client";
import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Box, CssBaseline, Grid } from "@mui/material";
import { DetailActionBar } from "@/components/layout/action-bar";
import useFundingCreateQuery from "@/query/useFundingCreatQuery";
import { useRouter } from "next/navigation";
import { FundingForm } from "@/types/Funding";
import GiftDto from "@/types/GiftDto";

import { styled } from "@mui/material/styles";
import { Global } from "@emotion/react";
import { Address } from "@/types/Address";
import useAddressesQuery from "@/query/useAddressesQuery";
import InputComponent from "@/app/(without-navbar)/fundings/creation/view/InputComponent";
import GiftComponent from "@/app/(without-navbar)/fundings/creation/view/GiftComponent";
import AddressComponent from "@/app/(without-navbar)/fundings/creation/view/AddressComponent";
import { DRAWER_BLEEDING } from "@/constants/constants";
import Appbar from "@/components/layout/appbar/appbar";

const Root = styled("div")(() => ({
  height: "100%",
}));

const formData: GiftDto = {
  id: 1,
  giftOrd: 1,
  giftUrl: "",
  giftOpt: "",
  giftCont: "",
};

function getInitialGifts() {
  return [formData];
}

export default function FundingCreationPage() {
  const router = useRouter();
  {
    /*TODO: 사용자 기능 추가되면 userId 수정 필요*/
  }
  const userId: number = 1;
  const [openBottomSheet, setOpenBottomSheet] = useState(false);

  const { data: addresses } = useAddressesQuery(userId);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

  const methods = useForm<FundingForm>();
  const [gifts, setGifts] = useState<GiftDto[]>(getInitialGifts);

  useEffect(() => {
    methods.setValue("gifts", gifts);
  }, [methods.setValue]);

  const { mutate } = useFundingCreateQuery();

  const onSubmit = (body: any) => {
    /*TODO: 기프트 이미지 기능 추가 필요*/
    body.fundImg = [
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818",
    ];
    body.fundGoal = Number(body.fundGoal.replaceAll(",", ""));
    const { fundAddrZip, fundAddrRoad, fundAddrDetl, ...rest } = body;
    const submitData = {
      ...rest,
      fundAddrZip: selectedAddress?.addrZip,
      fundAddrRoad: selectedAddress?.addrRoad,
      fundAddrDetl: selectedAddress?.addrDetl,
      fundRecvName: selectedAddress?.recvName,
      fundRecvPhone: selectedAddress?.recvPhone,
      fundRecvReq: selectedAddress?.recvReq,
    };
    mutate(submitData, {
      onSuccess: (data) => {
        router.push(`/fundings/${data.data.fundUuid}`);
      },
    });
    methods.reset();
  };

  return (
    <>
      <Root>
        <CssBaseline />
        <Global
          styles={{
            ".MuiDrawer-root > .MuiPaper-root": {
              height: `calc(85% - ${DRAWER_BLEEDING}px)`,
              overflow: "visible",
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
            },
          }}
        />

        <Appbar title={"펀딩 등록"} />

        <Box sx={{ padding: 2, mt: 8 }}>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                {/*입력폼*/}
                <InputComponent />

                {/*기프트 아이템*/}
                <GiftComponent gifts={gifts} setGifts={setGifts} />

                {/*배송지*/}
                <AddressComponent
                  userId={userId}
                  addresses={addresses}
                  selectedAddress={selectedAddress}
                  setSelectedAddress={setSelectedAddress}
                />
              </Grid>
            </form>
          </FormProvider>
        </Box>
      </Root>
      <div style={{ display: openBottomSheet ? "none" : "block" }}>
        <DetailActionBar
          buttonText="작성하기"
          handleSubmit={methods.handleSubmit(onSubmit)}
        />
      </div>
    </>
  );
}
