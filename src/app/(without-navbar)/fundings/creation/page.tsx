"use client";

import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { DetailActionBar } from "@/components/layout/action-bar";
import useFundingCreateQuery from "@/query/useFundingCreatQuery";
import DragGifts from "@/components/DragGifts";
import {
  ArrowBack,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import AddressList from "@/components/AddressList";
import TextInput from "@/components/input/TextInput";
import PublicButtons from "@/components/input/PublicButtons";
import DeadlineCalendar from "@/components/input/DeadlineCalendar";
import ThemeButtons from "@/components/input/ThemeButtons";
import AmountInput from "@/components/input/AmountInput";
import { themeOptions } from "@/types/Theme";
import { FundingForm } from "@/types/Funding";
import GiftDto from "@/types/GiftDto";
import BottomSheet from "@/components/bottomSheet/BottomSheet";
import useBottomSheet from "@/hook/useBottomSheet";

export default function FundingCreationPage() {
  const methods = useForm<FundingForm>({
    defaultValues: {
      gifts: [],
      fundAddr: "서울특별시 관악구 신림동 18 101호",
    },
  });

  const formData: GiftDto = {
    id: 1,
    giftUrl: "",
    giftOpt: "",
    giftCont: "",
  };
  function getInitialGifts() {
    return [formData];
  }
  const [gifts, setGifts] = useState<GiftDto[]>(getInitialGifts);

  useEffect(() => {
    methods.setValue("gifts", gifts);
  }, [methods.setValue]);

  const { mutate } = useFundingCreateQuery();
  const [showItems, setShowItems] = useState<boolean>(true);
  const { onDragEnd, controls, setIsOpen, isOpen } = useBottomSheet();

  const onSubmit = (body: any) => {
    let strFundGoal = body.fundGoal.replaceAll(",", "");
    body.fundGoal = Number(strFundGoal);
    mutate(body);
    console.log(body);
    methods.reset();
  };

  function giftsToggle() {
    setShowItems(!showItems);
  }

  const openBottomSheet = () => {
    setIsOpen(true);
  };

  const closeBottomSheet = () => {
    setIsOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <IconButton edge="start" aria-label="back">
            <ArrowBack color="primary" />
          </IconButton>
          <Typography
            fontWeight={700}
            variant="h6"
            color="primary"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            펀딩 등록
          </Typography>
          <ArrowBack style={{ visibility: "hidden" }} />
        </Toolbar>
      </AppBar>
      <Box sx={{ padding: 1, mt: 8 }}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <TextInput />
              <PublicButtons />
              <DeadlineCalendar />
              <ThemeButtons themes={themeOptions} />
              <AmountInput />

              {/*기프트 아이템*/}
              <Grid item xs={12}>
                <Button
                  startIcon={
                    showItems ? <KeyboardArrowUp /> : <KeyboardArrowDown />
                  }
                  onClick={giftsToggle}
                  sx={{
                    color: "#F6B70B",
                    fontWeight: "bold",
                  }}
                >
                  ITEMS
                </Button>
                <div style={{ display: showItems ? "block" : "none" }}>
                  <DragGifts gifts={gifts} setGifts={setGifts} />
                </div>
              </Grid>

              {/*배송지*/}
              <Grid item xs={12}>
                <Box
                  display="flex"
                  alignItems="center"
                  width="100%"
                  sx={{ mt: 3, mb: 9 }}
                >
                  <TextField
                    {...methods.register("fundAddr")}
                    label="배송지"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{ flexGrow: 9 }}
                    fullWidth
                    disabled
                  />
                  <Button
                    sx={{ flexGrow: 1, marginLeft: 0.5 }}
                    onClick={openBottomSheet}
                  >
                    변경
                  </Button>
                </Box>

                <BottomSheet
                  isOpen={isOpen}
                  onDragEnd={onDragEnd}
                  controls={controls}
                  closeBottomSheet={closeBottomSheet}
                >
                  <AddressList />
                </BottomSheet>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </Box>
      <div style={{ display: isOpen ? "none" : "block" }}>
        <DetailActionBar
          buttonText="작성하기"
          handleSubmit={methods.handleSubmit(onSubmit)}
        />
      </div>
    </>
  );
}
